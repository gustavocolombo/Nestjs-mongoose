import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories } from '../models/Categories';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';

@Injectable()
export default class CreateCategoriesService {
  constructor(
    @InjectModel(Categories.name) private categoryService: Model<Categories>, // @InjectConnection(Categories.name) private connection: Connection,
  ) {}

  async execute({ name, tags }: ICreateCategoryDTO): Promise<Categories> {
    const category = await this.categoryService.create({ name, tags });

    return category;
  }
}
