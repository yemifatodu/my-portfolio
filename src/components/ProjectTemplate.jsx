import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft, Github, ExternalLink, FileText, Presentation,
  CheckCircle2, AlertTriangle, ArrowRight
} from "lucide-react";

// Maps icon name strings (used in project config files) to actual components,
// so config files can stay plain data without importing JSX.
const ICON_MAP = { ExternalLink, Github, FileText, Presentation };

/**
 * ProjectTemplate — shared shell for every flagship project page.
 * Each project supplies a config object (see churniq.config.js for the shape)
 * containing its own theme colors, copy, metrics, and image paths.
 *
 * Usage:
 *   import { churniqConfig } from "../data/projects/churniq.config";
 *   <ProjectTemplate project={churniqConfig} />
 */

function Section({ id, eyebrow, title, children, className = "", theme }) {
  return (
    <section id={id} className={`max-w-4xl mx-auto py-14 px-6 ${className}`}>
      {eyebrow && (
        <div className="text-xs font-bold tracking-[2px] uppercase mb-2" style={{ color: theme.accent }}>
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6"
            style={{ color: theme.primary, fontFamily: theme.displayFont }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

function StatCard({ value, label, theme }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
      <div className="w-6 h-[3px] rounded-full mb-3" style={{ background: theme.accent }} />
      <div className="text-2xl font-bold" style={{ color: theme.primary, fontFamily: theme.displayFont }}>{value}</div>
      <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function InsightCard({ title, children }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
      <div className="text-sm font-bold text-slate-800 mb-1">{title}</div>
      <p className="text-sm text-slate-600 leading-relaxed">{children}</p>
    </div>
  );
}

function ResourceCard({ icon, title, desc, href, theme }) {
  const Icon = ICON_MAP[icon] || FileText;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition group"
       onMouseEnter={(e) => e.currentTarget.style.borderColor = theme.accent}
       onMouseLeave={(e) => e.currentTarget.style.borderColor = "#e2e8f0"}>
      <div style={{ color: theme.accent }} className="mt-0.5"><Icon size={18} /></div>
      <div className="flex-1">
        <div className="font-bold text-sm text-slate-800">{title}</div>
        <div className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</div>
      </div>
      <ArrowRight size={16} className="text-slate-300 group-hover:translate-x-0.5 transition mt-1" style={{ color: theme.accent }} />
    </a>
  );
}

function ArchitectureDiagram({ steps, theme }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 overflow-x-auto">
      <svg viewBox={`0 0 ${steps.length * 132 + 30} 140`} className="w-full" style={{ minWidth: `${steps.length * 100}px` }}>
        {steps.map((label, i) => {
          const x = 30 + i * 132;
          const isLast = i === steps.length - 1;
          return (
            <g key={i}>
              <rect x={x} y="45" width="105" height="50" rx="8" fill={isLast ? theme.accent : theme.secondary} />
              {label.split("\n").map((line, li) => (
                <text key={li} x={x + 52.5} y={65 + li * 14} textAnchor="middle" fontSize="10.5" fontWeight="600"
                      fill={isLast ? theme.primary : "#F0F4FA"}>
                  {line}
                </text>
              ))}
              {i < steps.length - 1 && (
                <path d={`M ${x + 105} 70 L ${x + 127} 70`} stroke={theme.accent} strokeWidth="2" markerEnd="url(#arrow)" />
              )}
            </g>
          );
        })}
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill={theme.accent} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

export default function ProjectTemplate({ project }) {
  const reduceMotion = useReducedMotion();
  const { theme, meta, hero, metrics, businessProblem, role, architecture,
          dataset, eda, exploratory, correlation, segmentation, importance,
          performance, product, challenges, resources } = project;

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
      </Helmet>

      <div className="min-h-screen" style={{ background: theme.bg, color: "#334155", fontFamily: theme.bodyFont }}>

        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>

        {/* ── Hero ── */}
        <section className="max-w-4xl mx-auto px-6 pt-8 pb-6 text-center">
          <div className="inline-block text-xs font-bold tracking-[2px] uppercase mb-4" style={{ color: theme.accent }}>
            {hero.eyebrow}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
              style={{ color: theme.primary, fontFamily: theme.displayFont }}>
            {hero.name}
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            {hero.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {hero.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                 className="px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-sm"
                 style={l.primary
                   ? { color: theme.accent, background: theme.primary }
                   : { color: "#334155", background: "white", border: "1px solid #e2e8f0" }}>
                {l.label}
              </a>
            ))}
          </div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl"
          >
            <img src={hero.image} alt={`${hero.name} application screenshot`} className="w-full" />
          </motion.div>
        </section>

        {/* ── Key metrics ── */}
        <Section id="metrics" theme={theme}>
          <div className={`grid grid-cols-2 md:grid-cols-${metrics.length} gap-4`}>
            {metrics.map((m) => <StatCard key={m.label} {...m} theme={theme} />)}
          </div>
        </Section>

        {/* ── Business Problem ── */}
        <Section id="problem" eyebrow="01 · The Problem" title={businessProblem.title} theme={theme}>
          <p className="text-slate-600 leading-relaxed mb-6">{businessProblem.intro}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Before</div>
              <ul className="space-y-2 text-sm text-slate-600">
                {businessProblem.before.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
            <div className="rounded-xl p-5" style={{ background: theme.primary }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: theme.accent }}>With {hero.shortName}</div>
              <ul className="space-y-2 text-sm text-slate-200">
                {businessProblem.after.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── My Role ── */}
        <Section id="role" eyebrow="02 · My Role" title="What I built, end to end" theme={theme}>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
            {role.map((item) => (
              <div key={item} className="flex items-start gap-2 py-1.5 text-sm text-slate-600">
                <CheckCircle2 size={16} style={{ color: theme.accent }} className="mt-0.5 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </Section>

        {/* ── Architecture ── */}
        <Section id="architecture" eyebrow="03 · Architecture" title="Pipeline overview" theme={theme}>
          <ArchitectureDiagram steps={architecture} theme={theme} />
        </Section>

        {/* ── Dataset ── */}
        <Section id="dataset" eyebrow="04 · Dataset" title={dataset.title} theme={theme}>
          <div className={`grid grid-cols-2 md:grid-cols-${dataset.stats.length} gap-4 mb-8`}>
            {dataset.stats.map((s) => <StatCard key={s.label} {...s} theme={theme} />)}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{dataset.note}</p>
          {dataset.image && <img src={dataset.image} alt="Dataset quality check" className="w-full rounded-xl border border-slate-200 mt-6 shadow-sm" />}
        </Section>

        {/* ── EDA ── */}
        <Section id="eda" eyebrow="05 · Exploration" title="Feature distributions" theme={theme}>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">{eda.text}</p>
          <img src={eda.image} alt="Feature distribution histograms" className="w-full rounded-xl border border-slate-200 shadow-sm" />
        </Section>

        {/* ── Exploratory Analysis ── */}
        <Section id="exploratory" eyebrow="06 · Exploratory Analysis" title={exploratory.title} theme={theme}>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {exploratory.insights.map((i) => <InsightCard key={i.title} title={i.title}>{i.desc}</InsightCard>)}
          </div>
          <img src={exploratory.image} alt="Exploratory analysis chart" className="w-full rounded-xl border border-slate-200 shadow-sm" />
        </Section>

        {/* ── Correlation ── */}
        <Section id="correlation" eyebrow="07 · Correlation Analysis" title={correlation.title} theme={theme}>
          <img src={correlation.image} alt="Correlation heatmap" className="w-full rounded-xl border border-slate-200 shadow-sm mb-6" />
          <div className="rounded-xl p-6" style={{ background: theme.primary }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: theme.accent }}>Interesting Discovery</div>
            <div className="flex items-center gap-8 mb-3">
              <div>
                <div className="text-2xl font-bold text-white">{correlation.discovery.from}</div>
                <div className="text-xs text-slate-400">{correlation.discovery.fromLabel}</div>
              </div>
              <ArrowRight size={20} style={{ color: theme.accent }} />
              <div>
                <div className="text-2xl font-bold" style={{ color: theme.accent }}>{correlation.discovery.to}</div>
                <div className="text-xs text-slate-400">{correlation.discovery.toLabel}</div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{correlation.discovery.text}</p>
          </div>
        </Section>

        {/* ── Segmentation ── */}
        <Section id="segmentation" eyebrow="08 · Business Insights" title={segmentation.title} theme={theme}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {segmentation.clusters.map((c) => (
              <div key={c.label} className={`bg-white rounded-xl border p-4 text-center ${c.highlight ? "border-2" : "border-slate-200"}`}
                   style={c.highlight ? { borderColor: c.highlightColor } : {}}>
                <div className="text-2xl font-bold" style={{ color: c.highlight ? c.highlightColor : theme.primary }}>{c.value}</div>
                <div className="text-xs text-slate-500 mt-1">{c.label}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {segmentation.images.map((img) => (
              <img key={img} src={img} alt="Customer segmentation chart" className="w-full rounded-xl border border-slate-200 shadow-sm" />
            ))}
          </div>
          {segmentation.note && <p className="text-xs text-slate-500 mt-4">{segmentation.note}</p>}
        </Section>

        {/* ── Feature Importance ── */}
        <Section id="importance" eyebrow="09 · Model Explainability" title="What actually drives the prediction" theme={theme}>
          <img src={importance.image} alt="Feature importance bar chart" className="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
          <p className="text-sm text-slate-600 leading-relaxed">{importance.text}</p>
        </Section>

        {/* ── Model Performance ── */}
        <Section id="performance" eyebrow="10 · Model Performance" title="Honest evaluation" theme={theme}>
          <div className={`grid grid-cols-2 md:grid-cols-${performance.stats.length} gap-4 mb-6`}>
            {performance.stats.map((s) => <StatCard key={s.label} {...s} theme={theme} />)}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {performance.images.map((img) => (
              <img key={img} src={img} alt="Model performance chart" className="w-full rounded-xl border border-slate-200 shadow-sm" />
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3">
            <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed">{performance.caveat}</p>
          </div>
        </Section>

        {/* ── Interactive Product — the signature moment ── */}
        <Section id="product" eyebrow="11 · Interactive Product" title={product.title} theme={theme}>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">{product.intro}</p>
          <p className="text-xs font-semibold text-slate-400 mb-8 italic">
            Same model, different customer, different prediction — nothing here is hardcoded.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {product.cases.map((c) => (
              <div key={c.label}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: c.color }}>{c.label}</div>
                <img src={c.image} alt={`${c.label} verdict`} className="w-full rounded-xl border-2 shadow-sm" style={{ borderColor: c.color }} />
              </div>
            ))}
          </div>

          {product.insight && (
            <div className="bg-white rounded-xl border border-slate-200 p-5 mb-8">
              <p className="text-sm text-slate-600 leading-relaxed">{product.insight}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Input Form</div>
              <img src={product.formImage} alt="Customer profile input form" className="w-full rounded-xl border border-slate-200 shadow-sm" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Recommended Action</div>
              <img src={product.actionImage} alt="Recommended action plan" className="w-full rounded-xl border border-slate-200 shadow-sm" />
            </div>
          </div>
        </Section>

        {/* ── Challenges & Decisions ── */}
        <Section id="challenges" eyebrow="12 · Challenges & Decisions" title="Engineering trade-offs" theme={theme}>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead style={{ background: theme.primary }} className="text-white">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Challenge</th>
                  <th className="text-left px-5 py-3 font-semibold">Decision</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {challenges.map(([c, d]) => (
                  <tr key={c}>
                    <td className="px-5 py-3.5 text-slate-700">{c}</td>
                    <td className="px-5 py-3.5 text-slate-600">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── Resources ── */}
        <Section id="resources" eyebrow="13 · Resources" title="Go deeper" theme={theme}>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((r) => <ResourceCard key={r.title} {...r} theme={theme} />)}
          </div>
        </Section>

        {/* ── Contact ── */}
        <Section id="contact" className="text-center pb-24" theme={theme}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: theme.primary, fontFamily: theme.displayFont }}>
            Interested in building AI products?
          </h2>
          <p className="text-sm text-slate-600 mb-6">Let's talk.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:hello@yemifatodu.online"
               className="px-5 py-2.5 rounded-lg text-sm font-bold transition"
               style={{ color: theme.accent, background: theme.primary }}>
              Email Me
            </a>
            <Link to="/#projects" className="px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-400 transition">
              View More Projects
            </Link>
          </div>
        </Section>

      </div>
    </>
  );
}
