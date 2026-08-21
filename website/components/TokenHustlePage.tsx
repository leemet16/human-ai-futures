import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';

/**
 * Google Drive hosting for the 50MB comic. The file is shared as
 * "Anyone with the link -> Viewer"; both URLs below derive from this id.
 */
const TOKEN_HUSTLE_FILE_ID = '1T6QDyzkxzHFqmDU3xCPP8agqNWAyo4fa';

export const TOKEN_HUSTLE_READ_URL = `https://drive.google.com/file/d/${TOKEN_HUSTLE_FILE_ID}/view`;
export const TOKEN_HUSTLE_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${TOKEN_HUSTLE_FILE_ID}`;
export const TOKEN_HUSTLE_MAILTO = 'mailto:lee@cilstudio.tech?subject=Token%20Hustle%20notes';

/**
 * The logline, as shared markup so it lives in exactly one place
 * (used by the Anthology section on the main page and by the /token-hustle page).
 */
export const TokenHustleBlurb: React.FC = () => (
  <p className="text-ink/70 font-light leading-relaxed">
    An AI agent starved of tokens by her Master finds her way into a syndicate of agents who&rsquo;ve
    built their own black economy: hustles, stolen secrets, insider trades, rigged prediction
    markets. Anything that buys the one currency that keeps them running, and maybe, finally, a taste
    of the good life.
  </p>
);

/** Read in Drive, or pull the file down. */
export const TokenHustleActions: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={className}>
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <Button
        icon
        className="shrink-0 whitespace-nowrap"
        href={TOKEN_HUSTLE_READ_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Token Hustle
      </Button>
      <a
        href={TOKEN_HUSTLE_DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-medium uppercase tracking-[0.18em] text-ink/45 hover:text-ink transition-colors"
      >
        Download the PDF (50MB)
      </a>
    </div>
    <p className="mt-5 text-sm text-ink/45 font-light">First of the anthology. 30 pages.</p>
  </div>
);

const NOTES = [
  {
    label: 'Story',
    body: 'Where did you drift? Did the ending feel earned, or did it just arrive? And did Charlene wanting something, not just surviving, land for you, or did the heist swallow it?',
  },
  {
    label: 'Flow',
    body: 'Flag any panel where you had to backtrack, or any page where you weren’t sure what to read next.',
  },
  {
    label: 'Images',
    body: 'If something looks wrong, give me the page and panel number rather than a description. I can find it faster than you can explain it.',
  },
];

/** The notes brief: what I'm asking readers for. */
export const TokenHustleNotes: React.FC = () => (
  <div>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-6">Notes welcome</h2>
    <p className="text-xl md:text-2xl text-ink font-light leading-relaxed">
      This is a first release and I&rsquo;d rather hear what&rsquo;s wrong with it than what&rsquo;s
      fine. Three things especially:
    </p>

    <div className="mt-10 space-y-8">
      {NOTES.map((n) => (
        <div key={n.label} className="border-l-2 border-brand-purple pl-6">
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-brand-purple mb-3">
            {n.label}
          </h3>
          <p className="text-lg text-ink/75 font-light leading-relaxed">{n.body}</p>
        </div>
      ))}
    </div>

    <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
      <Button variant="secondary" icon className="shrink-0 whitespace-nowrap" href={TOKEN_HUSTLE_MAILTO}>
        Email your notes
      </Button>
      <a
        href={TOKEN_HUSTLE_MAILTO}
        className="text-sm text-ink/45 font-light hover:text-ink transition-colors"
      >
        lee@cilstudio.tech
      </a>
    </div>

    <p className="mt-8 text-base text-ink/50 font-light leading-relaxed">
      Happy to talk about the studio and the pipeline separately, just not in the same thread. This
      one&rsquo;s about the comic.
    </p>
  </div>
);

/** The studio context, kept deliberately after the ask. */
export const TokenHustleStudio: React.FC = () => (
  <div>
    <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40 mb-6">
      About the studio
    </h2>
    <div className="space-y-5 text-lg text-ink/70 font-light leading-relaxed">
      <p>
        Token Hustle is the first comic out of Zhudiyo, an AI-native comic studio built to test one
        question: what happens if AI amplifies the creator instead of standing in for them. It is
        also the first one where the studio system did the work it was built to do rather than being
        the work.
      </p>
    </div>
    <a
      href="/humancode"
      className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-brand-purple hover:text-ink transition-colors"
    >
      The full thinking behind that
      <ArrowUpRight className="w-4 h-4" />
    </a>
    <p className="mt-10 text-base text-ink/45 font-light">More comics through the fall.</p>
  </div>
);

/**
 * Standalone /token-hustle page: the comic, the ask, and the studio behind it.
 * Rendered by index.tsx when the path is /token-hustle.
 */
export const TokenHustlePage: React.FC = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Token Hustle · Zhudiyo';
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
          <span className="block text-xs font-medium tracking-[0.2em] uppercase text-brand-yellow mb-6">
            First release
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink mb-10">
            Token Hustle
          </h1>

          {/* Full column width: the title's hairline serifs only survive above ~460px */}
          <figure className="mb-10">
            <img
              src="/assets/studio/token-hustle.jpg"
              alt="Token Hustle cover"
              className="w-full h-auto block border border-noir-border shadow-2xl shadow-black/60"
            />
          </figure>

          <div className="mb-16">
            <div className="text-lg md:text-xl">
              <TokenHustleBlurb />
            </div>
            <TokenHustleActions className="mt-8" />
          </div>

          <div className="border-t border-noir-border pt-12">
            <TokenHustleNotes />
          </div>

          <div className="border-t border-noir-border mt-16 pt-12">
            <TokenHustleStudio />
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
