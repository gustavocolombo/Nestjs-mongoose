import { Body, Controller, Get, Post } from '@nestjs/common';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import IGetCategoryByTagDTO from '../dtos/IGetCategoryByTagDTO';
import CreateCategoriesService from '../services/CreateCategoriesService';
import FindAllCategoriesService from '../services/FindAllCategoriesService';
import FindCategoryByTagService from '../services/FindCategoryByTagService';

@Controller('categories')
export class CategoriesController {
  constructor(
    private createCategoryService: CreateCategoriesService,
    private findAllCategoriesService: FindAllCategoriesService,
    private findByTagService: FindCategoryByTagService,
  ) {}

  @Post()
  async createCategory(@Body() { name, tags }: ICreateCategoryDTO) {
    return await this.createCategoryService.execute({ name, tags });
  }

  @Get('/find')
  async getAllCategories() {
    return await this.findAllCategoriesService.execute();
  }

  @Get('/find-by-tag')
  async getByTag(@Body() { tags }: IGetCategoryByTagDTO) {
    console.log('tags no controller', tags);

    return await this.findByTagService.execute({ tags });
  }
}
