import { Module } from '@nestjs/common';
import { WorkshopService } from './workshop.service';
import { WorkshopController } from './workshop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/items/entities/item.entity';
import { Workshop } from './entities/workshop.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item, Workshop])
  ],
  controllers: [WorkshopController],
  providers: [WorkshopService],
  exports: [WorkshopService]
})
export class WorkshopModule {}
