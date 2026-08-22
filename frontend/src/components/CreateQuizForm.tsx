"use client";

import { useState } from "react";
import { useQuizzes } from "@/hooks/useQuizzes";
import { TCreateQuestion } from "@/types";
import { ArrowLeft, Loader2, Plus, Send } from "lucide-react";
import QuestionEditor from "./QuestionEditor";
import Link from "next/link";

const createDefaultQuestion = (order: number): TCreateQuestion => ({
  title: "",
  type: "BOOLEAN",
  order,
  options: [
    { text: "True", isCorrect: true, order: 0 },
    { text: "False", isCorrect: false, order: 1 },
  ],
});

const CreateQuizForm = () => {
  const { createQuiz } = useQuizzes();

  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<TCreateQuestion[]>([
    createDefaultQuestion(0),
  ]);

  const addQuestion = () => {
    setQuestions([...questions, createDefaultQuestion(questions.length)]);
  };

  const removeQuestion = (questionIndex: number) => {
    setQuestions(
      questions
        .filter((_, index) => index !== questionIndex)
        .map((question, index) => ({ ...question, order: index }))
    );
  };

  const updateQuestion = (index: number, updated: TCreateQuestion) => {
    const next = [...questions];
    next[index] = updated;
    setQuestions(next);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Введіть назву квіза");
      return;
    }

    createQuiz.mutate({
      title: title,
      questions: questions.map((question, index) => ({
        ...question,
        order: index + 1,
      })),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="p-5 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col gap-2">
        <label className="text-sm font-semibold text-white">Назва квіза</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Назва квіза..."
          required
          className="px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-white">
            Запитання ({questions.length})
          </h2>
          <button
            type="button"
            onClick={addQuestion}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 text-xs font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            Додати питання
          </button>
        </div>

        {questions.map((question, index) => (
          <QuestionEditor
            key={index}
            question={question}
            index={index}
            canDelete={questions.length > 1}
            onChange={(updated) => updateQuestion(index, updated)}
            onRemove={() => removeQuestion(index)}
          />
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
        <Link
          href="/quizzes"
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Скасувати
        </Link>

        <button
          type="submit"
          disabled={createQuiz.isPending}
          className="flex items-center gap-2 px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors disabled:opacity-50"
        >
          {createQuiz.isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          <span>Створити квіз</span>
        </button>
      </div>
    </form>
  );
};

export default CreateQuizForm;
