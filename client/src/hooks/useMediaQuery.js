import { useSyncExternalStore } from "react";

/**
 * Returns true when the given media query matches.
 * Uses useSyncExternalStore — the correct primitive for subscribing to an
 * external (browser) source, avoiding setState-in-effect.
 */
export default function useMediaQuery(query) {
  const subscribe = (callback) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  };
  const getSnapshot = () => window.matchMedia(query).matches;
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
