import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { getAllQuizzes } from "@/services/quiz.service";
import QuizzesList from "@/components/QuizzesList";

const QuizzesPage = async () => {
  const quizzes = await getAllQuizzes();

  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-10 flex flex-col gap-6">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Всі квізи
          </h1>
          <p className="text-zinc-400 text-sm">
            Список створених опитувань та тестів
          </p>
        </div>
        <Link
          href="/create"
          className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Створити квіз</span>
        </Link>
      </div>

      <QuizzesList quizzes={quizzes} />
    </div>
  );
};

export default QuizzesPage;
