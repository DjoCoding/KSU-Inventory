import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Workshop } from 'src/workshop/entities/workshop.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item, Workshop]),
    CloudinaryModule,
  ],
  providers: [ItemsService],
  controllers: [ItemsController],
  exports: [ItemsService]
})
export class ItemsModule {}
