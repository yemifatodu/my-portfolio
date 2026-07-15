import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft, Github, ExternalLink, FileText, Presentation,
  CheckCircle2, AlertTriangle, ArrowRight
} from "lucide-react";

const ICON_MAP = { ExternalLink, Github, FileText, Presentation };

/**
 * ProjectTemplate — shared shell for every flagship project page.
 *
 * ALL IMAGE FIELDS ARE OPTIONAL. Any section image (dataset.image, eda.image,
 * exploratory.image, correlation.image, segmentation.images, importance.image,
 * performance.images, product.formImage, product.actionImage) is simply
 * skipped if omitted from a project's config — no broken-image icon, no gap.
 * Projects that don't fit the ML-analysis shape can leave those fields out
 * entirely rather than pointing at a placeholder file that doesn't exist.
 */

function Section({ id, eyebrow, title, children, className = "", theme, colors }) {
  return (
    <section id={id} className={`max-w-4xl mx-auto py-14 px-6 ${className}`}>
      {eyebrow && (
        <div className="text-xs font-bold tracking-[2px] uppercase mb-2" style={{ color: theme.accent }}>
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6"
            style={{ color: colors.headingText, fontFamily: theme.displayFont }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

function StatCard({ value, label, theme, colors }) {
  return (
    <div className="rounded-xl p-5 shadow-sm" style={{ background: colors.surface, border: `1px solid ${colors.surfaceBorder}` }}>
      <div className="w-6 h-[3px] rounded-full mb-3" style={{ background: theme.accent }} />
      <div className="text-2xl font-bold" style={{ color: colors.headingText, fontFamily: theme.displayFont }}>{value}</div>
      <div className="text-[11px] font-semibold tracking-wider uppercase mt-1" style={{ color: colors.textMuted }}>{label}</div>
    </div>
  );
}

function InsightCard({ title, children, colors }) {
  return (
    <div className="rounded-xl p-5 shadow-sm" style={{ background: colors.surface, border: `1px solid ${colors.surfaceBorder}` }}>
      <div className="text-sm font-bold mb-1" style={{ color: colors.headingText }}>{title}</div>
      <p className="text-sm leading-relaxed" style={{ color: colors.textBody }}>{children}</p>
    </div>
  );
}

function ResourceCard({ icon, title, desc, href, theme, colors }) {
  const Icon = ICON_MAP[icon] || FileText;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="flex items-start gap-4 rounded-xl p-5 hover:shadow-md transition group"
       style={{ background: colors.surface, border: `1px solid ${colors.surfaceBorder}` }}
       onMouseEnter={(e) => e.currentTarget.style.borderColor = theme.accent}
       onMouseLeave={(e) => e.currentTarget.style.borderColor = colors.surfaceBorder}>
      <div style={{ color: theme.accent }} className="mt-0.5"><Icon size={18} /></div>
      <div className="flex-1">
        <div className="font-bold text-sm" style={{ color: colors.headingText }}>{title}</div>
        <div className="text-xs mt-1 leading-relaxed" style={{ color: colors.textMuted }}>{desc}</div>
      </div>
      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition mt-1" style={{ color: theme.accent }} />
    </a>
  );
}

function ArchitectureDiagram({ steps, theme, colors }) {
  return (
    <div className="rounded-xl p-6 overflow-x-auto" style={{ background: colors.surface, border: `1px solid ${colors.surfaceBorder}` }}>
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

  const colors = {
    surface: theme.surface || "#ffffff",
    surfaceBorder: theme.surfaceBorder || "#e2e8f0",
    textBody: theme.textBody || "#475569",
    textMuted: theme.textMuted || "#94a3b8",
    headingText: theme.headingText || theme.primary,
    panelText: theme.panelText || "#e2e8f0",
    panelSubtext: theme.panelSubtext || "#94a3b8",
  };

  const importanceEyebrow = importance.eyebrow || "09 · Model Explainability";
  const importanceHeading = importance.heading || "What actually drives the prediction";
  const performanceEyebrow = performance.eyebrow || "10 · Model Performance";
  const performanceHeading = performance.heading || "Honest evaluation";
  const productFormLabel = product.formLabel || "Input Form";
  const productFormAlt = product.formAlt || "Customer profile input form";
  const productActionLabel = product.actionLabel || "Recommended Action";
  const productActionAlt = product.actionAlt || "Recommended action plan";

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
      </Helmet>

      <div className="min-h-screen" style={{ background: theme.bg, color: colors.textBody, fontFamily: theme.bodyFont }}>

        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-medium transition"
                style={{ color: colors.textMuted }}>
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>

        {/* ── Hero ── */}
        <section className="max-w-4xl mx-auto px-6 pt-8 pb-6 text-center">
          <div className="inline-block text-xs font-bold tracking-[2px] uppercase mb-4" style={{ color: theme.accent }}>
            {hero.eyebrow}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
              style={{ color: colors.headingText, fontFamily: theme.displayFont }}>
            {hero.name}
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8" style={{ color: colors.textBody }}>
            {hero.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {hero.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                 className="px-5 py-2.5 rounded-lg text-sm font-bold transition shadow-sm"
                 style={l.primary
                   ? { color: theme.accent, background: theme.primary }
                   : { color: colors.headingText, background: colors.surface, border: `1px solid ${colors.surfaceBorder}` }}>
                {l.label}
              </a>
            ))}
          </div>
          {hero.image && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ border: `1px solid ${colors.surfaceBorder}` }}
            >
              <img src={hero.image} alt={`${hero.name} application screenshot`} className="w-full" />
            </motion.div>
          )}
        </section>

        {/* ── Key metrics ── */}
        <Section id="metrics" theme={theme} colors={colors}>
          <div className={`grid grid-cols-2 md:grid-cols-${metrics.length} gap-4`}>
            {metrics.map((m) => <StatCard key={m.label} {...m} theme={theme} colors={colors} />)}
          </div>
        </Section>

        {/* ── Business Problem ── */}
        <Section id="problem" eyebrow="01 · The Problem" title={businessProblem.title} theme={theme} colors={colors}>
          <p className="leading-relaxed mb-6" style={{ color: colors.textBody }}>{businessProblem.intro}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl p-5" style={{ background: colors.surface, border: `1px solid ${colors.surfaceBorder}` }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: colors.textMuted }}>Before</div>
              <ul className="space-y-2 text-sm" style={{ color: colors.textBody }}>
                {businessProblem.before.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
            <div className="rounded-xl p-5" style={{ background: theme.primary }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: theme.accent }}>With {hero.shortName}</div>
              <ul className="space-y-2 text-sm" style={{ color: colors.panelText }}>
                {businessProblem.after.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── My Role ── */}
        <Section id="role" eyebrow="02 · My Role" title="What I built, end to end" theme={theme} colors={colors}>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
            {role.map((item) => (
              <div key={item} className="flex items-start gap-2 py-1.5 text-sm" style={{ color: colors.textBody }}>
                <CheckCircle2 size={16} style={{ color: theme.accent }} className="mt-0.5 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </Section>

        {/* ── Architecture ── */}
        <Section id="architecture" eyebrow="03 · Architecture" title="Pipeline overview" theme={theme} colors={colors}>
          <ArchitectureDiagram steps={architecture} theme={theme} colors={colors} />
        </Section>

        {/* ── Dataset ── */}
        <Section id="dataset" eyebrow="04 · Dataset" title={dataset.title} theme={theme} colors={colors}>
          <div className={`grid grid-cols-2 md:grid-cols-${dataset.stats.length} gap-4 mb-8`}>
            {dataset.stats.map((s) => <StatCard key={s.label} {...s} theme={theme} colors={colors} />)}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: colors.textBody }}>{dataset.note}</p>
          {dataset.image && (
            <img src={dataset.image} alt="Dataset quality check" className="w-full rounded-xl mt-6 shadow-sm"
                 style={{ border: `1px solid ${colors.surfaceBorder}` }} />
          )}
        </Section>

        {/* ── EDA — entire section skipped if no eda object supplied ── */}
        {eda && (
          <Section id="eda" eyebrow="05 · Exploration" title="Feature distributions" theme={theme} colors={colors}>
            {eda.text && <p className="text-sm leading-relaxed mb-6" style={{ color: colors.textBody }}>{eda.text}</p>}
            {eda.image && (
              <img src={eda.image} alt="Feature distribution histograms" className="w-full rounded-xl shadow-sm"
                   style={{ border: `1px solid ${colors.surfaceBorder}` }} />
            )}
          </Section>
        )}

        {/* ── Exploratory Analysis ── */}
        <Section id="exploratory" eyebrow="06 · Exploratory Analysis" title={exploratory.title} theme={theme} colors={colors}>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {exploratory.insights.map((i) => <InsightCard key={i.title} title={i.title} colors={colors}>{i.desc}</InsightCard>)}
          </div>
          {exploratory.image && (
            <img src={exploratory.image} alt="Exploratory analysis chart" className="w-full rounded-xl shadow-sm"
                 style={{ border: `1px solid ${colors.surfaceBorder}` }} />
          )}
        </Section>

        {/* ── Correlation ── */}
        <Section id="correlation" eyebrow="07 · Correlation Analysis" title={correlation.title} theme={theme} colors={colors}>
          {correlation.image && (
            <img src={correlation.image} alt="Correlation heatmap" className="w-full rounded-xl shadow-sm mb-6"
                 style={{ border: `1px solid ${colors.surfaceBorder}` }} />
          )}
          <div className="rounded-xl p-6" style={{ background: theme.primary }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: theme.accent }}>Interesting Discovery</div>
            <div className="flex items-center gap-8 mb-3">
              <div>
                <div className="text-2xl font-bold" style={{ color: colors.panelText }}>{correlation.discovery.from}</div>
                <div className="text-xs" style={{ color: colors.panelSubtext }}>{correlation.discovery.fromLabel}</div>
              </div>
              <ArrowRight size={20} style={{ color: theme.accent }} />
              <div>
                <div className="text-2xl font-bold" style={{ color: theme.accent }}>{correlation.discovery.to}</div>
                <div className="text-xs" style={{ color: colors.panelSubtext }}>{correlation.discovery.toLabel}</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: colors.panelText }}>{correlation.discovery.text}</p>
          </div>
        </Section>

        {/* ── Segmentation ── */}
        <Section id="segmentation" eyebrow="08 · Business Insights" title={segmentation.title} theme={theme} colors={colors}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {segmentation.clusters.map((c) => (
              <div key={c.label} className={`rounded-xl p-4 text-center ${c.highlight ? "border-2" : ""}`}
                   style={{
                     background: colors.surface,
                     border: c.highlight ? `2px solid ${c.highlightColor}` : `1px solid ${colors.surfaceBorder}`,
                   }}>
                <div className="text-2xl font-bold" style={{ color: c.highlight ? c.highlightColor : colors.headingText }}>{c.value}</div>
                <div className="text-xs mt-1" style={{ color: colors.textMuted }}>{c.label}</div>
              </div>
            ))}
          </div>
          {segmentation.images && segmentation.images.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4">
              {segmentation.images.map((img) => (
                <img key={img} src={img} alt="Segmentation chart" className="w-full rounded-xl shadow-sm"
                     style={{ border: `1px solid ${colors.surfaceBorder}` }} />
              ))}
            </div>
          )}
          {segmentation.note && <p className="text-xs mt-4" style={{ color: colors.textMuted }}>{segmentation.note}</p>}
        </Section>

        {/* ── Feature Importance / Signal Analysis ── */}
        <Section id="importance" eyebrow={importanceEyebrow} title={importanceHeading} theme={theme} colors={colors}>
          {importance.image && (
            <img src={importance.image} alt="Importance chart" className="w-full rounded-xl shadow-sm mb-4"
                 style={{ border: `1px solid ${colors.surfaceBorder}` }} />
          )}
          <p className="text-sm leading-relaxed" style={{ color: colors.textBody }}>{importance.text}</p>
        </Section>

        {/* ── Performance ── */}
        <Section id="performance" eyebrow={performanceEyebrow} title={performanceHeading} theme={theme} colors={colors}>
          <div className={`grid grid-cols-2 md:grid-cols-${performance.stats.length} gap-4 mb-6`}>
            {performance.stats.map((s) => <StatCard key={s.label} {...s} theme={theme} colors={colors} />)}
          </div>
          {performance.images && performance.images.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {performance.images.map((img) => (
                <img key={img} src={img} alt="Performance chart" className="w-full rounded-xl shadow-sm"
                     style={{ border: `1px solid ${colors.surfaceBorder}` }} />
              ))}
            </div>
          )}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3">
            <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed">{performance.caveat}</p>
          </div>
        </Section>

        {/* ── Interactive Product — the signature moment ── */}
        <Section id="product" eyebrow="11 · Interactive Product" title={product.title} theme={theme} colors={colors}>
          <p className="text-sm leading-relaxed mb-2" style={{ color: colors.textBody }}>{product.intro}</p>
          {product.subtitle && (
            <p className="text-xs font-semibold mb-8 italic" style={{ color: colors.textMuted }}>
              {product.subtitle}
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {product.cases.map((c) => (
              <div key={c.label}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: c.color }}>{c.label}</div>
                {c.image && (
                  <img src={c.image} alt={c.label} className="w-full rounded-xl border-2 shadow-sm" style={{ borderColor: c.color }} />
                )}
              </div>
            ))}
          </div>

          {product.insight && (
            <div className="rounded-xl p-5 mb-8" style={{ background: colors.surface, border: `1px solid ${colors.surfaceBorder}` }}>
              <p className="text-sm leading-relaxed" style={{ color: colors.textBody }}>{product.insight}</p>
            </div>
          )}

          {(product.formImage || product.actionImage) && (
            <div className="grid md:grid-cols-2 gap-6">
              {product.formImage && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: colors.textMuted }}>{productFormLabel}</div>
                  <img src={product.formImage} alt={productFormAlt} className="w-full rounded-xl shadow-sm"
                       style={{ border: `1px solid ${colors.surfaceBorder}` }} />
                </div>
              )}
              {product.actionImage && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: colors.textMuted }}>{productActionLabel}</div>
                  <img src={product.actionImage} alt={productActionAlt} className="w-full rounded-xl shadow-sm"
                       style={{ border: `1px solid ${colors.surfaceBorder}` }} />
                </div>
              )}
            </div>
          )}
        </Section>

        {/* ── Challenges & Decisions ── */}
        <Section id="challenges" eyebrow="12 · Challenges & Decisions" title="Engineering trade-offs" theme={theme} colors={colors}>
          <div className="overflow-hidden rounded-xl" style={{ border: `1px solid ${colors.surfaceBorder}` }}>
            <table className="w-full text-sm">
              <thead style={{ background: theme.primary }} className="text-white">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Challenge</th>
                  <th className="text-left px-5 py-3 font-semibold">Decision</th>
                </tr>
              </thead>
              <tbody style={{ background: colors.surface }}>
                {challenges.map(([c, d]) => (
                  <tr key={c} style={{ borderTop: `1px solid ${colors.surfaceBorder}` }}>
                    <td className="px-5 py-3.5" style={{ color: colors.headingText }}>{c}</td>
                    <td className="px-5 py-3.5" style={{ color: colors.textBody }}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── Resources ── */}
        <Section id="resources" eyebrow="13 · Resources" title="Go deeper" theme={theme} colors={colors}>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((r) => <ResourceCard key={r.title} {...r} theme={theme} colors={colors} />)}
          </div>
        </Section>

        {/* ── Contact ── */}
        <Section id="contact" className="text-center pb-24" theme={theme} colors={colors}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: colors.headingText, fontFamily: theme.displayFont }}>
            Interested in building AI products?
          </h2>
          <p className="text-sm mb-6" style={{ color: colors.textBody }}>Let's talk.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:hello@yemifatodu.online"
               className="px-5 py-2.5 rounded-lg text-sm font-bold transition"
               style={{ color: theme.accent, background: theme.primary }}>
              Email Me
            </a>
            <Link to="/#projects" className="px-5 py-2.5 rounded-lg text-sm font-semibold transition"
                  style={{ color: colors.headingText, background: colors.surface, border: `1px solid ${colors.surfaceBorder}` }}>
              View More Projects
            </Link>
          </div>
        </Section>

      </div>
    </>
  );
}
