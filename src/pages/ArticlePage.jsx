import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articlesData } from "../data/articles";
import { ArrowLeft } from "lucide-react";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/articles" replace />;

  const url = `https://yemifatodu.online/articles/${article.slug}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <Helmet>
        <title>{article.title} | Opeyemi Fatodu</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        {article.coverImage && <meta property="og:image" content={article.coverImage} />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            datePublished: article.date,
            author: { "@type": "Person", name: "Opeyemi Ebenezer Fatodu" },
            mainEntityOfPage: url
          })}
        </script>
      </Helmet>

      <main className="max-w-3xl mx-auto py-16 px-6">
        <Link to="/articles" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-500 transition mb-8">
          <ArrowLeft size={16} /> All articles
        </Link>

        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
          <span className={`px-2 py-0.5 font-bold uppercase tracking-wider rounded-full ${
            article.type === "insight"
              ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
              : "bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400"
          }`}>
            {article.type === "insight" ? "Insight" : "Case Study"}
          </span>
          <span>{new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          <span>&middot;</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">{article.title}</h1>

        {article.coverImage && (
          <img src={article.coverImage} alt={article.title} className="w-full rounded-2xl mb-10 border border-slate-200 dark:border-slate-800" />
        )}

        <article
          className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-teal-500"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
          {article.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 font-medium bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg">
              {t}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}

