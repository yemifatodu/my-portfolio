import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articlesData } from "../data/articles";

export default function ArticlesPage() {
  const sorted = [...articlesData].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <Helmet>
        <title>Articles | Opeyemi Fatodu -- Data Science & Analytics Writing</title>
        <meta name="description" content="Original articles on data science, machine learning, business intelligence, and career insight by Opeyemi Fatodu." />
        <link rel="canonical" href="https://yemifatodu.online/articles" />
      </Helmet>

      <main className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Articles</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-2xl">
          Writing on data science, machine learning, and business intelligence -- project breakdowns alongside notes on how I think as an analyst.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {sorted.map((article) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="group block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-lg transition-all duration-300"
            >
              {article.coverImage && (
                <div className="aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
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
                <h2 className="text-lg font-bold tracking-tight mb-2 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{article.excerpt}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {article.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 font-medium bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

