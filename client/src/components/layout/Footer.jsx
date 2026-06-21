import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../shared/Logo";
import Icon from "../ui/Icon";
import {
  footerGroups,
  legalLinks,
  socialLinks,
} from "../../data/navigation";
import { useLocalize } from "../../i18n/localize";

export default function Footer() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const groups = localize(footerGroups);
  const legal = localize(legalLinks);
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
              {t("footer.tagline")}
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-[var(--radius)] border border-border text-foreground-muted transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-foreground-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} Goa-Oriented Academy. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-5">
            {legal.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <span className="font-mono text-xs text-primary/70">
              {"> built_by_students"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
