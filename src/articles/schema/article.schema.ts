import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop()
  title: string;

  @Prop()
  slug: string;

  @Prop()
  content: string;  
}

export const ArticleSchema = SchemaFactory.createForClass(Article);