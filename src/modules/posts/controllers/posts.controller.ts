import { Body, Controller, Post } from '@nestjs/common';
import ICreatePostDTO from '../dtos/ICreatePostDTO';
import CreatePostService from '../services/CreatePostService';

@Controller('posts')
export class PostsController {
  constructor(private createPostService: CreatePostService) {}

  @Post()
  async create(@Body() { title, author, content, category }: ICreatePostDTO) {
    return await this.createPostService.execute({
      title,
      author,
      content,
      category,
    });
  }
}
