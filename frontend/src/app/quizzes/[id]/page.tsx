import { getQuizById } from "@/services/quiz.service";
import QuizDetailView from "@/components/QuizDetailView";

const QuizDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const quiz = await getQuizById(id);

  return <QuizDetailView quiz={quiz} />;
};

export default QuizDetailPage;
