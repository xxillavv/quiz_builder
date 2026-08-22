import { Injectable, Delete, NotFoundException } from '@nestjs/common';
import { CreateQuizDto } from '../dto/quizzes.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class QuizzesService {
  constructor(private readonly prisma: PrismaService) { }
  createQuiz(body: CreateQuizDto) {
    return this.prisma.quiz.create({
      data: {
        title: body.title,
        questions: {
          create: body.questions.map((question) => ({
            title: question.title,
            type: question.type,
            order: question.order,
            options: {
              create: question.options?.map((option) => ({
                text: option.text,
                isCorrect: option.isCorrect,
                order: option.order
              }))
            }
          }))
        },
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
        questions: {
          select: {
            id: true,
            title: true,
            type: true,
            order: true,
            options: {
              select: {
                id: true,
                text: true,
                isCorrect: true,
                order: true
              }
            }
          }
        }
      }
    })
  }

  async getAllQuizzes() {
    const quizzes = await this.prisma.quiz.findMany({
      select: {
        id: true,
        title: true,
        _count: {
          select: { questions: true },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return quizzes.map((quiz) => ({
      id: quiz.id,
      title: quiz.title,
      questionsCount: quiz._count.questions
    }))
  }

  async getQuizById(quizId: string) {
    const quizInfo = await this.prisma.quiz.findUnique({
      where: {
        id: quizId
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
        questions: {
          select: {
            id: true,
            title: true,
            type: true,
            order: true,
            options: {
              select: {
                id: true,
                text: true,
                isCorrect: true,
                order: true
              }
            }
          }
        }
      }
    })

    if (!quizInfo) {
      throw new NotFoundException("Quiz with this ID is not found!")
    }

    return quizInfo
  }

  async deleteQuiz(quizId: string) {
    await this.getQuizById(quizId)

    await this.prisma.quiz.delete({
      where: {
        id: quizId
      }
    })
  }
}
