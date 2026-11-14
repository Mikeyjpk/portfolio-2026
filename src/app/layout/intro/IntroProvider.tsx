import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { IntroContext, type IntroPhase } from "./intro-context";

/** Play the intro only on the first page load of a browser session. */
const INTRO_ONCE_PER_SESSION = true;
const SESSION_KEY = "intro-played";

const shouldSkipIntro = () => {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return true;
    }
    return (
      INTRO_ONCE_PER_SESSION && sessionStorage.getItem(SESSION_KEY) === "1"
    );
  } catch {
    return false;
  }
};

const markIntroPlayed = () => {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // storage unavailable (private mode etc.) — intro plays again next load
  }
};

const IntroProvider = ({ children }: { children: ReactNode }) => {
  const [phase, setPhase] = useState<IntroPhase>(() =>
    shouldSkipIntro() ? "done" : "count"
  );
  const [pct, setPct] = useState(0);
  const interval = useRef<number | undefined>(undefined);
  const timeout = useRef<number | undefined>(undefined);

  const clearTimers = () => {
    window.clearInterval(interval.current);
    window.clearTimeout(timeout.current);
  };

  // Ticks the counter to 100, then plays the curtain exit.
  useEffect(() => {
    if (phase !== "count") return;
    let p = 0;
    interval.current = window.setInterval(() => {
      p = Math.min(100, p + 1 + Math.floor(Math.random() * 6));
      setPct(p);
      if (p >= 100) {
        window.clearInterval(interval.current);
        timeout.current = window.setTimeout(() => {
          setPhase("exit");
          markIntroPlayed();
          timeout.current = window.setTimeout(() => setPhase("done"), 1000);
        }, 350);
      }
    }, 40);
    return clearTimers;
    // Runs once on mount; later phase changes come from the timers themselves.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({ phase, pct, ready: phase !== "count" }),
    [phase, pct]
  );

  return (
    <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
  );
};

export default IntroProvider;
