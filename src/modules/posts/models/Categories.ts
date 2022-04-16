import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Categories extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [String], required: true })
  tags: string[];

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
