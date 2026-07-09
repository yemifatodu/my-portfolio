// arbitrageiq.config.js
// All copy, metrics, images, and theme for the ArbitrageIQ project page.
// Rendered by <ProjectTemplate project={arbitrageiqConfig} />

const IMG = "/projects/arbitrageiq"; // put all images + PDFs in /public/projects/arbitrageiq/

export const arbitrageiqConfig = {
  theme: {
    primary: "#0B0E11",
    secondary: "#13161C",
    accent: "#F0B90B",
    bg: "#0B0E11",
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
    { value: "150ms", label: "Avg Scan Time" },
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
      "Automated async scanning every 5 minutes",
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
    note: "Data sourced via CCXT library from Binance, KuCoin, Bybit, OKX, and Gate.io. Filtered to SAFE_SYMBOLS whitelist to avoid bad pair errors. Minimum volume threshold of $100k USD ensures liquidity and prevents slippage on execution.",
    image: `${IMG}/exchange-coverage.png`,
  },

  eda: {
    text: "Initial analysis revealed significant geographic constraints — Kraken and Coinbase block Nigerian IPs, requiring exchange filtering. Volume distribution is highly skewed: BTC/ETH account for 60% of total volume, while mid-cap coins (INJ, ARB, NEAR) show wider spreads but lower liquidity.",
    image: `${IMG}/volume-distribution.png`,
  },

  exploratory: {
    title: "Where arbitrage opportunities actually exist",
    insights: [
      { title: "Spread Distribution", desc: "Most spreads cluster at 0.01-0.05% — below profitable threshold after fees. Only 2-3% of scans find opportunities above 0.15% net profit." },
      { title: "Fee Impact", desc: "Trading fees (0.1%) + withdrawal fees (0.05%) = 0.15% minimum breakeven. A 0.2% gross spread becomes just 0.05% net profit." },
      { title: "Exchange Patterns", desc: "Binance typically has the lowest prices (best buy), while KuCoin/Gate.io often show higher prices (best sell) — but this reverses during high volatility." },
      { title: "Time-of-Day Effect", desc: "Opportunities cluster during Asian trading hours (2am-8am UTC) when liquidity fragments across exchanges." },
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
      toLabel: "Net profit (after fees)",
      text: "A seemingly profitable 0.25% spread becomes just 0.10% after accounting for trading fees (0.1% × 2) and withdrawal fees (0.05%). This is why most 'arbitrage bots' fail — they ignore withdrawal costs. ArbitrageIQ calculates true net profit, not theoretical spreads.",
    },
  },

  segmentation: {
    title: "Opportunity classification by profit tier",
    clusters: [
      { value: "High (>0.5%)", label: "Rare but executable", highlight: true, highlightColor: "#0ECB81" },
      { value: "Medium (0.1-0.5%)", label: "Requires fast execution" },
      { value: "Low (<0.1%)", label: "Below practical threshold" },
      { value: "Negative", label: "Loss after fees", highlight: true, highlightColor: "#F6465D" },
    ],
    images: [`${IMG}/profit-distribution.png`, `${IMG}/opportunity-timeline.png`],
    note: "Only ~2% of detected opportunities exceed 0.5% net profit. The system filters these aggressively to avoid false positives and focus on executable trades.",
  },

  importance: {
    image: `${IMG}/exchange-frequency.png`,
    text: "Binance appears as the 'buy' exchange in 68% of opportunities (consistently lowest prices), while KuCoin and Gate.io dominate the 'sell' side (higher prices). This pattern holds across 80% of all detected arbitrage routes.",
  },

  performance: {
    stats: [
      { value: "150ms", label: "Avg Scan Time" },
      { value: "0.15%", label: "Min Breakeven" },
      { value: "2-3%", label: "Hit Rate" },
      { value: "24/7", label: "Uptime" },
    ],
    images: [`${IMG}/scan-performance.png`, `${IMG}/latency-chart.png`],
    caveat: "Honest caveat: while the system detects opportunities in real-time, actual execution requires manual intervention or a separate trading bot. The current version is a decision-support tool, not an automated trading system. Latency from detection to execution remains the primary bottleneck for profitability.",
  },

  product: {
    title: "See it in action — live terminal interface",
    intro: "The Streamlit dashboard provides real-time visibility into market inefficiencies — updated every 60 seconds with auto-refresh.",
    cases: [
      { label: "📊 Dashboard — System overview with live stats", image: `${IMG}/dashboard-view.png`, color: "#F0B90B" },
      { label: "⚡ Opportunities — Filterable 24h history", image: `${IMG}/opportunities-table.png`, color: "#0ECB81" },
    ],
    insight: "The terminal shows 5 key metrics at a glance: active exchanges (5 online), symbols tracked (30), last 24h opportunities, best profit found, and average profit. The watchlist allows dynamic symbol selection, and the Telegram CTA drives mobile alert signups.",
    formImage: `${IMG}/control-panel.png`,
    actionImage: `${IMG}/telegram-alert.png`,
  },

  challenges: [
    ["Geographic restrictions (Nigeria)", "Filtered to Nigeria-accessible exchanges only (removed Kraken, Coinbase)"],
    ["Fee complexity", "Implemented triple-fee calculation: buy fee + sell fee + withdrawal fee"],
    ["API rate limits", "Used CCXT's built-in rate limiting + async batching to avoid bans"],
    ["Low liquidity pairs", "Added $100k minimum volume filter to prevent slippage"],
    ["False positives", "Implemented SAFE_SYMBOLS whitelist to avoid bad pair errors"],
  ],

  resources: [
    { icon: "ExternalLink", title: "Live Demo", desc: "Access the live arbitrage terminal — updated every 60 seconds.", href: "https://yemifatodu-arbitrageiq.streamlit.app" },
    { icon: "Github", title: "GitHub Repository", desc: "Full source — scanner.py, app.py, and async architecture.", href: "https://github.com/yemifatodu/arbitrageiq" },
    { icon: "FileText", title: "Technical Report (PDF)", desc: "Complete system architecture, fee calculations, and performance analysis.", href: `${IMG}/ArbitrageIQ_Technical_Report.pdf` },
    { icon: "Presentation", title: "Presentation", desc: "Stakeholder overview of the trading system and business value.", href: `${IMG}/ArbitrageIQ_Presentation.pdf` },
  ],
};

