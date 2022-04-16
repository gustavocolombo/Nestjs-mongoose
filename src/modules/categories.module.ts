import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from './posts/controllers/categories.controller';
import { Categories, CategoriesSchema } from './posts/models/Categories';
import CreateCategoriesService from './posts/services/CreateCategoriesService';
import FindAllCategoriesService from './posts/services/FindAllCategoriesService';
import FindCategoryByTagService from './posts/services/FindCategoryByTagService';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Categories.name, schema: CategoriesSchema },
    ]),
  ],
  providers: [
    CreateCategoriesService,
    FindAllCategoriesService,
    FindCategoryByTagService,
  ],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
