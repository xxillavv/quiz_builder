import { THeroInfoItem } from "@/types";
import { CheckSquare, PlusCircle, FileText } from "lucide-react";

export const heroInfoBlocks: THeroInfoItem[] = [
  {
    id: 1,
    title: "Гнучкі питання",
    text: "Підтримка True/False, множинного вибору (чекбокси) та текстових відповідей.",
    logo: CheckSquare,
  },
  {
    id: 2,
    title: "Швидке створення",
    text: "Зручне динамічне додавання та видалення запитань під час редагування.",
    logo: PlusCircle,
  },
  {
    id: 3,
    title: "Зручний перегляд",
    text: "Перегляд структури кожного квіза та швидке видалення непотрібних.",
    logo: FileText,
  },
];