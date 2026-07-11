// arbitrageiq.config.js
// All copy, metrics, images, and theme for the ArbitrageIQ project page.
// Rendered by <ProjectTemplate project={arbitrageiqConfig} />
//
// NOTE: All figures below are verified against src/config.py, src/arbitrage.py,
// scanner.py, and the live SQLite database as of the last audit. Exchange-frequency
// and hit-rate statistics are intentionally omitted — current sample size (N=15
// logged opportunities) is too small to report responsibly. Revisit once 100+
// opportunities have been logged.

const IMG = "/projects/arbitrageiq"; // put all images + PDFs in /public/projects/arbitrageiq/

export const arbitrageiqConfig = {
  theme: {
    primary: "#0B0E11",
    secondary: "#525761",
    accent: "#f4c50a",
    bg: "#043361",
    displayFont: "'IBM Plex Sans', sans-serif",
    bodyFont: "'IBM Plex Mono', monospace",
  },

  meta: {
    title: "ArbitrageIQ — Real-Time Crypto Arbitrage Trading Terminal | Yemi Fatodu",
    description: "A deployed multi-exchange arbitrage scanner monitoring 5 CEXs, 30 symbols — live Streamlit terminal, Telegram alerts, SQLite persistence, and production-grade async architecture.",
    canonical: "https://yemifatodu.online/projects/arbitrageiq",
  },

  hero: {
    eyebrow: "Data Engineering · Trading Systems · Real-Time Analytics",
    name: "⚡ ArbitrageIQ",
    shortName: "ArbitrageIQ",
    tagline: "A production-grade crypto arbitrage terminal — scanning 5 exchanges, 30 symbols, delivering real-time opportunities with net-profit-after-fees calculations.",
    image: `${IMG}/hero-dashboard.png`,
    links: [
      { label: "Live Demo", href: "https://yemifatodu-arbitrageiq.streamlit.app", primary: true },
      { label: "GitHub", href: "https://github.com/yemifatodu/arbitrageiq" },
      { label: "Technical Report", href: `${IMG}/ArbitrageIQ_Technical_Report.pdf` },
      { label: "Presentation", href: `${IMG}/ArbitrageIQ_Presentation.pdf` },
    ],
  },

  metrics: [
    { value: "5", label: "Exchanges" },
    { value: "30", label: "Symbols" },
    { value: "150", label: "Requests / Scan" },
    { value: "0.005%", label: "Min Threshold" },
    { value: "24/7", label: "Background Scanner" },
  ],

  businessProblem: {
    title: "Crypto arbitrage opportunities vanish in seconds",
    intro: "Price discrepancies between exchanges create risk-free profit opportunities, but they typically last less than 30 seconds. Manual monitoring is impossible — traders need automated detection that accounts for trading fees, withdrawal fees, and liquidity constraints in real-time.",
    before: [
      "Manual monitoring across 5+ exchanges",
      "No fee-adjusted profit calculation",
      "Missing opportunities in milliseconds",
      "No historical tracking or analytics",
    ],
    after: [
      "Automated async scanning every 10 minutes",
      "Net profit after all fees (trading + withdrawal)",
      "Real-time Telegram alerts to your phone",
      "SQLite persistence + analytics dashboard",
    ],
  },

  role: [
    "Designed the async multi-exchange price fetching architecture",
    "Built the ArbitrageDetector with fee-adjusted profit calculations",
    "Implemented Nigeria-accessible exchange filtering (geo-blocking workarounds)",
    "Created the decoupled background scanner (scanner.py)",
    "Built the Binance-inspired Streamlit trading terminal UI",
    "Integrated Telegram Bot API for instant mobile alerts",
    "Designed SQLite schema with indexed historical tracking",
    "Audited the fee-calculation pipeline and corrected a silent exchange-coverage gap",
    "Wrote comprehensive documentation and technical report",
  ],

  architecture: ["5 Exchanges\n(CCXT)", "Async Price\nFetching", "Arbitrage\nDetection", "Fee Calculation\n(Trading + Withdrawal)", "SQLite\nPersistence", "Telegram\nAlerts", "Streamlit\nTerminal", "User\nDashboard"],

  dataset: {
    title: "Live market data from 5 major CEXs",
    stats: [
      { value: "5", label: "Exchanges" },
      { value: "30", label: "Symbols" },
      { value: "150", label: "Concurrent Requests" },
      { value: "$100k", label: "Min Volume Filter" },
    ],
    note: "Data sourced via CCXT library from Binance, KuCoin, Bybit, OKX, and Gate.io. Filtered to a confirmed-tradeable symbol whitelist to avoid bad pair errors. Minimum volume threshold of $100k USD ensures liquidity and prevents slippage on execution.",
    image: `${IMG}/exchange-coverage.png`,
  },

  eda: {
    text: "Initial analysis revealed significant geographic constraints — Kraken and Coinbase block Nigerian IPs, requiring exchange filtering. The system was designed around this constraint from the start rather than treating it as an edge case.",
    image: `${IMG}/volume-distribution.png`,
  },

  exploratory: {
    title: "Where arbitrage opportunities actually exist",
    insights: [
      { title: "Spread vs. Net Profit", desc: "Raw price spread and true net profit are two different numbers. The system calculates spread, then subtracts buy fee, sell fee, and withdrawal fee before deciding an opportunity is real." },
      { title: "Fee Impact", desc: "A 0.25% gross spread can shrink substantially once trading fees (both legs) and a withdrawal fee are applied — this is the core reason naive 'arbitrage bots' overstate profitability." },
      { title: "Exchange Coverage Gap (Caught & Fixed)", desc: "An audit found OKX and Gate were missing from the fee lookup table, silently defaulting to Binance's fee rate. Corrected with researched placeholder rates, flagged for account-tier verification." },
      { title: "Sample Size", desc: "Exchange-frequency patterns (which exchange tends to be cheapest) are not yet reported — current data (15 logged opportunities) is too small to support a reliable claim." },
    ],
    image: `${IMG}/spread-analysis.png`,
  },

  correlation: {
    title: "Where naive arbitrage fails",
    image: `${IMG}/fee-impact-chart.png`,
    discovery: {
      from: "0.25%",
      fromLabel: "Gross spread (before fees)",
      to: "0.10%",
      toLabel: "Net profit (after fees, illustrative example)",
      text: "A seemingly profitable 0.25% spread can shrink substantially once trading fees (buy + sell) and a withdrawal fee are applied. This is why most 'arbitrage bots' overstate profitability — they report theoretical spread, not what a trader would actually net. ArbitrageIQ calculates true net profit for every opportunity it logs.",
    },
  },

  segmentation: {
    title: "Opportunity classification by profit tier (early data)",
    clusters: [
      { value: "High (≥0.5%)", label: "20% of logged opportunities", highlight: true, highlightColor: "#0ECB81" },
      { value: "Medium (0.1–0.5%)", label: "27% of logged opportunities" },
      { value: "Low (<0.1%)", label: "53% of logged opportunities" },
    ],
    images: [`${IMG}/profit-distribution.png`, `${IMG}/opportunity-timeline.png`],
    note: "Based on the first 15 logged opportunities (~15-hour observation window). This is an early snapshot, not a statistically stable pattern — will be updated as more history accumulates.",
  },

  importance: {
    image: `${IMG}/exchange-frequency.png`,
    text: "Early data shows opportunities distributed across all five exchanges on both the buy and sell side, without a single exchange yet showing a statistically reliable dominant pattern. This section will be substantively expanded once a larger dataset (target: 100+ logged opportunities) is available — publishing a specific percentage before then would overstate what a 15-opportunity sample can actually support.",
  },

  performance: {
    stats: [
      { value: "150", label: "Concurrent Requests / Scan" },
      { value: "10 min", label: "Default Scan Interval" },
      { value: "$100k", label: "Min Volume Filter" },
      { value: "24/7", label: "Scanner Uptime Target" },
    ],
    images: [`${IMG}/scan-performance.png`, `${IMG}/latency-chart.png`],
    caveat: "Honest caveat: while the system detects opportunities in real-time, actual execution requires manual intervention or a separate trading bot. The current version is a decision-support tool, not an automated trading system. Latency from detection to execution remains the primary bottleneck for profitability, and scan-timing metrics (e.g. average scan duration) are not yet instrumented for reporting — a stated figure would not be verifiable against real logs today.",
  },

  product: {
    title: "See it in action — live terminal interface",
    intro: "The Streamlit dashboard provides real-time visibility into market inefficiencies — updated every 60 seconds with auto-refresh.",
    cases: [
      { label: "📊 Dashboard — System overview with live stats", image: `${IMG}/dashboard-view.png`, color: "#F0B90B" },
      { label: "⚡ Opportunities — Filterable 24h history", image: `${IMG}/opportunities-table.png`, color: "#0ECB81" },
    ],
    insight: "The terminal shows key metrics at a glance: active exchanges (5 online), symbols tracked (30), last 24h opportunities, best profit found, and average profit. The watchlist allows dynamic symbol selection, and the Telegram CTA drives mobile alert signups.",
    formImage: `${IMG}/control-panel.png`,
    actionImage: `${IMG}/telegram-alert.png`,
  },

  challenges: [
    ["Geographic restrictions (Nigeria)", "Filtered to Nigeria-accessible exchanges only (removed Kraken, Coinbase, Bitfinex)"],
    ["Fee complexity", "Implemented triple-fee calculation: buy fee + sell fee + withdrawal fee"],
    ["Silent fee-coverage gap", "Audit found OKX and Gate missing from the fee table, silently defaulting to Binance's rate — corrected with researched placeholder rates pending account-tier verification"],
    ["API rate limits", "Used CCXT's built-in rate limiting + async batching to avoid bans"],
    ["Low liquidity pairs", "Added $100k minimum volume filter to prevent slippage"],
    ["False positives", "Implemented a confirmed-tradeable symbol whitelist to avoid bad pair errors"],
  ],

  resources: [
    { icon: "ExternalLink", title: "Live Demo", desc: "Access the live arbitrage terminal — updated every 60 seconds.", href: "https://yemifatodu-arbitrageiq.streamlit.app" },
    { icon: "Github", title: "GitHub Repository", desc: "Full source — scanner.py, app.py, and async architecture.", href: "https://github.com/yemifatodu/arbitrageiq" },
    { icon: "FileText", title: "Technical Report (PDF)", desc: "Complete system architecture, fee calculations, and performance analysis.", href: `${IMG}/ArbitrageIQ_Technical_Report.pdf` },
    { icon: "Presentation", title: "Presentation", desc: "Stakeholder overview of the trading system and business value.", href: `${IMG}/ArbitrageIQ_Presentation.pdf` },
  ],
};