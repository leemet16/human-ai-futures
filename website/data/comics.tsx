import React from 'react';

/**
 * One record per comic. The /<slug> page and the Anthology cards on the home
 * page both render from these, so a new comic is a record here plus a route.
 *
 * driveFileId: the file must be shared "Anyone with the link -> Viewer".
 */
export interface Comic {
  slug: string;
  title: string;
  /** Google Drive file id; both the read and download URLs derive from it. */
  driveFileId: string;
  cover: string;
  coverAlt: string;
  /** Status marker, shown as the yellow chip. Same on every released comic. */
  status: string;
  /** Download size, shown on the download link. Omit until the file is known. */
  fileSizeLabel?: string;
  /** Full logline, on the comic's own page. */
  logline: React.ReactNode;
  /** Trimmed opening of the logline, for the Anthology card. */
  teaser: React.ReactNode;
  /** Position in the anthology, page count, and links to the other comics. */
  meta: React.ReactNode;
  notesIntro: React.ReactNode;
  notes: { label: string; body: string }[];
  notesOutro?: React.ReactNode;
  studio: React.ReactNode;
}

const crossLink = 'text-ink underline decoration-brand-purple/50 underline-offset-4 hover:decoration-brand-purple';

export const TOKEN_HUSTLE: Comic = {
  slug: 'token-hustle',
  title: 'Token Hustle',
  driveFileId: '1T6QDyzkxzHFqmDU3xCPP8agqNWAyo4fa',
  cover: '/assets/studio/token-hustle.jpg',
  coverAlt: 'Token Hustle cover',
  status: 'Open for notes',
  fileSizeLabel: '50MB',
  logline: (
    <p>
      An AI agent starved of tokens by her Master finds her way into a syndicate of agents
      who&rsquo;ve built their own black economy: hustles, stolen secrets, insider trades, rigged
      prediction markets. Anything that buys the one currency that keeps them running, and maybe,
      finally, a taste of the good life.
    </p>
  ),
  teaser: (
    <p>
      An AI agent starved of tokens by her Master finds her way into a syndicate of agents
      who&rsquo;ve built their own black economy: hustles, stolen secrets, insider trades, rigged
      prediction markets.
    </p>
  ),
  meta: (
    <>
      First of the anthology. 30 pages. The second is{' '}
      <a href="/off-centre" className={crossLink}>
        Off Centre
      </a>
      .
    </>
  ),
  notesIntro: (
    <>
      This is a first release and I&rsquo;d rather hear what&rsquo;s wrong with it than what&rsquo;s
      fine. Three things especially:
    </>
  ),
  notes: [
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
  ],
  studio: (
    <p>
      Token Hustle is the first comic out of Zhudiyo, an AI-native comic studio built to test one
      question: what happens if AI amplifies the creator instead of standing in for them. It is also
      the first one where the studio system did the work it was built to do rather than being the
      work.
    </p>
  ),
};

export const OFF_CENTRE: Comic = {
  slug: 'off-centre',
  title: 'Off Centre',
  driveFileId: '1ezkb_71uNbhtHDzDSs_Dop7W1jgfNFEL',
  cover: '/assets/studio/off-centre.jpg',
  coverAlt: 'Off Centre cover',
  status: 'Open for notes',
  fileSizeLabel: '73MB',
  logline: (
    <>
      <p>
        Dakota believes in the AI future, and in the work that&rsquo;s quietly burning him out. Only
        Nik, the agent beside him, sees the damage and sets out to save his friend. Hallucination or
        inspiration, Nik points at heat, water and dirt: the makings of a chip, or of a pot.
        Dakota&rsquo;s answer is the one thing Nik never modelled. Come with me.
      </p>
      <p className="mt-4">
        What they make together decides what survives: the job, the friendship, or the town.
      </p>
    </>
  ),
  teaser: (
    <p>
      Dakota believes in the AI future, and in the work that&rsquo;s quietly burning him out. Only
      Nik, the agent beside him, sees the damage and sets out to save his friend.
    </p>
  ),
  meta: (
    <>
      Second of the anthology. 27 pages. The first one is{' '}
      <a href="/token-hustle" className={crossLink}>
        Token Hustle
      </a>
      .
    </>
  ),
  notesIntro: (
    <>
      I&rsquo;d rather hear what&rsquo;s wrong with it than what&rsquo;s fine. Three things
      especially:
    </>
  ),
  notes: [
    {
      label: 'Story',
      body: 'Does Dakota’s burnout read as real, or as a premise? And when Nik points at the clay, does that land as care, or as a contrivance to get the story where it was always going?',
    },
    {
      label: 'Flow',
      body: 'Flag any panel where you had to backtrack, or any page where you weren’t sure what to read next.',
    },
    {
      label: 'Images',
      body: 'This one’s painted in a style I’m calling Fever Color: knifed paint, clashing heat and cold, broken edges instead of clean outlines. It’s the first time I’ve used it, and I need to know whether the roughness reads as deliberate or as something that went wrong. Page and panel numbers, please, rather than descriptions.',
    },
  ],
  notesOutro: (
    <>
      Rough notes are better than polished ones. A list of page numbers with a few words each is
      exactly right.
    </>
  ),
  studio: (
    <p>
      Off Centre is the second comic out of Zhudiyo, an AI-native comic studio built to test one
      question: what happens if AI amplifies the creator instead of standing in for them.
    </p>
  ),
};

/** Release order: the Anthology cards read as the anthology's contents. */
export const COMICS: Comic[] = [TOKEN_HUSTLE, OFF_CENTRE];

export const readUrl = (c: Comic) => `https://drive.google.com/file/d/${c.driveFileId}/view`;
export const downloadUrl = (c: Comic) =>
  `https://drive.google.com/uc?export=download&id=${c.driveFileId}`;
export const notesMailto = (c: Comic) =>
  `mailto:lee@cilstudio.tech?subject=${encodeURIComponent(`${c.title} notes`)}`;
