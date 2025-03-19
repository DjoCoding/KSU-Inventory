import { ConflictException, Injectable } from '@nestjs/common';
import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/items/entities/item.entity';
import { Repository } from 'typeorm';
import { Workshop } from './entities/workshop.entity';

@Injectable()
export class WorkshopService {
    constructor(
      @InjectRepository(Item)
      private readonly items: Repository<Item>,
      @InjectRepository(Workshop)
      private readonly workshops: Repository<Workshop>
    ) {}

    async find() {
      return this.workshops.find();
    }

    async create(createWorkshopDto: CreateWorkshopDto) {
      const { name } = createWorkshopDto;

      const isfound = await this.workshops.findOne({
        where: {
          name
        }
      });

      if(isfound) {
          throw new ConflictException(`workshop ${name} exists`); 
      }

      const workshop = this.workshops.create({
        ...createWorkshopDto
      });

      return this.workshops.save(workshop);
    }
}
