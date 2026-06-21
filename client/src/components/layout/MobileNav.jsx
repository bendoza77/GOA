import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Logo from "../shared/Logo";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { navLinks, navCta } from "../../data/navigation";
import { useLocalize } from "../../i18n/localize";
import useScrollLock from "../../hooks/useScrollLock";
import { cn } from "../../utils/cn";

export default function MobileNav({ open, onClose }) {
  const { t } = useTranslation();
  const localize = useLocalize();
  const links = localize(navLinks);
  const cta = localize(navCta);
  useScrollLock(open);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-border bg-card"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo />
              <button
                type="button"
                aria-label={t("common.closeMenu")}
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-[var(--radius)] text-foreground-muted hover:text-foreground"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              {links.map((link) => (
                <div key={link.label} className="mb-6">
                  {link.type === "menu" ? (
                    <>
                      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                        {link.label}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        {link.children.map((child) => (
                          <DrawerLink
                            key={child.to}
                            to={child.to}
                            onClose={onClose}
                            icon={child.icon}
                          >
                            {child.label}
                          </DrawerLink>
                        ))}
                      </div>
                    </>
                  ) : (
                    <DrawerLink to={link.to} onClose={onClose} large>
                      {link.label}
                    </DrawerLink>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-border p-5">
              <Button to={cta.to} className="w-full" onClick={onClose}>
                {cta.label}
              </Button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

function DrawerLink({ to, children, onClose, icon, large }) {
  return (
    <NavLink
      to={to}
      onClick={onClose}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-[var(--radius)] px-2.5 py-2.5 transition-colors",
          large ? "text-base font-medium" : "text-sm",
          isActive
            ? "bg-primary/10 text-primary"
            : "text-foreground-muted hover:bg-muted hover:text-foreground",
        )
      }
    >
      {icon && <Icon name={icon} size={16} className="shrink-0 text-primary" />}
      {children}
    </NavLink>
  );
}
