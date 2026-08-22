import Link from "next/link";
import { TGetQuizzesResponse } from "@/types";
import { DeleteQuizButton } from "./DeleteQuizButton";

const QuizCard = ({ quiz }: { quiz: TGetQuizzesResponse }) => {
  return (
    <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-between gap-4">
      <Link
        href={`/quizzes/${quiz.id}`}
        className="flex-1 flex flex-col gap-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <span className="font-semibold text-white text-base hover:text-blue-400 active:text-blue-300 transition-colors">
          {quiz.title}
        </span>
        <span className="text-xs text-zinc-500">
          Питань: {quiz.questionsCount}
        </span>
      </Link>

      <DeleteQuizButton quizId={quiz.id} />
    </div>
  );
};

export default QuizCard;
