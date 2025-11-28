import React, { useState } from 'react';
import { QUESTIONS, PERSONALITY_RESULTS } from './constants';
import { PersonalityType, QuizState, PersonalityResult } from './types';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App: React.FC = () => {
  const [view, setView] = useState<QuizState>('landing');
  const [result, setResult] = useState<PersonalityResult | null>(null);

  const startQuiz = () => {
    setView('quiz');
    setResult(null);
  };

  const calculateResult = (scores: Record<PersonalityType, number>) => {
    // Find the highest score
    let maxScore = -1;
    let winner: PersonalityType = PersonalityType.Dynamo; // Default fallback

    (Object.keys(scores) as PersonalityType[]).forEach((key) => {
        // Cast key back to PersonalityType to access the enum values correctly
        const type = key as PersonalityType;
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            winner = type;
        }
    });

    setResult(PERSONALITY_RESULTS[winner]);
    setView('result');
  };

  const restartQuiz = () => {
    setView('landing');
    setResult(null);
  };

  return (
    <div className="h-full w-full">
      {view === 'landing' && <Landing onStart={startQuiz} />}
      {view === 'quiz' && <Quiz questions={QUESTIONS} onComplete={calculateResult} />}
      {view === 'result' && result && <Result result={result} onRestart={restartQuiz} />}
    </div>
  );
};

export default App;