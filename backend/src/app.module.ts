import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { QuizzesModule } from './quizzes/quizzes.module.js';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), QuizzesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
