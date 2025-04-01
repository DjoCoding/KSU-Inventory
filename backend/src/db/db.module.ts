import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options as dataSourceOptions  } from 'db/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
  exports: [TypeOrmModule],
})
export class DbModule {}
