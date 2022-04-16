import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Categories } from './Categories';
import mongoose from 'mongoose';

@Schema()
export class Posts extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop({ type: mongoose.Types.ObjectId, required: true, ref: Categories.name })
  category: mongoose.Types.ObjectId;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
