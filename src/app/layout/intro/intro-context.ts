import { createContext, useContext } from "react";

/** count → curtain shows the counter; exit → curtain slides up; done → curtain unmounted. */
export type IntroPhase = "count" | "exit" | "done";

export interface IntroState {
  phase: IntroPhase;
  pct: number;
  /** Page content may mount once the counter has finished. */
  ready: boolean;
}

export const IntroContext = createContext<IntroState | null>(null);

export const useIntro = () => {
  const ctx = useContext(IntroContext);
  if (!ctx) throw new Error("useIntro must be used inside <IntroProvider>");
  return ctx;
};
