// @flow

export type Question = {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correctAnswer: boolean,
  isCorrect: ?boolean
}

export function parseQuestion (payload: Object): Question {
  return {
    category: payload.category,
    type: payload.type,
    difficulty: payload.difficulty,
    question: payload.question,
    correctAnswer: payload.correct_answer === 'True',
    isCorrect: null
  }
}
