import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './articles.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}
  async createArticle(article: any) {
    await this.articleModel.create(article);
  }
}
