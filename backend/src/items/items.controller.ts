import { Body, Controller, Get, Param, ParseIntPipe, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Private } from 'src/common/decorators/private.decorator';
import Admin from 'src/common/guards/admin.guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateItemDto, CreateItemRequestBodyDto } from './dtos/create-item.dto';

@Controller('items')
export class ItemsController {
    constructor(
        private readonly items: ItemsService
    ) {}

    @Get()
    async get() {
        const items = await this.items.find();
        return {
            items: items.map(item => item.toDTO())
        }
    }

    @Get(":id")
    async getByID(
        @Param("id", ParseIntPipe) id: number
    )  {
        const item = await this.items.findByID(id);
        return {
            item: item.toDTO()
        }
    }

    @Post()
    @Private()
    @Admin()
    @UseInterceptors(FilesInterceptor("files"))
    async create(
        @Body() createItemBodyDto: CreateItemRequestBodyDto,
        @UploadedFiles() files: Express.Multer.File[]
    ) {
        const createItemDto: CreateItemDto = { 
            ...createItemBodyDto,
            pictures: files
        };

        const item = await this.items.create(createItemDto);
        return {
            item: item.toDTO()
        }
    }
}
