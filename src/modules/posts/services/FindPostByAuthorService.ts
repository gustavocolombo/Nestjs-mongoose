import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Posts } from '../models/Posts';
import { Model } from 'mongoose';
import IFindPostByAuthorDTO from '../dtos/IFindPostByAuthorDTO';

@Injectable()
export default class FindPostByAuthorService {
  constructor(@InjectModel(Posts.name) private postsRepository: Model<Posts>) {}

  async execute({ author }: IFindPostByAuthorDTO) {
    const findPosts = await this.postsRepository
      .find({ posts: { $in: [author] } as any })
      .lean()
      .exec();

    return findPosts;
  }
}
