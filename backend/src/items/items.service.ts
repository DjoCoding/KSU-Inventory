import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { Workshop } from 'src/workshop/entities/workshop.entity';
import { CreateItemDto } from './dtos/create-item.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { UpdateItemDto } from './dtos/update-item.dto';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private readonly items: Repository<Item>,
        @InjectRepository(Workshop)
        private readonly workshops: Repository<Workshop>,
        private readonly cloudinary: CloudinaryService
    ) {}

    async find() {
        return this.items.find({
            loadRelationIds: true
        });
    }

    async findByID(id: number) {
        const item = await this.items.findOne({
            where: {
                id
            },
            relations: ["workshop"]
        });

        if(!item) {
            throw new NotFoundException(`item "${id}" not found`);
        }

        return item;
    }
    
    async create(createItemDto: CreateItemDto) {
        const { workshop: workshopName, name, location, description } = createItemDto;
        
        const workshop = await this.workshops.findOne({
            where: {
                name: workshopName,
            },
            relations: ["items"]
        });

        if(!workshop) {
            throw new NotFoundException(`workshop "${workshopName}" not found`);
        }
        
        const items = workshop.items;
        for(const item of items) {
            const name = item.name;
            if(createItemDto.name === name) {
                throw new ConflictException(`item "${createItemDto.name}" already in workshop ${workshopName}`);
            }
        }

        const pictures = await this.cloudinary.uploadImages(createItemDto.pictures);

        const newItem = this.items.create({
            name,
            location,
            description,
            pictures,
            workshop
        });

        return this.items.save(newItem);
    }

    async update(id: number, updateItemDto: UpdateItemDto) {
        const item = await this.findByID(id);
        const { 
            name,
            location, 
            description,
            pictures,
            prevImages,
            workshop: workshopName
        } = updateItemDto;

        let workshop: Workshop | null = null;
        if(workshopName) {
            workshop = await this.workshops.findOne({
                where: {
                    name: workshopName
                }
            });

            if(!workshop) {
                throw new NotFoundException(`workshop "${workshopName}" not found`);
            }
        }


        let pics: string[] = [];
        if(pictures) {
            pics = await this.cloudinary.uploadImages(pictures);
        }

        if(name)            item.name = name;
        if(location)        item.location = location;
        if(description)     item.description = description;
        if(prevImages)      item.pictures = prevImages;
        if(workshopName)    item.workshop = workshop as Workshop;
        item.pictures = [ ...item.pictures, ...pics ];

        return this.items.save(item);
    }
}