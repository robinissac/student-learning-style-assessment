import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { PersonalityResult } from '../types';
import { getAIStudyTips } from '../services/geminiService';

interface ResultProps {
  result: PersonalityResult;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  const [aiTips, setAiTips] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetTips = async () => {
    setIsLoading(true);
    const tips = await getAIStudyTips(result.type, result.description);
    setAiTips(tips);
    setIsLoading(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="h-full w-full overflow-y-auto bg-slate-50 print:bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 fade-in">
        
        {/* Report Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 print:shadow-none print:border-none print:w-full">
          
          {/* Hero Section */}
          <div className={`${result.color} p-8 md:p-14 text-center text-white relative overflow-hidden print:bg-white print:text-black print:p-0 print:mb-8`}>
            <div className="relative z-10 slide-up">
              <div className="bg-white/20 backdrop-blur-md inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/20 print:border-black print:text-black print:bg-transparent">
                The Genius Test Result
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-2 tracking-tight">
                You are a<br />
                <span className="block mt-2">{result.type.split(' ')[0]}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium opacity-90 mb-8 font-serif italic print:text-slate-700">
                "{result.nickname}"
              </h2>

              <div className="inline-flex flex-wrap justify-center gap-3">
                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl font-bold flex items-center gap-2 print:border print:border-slate-300 print:bg-white print:text-black">
                  <span className="text-xl">{result.icon}</span> {result.season} Energy
                </span>
              </div>
            </div>
            
            {/* Background Decor - Hidden on Print */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 print:hidden pointer-events-none">
              <div className="w-[500px] h-[500px] bg-white rounded-full absolute -top-40 -left-40 blur-[100px]"></div>
              <div className="w-[500px] h-[500px] bg-white rounded-full absolute -bottom-40 -right-40 blur-[100px]"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-12 space-y-12">
            
            {/* Description */}
            <section className="text-center max-w-2xl mx-auto slide-up slide-up-delay-1">
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${result.textColor}`}>Who You Are</h3>
              <p className="text-xl text-slate-700 leading-relaxed font-light">
                {result.description}
              </p>
            </section>

            {/* Grid Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 slide-up slide-up-delay-2">
              {/* Vision Card */}
              <div className={`p-8 rounded-3xl border-2 ${result.borderColor} ${result.lightBg} relative overflow-hidden`}>
                <div className="relative z-10">
                  <h4 className={`text-lg font-bold ${result.textColor} mb-2`}>Your Natural Vision</h4>
                  <div className="text-4xl font-extrabold text-slate-800 mb-3">{result.vision}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{result.visionDescription}</p>
                </div>
                {/* Decorative Icon */}
                <div className="absolute -bottom-6 -right-6 text-9xl opacity-10 select-none">
                  👁️
                </div>
              </div>

              {/* Question Card */}
              <div className={`p-8 rounded-3xl border-2 ${result.borderColor} ${result.lightBg} relative overflow-hidden flex flex-col justify-center`}>
                <div className="relative z-10">
                  <h4 className={`text-lg font-bold ${result.textColor} mb-2`}>The Question You Ask</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-black text-slate-800">"{result.questionKey}"</span>
                  </div>
                  <p className="text-slate-600 text-sm mt-3">
                     You solve problems by focusing on this core question first.
                  </p>
                </div>
                <div className="absolute -bottom-6 -right-2 text-9xl opacity-10 select-none font-serif font-black">
                  ?
                </div>
              </div>
            </div>

            {/* Print Action - Hidden on Print */}
            <div className="flex justify-center print:hidden slide-up slide-up-delay-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition-colors text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Download / Print Report
              </button>
            </div>

            <hr className="border-slate-100 print:hidden" />

            {/* AI Section */}
            <div className="slide-up slide-up-delay-3 print:break-before-page">
              <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-indigo-900">Personalized Genius Coaching</h3>
                      <p className="text-indigo-600 text-sm mt-1 print:hidden">Powered by Gemini AI</p>
                    </div>
                    
                    {!aiTips && !isLoading && (
                       <button 
                        onClick={handleGetTips}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2 print:hidden"
                       >
                         <span>Unlock Study Strategy</span>
                         <span className="bg-indigo-500 rounded p-1">✨</span>
                       </button>
                    )}
                  </div>

                  {isLoading && (
                    <div className="flex flex-col items-center justify-center py-10 space-y-4 print:hidden">
                      <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                      <p className="text-indigo-700 font-medium animate-pulse">Analyzing {result.season} energy patterns...</p>
                    </div>
                  )}

                  {aiTips && (
                    <div className="prose prose-indigo max-w-none bg-white p-6 rounded-2xl shadow-sm border border-indigo-50/50">
                      <ReactMarkdown>{aiTips}</ReactMarkdown>
                    </div>
                  )}
                  
                  {!aiTips && !isLoading && (
                    <div className="bg-white/50 rounded-xl p-4 border border-indigo-100 print:hidden">
                      <p className="text-indigo-800 text-sm">
                        <strong>Why click this?</strong> Get specific advice on how to use your <em>{result.nickname}</em> strengths to study better, lead teams, and master your "Losing Formula".
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
              </div>
            </div>

            <div className="flex justify-center pt-8 pb-4 print:hidden">
              <button 
                onClick={onRestart}
                className="text-slate-400 hover:text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-slate-50 transition-all flex items-center gap-2 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Start Over
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-slate-400 text-xs print:hidden">
          <p>© {new Date().getFullYear()} GeniusU Limited Inspiration. This is a demo application.</p>
        </div>
      </div>
    </div>
  );
};

export default Result;