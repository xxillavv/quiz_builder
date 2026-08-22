import { Plus, Trash2 } from "lucide-react";
import { TCreateQuestionOption } from "@/types";

type CheckboxOptionEditorProps = {
  options: TCreateQuestionOption[];
  onOptionsChange: (options: TCreateQuestionOption[]) => void;
};

const CheckboxOptionEditor = ({
  options,
  onOptionsChange,
}: CheckboxOptionEditorProps) => {
  const addOption = () => {
    onOptionsChange([
      ...options,
      { text: "", isCorrect: false, order: options.length },
    ]);
  };

  const removeOption = (idx: number) => {
    const next = options
      .filter((_, i) => i !== idx)
      .map((opt, i) => ({ ...opt, order: i }));
    onOptionsChange(next);
  };

  const updateText = (idx: number, text: string) => {
    const next = [...options];
    next[idx] = { ...next[idx], text };
    onOptionsChange(next);
  };

  const toggleCorrect = (idx: number) => {
    const next = [...options];
    next[idx] = { ...next[idx], isCorrect: !next[idx].isCorrect };
    onOptionsChange(next);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-zinc-400">
          Варіанти відповідей (відмітьте правильні):
        </span>
        <button
          type="button"
          onClick={addOption}
          className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Додати варіант
        </button>
      </div>

      {options.map((option, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={option.isCorrect}
            onChange={() => toggleCorrect(idx)}
            className="w-4 h-4 rounded border-zinc-700 bg-zinc-950 text-blue-600 cursor-pointer"
          />
          <input
            type="text"
            value={option.text}
            onChange={(e) => updateText(idx, e.target.value)}
            placeholder={`Варіант ${idx + 1}`}
            required
            className="flex-1 px-3 py-1.5 rounded-md bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
          />
          {options.length > 2 && (
            <button
              type="button"
              onClick={() => removeOption(idx)}
              className="p-1.5 text-zinc-500 hover:text-red-400 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckboxOptionEditor;
