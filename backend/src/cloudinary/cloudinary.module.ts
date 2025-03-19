import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary';
import { CloudinaryService } from './cloudinary.service';
import { ConfigurationModule } from 'src/configuration/configuration.module';

@Module({
  imports: [ConfigurationModule],
  providers: [CloudinaryProvider, CloudinaryService],
  exports: [CloudinaryService]
})
export class CloudinaryModule {}
