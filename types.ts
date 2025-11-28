export enum PersonalityType {
  Dynamo = 'Dynamo Genius',
  Blaze = 'Blaze Genius',
  Tempo = 'Tempo Genius',
  Steel = 'Steel Genius',
}

export interface AnswerOption {
  text: string;
  type: PersonalityType;
}

export interface Question {
  id: number;
  question: string;
  options: AnswerOption[];
}

export interface PersonalityResult {
  type: PersonalityType;
  nickname: string; // e.g. "Ideas Smart"
  season: string; // e.g. "Spring"
  description: string;
  vision: string; // e.g. "Perspective"
  visionDescription: string;
  questionKey: string; // e.g. "What?"
  color: string;     // bg-color class
  textColor: string; // text-color class
  borderColor: string; // border-color class
  lightBg: string; // light background for accents
  icon: string;
}

export type QuizState = 'landing' | 'quiz' | 'result';