// posts/posts.controller.ts
import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts() {
    return this.postsService.getAllPosts(); // Modify this to fetch S3 objects
  }
}
