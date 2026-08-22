import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service.js';
import { QuizzesController } from './quizzes.controller.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Module({
  controllers: [QuizzesController],
  providers: [QuizzesService, PrismaService],
})
export class QuizzesModule {}
