"use client";

import { useQuizzes } from "@/hooks/useQuizzes";
import { Loader2, Trash2 } from "lucide-react";

export const DeleteQuizButton = ({ quizId }: { quizId: string }) => {
  const { deleteQuiz } = useQuizzes();

  const handleDelete = () => {
    deleteQuiz.mutate(quizId);
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleteQuiz.isPending}
      className="p-2 rounded-md hover:bg-red-950/50 active:bg-red-900/50 text-zinc-500 hover:text-red-400 active:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {deleteQuiz.isPending ? (
        <Loader2 className="w-4 h-4 animate-spin text-red-400" />
      ) : (
        <Trash2 className="w-4 h-4" />
      )}
    </button>
  );
};
