import { LucideIcon } from "lucide-react";

export type THeroInfoItem = {
  id: number
  title: string;
  text: string;
  logo: LucideIcon;
};

export type QuestionType = 'SINGLE' | 'MULTIPLE' | 'TEXT';

export type TCreateQuestionOption = {
  text: string;
  isCorrect: boolean;
  order: number;
};

export type TCreateQuestion = {
  title: string;
  type: QuestionType;
  order: number;
  options: TCreateQuestionOption[];
};

export type TCreateQuizInput = {
  title: string;
  questions: TCreateQuestion[];
};