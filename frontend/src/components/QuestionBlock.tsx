import { Circle, Square, CheckSquare } from "lucide-react";
import { TQuestionResponse } from "@/types";

type QuestionBlockProps = {
  question: TQuestionResponse;
  index: number;
};

const QuestionBlock = ({ question, index }: QuestionBlockProps) => {
  return (
    <div className="p-5 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs font-bold text-zinc-300">
            {index + 1}
          </span>
          <h3 className="font-semibold text-white text-base">
            {question.title}
          </h3>
        </div>
        <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
          {question.type}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {question.type === "BOOLEAN" && (
          <>
            <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-950 border border-zinc-800 text-sm text-zinc-300">
              <Circle className="w-4 h-4 text-zinc-500" />
              <span>True</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-950 border border-zinc-800 text-sm text-zinc-300">
              <Circle className="w-4 h-4 text-zinc-500" />
              <span>False</span>
            </div>
          </>
        )}

        {question.type === "CHECKBOX" &&
          question.options?.map((option) => (
            <div
              key={option.id}
              className={`flex items-center justify-between p-3 rounded-md border text-sm ${
                option.isCorrect
                  ? "bg-emerald-950/30 border-emerald-800/50 text-emerald-200"
                  : "bg-zinc-950 border-zinc-800 text-zinc-300"
              }`}
            >
              <div className="flex items-center gap-3">
                {option.isCorrect ? (
                  <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-zinc-500 shrink-0" />
                )}
                <span>{option.text}</span>
              </div>
              {option.isCorrect && (
                <span className="text-xs text-emerald-400 font-medium">
                  Правильна
                </span>
              )}
            </div>
          ))}

        {question.type === "INPUT" && (
          <div className="p-3 rounded-md bg-zinc-950 border border-zinc-800 text-sm text-zinc-500 italic">
            Поле для текстової відповіді
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionBlock;
