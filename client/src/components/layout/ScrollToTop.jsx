import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll to top on every route change. Mounted once in App. */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
