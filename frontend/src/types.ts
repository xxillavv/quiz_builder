import { LucideIcon } from "lucide-react";

export type THeroInfoItem = {
  id: number
  title: string;
  text: string;
  logo: LucideIcon;
};

export type QuestionType = 'BOOLEAN' | 'INPUT' | 'CHECKBOX';

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

export type TGetQuizzesResponse = {
  id: string
  title: string
  questionsCount: number
}

export type TQuestionOptionResponse = {
  id: string
  text: string
  isCorrect: boolean
  order: number
}

export type TQuestionResponse = {
  id: string
  title: string
  type: 'BOOLEAN' | 'INPUT' | 'CHECKBOX'
  order: number
  options: TQuestionOptionResponse[]
}

export type TQuizDetailResponse = {
  id: string
  title: string
  createdAt: string
  questions: TQuestionResponse[]
}