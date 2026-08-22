'use client';

import { getQuizById } from "@/services/quiz.service";
import { useQuery } from "@tanstack/react-query";

export const useQuizById = (quizId: string) => {
  return useQuery({
    queryKey: ['quiz', quizId],
    queryFn: () => getQuizById(quizId),
    enabled: !!quizId,
  });
};