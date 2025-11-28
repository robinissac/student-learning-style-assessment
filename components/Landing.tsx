import React from 'react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full py-10 max-w-4xl mx-auto px-6 text-center space-y-10 fade-in">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-block p-3 rounded-2xl bg-indigo-50 mb-2">
           <span className="text-4xl">🧠</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          The Genius Test
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
          "Everyone is a Genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."
        </p>
      </div>
      
      {/* 4 Genius Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {/* Dynamo */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-green-500 hover:shadow-md transition-all">
          <div className="text-3xl mb-2">🌳</div>
          <h3 className="font-bold text-slate-800">Dynamo</h3>
          <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mt-1">Ideas Smart</p>
          <p className="text-xs text-slate-400 mt-2">Spring Energy</p>
        </div>
        
        {/* Blaze */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-red-500 hover:shadow-md transition-all">
          <div className="text-3xl mb-2">🔥</div>
          <h3 className="font-bold text-slate-800">Blaze</h3>
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mt-1">People Smart</p>
          <p className="text-xs text-slate-400 mt-2">Summer Energy</p>
        </div>
        
        {/* Tempo */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-yellow-500 hover:shadow-md transition-all">
          <div className="text-3xl mb-2">🍂</div>
          <h3 className="font-bold text-slate-800">Tempo</h3>
          <p className="text-xs font-semibold text-yellow-600 uppercase tracking-wide mt-1">Senses Smart</p>
          <p className="text-xs text-slate-400 mt-2">Autumn Energy</p>
        </div>
        
        {/* Steel */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-slate-500 hover:shadow-md transition-all">
          <div className="text-3xl mb-2">⚙️</div>
          <h3 className="font-bold text-slate-800">Steel</h3>
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mt-1">Systems Smart</p>
          <p className="text-xs text-slate-400 mt-2">Winter Energy</p>
        </div>
      </div>

      <div className="h-4"></div>

      <button 
        onClick={onStart}
        className="group relative px-10 py-5 bg-indigo-600 text-white text-xl font-bold rounded-full shadow-xl hover:bg-indigo-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full md:w-auto"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Discover Your Genius
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      <p className="text-xs text-slate-400 max-w-md">
        Based on the psychological types popularized by Carl Jung and the 5,000-year-old I Ching.
      </p>
    </div>
  );
};

export default Landing;