import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { WorkshopService } from './workshop.service';
import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { UpdateWorkshopDto } from './dto/update-workshop.dto';
import Admin from 'src/common/guards/admin.guard';
import { Private } from 'src/common/decorators/private.decorator';

@Controller('workshops')
export class WorkshopController {
    constructor(private readonly workshopService: WorkshopService) {}
    
    @Get()
    async get() {
      const workshops = await this.workshopService.find();
      return {
        workshops: workshops.map(workshop => workshop.toDTO())
      }
    }

    @Get(":id")
    async getByID(
      @Param("id", ParseIntPipe) id: number
    ) {
      const workshop = await this.workshopService.findByID(id);
      return  {
        workshop: workshop.toDTO(),
        items: workshop.items.map(item => item.toDTO())
      }
    }

    @Post()
    @Private()
    @Admin()
    async create(
      @Body() createWorkshopDto: CreateWorkshopDto
    ) {
      const workshop = await this.workshopService.create(createWorkshopDto);
      return {
        workshop: workshop.toDTO()
      }
    }
}
