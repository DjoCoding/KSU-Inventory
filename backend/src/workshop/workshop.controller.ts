import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkshopService } from './workshop.service';
import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { UpdateWorkshopDto } from './dto/update-workshop.dto';
import Admin from 'src/common/guards/admin.guard';
import { Private } from 'src/common/decorators/private.decorator';

@Controller('workshops')
export class WorkshopController {
    constructor(private readonly workshopService: WorkshopService) {}
    
    @Get()
    async find() {
      const workshops = await this.workshopService.find();
      return {
        workshops: workshops.map(workshop => workshop.toDTO())
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
