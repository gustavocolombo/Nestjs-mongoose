import { Body, Controller, Get, Post } from '@nestjs/common';
import ICreatePostDTO from '../dtos/ICreatePostDTO';
import CreatePostService from '../services/CreatePostService';
import IFindPostByAuthorDTO from '../dtos/IFindPostByAuthorDTO';
import FindPostByAuthorService from '../services/FindPostByAuthorService';
@Controller('posts')
export class PostsController {
  constructor(
    private createPostService: CreatePostService,
    private findPostByAuthorService: FindPostByAuthorService,
  ) {}

  @Post()
  async create(@Body() { title, author, content, category }: ICreatePostDTO) {
    return await this.createPostService.execute({
      title,
      author,
      content,
      category,
    });
  }

  @Get('/find')
  async findPostByAuthor(@Body() { author }: IFindPostByAuthorDTO) {
    return await this.findPostByAuthorService.execute({ author });
  }
}
