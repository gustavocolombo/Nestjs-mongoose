import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Categories } from '../models/Categories';
import { Model } from 'mongoose';
import IGetCategoryByTagDTO from '../dtos/IGetCategoryByTagDTO';

@Injectable()
export default class FindCategoryByTagService {
  constructor(
    @InjectModel(Categories.name) private categoryService: Model<Categories>,
  ) {}

  async execute({ tags }: IGetCategoryByTagDTO) {
    const findCategories = await this.categoryService.find();

    const categoriesMatch = findCategories.filter((tag) =>
      tag.tags.includes(tags as any),
    );

    return categoriesMatch;
  }
}
