import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { Workshop } from 'src/workshop/entities/workshop.entity';
import { CreateItemDto } from './dtos/create-item.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

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
}