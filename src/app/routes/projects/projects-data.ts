/**
 * Content for the Projects page.
 *
 * Truescope case studies are on hold (see the commented drafts below) until
 * it's clear what can be shared publicly.
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

export interface SideQuest {
  id: string;
  title: string;
  text: string;
  /** Short status chip, e.g. "Ongoing" or "Learning". */
  status: string;
  icon: "note" | "quill" | "bulb" | "house" | "gamepad";
}

/**
 * Case studies shown under "Selected work". While this is empty the page
 * shows an "under construction" panel instead.
 */
export const caseStudies: CaseStudy[] = [
  // Drafts — general wording only, from the public bio. Uncomment once you
  // know what you can share about Truescope work.
  //
  // {
  //   id: "agents",
  //   title: "Configurable agents",
  //   org: "Truescope",
  //   years: "2023 — Now",
  //   summary:
  //     "AI agents customers can configure themselves, built into a media intelligence platform.",
  //   problem:
  //     "Customers monitor huge volumes of media coverage, and getting answers meant manually searching, filtering and reading through it all.",
  //   built:
  //     "Agents customers can configure around their own topics and questions, working across the interface and the services behind it, from spec through to release.",
  //   outcome:
  //     "Relevant insight is surfaced for customers instead of them digging for it, and the feature keeps evolving based on how they use it.",
  //   tags: ["TypeScript", "React", "AI"],
  // },
  // {
  //   id: "reports",
  //   title: "Charts, reports & alerts",
  //   org: "Truescope",
  //   years: "2023 — Now",
  //   summary:
  //     "Turning raw media data into charts, reports and alerts customers can act on.",
  //   problem:
  //     "Raw media data is noisy. Customers needed a clear view of their coverage and to know when something important happened, without watching it all day.",
  //   built:
  //     "Charts and reports that summarise coverage at a glance, and alerts that notify customers when something needs their attention.",
  //   outcome:
  //     "Raw data becomes something customers can understand quickly, share with their teams, and act on.",
  //   tags: ["TypeScript", "React", "Data visualisation"],
  // },
];

/**
 * Creative interests outside work. Nothing here claims finished work —
 * when you ship a game or story, it can become its own entry (add a link).
 */
export const sideQuests: SideQuest[] = [
  {
    id: "music",
    title: "Music",
    text: "Writing and producing music, including with a band signed to Greyscale Records.",
    status: "Signed",
    icon: "note",
  },
  {
    id: "story",
    title: "Story writing",
    text: "Characters, worlds and the plots that tie them together.",
    status: "Ongoing",
    icon: "quill",
  },
  {
    id: "concepting",
    title: "Concepting",
    text: "Sketching out ideas and asking “what if” before anything gets built.",
    status: "Ongoing",
    icon: "bulb",
  },
  {
    id: "home",
    title: "Home projects",
    text: "Small builds for use around the house, solving everyday problems at home.",
    status: "Ongoing",
    icon: "house",
  },
  {
    id: "gamedev",
    title: "Game development",
    text: "Learning to make games, a way to bring story, concept and code together.",
    status: "Learning",
    icon: "gamepad",
  },
];
