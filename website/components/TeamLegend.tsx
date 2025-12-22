import React, { useState } from 'react';
import { Team } from '../types';
import { Circle, Shield, Zap, Heart, Eye } from 'lucide-react';

const teams: Team[] = [
  { 
    color: 'bg-blue-600', 
    textColor: 'text-blue-400',
    name: 'Blue Team (Builders)', 
    role: 'Generation', 
    description: 'The engine of "What If?". Responsible for layout, grid structure, and initial asset generation.' 
  },
  { 
    color: 'bg-red-600', 
    textColor: 'text-red-400',
    name: 'Red Team (Critics)', 
    role: 'Adversarial Critique', 
    description: 'The brake pedal. They relentlessly stress-test narratives for logic gaps and ethical failures.' 
  },
  { 
    color: 'bg-white', 
    textColor: 'text-white',
    name: 'White Team (Governance)', 
    role: 'Ethics Committee', 
    description: 'Alignment and Safety. Ensuring the simulation adheres to core human values.' 
  },
  { 
    color: 'bg-green-500', 
    textColor: 'text-green-400',
    name: 'Green Team (Innovators)', 
    role: 'The Disruptors', 
    description: 'Radical pivots. Injecting unexpected variables to prevent linear thinking.' 
  },
  { 
    color: 'bg-yellow-500', 
    textColor: 'text-yellow-400',
    name: 'Yellow Team (Empaths)', 
    role: 'Audience Proxy', 
    description: 'Accessibility and Emotion. Ensuring the technical complexity translates to human feeling.' 
  },
];

export const TeamLegend: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState<Team>(teams[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-noir-border p-6 bg-noir-800/30">
      
      {/* Interactive List */}
      <div className="lg:col-span-5 space-y-2">
        <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">Select Department</h3>
        {teams.map((team) => (
          <button
            key={team.name}
            onClick={() => setActiveTeam(team)}
            className={`w-full text-left p-3 flex items-center gap-4 transition-all duration-200 border ${
              activeTeam.name === team.name 
                ? 'border-zinc-500 bg-zinc-900' 
                : 'border-transparent hover:bg-zinc-900/50'
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${team.color} shadow-[0_0_10px_rgba(255,255,255,0.2)]`} />
            <span className={`font-mono text-sm ${activeTeam.name === team.name ? 'text-white' : 'text-zinc-500'}`}>
              {team.name}
            </span>
          </button>
        ))}
      </div>

      {/* Details Panel */}
      <div className="lg:col-span-7 flex flex-col justify-center border-l border-noir-border pl-0 lg:pl-8 pt-8 lg:pt-0">
        <div className="animate-in fade-in slide-in-from-right-4 duration-300" key={activeTeam.name}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-2 h-2 ${activeTeam.color} animate-pulse`} />
            <span className={`font-mono text-xs uppercase tracking-widest ${activeTeam.textColor}`}>
              {activeTeam.role}
            </span>
          </div>
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 font-sans tracking-tight">
            {activeTeam.name}
          </h4>
          <p className="text-zinc-400 leading-relaxed font-mono text-sm md:text-base border-l-2 border-zinc-800 pl-4">
            {activeTeam.description}
          </p>
        </div>
      </div>
    </div>
  );
};