import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import Badge from "../components/ui/Badge";
import BlogCard from "../components/cards/BlogCard";
import CTASection from "../components/shared/CTASection";
import { getBlogPostBySlug, blogPosts } from "../data/blogPosts";
import { formatDate } from "../utils/formatters";
import { useLocalize } from "../i18n/localize";
import NotFoundPage from "./NotFoundPage";

export default function BlogPostPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const localize = useLocalize();
  const rawPost = getBlogPostBySlug(slug);

  if (!rawPost) return <NotFoundPage />;

  const post = localize(rawPost);
  const category = t(`taxonomy.${rawPost.category}`, rawPost.category);
  const related = blogPosts.filter((p) => p.slug !== rawPost.slug).slice(0, 3);

  return (
    <>
      <PageHero
        kicker={category}
        title={post.title}
        breadcrumb={[
          { label: t("common.home"), to: "/" },
          { label: t("blogPost.breadcrumb"), to: "/blog" },
          { label: category },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3 text-sm text-foreground-muted">
          <div className="grid h-9 w-9 place-items-center rounded-full border border-primary/30 bg-primary/10 font-mono text-xs font-bold text-primary">
            {post.author.slice(0, 2).toUpperCase()}
          </div>
          <span className="text-foreground">{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} {t("common.read")}</span>
        </div>
      </PageHero>

      {/* Article body */}
      <SectionWrapper innerClassName="max-w-3xl">
        {/* Cover */}
        <div className="relative mb-10 aspect-[16/7] overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 grid place-items-center">
            <Badge tone="primary">{category}</Badge>
          </div>
        </div>

        <article className="flex flex-col gap-5">
          <p className="text-lg leading-relaxed text-foreground">{post.excerpt}</p>
          {post.content.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground-muted">
              {para}
            </p>
          ))}
        </article>

        {/* Author card */}
        <div className="mt-10 flex items-center gap-4 rounded-[var(--radius-lg)] border border-border bg-card p-6">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 font-mono text-sm font-bold text-primary">
            {post.author.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">{post.author}</div>
            <div className="text-xs text-muted-foreground">
              {t("blogPost.authorRole")}
            </div>
          </div>
        </div>

        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-strong"
        >
          <ArrowLeft size={16} />
          {t("blogPost.backToArticles")}
        </Link>
      </SectionWrapper>

      {/* Related */}
      <SectionWrapper surface>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {t("blogPost.relatedReading")}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((p) => (
            <BlogCard key={p.slug} post={p} className="h-full" />
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
