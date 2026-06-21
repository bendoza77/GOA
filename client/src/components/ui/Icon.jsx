import * as Lucide from "lucide-react";

/**
 * Resolve a lucide-react icon by name string (from mock data).
 * Falls back to a neutral dot if the name is unknown.
 */
export default function Icon({ name, ...props }) {
  const Cmp = Lucide[name] || Lucide.Circle;
  return <Cmp {...props} />;
}
