import Link from "next/link";
import { PlusCircle, LayoutList, HelpCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="border-zinc-800 bg-zinc-900">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white hover:text-zinc-300 transition-colors">
          <HelpCircle className="text-blue-500" />
          <span>QuizBuilder</span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/quizzes"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <LayoutList size={20}/>
            <span>Всі квізи</span>
          </Link>

          <Link
            href="/create"
            className="flex items-center gap-2 px-3.5 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            <PlusCircle size={20}/>
            <span>Створити квіз</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
