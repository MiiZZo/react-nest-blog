import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

const { ObjectId: ID } = SchemaTypes;

@Schema()
export class Article extends Document {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  category:
    | 'development'
    | 'administration'
    | 'design'
    | 'managment'
    | 'marketing';

  @Prop({
    required: true,
    type: {
      text: {
        required: true,
        type: String,
      },
      author: {
        required: true,
        type: {
          type: ID,
          ref: 'User',
        },
      },
      rating: {
        required: true,
        type: Number,
      },
      creationDate: {
        required: true,
        type: Date,
      },
    },
  })
  comments: [];

  @Prop({ required: true, type: String })
  content: string;

  @Prop({ required: true, type: Number })
  viewsNumber: number;

  @Prop({ required: true, type: String })
  rating: number;

  @Prop({ required: true, type: String })
  previewContent: string;

  @Prop({ required: true, type: String })
  status: 'published' | 'pending' | 'draft' | 'recalled';

  @Prop({ required: true, type: [String] })
  tags: string[];

  @Prop({
    required: true,
    type: {
      type: ID,
      ref: 'User',
    },
  })
  author: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
