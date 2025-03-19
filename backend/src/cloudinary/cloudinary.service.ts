import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
  ) {
    return new Promise<string>((resolve, reject) => {
      const upload = v2
      .uploader
      .upload_stream((error, result) => {
            if (error) return reject(error);
            if(!result) return reject("failed to upload image");
            const url = result.secure_url;
            return resolve(url);
          }).end(file.buffer);
    });
  }

  async uploadImages(
    files: Express.Multer.File[]
  ) {
    const promises = files.map(file => this.uploadImage(file));
    return Promise.all(promises);
  }
}