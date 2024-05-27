// posts/posts.service.ts
import { Injectable } from '@nestjs/common';
import { S3Service } from '../s3/s3.service'; // Import the S3Service

@Injectable()
export class PostsService {
  constructor(private readonly s3Service: S3Service) {} // Inject the S3Service

  async getAllPosts() {
    return this.s3Service.listObjects(); // Fetch S3 objects instead of returning static posts
  }
}
