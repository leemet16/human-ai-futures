import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Section } from './components/Section';
import { Button } from './components/ui/Button';
import { PrefaceBody } from './components/HumancodePage';

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
    { label: 'Amplification', href: '#amplification' },
    { label: 'Humancode', href: '#humancode' },
    { label: 'Studio', href: '#studio' },
    { label: 'Anthology', href: '#anthology' },
    { label: 'Work', href: '#work' },
    { label: 'Writing', href: '#writing' },
    { label: 'About', href: '#about' },
  ];

  return (
    <div className="min-h-screen bg-noir-900 text-ink/90 selection:bg-brand-purple selection:text-white overflow-x-hidden">

      {/* Background Grid */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-20" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-noir-900/90 backdrop-blur-md border-noir-border' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => handleScroll(e, '#top')}
            className="flex items-baseline gap-2 z-50"
          >
            <span className="text-xl font-semibold tracking-tight text-ink lowercase">zhudiyo</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple self-center" />
            <span className="hidden lg:inline text-[11px] font-medium tracking-[0.2em] uppercase text-ink/40">from CIL Studio</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-xs font-medium uppercase tracking-[0.18em] text-ink/50 hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-ink z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-noir-900 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-2xl font-medium text-ink hover:text-brand-purple transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-20">

        {/* Section 1: Hero */}
        <Section id="top" className="min-h-[88vh] flex flex-col justify-center border-none" borderTop={false}>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-purple" />
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-ink/50">From CIL Studio</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-ink mb-6 tracking-tight lowercase leading-[0.95]">
              zhudiyo
            </h1>

            <p className="text-2xl md:text-3xl text-ink max-w-2xl font-light mb-3 leading-snug">
              An AI-native comic studio that amplifies the creator.
            </p>
            <p className="text-lg text-ink/40 italic mb-10">
              Like &ldquo;studio,&rdquo; said a little differently.
            </p>

            <p className="text-base md:text-lg text-ink/60 max-w-xl font-light mb-10 leading-relaxed">
              A studio reshaped for the AI age, where the machine collaborates and the human
              authors. Real, and working. The first comics are coming.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button icon href="#amplification">Read on</Button>
              <Button variant="secondary" href="#humancode">What is Humancode?</Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-6 animate-bounce hidden md:block">
            <ChevronDown className="text-ink/30" />
          </div>
        </Section>

        {/* Section: Amplification */}
        <Section id="amplification">
          <div className="max-w-4xl">
            <span className="block text-xs font-medium tracking-[0.25em] uppercase text-brand-purple mb-8">
              Amplification
            </span>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-10">
              <span className="text-ink/40">Replacement is the easy path.</span>
              <br />
              <span className="text-ink">Amplification is the better one.</span>
            </h2>

            <div className="max-w-2xl space-y-6 font-light leading-relaxed">
              <p className="text-lg text-ink/60">
                The default direction of AI is automation: a new production line for the
                knowledge economy. That&rsquo;s industrial-era thinking, applied to a creative-era
                opportunity.
              </p>
              <p className="text-xl md:text-2xl text-ink italic">
                The interesting future is older.{' '}
                <span className="text-brand-yellow not-italic font-normal">Craft.</span> And now,
                finally, we can amplify it.
              </p>
            </div>
          </div>

          {/* Amplified craft: three principles */}
          <div className="mt-20">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40 mb-8">
              Amplified craft: three principles
            </h3>
            <div className="grid md:grid-cols-3 gap-px bg-noir-border border border-noir-border">
              {[
                {
                  n: '01',
                  title: 'The creator is the author.',
                  body: 'The work belongs to the human at the center. Always. Agents support; they do not author.',
                },
                {
                  n: '02',
                  title: 'Agents handle production load.',
                  body: 'The repetitive, structural, executional work that drains attention goes to agents in defined roles.',
                },
                {
                  n: '03',
                  title: 'Craft is the point.',
                  body: 'Tools should sharpen intention, attention, and discrimination. Not replace them with the median.',
                },
              ].map((p) => (
                <div key={p.n} className="bg-noir-900 p-8">
                  <div className="text-xs font-medium tracking-[0.2em] text-brand-purple mb-6">
                    {p.n}
                  </div>
                  <div className="w-0.5 h-8 bg-brand-purple mb-5" />
                  <h4 className="text-xl font-semibold text-ink mb-3">{p.title}</h4>
                  <p className="text-sm text-ink/55 leading-relaxed font-light">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-12 text-lg text-ink/60 font-light max-w-2xl">
            I call the underlying idea <span className="text-ink italic">workflow as medium</span>:
            the workflow itself is something you author with intent, not neutral plumbing
            between a person and an output.
          </p>
        </Section>

        {/* Section: Humancode */}
        <Section id="humancode">
          <div className="max-w-4xl">
            <span className="block text-xs font-medium tracking-[0.25em] uppercase text-brand-purple mb-8">
              Humancode
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink mb-8">
              Keep humans at the center of the making, and of the story.
            </h2>
            <p className="text-lg md:text-xl text-ink/60 font-light leading-relaxed max-w-2xl">
              Humancode is the studio&rsquo;s name for a single commitment: the human stays at the
              center of both how the work is made and what the work is about.
            </p>
          </div>

          {/* Two halves */}
          <div className="grid md:grid-cols-2 gap-px bg-noir-border border border-noir-border mt-16">
            <div className="bg-noir-900 p-8 md:p-10">
              <span className="block text-xs font-medium uppercase tracking-[0.2em] text-ink/40 mb-5">
                In the making
              </span>
              <p className="text-lg text-ink/80 font-light leading-relaxed">
                The machine collaborates; the human authors. Agents extend reach, not judgment. The
                creator stays the author of every decision that shapes the work.
              </p>
            </div>
            <div className="bg-noir-900 p-8 md:p-10">
              <span className="block text-xs font-medium uppercase tracking-[0.2em] text-ink/40 mb-5">
                In the story
              </span>
              <p className="text-lg text-ink/80 font-light leading-relaxed">
                A Humancode story is never a demonstration of a technology. It is an account of what
                that technology does to, for, and through people: the future shown in a body, a
                relationship, a system someone built and someone else lives inside.
              </p>
            </div>
          </div>

          {/* The test */}
          <div className="mt-16 max-w-4xl">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40 mb-8">
              The test: two questions, at every scale
            </h3>
            <div className="space-y-6">
              <div className="flex items-baseline gap-5">
                <span className="text-brand-purple text-2xl font-light leading-none select-none">
                  &mdash;
                </span>
                <p className="text-2xl md:text-3xl text-ink font-light italic">
                  Are we amplifying the creator?
                </p>
              </div>
              <div className="flex items-baseline gap-5">
                <span className="text-brand-yellow text-2xl font-light leading-none select-none">
                  &mdash;
                </span>
                <p className="text-2xl md:text-3xl text-ink font-light italic">
                  Is humanity at stake in the story?
                </p>
              </div>
            </div>
            <p className="text-base text-ink/50 font-light mt-8 max-w-xl">
              The subject doesn&rsquo;t have to be human, but humanity has to be at stake.
            </p>
          </div>

          <p className="mt-12 max-w-2xl text-base text-ink/45 font-light leading-relaxed">
            Told across distinct visual languages, and at every altitude, from one life up close to
            the systems that contain it.
          </p>

          <a
            href="/humancode"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-brand-purple hover:text-ink transition-colors"
          >
            The full philosophy, and the anthology preface
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </Section>

        {/* Section: The Studio */}
        <Section id="studio">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="block text-xs font-medium tracking-[0.25em] uppercase text-brand-purple mb-8">
                The Studio
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink mb-8">
                A studio. Not a comic generator.
              </h2>
              <div className="space-y-6 text-lg text-ink/60 font-light leading-relaxed">
                <p>
                  The easy version of &ldquo;AI makes a comic&rdquo; is a prompt and a render: you
                  ask, it produces, you ship. It comes out competent, fast, and indistinguishable
                  from everyone else who typed something similar. No point of view, because none
                  was ever required to make it.
                </p>
                <p className="text-ink/80">
                  Zhudiyo works nothing like that. It is built the way a real studio works: roles
                  with distinct responsibilities and the standing to disagree. Some agents generate.
                  Some direct. A deliberate few exist only to keep the work honest: to catch
                  the easy default before it ships, and surface the choice the creator was about to
                  glide past.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <figure className="mx-auto w-full max-w-[22rem] lg:max-w-none">
                <div className="relative aspect-[5/6]">
                  {/* back: cover study */}
                  <div className="absolute left-[5%] top-0 w-[62%] aspect-[2/3] -rotate-6 overflow-hidden border border-noir-border bg-noir-800 shadow-2xl shadow-black/60">
                    <img
                      src="/assets/studio/studio-craft-creator.jpg"
                      alt="Crafting Joy cover study, in progress"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* front: cover study */}
                  <div className="absolute right-[5%] bottom-0 w-[62%] aspect-[2/3] rotate-3 overflow-hidden border border-noir-border bg-noir-800 shadow-2xl shadow-black/60 ring-1 ring-black/30">
                    <img
                      src="/assets/studio/token-hustle.jpg"
                      alt="Token Hustle cover study, in progress"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <figcaption className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/35 text-center lg:text-left">
                  Cover studies &middot; in progress
                </figcaption>
              </figure>
            </div>
          </div>

          {/* North star */}
          <div className="mt-14 max-w-3xl border-l-2 border-brand-purple pl-6">
            <p className="text-2xl md:text-3xl text-ink font-light leading-snug">
              The north star: every creative choice is{' '}
              <span className="text-brand-yellow">owned</span>, not{' '}
              <span className="italic">defaulted</span>.
            </p>
          </div>

          {/* Why comics */}
          <div className="mt-20">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40 mb-8">
              Why comics
            </h3>
            <div className="grid md:grid-cols-3 gap-px bg-noir-border border border-noir-border">
              {[
                {
                  title: 'Visible end to end',
                  body: 'The artifact is the proof. Nothing hides in the process. What you see on the page is every decision, made.',
                },
                {
                  title: 'Every craft shows up',
                  body: 'Writing, character, visual, layout, dialogue, continuity: all required at once, sustained across hundreds of small choices.',
                },
                {
                  title: 'Quality can’t be faked',
                  body: 'You can’t shortcut that volume. The quality is simply the sum of the choices.',
                },
              ].map((c) => (
                <div key={c.title} className="bg-noir-900 p-8">
                  <div className="w-0.5 h-8 bg-brand-purple mb-5" />
                  <h4 className="text-lg font-semibold text-ink mb-3">{c.title}</h4>
                  <p className="text-sm text-ink/55 leading-relaxed font-light">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Proof + teaser */}
          <div className="mt-16 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            <div className="shrink-0 w-full max-w-[240px] border border-noir-border bg-noir-800 overflow-hidden">
              <img
                src="/assets/studio/entering-zhudiyo.png"
                alt="Entering Zhudiyo, the studio synchronizing"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
            <p className="text-lg text-ink/70 font-light max-w-xl">
              It is real, and it is working. The first comics are coming, shown for now in
              private demos. <span className="text-ink/45">More to come.</span>
            </p>
          </div>
        </Section>

        {/* Section: The Anthology */}
        <Section id="anthology">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-12">
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-purple">
                The Anthology
              </span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-yellow">
                Coming summer 2026
              </span>
            </div>

            <div className="border-t border-noir-border pt-12">
              <PrefaceBody />
              <a
                href="/humancode"
                className="mt-12 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-brand-purple hover:text-ink transition-colors"
              >
                Open on the Humancode page
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Section>

        {/* Section: The Work */}
        <Section id="work">
          <div className="max-w-4xl mb-14">
            <span className="block text-xs font-medium tracking-[0.25em] uppercase text-brand-purple mb-8">
              The Work
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink mb-8">
              What&rsquo;s already been made.
            </h2>
            <p className="text-lg text-ink/60 font-light leading-relaxed max-w-2xl">
              Two graphic novellas, made while the methodology was still being shaped: the
              portfolio that proved the bet was worth making.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
            {[
              {
                title: 'The Steward',
                cover: '/assets/steward-cover.jpg',
                pdf: '/assets/The-Steward.pdf',
                logline:
                  'A city-governing AI optimizes for human happiness, and quietly redraws the line between care and control.',
              },
              {
                title: 'Fork the Vote',
                cover: '/assets/fork-the-vote-cover.jpg',
                pdf: '/assets/Fork-the-Vote.pdf',
                logline:
                  'Liquid democracy, handed to agents, until the ballot box becomes a black box.',
              },
            ].map((w) => (
              <div key={w.title} className="flex flex-col group">
                <a
                  href={w.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[2/3] bg-noir-800 relative overflow-hidden border border-noir-border mb-6 transition-all duration-500 group-hover:border-brand-purple/60"
                >
                  <img
                    src={w.cover}
                    alt={`${w.title} cover`}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </a>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-ink tracking-tight mb-2">{w.title}</h3>
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/40 mb-3">
                    Glitch Comics · Graphic novella
                  </span>
                  <p className="text-sm text-ink/60 leading-relaxed mb-6 font-light">{w.logline}</p>
                  <Button
                    variant="outline"
                    className="w-full justify-between mt-auto"
                    icon
                    href={w.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read {w.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 text-lg text-ink/70 font-light max-w-2xl">
            These two were the proof. The new work,{' '}
            <a
              href="#anthology"
              onClick={(e) => handleScroll(e, '#anthology')}
              className="text-ink underline decoration-brand-purple/50 underline-offset-4 hover:decoration-brand-purple"
            >
              the anthology
            </a>
            , arrives this summer, shown first in private demos.{' '}
            <span className="text-ink/45">More to come.</span>
          </p>
        </Section>

        {/* Section: The Name */}
        <Section id="name" className="!py-16 md:!py-20">
          <div className="max-w-3xl">
            <span className="block text-xs font-medium tracking-[0.25em] uppercase text-brand-purple mb-6">
              The Name
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-5 gap-y-2 mb-6">
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-ink lowercase">
                zhudiyo
              </span>
              <span className="text-base font-medium tracking-[0.2em] uppercase text-ink/40">
                ZHOO &middot; dee &middot; yoh
              </span>
            </div>
            <p className="text-lg md:text-xl text-ink/70 font-light leading-relaxed">
              A studio, reshaped for the AI age. The familiar word is hidden inside: the
              consonants softened, the rhythm shifted. The soft <span className="text-ink">Zh-</span>{' '}
              is less authoritative than the hard <span className="text-ink">St-</span> of studio: the
              name holds back to let the creator through.
            </p>
          </div>
        </Section>

        {/* Section: Where it goes */}
        <Section id="reach">
          <div className="max-w-4xl">
            <span className="block text-xs font-medium tracking-[0.25em] uppercase text-brand-purple mb-8">
              Where it goes
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink mb-8">
              Comics are the proof. Not the point.
            </h2>
            <p className="max-w-2xl text-lg text-ink/60 font-light leading-relaxed">
              What works for a comic studio is a method, not a genre: a creator at the center,
              agents in defined roles, collaboration designed on purpose. The workflow itself is
              the medium; the method is the product.
            </p>
          </div>

          <div className="mt-14">
            <p className="max-w-2xl text-xl md:text-2xl text-ink font-light leading-snug mb-8">
              Anywhere a team makes work that matters, there&rsquo;s room to amplify the craft.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Copywriting',
                'Editorial',
                'Brand design',
                'Advertising',
                'Filmmaking',
                'Content production',
                'Software development',
              ].map((d) => (
                <span
                  key={d}
                  className="px-4 py-2 border border-noir-border text-sm text-ink/70 font-light"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Section: Writing & Research */}
        <Section id="writing">
          <div className="max-w-4xl mb-14">
            <span className="block text-xs font-medium tracking-[0.25em] uppercase text-brand-purple mb-8">
              Writing
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink mb-8">
              Essays and papers.
            </h2>
            <p className="text-lg text-ink/60 font-light leading-relaxed max-w-2xl">
              On the method, and the research underneath it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-noir-border border border-noir-border">
            {[
              {
                kind: 'Essay · Medium',
                title: 'The Oldest Future',
                blurb: 'Why the most interesting thing AI can do is amplify craft, not replace it.',
                href: 'https://medium.com/digit-l/the-oldest-future-bef254082c02',
              },
              {
                kind: 'Essay · Medium',
                title: 'Beyond the Chat Box',
                blurb: 'What building a multi-agent studio taught me about human-centered AI.',
                href: 'https://medium.com/digit-l/beyond-the-chat-box-what-building-a-multi-agent-studio-taught-me-about-human-centered-ai-396dc89331de',
              },
              {
                kind: 'Paper · arXiv',
                title: 'The Workflow as Medium',
                blurb: 'A framework for navigating human–AI co-creation.',
                href: 'https://arxiv.org/abs/2511.18182',
              },
              {
                kind: 'Paper · arXiv',
                title: 'Perceptions of Responsible Agentic AI',
                blurb: 'How organizations actually perceive agentic AI, and where the gaps are.',
                href: 'https://arxiv.org/abs/2504.11564',
              },
            ].map((a) => (
              <a
                key={a.title}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-noir-900 p-8 flex flex-col transition-colors hover:bg-noir-800"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-purple">
                    {a.kind}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-ink/30 group-hover:text-ink transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-2">{a.title}</h3>
                <p className="text-sm text-ink/55 leading-relaxed font-light">{a.blurb}</p>
              </a>
            ))}
          </div>
        </Section>

        {/* Section: About */}
        <Section id="about">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4">
              <div className="aspect-[3/4] overflow-hidden border border-noir-border">
                <img
                  src="/assets/lee-ackerman.jpg"
                  alt="Lee Ackerman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <span className="block text-xs font-medium tracking-[0.25em] uppercase text-brand-purple mb-6">
                About
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
                Lee Ackerman
              </h3>
              <div className="space-y-5 text-lg text-ink/65 font-light leading-relaxed">
                <p>
                  Lee Ackerman is a creative technologist and researcher. After a career in software,
                  he started building with AI by making things: apps, an animated film, then
                  comics. He learned how these systems behave by working with them.
                </p>
                <p>
                  Zhudiyo is where that work converged: a studio built to test one bet, that AI can
                  amplify a creator&rsquo;s craft instead of replacing it. He writes about the
                  method as <em className="not-italic text-ink">workflow as medium</em>, and is
                  exploring where it goes next, in comics and well beyond them.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Section: The Invitation */}
        <Section id="connect">
          <div className="max-w-3xl">
            <span className="block text-xs font-medium tracking-[0.25em] uppercase text-brand-purple mb-8">
              The Invitation
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-8 leading-[1.05]">
              How might we work together?
            </h2>
            <p className="text-lg md:text-xl text-ink/65 font-light leading-relaxed mb-10">
              A team needs many skills. I&rsquo;ve built one part of this, and there&rsquo;s
              something larger to build. I&rsquo;m looking for partners who see something here too. If
              you do, let&rsquo;s talk.
            </p>
            <Button
              icon
              href="https://www.linkedin.com/in/ackermanlee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </Button>
          </div>
        </Section>

      </main>

      <footer className="relative z-10 border-t border-noir-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-lg font-semibold tracking-tight text-ink lowercase">zhudiyo</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple self-center" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-ink/40">from CIL Studio</span>
            </div>
            <p className="text-ink/50 text-sm max-w-sm font-light">
              An AI-native comic studio that amplifies the creator. Like &ldquo;studio,&rdquo; said a
              little differently.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <div className="flex gap-6 text-xs font-medium uppercase tracking-[0.18em] text-ink/50">
              <a
                href="https://www.linkedin.com/in/ackermanlee/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://cilstudio.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                cilstudio.tech
              </a>
            </div>
            <p className="text-ink/30 text-xs">© 2026 CIL Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
