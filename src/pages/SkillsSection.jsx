import { useState } from "react";
import { skillsData } from "../data/skills";
import {
  Code, Brain, Layers, Server, Database, Cloud,
  BarChart3, Plane, CreditCard, Cpu, Palette, TrendingUp,
  Rows3, List
} from "lucide-react";

const categoryIcons = {
  "Languages & Data": Code,
  "Machine Learning": Brain,
  "Web & Frontend": Layers,
  "Backend": Server,
  "Databases": Database,
  "Cloud & Dev Tools": Cloud,
  "BI & Analytics": BarChart3,
  "API Integrations": Plane,
  "Payments & Communications": CreditCard,
  "AI Development": Cpu,
  "AI Content & Media": Palette,
  "Business & Marketing": TrendingUp,
};

function LogoIcon({ item, size = "w-10 h-10", imgSize = "w-5 h-5" }) {
  return (
    <div className={`${size} rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-teal-400 transition-all duration-300 shrink-0`}>
      {item.icon ? (
        <img src={item.icon} alt={item.name} className={`${imgSize} object-contain`} loading="lazy" />
      ) : (
        <span className="text-[9px] font-bold text-slate-400">{item.name.slice(0, 2)}</span>
      )}
    </div>
  );
}

function MiniLogoTile({ item }) {
  const content = (
    <div className="group flex flex-col items-center justify-center gap-1 shrink-0 w-16 mx-2">
      <LogoIcon item={item} />
      <span className="text-[9px] text-slate-400 dark:text-slate-500 text-center leading-tight group-hover:text-teal-500 transition-colors truncate w-full">
        {item.name}
      </span>
    </div>
  );
  return item.url ? (
    <a href={item.url} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : (
    <div>{content}</div>
  );
}

function ListTile({ item }) {
  const content = (
    <div className="group flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-teal-400 transition-colors">
      <LogoIcon item={item} size="w-6 h-6" imgSize="w-3.5 h-3.5" />
      <span className="text-xs text-slate-600 dark:text-slate-300 group-hover:text-teal-500 transition-colors whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
  return item.url ? (
    <a href={item.url} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : (
    <div>{content}</div>
  );
}

function CategoryCard({ category, items, direction, speed, viewMode }) {
  const Icon = categoryIcons[category] || Code;
  const doubled = [...items, ...items];
  const directionClass = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-teal-100 dark:bg-teal-950/50 rounded-xl">
          <Icon size={20} className="text-teal-500" />
        </div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">{category}</h3>
      </div>

      {viewMode === "scroll" ? (
        <div
          className="marquee-row relative overflow-hidden py-1"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div
            className={`marquee-track ${directionClass}`}
            style={{ animationDuration: `${speed}s` }}
          >
            {doubled.map((item, i) => (
              <MiniLogoTile key={`${item.name}-${i}`} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <ListTile key={item.name} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SkillsSection() {
  const [viewMode, setViewMode] = useState("scroll");

  return (
    <section id="skills" className="max-w-5xl mx-auto py-16 px-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <span className="block text-xs font-bold tracking-widest uppercase text-teal-500 dark:text-teal-400 mb-2">
            Toolkit
          </span>
          <h2 className="text-3xl font-bold mb-2 tracking-tight font-heading">Technology Stack</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl">
            A comprehensive overview of my technical expertise across languages, frameworks, and tools.
          </p>
        </div>

        <div className="inline-flex items-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 p-1 shrink-0 self-start">
          <button
            onClick={() => setViewMode("scroll")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              viewMode === "scroll"
                ? "bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            }`}
          >
            <Rows3 size={14} /> Scroll
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              viewMode === "list"
                ? "bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            }`}
          >
            <List size={14} /> List
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData.map((group, idx) => (
          <CategoryCard
            key={group.category}
            category={group.category}
            items={group.items}
            direction={idx % 2 === 0 ? "left" : "right"}
            speed={22 + (group.items.length % 4) * 3}
            viewMode={viewMode}
          />
        ))}
      </div>
    </section>
  );
}
