import React from 'react';

export const ReadinessChart: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[300px] border border-noir-border bg-noir-800/50 p-8 flex flex-col justify-between relative group">
       {/* Corner accents */}
       <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-500"></div>
       <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-500"></div>
       <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-500"></div>
       <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-500"></div>

       <div className="flex justify-between items-start border-b border-zinc-800 pb-4 mb-6">
         <div className="flex flex-col">
            <span className="text-xs font-mono text-green-500 uppercase tracking-widest">/// SYSTEM STATUS</span>
            <span className="text-[10px] font-mono text-zinc-500 mt-1">SENTIMENT ANALYSIS (N=44)</span>
         </div>
         <div className="flex gap-1">
            <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
            <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
         </div>
       </div>

       <div className="space-y-8 flex-1">
          {/* Metric 1 */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
               <span className="text-zinc-400">FRAMEWORK_ADEQUACY</span>
               <span className="text-red-500">CRITICAL</span>
            </div>
            <div className="relative h-2 bg-zinc-900 w-full overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-red-600 w-[86%]"></div>
               {/* Glitch effect line */}
               <div className="absolute top-0 left-[86%] h-full w-1 bg-white opacity-50"></div>
            </div>
            <div className="flex justify-between items-baseline mt-2">
               <span className="text-5xl font-bold text-white font-sans tracking-tighter">86%</span>
               <span className="text-xs text-zinc-500 text-right max-w-[150px] leading-tight">Agree need for enhancement</span>
            </div>
          </div>

          {/* Metric 2 */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
               <span className="text-zinc-400">READINESS_INDEX</span>
               <span className="text-zinc-600">STABLE</span>
            </div>
            <div className="relative h-2 bg-zinc-900 w-full">
               <div className="absolute top-0 left-0 h-full bg-zinc-600 w-[48%]"></div>
            </div>
            <div className="flex justify-between items-baseline mt-2">
               <span className="text-5xl font-bold text-zinc-500 font-sans tracking-tighter">48%</span>
               <span className="text-xs text-zinc-500 text-right max-w-[150px] leading-tight">Feel prepared for future advancements</span>
            </div>
          </div>
       </div>
    </div>
  );
};