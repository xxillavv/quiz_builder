import { Trash2 } from "lucide-react";
import { QuestionType, TCreateQuestion } from "@/types";
import BooleanOptionEditor from "./BooleanOptionEditor";
import CheckboxOptionEditor from "./CheckboxOptionEditor";

type QuestionEditorProps = {
  question: TCreateQuestion;
  index: number;
  canDelete: boolean;
  onChange: (updated: TCreateQuestion) => void;
  onRemove: () => void;
};

const QuestionEditor = ({
  question,
  index,
  canDelete,
  onChange,
  onRemove,
}: QuestionEditorProps) => {
  const handleTypeChange = (type: QuestionType) => {
    let options = question.options;

    if (type === "BOOLEAN") {
      options = [
        { text: "True", isCorrect: true, order: 0 },
        { text: "False", isCorrect: false, order: 1 },
      ];
    } else if (type === "CHECKBOX") {
      options = [
        { text: "", isCorrect: true, order: 0 },
        { text: "", isCorrect: false, order: 1 },
      ];
    } else {
      options = [];
    }

    onChange({ ...question, type, options });
  };

  return (
    <div className="p-5 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs font-bold text-zinc-300">
          {index + 1}
        </span>
        {canDelete && (
          <button
            type="button"
            onClick={onRemove}
            className="flex items-center gap-1 text-xs text-zinc-500 hover:text-red-400 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Видалити
          </button>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={question.title}
          onChange={(e) => onChange({ ...question, title: e.target.value })}
          placeholder="Текст запитання..."
          required
          className="flex-1 px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
        />

        <select
          value={question.type}
          onChange={(e) => handleTypeChange(e.target.value as QuestionType)}
          className="px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 cursor-pointer"
        >
          <option value="BOOLEAN">True / False</option>
          <option value="CHECKBOX">Множинний вибір</option>
          <option value="INPUT">Текстова відповідь</option>
        </select>
      </div>

      {question.type === "BOOLEAN" && (
        <BooleanOptionEditor
          options={question.options}
          onOptionsChange={(options) => onChange({ ...question, options })}
        />
      )}

      {question.type === "CHECKBOX" && (
        <CheckboxOptionEditor
          options={question.options}
          onOptionsChange={(options) => onChange({ ...question, options })}
        />
      )}

      {question.type === "INPUT" && (
        <p className="text-xs text-zinc-500 italic">
          Користувач вводить коротку текстову відповідь.
        </p>
      )}
    </div>
  );
};

export default QuestionEditor;
