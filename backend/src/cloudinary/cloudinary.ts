import { v2 } from 'cloudinary';
import { CLOUDINARY } from '../constants';
import { ConfigService } from '@nestjs/config';
import { Provider } from '@nestjs/common';

export const CloudinaryProvider: Provider = {
  provide: CLOUDINARY,
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return v2.config({
      cloud_name: configService.get<string>("CLOUDINARY_CLOUD_NAME"),
      api_key: configService.get<string>("CLOUDINARY_API_KEY"),
      api_secret: configService.get<string>("CLOUDINARY_SECRET_KEY"),
    });
  },
};