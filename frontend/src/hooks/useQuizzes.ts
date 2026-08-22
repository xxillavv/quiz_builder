'use client';

import { createQuiz, deleteQuiz } from "@/services/quiz.service";
import { TCreateQuizInput } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useQuizzes = () => {
  const router = useRouter()

  const createQuizMutation = useMutation({
    mutationKey: ['create-quiz'],
    mutationFn: (body: TCreateQuizInput) => createQuiz(body),
    onSuccess: () => {
      router.push('/quizzes')
    }
  });

  const deleteQuizMutation = useMutation({
    mutationKey: ['delete-quiz'],
    mutationFn: (quizId: string) => deleteQuiz(quizId),
    onSuccess: () => {
      router.refresh();
    },
  });

  return {
    createQuiz: createQuizMutation,
    deleteQuiz: deleteQuizMutation,
  };
};