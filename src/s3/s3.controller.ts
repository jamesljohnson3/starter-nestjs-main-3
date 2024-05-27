// s3/s3.controller.ts
import { Controller, Get } from '@nestjs/common';
import { S3Service } from './s3.service';

@Controller('posts') // Assuming you want to serve S3 objects under the 'posts' route
export class S3Controller {
  constructor(private readonly s3Service: S3Service) {}

  @Get()
  async getObjects() {
    return this.s3Service.listObjects();
  }
}
