import Link from "next/link";
import { PlusCircle, LayoutList, HelpCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-white hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md transition-colors"
        >
          <HelpCircle className="text-blue-500 w-6 h-6" />
          <span>QuizBuilder</span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/quizzes"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 active:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
          >
            <LayoutList className="w-5 h-5" />
            <span>Всі квізи</span>
          </Link>

          <Link
            href="/create"
            className="flex items-center gap-2 px-3.5 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-colors"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Створити квіз</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
