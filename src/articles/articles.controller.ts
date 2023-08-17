import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './schema/article.schema';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post('create')
  postArticle( @Body() body : Article ){
    return this.articlesService.postArticle(body);
  }

   @Get('get-articles')
   getArticles(){
    return this.articlesService.getArticles();
   }
}
