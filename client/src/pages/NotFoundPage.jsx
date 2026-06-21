import { useTranslation } from "react-i18next";
import { Home, Compass } from "lucide-react";
import Button from "../components/ui/Button";
import GridBackground from "../components/shared/GridBackground";
import GlowBackground from "../components/shared/GlowBackground";

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden px-5 py-32">
      <GridBackground />
      <GlowBackground />
      <div className="relative text-center">
        <div className="font-mono text-7xl font-bold text-primary md:text-9xl">404</div>

        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-[var(--radius)] border border-border bg-card px-4 py-2 font-mono text-sm text-foreground-muted">
          <span className="text-destructive">{">"}</span>
          <span>{t("notFound.route")}</span>
          <span className="inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
        </div>

        <h1 className="mt-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {t("notFound.title")}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-foreground-muted">
          {t("notFound.body")}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/" size="lg">
            <Home size={18} />
            {t("notFound.backHome")}
          </Button>
          <Button to="/programs" size="lg" variant="secondary">
            <Compass size={18} />
            {t("notFound.explorePrograms")}
          </Button>
        </div>
      </div>
    </section>
  );
}
