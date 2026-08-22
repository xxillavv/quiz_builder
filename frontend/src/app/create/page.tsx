import CreateQuizForm from "@/components/CreateQuizForm";

export default function CreateQuizPage() {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 py-10 flex flex-col gap-6">
      <div className="flex flex-col gap-1 border-b border-zinc-800 pb-6">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Створення квіза
        </h1>
        <p className="text-zinc-400 text-sm">
          Заповніть назву та додайте запитання різних типів
        </p>
      </div>

      <CreateQuizForm />
    </div>
  );
}