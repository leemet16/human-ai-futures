import React, { useEffect } from 'react';

/**
 * The anthology preface, as shared markup so it lives in exactly one place
 * (used by the Anthology section on the main page and by the /humancode page).
 */
export const PrefaceBody: React.FC = () => (
  <>
    <span className="block text-xs font-medium uppercase tracking-[0.25em] text-ink/40 mb-4">
      Preface
    </span>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-ink mb-12">
      What this anthology is for
    </h2>

    <div className="space-y-6 font-light leading-relaxed text-ink/75">
      <p className="text-xl md:text-2xl text-ink leading-relaxed">
        I built this studio to test a question: what happens if we let AI amplify the human, instead
        of replacing them.
      </p>
      <p className="text-lg">
        The easy answer is everywhere. Faster output. Cheaper iteration. A new production line for
        creative work. We&rsquo;ve been here before, in other crafts, in other centuries. What gets
        lost is always the same thing: the trace of a person, choosing.
      </p>
      <p className="text-lg">I wanted to find the other answer.</p>
      <p className="text-lg">
        So I built a studio where the human authors the work and chooses how the machine assists.
      </p>
      <p className="text-lg">
        I bring what I have: my intention, my craft, my taste, my history of looking at the world.
        And also what I lack: my blocks, my gaps, the days when nothing comes. The studio brings what
        it has: speed, scale, the ability to hold and recall and arrange. And also what it lacks:
        judgment about what matters, taste about what to keep. Neither
        of us shows up complete. The work happens in how I choose to bring us together.
      </p>
      <p className="text-lg">
        That is the craft. Not just the panels and the pacing and the words on the page, though those
        matter. The deeper craft is the configuration itself: knowing what to do alone, what to ask
        for help with, what to take back, what to throw away.{' '}
        <em className="text-ink not-italic font-normal">Amplified craft is a craft.</em> Knowing when
        to lean on the machine, when to set it aside, when to argue with it: that skill is not
        separate from making the comic. It is part of making the comic.
      </p>
      <p className="text-lg">
        Every panel here, every line of dialogue, every choice of light or pacing or framing, traces
        back to a person who chose it. Not just chose the result. Chose how the result was made.
      </p>
      <p className="text-lg">The same commitment runs through the stories themselves.</p>
      <p className="text-lg">
        These comics are about the futures AI is building. The trajectories we&rsquo;re on. The ones
        we could be on. The ones we are choosing, sometimes without noticing. But the test of a story
        here is not whether it shows the technology vividly. It is whether{' '}
        <span className="text-brand-yellow">humanity is at stake</span> in what is being told. A story
        about an AI grappling with what it is becoming can be deeply human. A story about a person
        used as a prop to demonstrate a machine cannot. The subject does not have to be a person. The
        stakes always do.
      </p>
      <p className="text-lg">
        So you will not find a survey of AI futures in these pages. You will find a set of stories,
        at different scales, in different registers, told through different visual languages, that
        share one through-line. People, in the futures we are building. Sometimes those people are
        close. One body. One relationship. A room where the future is felt before it is named.
        Sometimes those people are at the architecture level: the engineers and lawmakers and quiet
        decision-makers whose choices become the systems everyone else lives inside. The strongest
        stories travel between those altitudes.
      </p>
      <p className="text-lg">
        I call this commitment Humancode. It is the studio&rsquo;s name for keeping humans at the
        center of both how the work is made and what the work is about.
      </p>
      <p className="text-lg">
        The futures imagined in these pages are real possibilities. Systems grow. They collapse. They
        tighten into discipline. They transform into something else. None of these are predictions.
        All of them are worth thinking about. They are offered here as stories, not as briefings,
        because stories carry what arguments cannot: the feeling of what it would actually be like to
        live inside a future, and the human cost or human grace of how we get there.
      </p>
      <p className="text-xl md:text-2xl text-ink leading-relaxed pt-2">
        If the stories work, you will close this book not with conclusions but with questions.
      </p>
      <p className="text-xl md:text-2xl text-ink leading-relaxed">That is the point.</p>
      <p className="text-base text-ink/50 pt-6">&mdash; Lee Ackerman</p>
    </div>
  </>
);

/**
 * Standalone /humancode page — the philosophy, the test, and the anthology
 * preface. Rendered by index.tsx when the path is /humancode.
 */
export const HumancodePage: React.FC = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Humancode — Zhudiyo';
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-noir-900 text-ink/90 selection:bg-brand-purple selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-20" />

      {/* Header */}
      <header className="relative z-10 border-b border-noir-border">
        <div className="max-w-3xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-baseline gap-2">
            <span className="text-xl font-semibold tracking-tight text-ink lowercase">zhudiyo</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple self-center" />
            <span className="hidden sm:inline text-[11px] font-medium tracking-[0.2em] uppercase text-ink/40">
              from CIL Studio
            </span>
          </a>
          <a
            href="/"
            className="text-xs font-medium uppercase tracking-[0.18em] text-ink/50 hover:text-ink transition-colors"
          >
            &larr; Home
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          {/* The philosophy */}
          <span className="block text-xs font-medium tracking-[0.25em] uppercase text-brand-purple mb-6">
            Humancode
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink mb-8">
            Keep humans at the center of the making, and of the story.
          </h1>
          <p className="text-lg md:text-xl text-ink/70 font-light leading-relaxed">
            Humancode is the studio&rsquo;s name for a single commitment: the human stays at the
            center of both how the work is made and what the work is about.
          </p>

          {/* The test */}
          <div className="mt-14 border-t border-noir-border pt-12">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40 mb-8">
              The test: two questions, at every scale
            </h2>
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
            <p className="text-base text-ink/50 font-light mt-8">
              The subject doesn&rsquo;t have to be human, but humanity has to be at stake.
            </p>
          </div>

          {/* The preface */}
          <div className="mt-16 border-t border-noir-border pt-12">
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-10">
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-purple">
                The Anthology
              </span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-yellow">
                Coming 2026
              </span>
            </div>
            <PrefaceBody />
          </div>

          {/* Back */}
          <div className="mt-16 pt-8 border-t border-noir-border">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-ink/50 hover:text-ink transition-colors"
            >
              &larr; Back to zhudiyo
            </a>
          </div>
        </article>
      </main>
    </div>
  );
};
