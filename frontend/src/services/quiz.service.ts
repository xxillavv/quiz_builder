import { TCreateQuizInput, TGetQuizzesResponse } from "@/types";
import axios from "axios";

export const createQuiz = async (body: TCreateQuizInput) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/quizzes`, body)

  return response.data
}

export const getAllQuizzes = async (): Promise<TGetQuizzesResponse[]> => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/quizzes`)

  return response.data
}

export const getQuizById = async (quizId: string) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/quizzes/${quizId}`)

  return response.data
}

export const deleteQuiz = async (quizId: string) => {
  const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/quizzes/${quizId}`)
  
  return response.data
}