import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Plus } from "lucide-react";
import { articlesData } from "../data/articles";

export default function ArticlesPage() {
  const sorted = [...articlesData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sorted.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://yemifatodu.online/articles/${a.slug}`,
      name: a.title,
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <Helmet>
        <title>Articles | Opeyemi Fatodu -- Data Science & Analytics Writing</title>
        <meta name="description" content="Original articles on data science, machine learning, business intelligence, and career insight by Opeyemi Fatodu." />
        <link rel="canonical" href="https://yemifatodu.online/articles" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2 font-heading">Articles</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-2xl">
          Writing on data science, machine learning, and business intelligence -- project breakdowns alongside notes on how I think as an analyst.
        </p>

        <div className="divide-y divide-slate-200 dark:divide-slate-800 border-t border-b border-slate-200 dark:border-slate-800">
          {sorted.map((article) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="flex items-start justify-between gap-4 py-5 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-1.5">
                  <span className={`px-2 py-0.5 font-bold uppercase tracking-wider rounded-full ${
                    article.type === "insight"
                      ? "bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}>
                    {article.type === "insight" ? "Insight" : "Case Study"}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span>&middot;</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold tracking-tight group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-1">{article.excerpt}</p>
              </div>
              <Plus
                size={20}
                className="shrink-0 mt-1 text-slate-400 group-hover:text-teal-500 group-hover:rotate-90 transition-all duration-200"
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

