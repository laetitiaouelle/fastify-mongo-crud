import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ MongooseModule.forRoot("mongodb+srv://smartcreatif2020:6FoVpS52id1IPahu@cluster0.6cdpw5h.mongodb.net/tuto?retryWrites=true&w=majority"), ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
