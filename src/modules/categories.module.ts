import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from './posts/controllers/categories.controller';
import { Categories, CategoriesSchema } from './posts/models/Categories';
import { Posts, PostsSchema } from './posts/models/Posts';
import { PostsController } from './posts/controllers/posts.controller';
import CreateCategoriesService from './posts/services/CreateCategoriesService';
import CreatePostService from './posts/services/CreatePostService';
import FindAllCategoriesService from './posts/services/FindAllCategoriesService';
import FindCategoryByTagService from './posts/services/FindCategoryByTagService';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Categories.name, schema: CategoriesSchema },
      { name: Posts.name, schema: PostsSchema },
    ]),
  ],
  providers: [
    CreateCategoriesService,
    FindAllCategoriesService,
    FindCategoryByTagService,
    CreatePostService,
  ],
  controllers: [CategoriesController, PostsController],
})
export class CategoriesModule {}
