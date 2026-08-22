"use client";

import Link from "next/link";
import { PlusCircle, HelpCircle } from "lucide-react";
import { TGetQuizzesResponse } from "@/types";
import QuizCard from "@/components/QuizCard";

const QuizzesList = ({ quizzes }: { quizzes: TGetQuizzesResponse[] }) => {
  if (!quizzes.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 rounded-lg bg-zinc-900 border border-zinc-800 gap-4">
        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
          <HelpCircle className="w-6 h-6" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-semibold text-white text-base">
            Квізів ще немає
          </h3>
          <p className="text-zinc-400 text-sm">
            Створіть свій перший квіз прямо зараз.
          </p>
        </div>
        <Link
          href="/create"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 active:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 text-white font-medium text-sm transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Створити квіз</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
};

export default QuizzesList;
