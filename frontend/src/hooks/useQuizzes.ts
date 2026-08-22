'use client';

import { createQuiz, deleteQuiz, getAllQuizzes } from "@/services/quiz.service";
import { TCreateQuizInput } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useQuizzes = () => {
  const queryClient = useQueryClient();

  const quizzesQuery = useQuery({
    queryKey: ['quizzes'],
    queryFn: getAllQuizzes,
  });

  const createQuizMutation = useMutation({
    mutationKey: ['create-quiz'],
    mutationFn: (body: TCreateQuizInput) => createQuiz(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quizzes'] });
    },
  });

  const deleteQuizMutation = useMutation({
    mutationKey: ['delete-quiz'],
    mutationFn: (quizId: string) => deleteQuiz(quizId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quizzes'] });
    },
  });

  return {
    quizzes: quizzesQuery.data,
    isLoading: quizzesQuery.isLoading,
    isError: quizzesQuery.isError,
    createQuiz: createQuizMutation.mutate,
    isCreating: createQuizMutation.isPending,
    deleteQuiz: deleteQuizMutation.mutate,
    isDeleting: deleteQuizMutation.isPending,
  };
};