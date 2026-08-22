import { TCreateQuestionOption } from "@/types";

type BooleanOptionEditorProps = {
  options: TCreateQuestionOption[];
  onOptionsChange: (options: TCreateQuestionOption[]) => void;
};

const BooleanOptionEditor = ({
  options,
  onOptionsChange,
}: BooleanOptionEditorProps) => {
  const isTrue = options.find((o) => o.text === "True")?.isCorrect ?? true;

  const selectAnswer = (value: boolean) => {
    onOptionsChange([
      { text: "True", isCorrect: value === true, order: 0 },
      { text: "False", isCorrect: value === false, order: 1 },
    ]);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-zinc-400">Правильна відповідь:</span>
      <div className="flex gap-4">
        <label className="flex items-center gap-2 text-sm text-zinc-200 cursor-pointer">
          <input
            type="radio"
            name={`boolean-${options[0]?.text || "radio"}`}
            checked={isTrue}
            onChange={() => selectAnswer(true)}
            className="w-4 h-4 text-blue-600 border-zinc-700 bg-zinc-950 cursor-pointer"
          />
          <span>True (Правда)</span>
        </label>

        <label className="flex items-center gap-2 text-sm text-zinc-200 cursor-pointer">
          <input
            type="radio"
            name={`boolean-${options[0]?.text || "radio"}`}
            checked={!isTrue}
            onChange={() => selectAnswer(false)}
            className="w-4 h-4 text-blue-600 border-zinc-700 bg-zinc-950 cursor-pointer"
          />
          <span>False (Неправда)</span>
        </label>
      </div>
    </div>
  );
};

export default BooleanOptionEditor;
