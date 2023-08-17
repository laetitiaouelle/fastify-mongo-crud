import { Injectable } from '@nestjs/common';
import { Article } from './schema/article.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArticlesService {
    constructor(@InjectModel(Article.name) private readonly articleModel: Model<Article>){}

    async postArticle( body: Article):Promise<Article> {
        const create = new this.articleModel(body)
        return create.save()
    }

    async getArticles(){
        return this.articleModel.find().exec()
    }
    
}
