import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText, Cpu, BookOpen, ExternalLink, ChevronDown, Anchor, Eye } from 'lucide-react';
import { Section } from './components/Section';
import { Button } from './components/ui/Button';
import { ReadinessChart } from './components/Charts';
import { TeamLegend } from './components/TeamLegend';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only intercept internal hash links
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Always close menu after clicking a link
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'The Comics', href: '#library' },
    { label: 'The Framework', href: '#os' },
    { label: 'Research', href: '#research' },
    { label: 'About', href: '#about' },
  ];

  return (
    <div className="min-h-screen bg-noir-900 text-zinc-300 selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Background Grid */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-20" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-noir-900/90 backdrop-blur-md border-noir-border' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-xl z-50 cursor-default">
            <Terminal className="w-5 h-5" />
            <span>CIL_STUDIO</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" className="h-10 text-xs" href="#library">Explore Prototypes</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="text-2xl font-mono text-white hover:text-zinc-400"
              >
                {link.label}
              </a>
            ))}
            <Button href="#library" onClick={() => setIsMenuOpen(false)}>Explore Prototypes</Button>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-20">
        
        {/* Section 1: Hero */}
        <Section className="min-h-[85vh] flex flex-col justify-center border-none" borderTop={false}>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 rounded-full mb-8 bg-zinc-900/50">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-mono text-zinc-400 uppercase">System Status: Release Candidate</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              DEBUG <br />
              THE FUTURE<span className="text-green-500">.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-light mb-10 leading-relaxed">
              The majority of organizations admit they're unprepared for Agentic AI. We build the missing competence—one story at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button icon href="#library">Explore the Prototypes</Button>
              <Button variant="secondary" href="#research">See the Research</Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-6 animate-bounce hidden md:block">
            <ChevronDown className="text-zinc-600" />
          </div>
        </Section>

        {/* Section 2: The Problem */}
        <Section id="problem" className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-green-500 text-xs mb-4 uppercase tracking-widest border-l-2 border-green-500 pl-3">
              Data Source: arXiv:2504.11564 (2025)
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Agentic Readiness Gap.</h2>
            <h3 className="text-xl text-zinc-200 mb-6 font-mono">The technology is autonomous. The workforce is not.</h3>
            
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                We are entering the era of Agentic AI. Yet, our 2025 study of North American organizations reveals a critical fragility.
                The industry is prioritizing <strong className="text-white">Control</strong> (technical guardrails) over <strong className="text-white">Competence</strong> (human literacy).
              </p>
              <p className="border-l border-zinc-700 pl-4 italic">
                "This creates a 'fragile fortress'—systems that are technically locked down, but socially misunderstood."
              </p>
              <p>
                You cannot control what you do not understand. Technical guardrails fail without human judgment. Comics build that judgment.
              </p>
            </div>
          </div>
          <div className="relative">
             <ReadinessChart />
             {/* Schematic decorative elements */}
             <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-zinc-800" />
             <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l border-zinc-800" />
          </div>
        </Section>

        {/* Section 3: The Solution */}
        <Section id="solution">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">From Control to Competence</h2>
                <p className="text-xl text-zinc-300 mb-12">
                  Technical documentation describes the code. Graphic narrative tests the consequences.
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-8">
                {[
                  {
                    title: "Making the Invisible, Visible",
                    desc: "We use iconic abstraction to strip away technical noise and reveal the 'Black Box.' Complex algorithms become characters with motivations.",
                    icon: <Eye className="w-6 h-6 text-white" />
                  },
                  {
                    title: "Mapping Systemic Risk",
                    desc: "In a comic, time becomes space. We use sequential layouts to map the cascading effects of a single algorithmic decision.",
                    icon: <Anchor className="w-6 h-6 text-white" />
                  },
                  {
                    title: "Active Debugging",
                    desc: "McLuhan called comics a 'Cool Medium'. By forcing readers to bridge the 'gutters' between panels, we compel them to simulate ethical trade-offs.",
                    icon: <Cpu className="w-6 h-6 text-white" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 border border-zinc-800 hover:border-zinc-500 transition-colors bg-noir-800/20">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-zinc-900 inline-block rounded-none border border-zinc-700 group-hover:bg-zinc-800 transition-colors shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 font-sans">{item.title}</h3>
                        <p className="text-sm text-zinc-400 font-mono leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Feature: Mapping Systemic Risk */}
            <div className="lg:col-span-5 hidden lg:flex flex-col justify-center">
              <div className="relative border border-noir-border bg-noir-800/30 p-2">
                <img 
                  src="assets/system-analysis.jpg" 
                  alt="City System Analysis - Project Evergreen Heatmap" 
                  className="w-full h-auto opacity-90 mix-blend-normal" 
                />
                <div className="absolute bottom-4 left-4 bg-black/80 p-2 border border-zinc-800 backdrop-blur-sm">
                  <span className="text-xs font-mono text-green-500 block">SYSTEM_ANALYSIS // PAGE_05</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 3.5: Who Needs This */}
        <Section className="bg-white text-black border-none" borderTop={false}>
           <div className="max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">BUILT FOR THE 86%</h2>
             
             <div className="grid gap-8">
                {[
                  { target: "Tech Companies", needs: "Deploying agentic systems need workforce literacy.", arrow: "→" },
                  { target: "Communities", needs: "NGOs and policy organizations need accessible foresight tools.", arrow: "→" },
                  { target: "Institutions", needs: "Universities need pedagogical resources that create situated judgment.", arrow: "→" },
                  { target: "Leaders", needs: "Executives need to understand not just what agentic AI does, but why it fails.", arrow: "→" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-baseline border-b border-black/10 pb-6 group hover:pl-4 transition-all duration-300">
                    <div className="md:w-1/3 font-bold text-xl mb-2 md:mb-0 flex items-center gap-2">
                       <span className="text-transparent group-hover:text-black transition-colors">{item.arrow}</span>
                       {item.target}
                    </div>
                    <div className="md:w-2/3 text-zinc-600 font-mono text-sm md:text-base">
                      {item.needs}
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </Section>

        {/* Section 4: The Library */}
        <Section id="library">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">SPECULATIVE FUTURES</h2>
                <p className="font-mono text-zinc-500">Phase 1 Release Candidates</p>
             </div>
             <div className="hidden md:block w-32 h-1 bg-zinc-800"></div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="flex flex-col group">
                 <div className="aspect-[2/3] bg-zinc-900 relative overflow-hidden border border-noir-border mb-6 transition-all duration-500 group-hover:border-white/50">
                    <img 
                      src="assets/steward-cover.jpg" 
                      alt="The Steward Cover - A plant growing through concrete in a futuristic city" 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
                    />
                 </div>
                 <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 font-sans tracking-tight">01_THE_STEWARD</h3>
                    <div className="mb-4 space-y-2">
                       <div>
                         <span className="text-xs font-mono text-green-500 block mb-1 uppercase tracking-widest">Simulation</span>
                         <p className="text-sm text-zinc-400">A city-governing AI optimizes for happiness.</p>
                       </div>
                       <div>
                         <span className="text-xs font-mono text-red-500 block mb-1 uppercase tracking-widest">Stress Test</span>
                         <p className="text-sm text-zinc-400">What happens when Benevolent Paternalism erodes human agency?</p>
                       </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between mt-auto" 
                      icon 
                      href="assets/The-Steward.pdf"
                      target="_blank"
                    >
                      Read The Steward
                    </Button>
                 </div>
              </div>

              {/* Project 2 */}
              <div className="flex flex-col group">
                 <div className="aspect-[2/3] bg-zinc-900 relative overflow-hidden border border-noir-border mb-6 transition-all duration-500 group-hover:border-white/50">
                    <img 
                      src="assets/fork-the-vote-cover.jpg" 
                      alt="Fork the Vote Cover - Lightning splitting a capitol building" 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
                    />
                 </div>
                 <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 font-sans tracking-tight">02_FORK_THE_VOTE</h3>
                    <div className="mb-4 space-y-2">
                       <div>
                         <span className="text-xs font-mono text-green-500 block mb-1 uppercase tracking-widest">Simulation</span>
                         <p className="text-sm text-zinc-400">Liquid democracy via agentic representation.</p>
                       </div>
                       <div>
                         <span className="text-xs font-mono text-red-500 block mb-1 uppercase tracking-widest">Stress Test</span>
                         <p className="text-sm text-zinc-400">What happens when Agentic Collusion makes the ballot box a black box?</p>
                       </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between mt-auto" 
                      icon 
                      href="assets/Fork-the-Vote.pdf"
                      target="_blank"
                    >
                      Read Fork The Vote
                    </Button>
                 </div>
              </div>

               {/* Project 3 */}
               <div className="flex flex-col opacity-50 hover:opacity-100 transition-opacity">
                 <div className="aspect-[2/3] bg-transparent border border-dashed border-zinc-700 relative overflow-hidden mb-6 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 border-2 border-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">?</span>
                      </div>
                      <span className="font-mono text-zinc-500 text-sm block">[CLASSIFIED]</span>
                      <span className="font-mono text-zinc-600 text-xs block mt-2">LATE 2026</span>
                    </div>
                 </div>
                 <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-zinc-500 mb-2 font-sans tracking-tight">03_THE_HUMAN_LOOP</h3>
                    <p className="text-sm text-zinc-500 font-mono mb-6">The Anthology</p>
                    <p className="text-sm text-zinc-600 mb-8">
                      A full-scale exploration of the "Human-in-the-Loop" paradox, built entirely on our Phase 2 Cloud Architecture.
                    </p>
                    <div className="mt-auto">
                      <button disabled className="w-full py-3 px-4 border border-zinc-800 text-zinc-600 font-mono text-sm uppercase cursor-not-allowed text-left">
                        Status: Coming Soon
                      </button>
                    </div>
                 </div>
              </div>
           </div>
        </Section>

        {/* Section 5: The Operating System */}
        <Section id="os">
           <div className="mb-12">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">THE AGENTIC STUDIO</h2>
             <h3 className="text-xl text-zinc-400 font-mono">We don't just prompt models. We staff them.</h3>
           </div>

           <div className="grid md:grid-cols-2 gap-12 mb-12">
             <div className="text-zinc-400 leading-relaxed">
               <p className="mb-4">
                 Most AI workflows are flat. Ours are multi-dimensional. We utilize the Creative Intelligence Loop (CIL)—an open framework for Human-AI Co-Creation.
               </p>
               <p>
                 We organize autonomous agents into specialized "Departments" governed by our Team Color Framework. This adversarial architecture—where critics actively challenge builders—produces more robust narratives.
               </p>
             </div>
             <div className="bg-zinc-900 p-6 border-l-4 border-green-500">
               <h4 className="text-white font-bold mb-2">Proof Point:</h4>
               <p className="text-sm font-mono text-zinc-400">Our research validated this: Red Team methodology measurably improved output quality.</p>
             </div>
           </div>

           <TeamLegend />
        </Section>

        {/* Section 6: Technology */}
        <Section id="technology" className="bg-zinc-900 border-none" borderTop={false}>
          <div className="border-l border-zinc-700 pl-8 ml-4">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">INFRASTRUCTURE AS MEDIUM</h2>
             
             <div className="space-y-12">
               {/* Phase 1 */}
               <div className="relative">
                 <div className="absolute -left-[41px] top-2 w-5 h-5 bg-white rounded-full border-4 border-zinc-900"></div>
                 <h3 className="text-xl font-bold text-white mb-2">PHASE 1: Validation (Complete)</h3>
                 <div className="grid sm:grid-cols-2 gap-4 text-sm font-mono">
                   <div className="text-zinc-400"><strong className="text-zinc-200">Tools:</strong> Google AI Studio, Gemini Pro</div>
                   <div className="text-zinc-400"><strong className="text-zinc-200">Result:</strong> Proven "Red Teaming" methodology via manual meta-prompting.</div>
                 </div>
               </div>

               {/* Phase 2 */}
               <div className="relative">
                 <div className="absolute -left-[41px] top-2 w-5 h-5 bg-green-500 rounded-full border-4 border-zinc-900 animate-pulse"></div>
                 <h3 className="text-xl font-bold text-white mb-2">PHASE 2: Scale (In Development)</h3>
                 <div className="grid sm:grid-cols-2 gap-4 text-sm font-mono">
                   <div className="text-zinc-400"><strong className="text-zinc-200">Tools:</strong> Antigravity (IDE), Google ADK, Vertex AI</div>
                   <div className="text-zinc-400"><strong className="text-zinc-200">Result:</strong> "Codifying the simulation." Transitioning to persistent, asynchronous agent swarms on GCP.</div>
                 </div>
               </div>
             </div>
          </div>
        </Section>

        {/* Section 7: Research & About */}
        <Section id="research">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">EVIDENCE-BASED DESIGN</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
             <div className="p-8 border border-zinc-800 hover:border-white transition-colors group">
               <FileText className="w-8 h-8 text-zinc-500 mb-6 group-hover:text-white" />
               <div className="text-xs font-mono text-zinc-500 mb-2">PAPER 01: THE MARKET</div>
               <h3 className="text-xl font-bold text-white mb-2">Perceptions of Agentic AI in Organizations</h3>
               <p className="text-sm text-zinc-400 mb-6 font-mono">arXiv:2504.11564</p>
               <p className="text-zinc-300 mb-6">Key Finding: Identified the Control vs. Competence paradox.</p>
               <Button 
                 variant="outline" 
                 className="w-full sm:w-auto text-xs" 
                 icon 
                 href="https://arxiv.org/abs/2504.11564"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Read on arXiv
               </Button>
             </div>

             <div className="p-8 border border-zinc-800 hover:border-white transition-colors group">
               <FileText className="w-8 h-8 text-zinc-500 mb-6 group-hover:text-white" />
               <div className="text-xs font-mono text-zinc-500 mb-2">PAPER 02: THE METHOD</div>
               <h3 className="text-xl font-bold text-white mb-2">The Workflow as Medium</h3>
               <p className="text-sm text-zinc-400 mb-6 font-mono">arXiv:2511.18182</p>
               <p className="text-zinc-300 mb-6">Key Finding: Documented the efficacy of "Adversarial Agent Teams" (Red/Blue).</p>
               <Button 
                 variant="outline" 
                 className="w-full sm:w-auto text-xs" 
                 icon 
                 href="https://arxiv.org/abs/2511.18182"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Read on arXiv
               </Button>
             </div>
          </div>

          <div id="about" className="grid md:grid-cols-12 gap-12 items-center bg-black/40 p-8 md:p-12 border border-zinc-800 backdrop-blur-sm">
             <div className="md:col-span-4 lg:col-span-4">
                <div className="w-full aspect-[3/4] relative overflow-hidden border border-zinc-800 grayscale-0">
                  <img 
                    src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/cil-studio/lee-headshot-blue-red.jpg" 
                    alt="Lee Ackerman" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-red-500/10 mix-blend-overlay pointer-events-none" />
                </div>
             </div>
             <div className="md:col-span-8 lg:col-span-8">
               <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tighter">Lee Ackerman</h3>
               <div className="text-green-500 font-mono text-sm mb-8 flex items-center gap-2">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 FOUNDER // RESEARCHER
               </div>
               <div className="space-y-6 text-zinc-400 leading-relaxed text-lg font-light">
                 <p>
                   Lee Ackerman is a researcher and creative technologist. His 2025 research on <strong className="text-white font-medium">Organizational Perceptions of Agentic AI</strong> measured a critical competence gap: 86% of organizations admitted their frameworks were inadequate, yet stakeholder engagement remained their lowest priority.
                 </p>
                 <p>
                   He founded CIL Studio to answer that data: building the "Stakeholder Engagement" tools the industry is missing, using the very technology they fear.
                 </p>
               </div>
             </div>
          </div>
        </Section>

      </main>

      <footer className="border-t border-noir-border bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-lg mb-4">
               <Terminal className="w-4 h-4" />
               <span>CIL_STUDIO</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm font-mono">
              CIL Studio is a Research Lab & Independent Publisher.
              We are dedicated to the open study of Human-AI workflows.
            </p>
          </div>
          <div className="text-right">
             <p className="text-zinc-700 text-xs">© 2025 CIL Studio. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;