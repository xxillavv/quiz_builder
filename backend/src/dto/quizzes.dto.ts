import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { QuestionType } from '../generated/prisma/enums.js';

export class CreateQuestionOptionDto {
  @IsString()
  @IsNotEmpty()
  text!: string;

  @IsBoolean()
  isCorrect!: boolean;

  @IsInt()
  order!: number;
}

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsEnum(QuestionType)
  type!: QuestionType;

  @IsInt()
  order!: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionOptionDto)
  options!: CreateQuestionOptionDto[];
}

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionDto)
  questions!: CreateQuestionDto[];
}