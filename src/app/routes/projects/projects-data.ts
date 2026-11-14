/**
 * Content for the Projects page.
 *
 * Everything in [square brackets] is a placeholder — replace it with real
 * detail. Only facts from your bio have been filled in. Keep Truescope
 * specifics general unless you have permission to share more.
 */

export interface CaseStudy {
  id: string;
  title: string;
  /** e.g. "Truescope" */
  org: string;
  years: string;
  summary: string;
  problem: string;
  built: string;
  outcome: string;
  tags: string[];
}

export interface Game {
  id: string;
  title: string;
  description: string;
  /** Engine / language / tools — the stuff you wouldn't use at your day job. */
  tools: string[];
  /** Screenshot or GIF in /public, e.g. "/games/my-game.gif". */
  image?: string;
  /** Link to a playable build (itch.io etc.). */
  url?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "agents",
    title: "Configurable agents",
    org: "Truescope",
    years: "2023 — Now",
    summary:
      "AI agents customers can configure themselves, built into a media intelligence platform.",
    problem: "[What problem were customers facing before agents existed?]",
    built: "[What you specced and built — your part, end to end.]",
    outcome: "[What changed after release: usage, feedback, how it scaled.]",
    tags: ["TypeScript", "React", "AI"],
  },
  {
    id: "reports",
    title: "Charts, reports & alerts",
    org: "Truescope",
    years: "2023 — Now",
    summary:
      "Turning raw media data into charts, reports and alerts customers can act on.",
    problem: "[What did customers struggle to see or act on in the raw data?]",
    built: "[What you specced and built.]",
    outcome: "[What changed after release.]",
    tags: ["TypeScript", "React", "Data visualisation"],
  },
];

export const games: Game[] = [
  {
    id: "game-1",
    title: "[Game title]",
    description: "[One line on what the game is and what you were trying out.]",
    tools: ["[Engine / tool]"],
  },
  {
    id: "game-2",
    title: "[Game title]",
    description: "[One line on what the game is and what you were trying out.]",
    tools: ["[Engine / tool]"],
  },
];
