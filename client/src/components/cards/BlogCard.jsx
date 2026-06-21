import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import Badge from "../ui/Badge";
import { formatDate } from "../../utils/formatters";
import { useLocalize } from "../../i18n/localize";
import { cn } from "../../utils/cn";

/** Blog / resource article card. */
export default function BlogCard({ post: rawPost, className }) {
  const { t } = useTranslation();
  const localize = useLocalize();
  const post = localize(rawPost);
  const category = t(`taxonomy.${post.category}`, post.category);
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:glow-soft",
        className,
      )}
    >
      {/* Cover placeholder with cyber grid */}
      <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary/70">
            {category}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Badge tone="primary">{category}</Badge>
        <span className="text-xs text-muted-foreground">{post.readTime}</span>
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
        {post.excerpt}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span>
          {post.author} · {formatDate(post.date)}
        </span>
        <ArrowUpRight
          size={16}
          className="text-muted-foreground transition-colors group-hover:text-primary"
        />
      </div>
    </Link>
  );
}
