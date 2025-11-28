import React, { useState } from 'react';
import { Question, PersonalityType } from '../types';

interface QuizProps {
  questions: Question[];
  onComplete: (scores: Record<PersonalityType, number>) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<PersonalityType, number>>({
    [PersonalityType.Dynamo]: 0,
    [PersonalityType.Blaze]: 0,
    [PersonalityType.Tempo]: 0,
    [PersonalityType.Steel]: 0,
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleAnswer = (type: PersonalityType) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    
    // Update score
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    // Wait for animation then move next
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setIsTransitioning(false);
      } else {
        onComplete(newScores);
      }
    }, 300);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 h-full flex flex-col justify-center">
      {/* Top Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-bold text-indigo-600 tracking-wider">QUESTION {currentIndex + 1}</span>
          <span className="text-xs text-slate-400 font-medium">of {questions.length}</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-indigo-600 h-full transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={`transition-all duration-300 transform ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-10 leading-tight">
          {currentQuestion.question}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option.type)}
              className="group relative overflow-hidden p-5 md:p-6 text-left rounded-2xl border-2 border-slate-100 hover:border-indigo-500 bg-white transition-all duration-200 shadow-sm hover:shadow-lg active:scale-[0.99]"
            >
              <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative z-10 flex items-center justify-between">
                <span className="block text-lg text-slate-700 group-hover:text-indigo-900 font-medium">
                  {option.text}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;