import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import BlogCard from "../components/cards/BlogCard";
import Tabs from "../components/ui/Tabs";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Reveal from "../components/shared/Reveal";
import { Link } from "react-router-dom";
import { blogPosts, blogCategories } from "../data/blogPosts";
import { formatDate } from "../utils/formatters";
import { useLocalize } from "../i18n/localize";

export default function BlogPage() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const [category, setCategory] = useState("All");
  const rawFeatured = blogPosts.find((p) => p.featured) || blogPosts[0];
  const featured = localize(rawFeatured);

  const filtered = useMemo(() => {
    const featuredSlug = (blogPosts.find((p) => p.featured) || blogPosts[0]).slug;
    return category === "All"
      ? blogPosts.filter((p) => p.slug !== featuredSlug)
      : blogPosts.filter((p) => p.category === category);
  }, [category]);

  return (
    <>
      <PageHero
        kicker={t("blogPage.kicker")}
        title={t("blogPage.title")}
        subtitle={t("blogPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("blogPage.breadcrumb") }]}
      />

      {/* Featured article */}
      <SectionWrapper>
        <Link
          to={`/blog/${featured.slug}`}
          className="group grid gap-8 overflow-hidden rounded-[var(--radius-xl)] border border-primary/20 bg-card transition-colors hover:border-primary/40 md:grid-cols-2"
        >
          <div className="relative min-h-[16rem] border-b border-border md:border-b-0 md:border-r">
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute inset-0 hero-glow" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-mono text-sm uppercase tracking-widest text-primary/70">
                {t(`taxonomy.${featured.category}`, featured.category)}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="flex items-center gap-2">
              <Badge tone="primary">{t("common.featured")}</Badge>
              <span className="text-xs text-muted-foreground">{featured.readTime}</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold leading-snug text-foreground">
              {featured.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground-muted">
              {featured.excerpt}
            </p>
            <p className="mt-5 text-sm text-muted-foreground">
              {featured.author} · {formatDate(featured.date)}
            </p>
          </div>
        </Link>
      </SectionWrapper>

      {/* Grid + filters */}
      <SectionWrapper surface>
        <SectionHeading kicker={t("blogPage.allKicker")} title={t("blogPage.allTitle")} />
        <div className="mt-8">
          <Tabs tabs={blogCategories} value={category} onChange={setCategory} />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.05}>
              <BlogCard post={post} className="h-full" />
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Newsletter */}
      <SectionWrapper>
        <div className="mx-auto max-w-2xl rounded-[var(--radius-xl)] border border-border bg-card p-8 text-center md:p-12">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-[var(--radius)] border border-primary/25 bg-primary/10 text-primary">
            <Mail size={22} />
          </span>
          <h3 className="mt-5 text-2xl font-bold text-foreground">
            {t("blogPage.newsletterTitle")}
          </h3>
          <p className="mt-2 text-sm text-foreground-muted">
            {t("blogPage.newsletterBody")}
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder={t("blogPage.emailPlaceholder")}
              className="h-11 flex-1 rounded-[var(--radius)] border border-border bg-input px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-2 focus:outline-ring"
            />
            <Button type="submit">{t("blogPage.subscribe")}</Button>
          </form>
        </div>
      </SectionWrapper>
    </>
  );
}
