import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDown, Menu } from "lucide-react";
import Logo from "../shared/Logo";
import ThemeToggle from "../shared/ThemeToggle";
import LanguageToggle from "../shared/LanguageToggle";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import MobileNav from "./MobileNav";
import { navLinks, navCta } from "../../data/navigation";
import { useLocalize } from "../../i18n/localize";
import { cn } from "../../utils/cn";

export default function Navbar() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const links = localize(navLinks);
  const cta = localize(navCta);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open dropdown when the route changes (render-time reset, no effect).
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setOpenMenu(null);
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="container-page flex h-16 items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 xl:flex">
            {links.map((link) =>
              link.type === "menu" ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 whitespace-nowrap rounded-[var(--radius)] px-3 py-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform",
                        openMenu === link.label && "rotate-180",
                      )}
                    />
                  </button>

                  {openMenu === link.label && (
                    <MegaMenu link={link} />
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "whitespace-nowrap rounded-[var(--radius)] px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-foreground-muted hover:text-foreground",
                      )
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative">
                        {link.label}
                        {isActive && (
                          <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-primary" />
                        )}
                      </span>
                    )}
                  </NavLink>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageToggle className="hidden sm:inline-flex" />
            <ThemeToggle />
            <Button to={cta.to} size="sm" className="hidden sm:inline-flex">
              {cta.label}
            </Button>
            <button
              type="button"
              aria-label={t("common.openMenu")}
              onClick={() => setMobileOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-[var(--radius)] text-foreground xl:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/** Desktop dropdown / mega-menu panel. */
function MegaMenu({ link }) {
  const isPrograms = link.children.length > 4;
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <div
        className={cn(
          "rounded-[var(--radius-lg)] border border-border bg-card/95 p-2 shadow-card backdrop-blur-md",
          isPrograms ? "w-[34rem]" : "w-64",
        )}
      >
        <div className={cn("grid gap-1", isPrograms && "grid-cols-2")}>
          {link.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              className="group flex items-start gap-3 rounded-[var(--radius)] p-2.5 transition-colors hover:bg-muted"
            >
              {child.icon && (
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-[var(--radius-sm)] border border-primary/25 bg-primary/10 text-primary">
                  <Icon name={child.icon} size={16} strokeWidth={1.75} />
                </span>
              )}
              <span className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {child.label}
                </span>
                {child.summary && (
                  <span className="text-xs text-muted-foreground">
                    {child.summary}
                  </span>
                )}
              </span>
            </NavLink>
          ))}
        </div>
        {link.viewAll && (
          <NavLink
            to={link.viewAll.to}
            className="mt-1 flex items-center justify-center rounded-[var(--radius)] border border-border-strong px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            {link.viewAll.label}
          </NavLink>
        )}
      </div>
    </div>
  );
}
