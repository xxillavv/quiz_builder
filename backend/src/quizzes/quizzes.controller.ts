import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QuizzesService } from './quizzes.service.js';
import { CreateQuizDto } from '../dto/quizzes.dto.js';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post()
  createQuiz(@Body() body: CreateQuizDto) {
    return this.quizzesService.createQuiz(body)
  }

  @Get()
  getAllQuizzes() {
    return this.quizzesService.getAllQuizzes()
  }

  @Get(':id')
  getQuizById(@Param('id') quizId: string) {
    return this.quizzesService.getQuizById(quizId)
  }

  @Delete(':id')
  deleteQuiz(@Param('id') quizId: string) {
    return this.quizzesService.deleteQuiz(quizId)
  }
}
