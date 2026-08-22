import Link from "next/link";
import { ArrowLeft, Calendar, Layers } from "lucide-react";
import { TQuizDetailResponse } from "@/types";
import QuestionBlock from "./QuestionBlock";

type QuizDetailViewProps = {
  quiz: TQuizDetailResponse;
};

const QuizDetailView = ({ quiz }: QuizDetailViewProps) => {
  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-10 flex flex-col gap-6">
      <Link
        href="/quizzes"
        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white active:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md transition-colors self-start"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Назад до всіх квізів</span>
      </Link>

      <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded bg-blue-950 border border-blue-800 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Квіз
          </span>
          {quiz.createdAt && (
            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                {new Date(quiz.createdAt).toLocaleDateString("uk-UA", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          )}
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight">
          {quiz.title}
        </h1>

        <div className="flex items-center gap-4 text-xs text-zinc-400 border-t border-zinc-800 pt-3 mt-1">
          <span>Питань: {quiz.questions.length}</span>
          <span>ID: {quiz.id}</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-400" />
          <span>Структура запитань</span>
        </h2>

        {!quiz.questions.length ? (
          <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm text-center">
            У цьому квізі немає запитань.
          </div>
        ) : (
          quiz.questions
            .sort((a, b) => a.order - b.order)
            .map((question, index) => (
              <QuestionBlock
                key={question.id}
                question={question}
                index={index}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default QuizDetailView;
