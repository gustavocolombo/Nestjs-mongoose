import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories } from '../models/Categories';

@Injectable()
export default class FindAllCategoriesService {
  constructor(
    @InjectModel(Categories.name) private categoryService: Model<Categories>,
  ) {}

  async execute(): Promise<Categories[] | null> {
    const findAllCategories = await this.categoryService.find();

    return findAllCategories;
  }
}
