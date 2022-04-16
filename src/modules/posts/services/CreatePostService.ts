import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Posts } from '../models/Posts';
import { Model } from 'mongoose';
import ICreatePostDTO from '../dtos/ICreatePostDTO';

@Injectable()
export default class CreatePostService {
  constructor(@InjectModel(Posts.name) private postRepository: Model<Posts>) {}

  async execute({ title, author, content, category }: ICreatePostDTO) {
    const createPost = await this.postRepository.create({
      title,
      author,
      content,
      category,
    });

    return createPost;
  }
}
