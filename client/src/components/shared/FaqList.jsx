import { useState } from "react";
import Accordion from "../ui/Accordion";
import { useLocalize } from "../../i18n/localize";

/** A self-managing accordion group with single-open behavior. */
export default function FaqList({ items: rawItems, className }) {
  const localize = useLocalize();
  const items = localize(rawItems);
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className={className}>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <Accordion
            key={item.q}
            question={item.q}
            answer={item.a}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </div>
  );
}
