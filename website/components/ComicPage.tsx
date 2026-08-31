import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Comic, downloadUrl, notesMailto, readUrl } from '../data/comics';

/** Read in Drive, or pull the file down, plus the position-in-the-anthology line. */
export const ComicActions: React.FC<{ comic: Comic; className?: string }> = ({
  comic,
  className = '',
}) => (
  <div className={className}>
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <Button
        icon
        className="shrink-0 whitespace-nowrap"
        href={readUrl(comic)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read {comic.title}
      </Button>
      <a
        href={downloadUrl(comic)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-medium uppercase tracking-[0.18em] text-ink/45 hover:text-ink transition-colors"
      >
        Download the PDF{comic.fileSizeLabel ? ` (${comic.fileSizeLabel})` : ''}
      </a>
    </div>
    <p className="mt-5 text-sm text-ink/45 font-light">{comic.meta}</p>
  </div>
);

/** What I'm asking readers for. */
const ComicNotes: React.FC<{ comic: Comic }> = ({ comic }) => (
  <div>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-6">Notes welcome</h2>
    <p className="text-xl md:text-2xl text-ink font-light leading-relaxed">{comic.notesIntro}</p>

    <div className="mt-10 space-y-8">
      {comic.notes.map((n) => (
        <div key={n.label} className="border-l-2 border-brand-purple pl-6">
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-brand-purple mb-3">
            {n.label}
          </h3>
          <p className="text-lg text-ink/75 font-light leading-relaxed">{n.body}</p>
        </div>
      ))}
    </div>

    {comic.notesOutro && (
      <p className="mt-8 text-lg text-ink/75 font-light leading-relaxed">{comic.notesOutro}</p>
    )}

    <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
      <Button
        variant="secondary"
        icon
        className="shrink-0 whitespace-nowrap"
        href={notesMailto(comic)}
      >
        Email your notes
      </Button>
      <a
        href={notesMailto(comic)}
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
const ComicStudio: React.FC<{ comic: Comic }> = ({ comic }) => (
  <div>
    <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40 mb-6">
      About the studio
    </h2>
    <div className="space-y-5 text-lg text-ink/70 font-light leading-relaxed">{comic.studio}</div>
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
 * A comic's own page: the book, the ask, and the studio behind it.
 * Rendered by index.tsx for each comic's slug.
 */
export const ComicPage: React.FC<{ comic: Comic }> = ({ comic }) => {
  useEffect(() => {
    const prev = document.title;
    document.title = `${comic.title} · Zhudiyo`;
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, [comic.title]);

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
            {comic.status}
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-ink mb-10">
            {comic.title}
          </h1>

          {/* Full column width: hairline detail in cover type dies below ~460px */}
          <figure className="mb-10">
            <img
              src={comic.cover}
              alt={comic.coverAlt}
              className="w-full h-auto block border border-noir-border shadow-2xl shadow-black/60"
            />
          </figure>

          <div className="mb-16">
            <div className="text-lg md:text-xl text-ink/70 font-light leading-relaxed">
              {comic.logline}
            </div>
            <ComicActions comic={comic} className="mt-8" />
          </div>

          <div className="border-t border-noir-border pt-12">
            <ComicNotes comic={comic} />
          </div>

          <div className="border-t border-noir-border mt-16 pt-12">
            <ComicStudio comic={comic} />
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
