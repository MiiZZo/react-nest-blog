import { Controller, Post, Get } from "@nestjs/common";
import { ArticlesService } from "./articles.service";

@Controller()
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}
  @Post("create-article")
  async createArticle(article: unknown): Promise<void> {
    this.articleService.createArticle(article);
  }
  @Get()
  async a(): Promise<number> {
    return 12;
  }
}
