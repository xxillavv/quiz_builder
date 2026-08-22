import { THeroInfoItem } from "@/types";

const HeroInfoBlock = ({
  logo: Icon,
  title,
  text,
}: Omit<THeroInfoItem, "id">) => {
  return (
    <div className="flex-1 p-5 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col gap-2">
      <div className="w-9 h-9 rounded-md bg-zinc-800 flex items-center justify-center text-blue-400">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-semibold text-white text-base">{title}</h3>
      <p className="text-zinc-400 text-sm">{text}</p>
    </div>
  );
};

export default HeroInfoBlock;
