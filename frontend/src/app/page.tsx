import Link from "next/link";
import { PlusCircle, LayoutList } from "lucide-react";
import { heroInfoBlocks } from "./constants";
import HeroInfoBlock from "@/components/HeroInfoBlock";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto w-full px-4 py-16 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-4 max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Конструктор квізів
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg">
          Створюйте власні квізи, налаштовуйте запитання та переглядайте
          збережені тести.
        </p>
        <div className="flex items-center gap-3 pt-4">
          <Link
            href="/create"
            className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Створити квіз</span>
          </Link>
          <Link
            href="/quizzes"
            className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 font-medium text-sm transition-colors"
          >
            <LayoutList className="w-4 h-4 text-zinc-400" />
            <span>Список квізів</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full mt-16">
        {heroInfoBlocks.map((block) => {
          return (
            <HeroInfoBlock
              logo={block.logo}
              text={block.text}
              title={block.title}
              key={block.id}
            />
          );
        })}
      </div>
    </div>
  );
}
