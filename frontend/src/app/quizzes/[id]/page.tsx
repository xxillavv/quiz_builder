import { getQuizById } from "@/services/quiz.service";
import QuizDetailView from "@/components/QuizDetailView";

type QuizDetailPageProps = {
  params: Promise<{ id: string }>;
};

const QuizDetailPage = async ({ params }: QuizDetailPageProps) => {
  const { id } = await params;
  const quiz = await getQuizById(id);

  return <QuizDetailView quiz={quiz} />;
};

export default QuizDetailPage;
