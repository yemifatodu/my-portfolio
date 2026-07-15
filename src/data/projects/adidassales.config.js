// adidassales.config.js
// All copy, metrics, images, and theme for the Adidas Sales & Profit Diagnostics project page.
// Rendered by <ProjectTemplate project={adidasSalesConfig} />
//
// NOTE ON SECTION REPURPOSING (BI project vs. the ML template this shell was built for):
// - `correlation` → used for the online-sales-shift discovery (2.48% → 33.87% of total sales)
//   instead of a linear-corr-vs-model-importance discovery.
// - `segmentation` (clusters) → repurposed as the 5-region sales-share breakdown.
// - `importance` → repurposed as "what drove the profit swing" (retailer ranking) instead of
//   a feature-importance chart.
// - `performance` → repurposed as headline profit/growth stats + an honest verification caveat
//   (the row-count and rounding discrepancies flagged during the audit pass).
// - `product` → repurposed as a live Tableau Public dashboard embed/link instead of model
//   verdict cases (no live app for this project).
// Swap image paths below once assets are uploaded to /public/projects/adidas-sales-performance/.

const IMG = "/projects/adidas-sales-performance"; // put all images + PDFs in /public/projects/adidas-sales-performance/

export const adidasSalesConfig = {
  theme: {
    primary: "#000000",
    secondary: "#1A1A1A",
    accent: "#DA291C", // Adidas brand red
    bg: "#F5F5F5",
    surface: "#FFFFFF",
    surfaceBorder: "#E0E0E0",
    textBody: "#333333",
    textMuted: "#767677",
    headingText: "#000000",
    panelText: "#F5F5F5",
    panelSubtext: "#B3B3B3",
    displayFont: "'Bebas Neue', sans-serif",
    bodyFont: "'DM Sans', sans-serif",
  },

  meta: {
    title: "Adidas Sales & Profit Diagnostics — Two-Year Sales Performance Analysis | Yemi Fatodu",
    description: "A full BI diagnostics project on Adidas US sales (2020–2021) — 9,648 transactions, verified against source data line-by-line, with 16 Tableau dashboards, SQL analysis, and a two-part narrative on the pandemic-era sales-method shift.",
    canonical: "https://yemifatodu.online/projects/adidas-sales-performance",
  },

  hero: {
    eyebrow: "Data Analysis · Business Intelligence · Tableau",
    name: "👟 Adidas Sales & Profit Diagnostics",
    shortName: "Adidas Diagnostics",
    tagline: "9,648 transactions, two pandemic years, one fully verified story — how Adidas' US sales shifted from in-store to online, and where profit actually came from.",
    image: `${IMG}/hero-dashboard-overview.png`,
    links: [
      { label: "Tableau Public Dashboard", href: "https://tabsoft.co/3QUmmCz", primary: true },
      { label: "GitHub", href: "https://github.com/yemifatodu/-projects-adidas-sales-performance-profit-diagnostics" },
      { label: "Full Report", href: `${IMG}/Adidas_Sales_Analysis_Report.pdf` },
      { label: "SQL Queries", href: `${IMG}/SQL_Queries_README.pdf` },
    ],
  },

  metrics: [
    { value: "9,648", label: "Transactions" },
    { value: "$899.9M", label: "Total Sales (2yr)" },
    { value: "$332.1M", label: "Total Profit (2yr)" },
    { value: "324.07%", label: "Profit Growth YoY" },
    { value: "5", label: "Regions Analyzed" },
  ],

  businessProblem: {
    title: "The numbers told a story — but which one was true?",
    intro: "Adidas' 2020–2021 US sales data captures a retailer navigating COVID-19 in real time: stores closing, online demand spiking, and profit swinging wildly by region and retailer. The raw dataset had the story buried in it, but every existing draft — the report, both articles, even the SQL output — needed to be checked line-by-line against the source before any number could be trusted enough to publish.",
    before: [
      "Numbers copied from drafts without re-checking source",
      "No single source of truth across report/articles/SQL",
      "Growth stats attributed to the wrong category",
      "Chart 'highest' labels taken on faith",
    ],
    after: [
      "Every figure traced back to the raw 9,648-row dataset",
      "Discrepancies flagged explicitly, not silently fixed",
      "Corrected attribution for every growth claim",
      "16 Tableau visuals independently reconciled to source",
    ],
  },

  role: [
    "Cleaned and structured the raw Kaggle dataset (SQL + Excel)",
    "Wrote the full SQL query suite for regional, retailer, and product-level analysis",
    "Built the Jupyter notebook computing all operating profit aggregations",
    "Designed and published 16 Tableau charts and dashboards",
    "Authored the GitHub report and two Medium articles",
    "Ran a full line-by-line verification pass across every document and chart against the raw source data",
    "Identified and resolved 4 real discrepancies between drafts and source data",
  ],

  architecture: ["Raw\nKaggle CSV", "Data\nCleaning", "SQL\nQueries", "Jupyter\nAnalysis", "Tableau\nDashboards", "Verified\nReport"],

  dataset: {
    title: "Adidas US Sales dataset (2020–2021)",
    stats: [
      { value: "9,648", label: "Rows" },
      { value: "13", label: "Columns" },
      { value: "0", label: "Missing Values" },
      { value: "2", label: "Years Covered" },
    ],
    note: "Sourced from Kaggle's Adidas US Sales dataset. Cleaned and structured in Excel/SQL before analysis. One documented discrepancy: an early draft of the report cited 9,649 rows; the verified row count from the source file is 9,648 — flagged and left as a noted limitation rather than silently corrected.",
    image: `${IMG}/dataset-overview.png`,
  },

  eda: {
    text: "Total sales nearly quadrupled from $182.08M in 2020 to $717.82M in 2021, and the sales-method mix flipped dramatically: online sales grew from just 2.48% of total sales in 2020 to 33.87% in 2021, while in-store's share fell from 51.57% to 36.60% as pandemic-era shopping habits took hold.",
    image: `${IMG}/sales-method-shift.png`,
  },

  exploratory: {
    title: "Where the growth actually came from",
    insights: [
      { title: "Region", desc: "West led total sales and profit in both years ($76.9M → $193.0M sales), but Midwest posted the steepest profit growth at 1,778% off a small 2020 base." },
      { title: "Retailer", desc: "Sports Direct overtook West Gear as the most profitable retailer, jumping from $5.8M to $68.5M in operating profit." },
      { title: "Product", desc: "Women's Apparel posted the largest single-category growth at 407.37%, ahead of Men's Athletic Footwear (353.96%)." },
      { title: "Sales Method", desc: "Online sales grew roughly 52x in dollar terms — the single biggest structural shift in the dataset." },
    ],
    image: `${IMG}/regional-profit-comparison.png`,
  },

  correlation: {
    title: "The shift hiding in plain sight",
    image: `${IMG}/online-sales-growth-chart.png`,
    discovery: {
      from: "2.48%",
      fromLabel: "Online share of total sales (2020)",
      to: "33.87%",
      toLabel: "Online share of total sales (2021)",
      text: "Online sales went from a rounding error to a third of all Adidas US sales in a single year — a ~5,200% dollar increase. It's the kind of structural shift that's easy to state but risky to overstate, which is why every draft's percentage and dollar figures for this shift were re-derived directly from the raw transaction data rather than carried over from earlier calculations.",
    },
  },

  segmentation: {
    title: "Five regions, five very different stories",
    clusters: [
      { value: "26.89%", label: "West · share of 2021 sales", highlight: true, highlightColor: "#DA291C" },
      { value: "20.28%", label: "Northeast · share of 2021 sales" },
      { value: "18.33%", label: "Southeast · share of 2021 sales" },
      { value: "17.89%", label: "Midwest · share of 2021 sales", highlight: true, highlightColor: "#000000" },
      { value: "16.61%", label: "South · share of 2021 sales" },
    ],
    images: [`${IMG}/regional-sales-map.png`, `${IMG}/profit-by-region-heatmap.png`],
    note: "West led every year on absolute sales and profit; Midwest, despite the smallest 2020 base, posted the fastest relative profit growth of any region (1,778% YoY).",
  },

  importance: {
    eyebrow: "09 · What Drove the Numbers",
    heading: "Retailer and product-category profit drivers",
    image: `${IMG}/retailer-profit-ranking.png`,
    text: "Sports Direct and Foot Locker together accounted for the largest share of 2021 operating profit growth, while Men's Street Footwear remained the single highest-profit product category in both years — $15.6M in 2020, rising to $67.2M in 2021.",
  },

  performance: {
    eyebrow: "10 · Verified Results",
    heading: "The numbers, after verification",
    stats: [
      { value: "$63.4M → $268.8M", label: "Operating Profit (2020→2021)" },
      { value: "324.07%", label: "Total Profit Growth" },
      { value: "462K → 2.02M", label: "Units Sold (2020→2021)" },
      { value: "4", label: "Discrepancies Found & Resolved" },
    ],
    images: [`${IMG}/total-profit-by-year.png`, `${IMG}/profit-change-by-region.png`],
    caveat: "Honest caveat: not every number in the original drafts was correct. A product-category growth claim was misattributed (the real 400%+ grower was Women's Apparel, not Women's Athletic Footwear), and a quarterly 'highest' label for the West region pointed at the wrong quarter. Both were corrected. A 1-row count discrepancy and a 1-cent rounding difference in the profit total were flagged but left as documented, immaterial limitations rather than 'fixed' to look cleaner.",
  },

  product: {
    title: "Explore the live dashboards",
    subtitle: "16 interactive Tableau visuals — dashboards, regional maps, and profit breakdowns — published on Tableau Public.",
    intro: "Rather than a live predictive app, this project's interactive layer is a full Tableau Public workbook: five main dashboards covering descriptive sales stats, retailer performance, geographic distribution, unit-price analysis, and product-category profit trends, each independently reconciled against the raw dataset.",
    cases: [
      { label: "📊 Main Dashboard · Descriptive Sales & Retailer Analysis", image: `${IMG}/dashboard-1-preview.png`, color: "#DA291C" },
      { label: "🗺 Regional Dashboard · Geographic Profit Distribution", image: `${IMG}/dashboard-3-preview.png`, color: "#000000" },
    ],
    insight: "The full interactive workbook — all 5 main dashboards and 16 charts — is published live on Tableau Public. Every figure shown there was cross-checked against the raw CSV during the verification pass; nothing in the workbook was adjusted after publishing, so what you see is what shipped.",
    formLabel: "View Dashboard",
    formImage: `${IMG}/dashboard-2-preview.png`,
    actionLabel: "Open on Tableau Public",
    actionImage: `${IMG}/dashboard-4-preview.png`,
  },

  challenges: [
    ["Row count mismatch (9,649 vs. actual 9,648)", "Flagged in the verification log; left as a documented limitation rather than silently edited"],
    ["1-cent rounding gap in 2021 total profit", "Confirmed immaterial; left as-is rather than force an artificial exact match"],
    ["'Over 400% growth' misattributed to the wrong product category", "Traced to source data, confirmed Women's Apparel (407.37%) was the real figure, corrected in the final article"],
    ["West Region 2021 'highest quarter' label pointed at the wrong quarter", "Recomputed all four quarters directly from source, corrected Q1 → Q2 in the final report"],
  ],

  resources: [
    { icon: "ExternalLink", title: "Tableau Public Dashboard", desc: "16 live, interactive charts and dashboards — explore the full analysis yourself.", href: "https://tabsoft.co/3QUmmCz" },
    { icon: "Github", title: "GitHub Repository", desc: "Full source — cleaned dataset, SQL queries, Jupyter notebook, and written report.", href: "https://github.com/yemifatodu/-projects-adidas-sales-performance-profit-diagnostics" },
    { icon: "FileText", title: "Full Report", desc: "The complete, verified sales & profit analysis report.", href: `${IMG}/Adidas_Sales_Analysis_Report.pdf` },
    { icon: "FileText", title: "Medium: The Digital Shift", desc: "How COVID-19 reshaped Adidas' sales methods — in-store vs. online vs. outlet.", href: `${IMG}/Medium_Article_1_The_Digital_Shift.pdf` },
    { icon: "FileText", title: "Medium: Harnessing Data for Growth", desc: "Regional and product-level operating profit analysis.", href: `${IMG}/Medium_Article_2_Harnessing_Data_for_Growth.pdf` },
    { icon: "Presentation", title: "SQL Query Suite", desc: "The full set of SQL queries behind every regional, retailer, and product breakdown.", href: `${IMG}/SQL_Queries_README.pdf` },
  ],
};
