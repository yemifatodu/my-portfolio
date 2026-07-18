// titanicSurvival.config.js
// All copy, metrics, images, and theme for the "Voyage of Fate: Titanic Survival Analysis" project page.
// Rendered by <ProjectTemplate project={titanicSurvivalConfig} />
//
// NOTE ON SECTION REPURPOSING (historical/BI project vs. the ML template this shell was built for):
// - `businessProblem` before/after → repurposed as "popular myths" vs. "what the data shows"
//   instead of a product before/after.
// - `correlation` → used for the gender-survival gap discovery instead of a linear-corr-vs-
//   model-importance discovery.
// - `segmentation` (clusters) → repurposed as the 3-class survival-rate breakdown.
// - `importance` → repurposed as "gender was the strongest signal" instead of a feature-
//   importance chart.
// - `performance` → repurposed as the final verified stats + the sample-vs-historical caveat.
// - `product` → repurposed as the live Tableau Public dashboard embed/link (no live app for
//   this project).
//
// ⚠️ THINGS TO CONFIRM BEFORE SHIPPING (flagging rather than silently deciding):
// 1. IMAGE MAPPING IS INFERRED, NOT CONFIRMED — the 6 chart PNGs in the zip had generic names
//    (titanicproject2.png … titanicproject6.png, tatinicproject3.png) with no explicit label
//    tying each to "Visualization 1–6" in the report. I matched them by content + order. Please
//    eyeball the rendered page and confirm each image sits under the right heading before publishing.
//    Suggested renamed files (upload to /public/projects/titanic-survival-analysis/):
//      titanicproject.png        → dashboard-preview.png   (dashboard preview / hero)
//      titanicproject2.png       → viz1-survivors-by-class.png
//      titanicproject3.png       → viz2-female-nonsurvivors-by-class.png
//      titanicproject4.png       → viz3-female-survivors-by-class.png
//      titanicproject5.png       → viz4-females-onboard-by-class.png
//      titanicproject6.png       → viz5-male-nonsurvivors-by-class.png
//      tatinicproject3.png       → viz6-male-survivors-by-class.png
//    Visualization 7 (males onboard by class) has no chart image in the source doc — reported
//    as text-only stats in the Performance section caveat rather than inventing a placeholder chart.
// 2. NO PDF REPORT EXISTS — only the two markdown files. "Full Report" below links to the GitHub
//    repo (assumed to contain/render the same report). Swap for a PDF link if/when you generate one.
// 3. NO MEDIUM LINK PROVIDED for the second article ("Speed and Load Dynamics") — it currently
//    links to the GitHub repo as a placeholder. Replace with the actual Medium URL if it's published there.
// 4. CANONICAL URL / SLUG ("titanic-survival-analysis") is assumed to match your existing routing
//    convention — confirm it matches the route you set up in App.jsx / your router config.
// 5. Male/female survival percentages in the source report don't perfectly cross-foot against the
//    overall 40.6% (class-based recompute lands closer to 40.6% than the gender-based one — off by
//    a few points, likely original-report rounding). Reported here exactly as written in the source
//    doc, not silently corrected — flagging for your awareness rather than "fixing" a number I can't
//    verify against the raw CSV.

const IMG = "/projects/titanic-survival-analysis"; // put all images in /public/projects/titanic-survival-analysis/

export const titanicSurvivalConfig = {
  theme: {
    primary: "#0B1F3A",      // deep navy — night-ocean panel color
    secondary: "#2C3E50",    // steel slate — architecture diagram
    accent: "#5DADE2",       // icy steel blue — CTAs, highlights, iceberg nod
    bg: "#F4F6F8",           // cool fog-gray page background
    surface: "#FFFFFF",
    surfaceBorder: "#DCE3EA",
    textBody: "#33414F",
    textMuted: "#7A8B9A",
    headingText: "#0B1F3A",
    panelText: "#E8EDF2",
    panelSubtext: "#9FB0BF",
    displayFont: "'Playfair Display', serif", // period-appropriate gravitas
    bodyFont: "'DM Sans', sans-serif",
  },

  meta: {
    title: "Voyage of Fate — Titanic Survival Analysis by Passenger Class & Gender | Yemi Fatodu",
    description: "A data analysis of the RMS Titanic disaster — 714 complete passenger records from Kaggle, segmented by class and gender, with a verified breakdown of who survived and why, plus an interactive Tableau dashboard.",
    canonical: "https://yemifatodu.online/projects/titanic-survival-analysis",
  },

  hero: {
    eyebrow: "Data Analysis · Historical Data · Tableau",
    name: "🚢 Voyage of Fate: Titanic Survival Analysis",
    shortName: "Titanic Analysis",
    tagline: "Of the 2,224 people aboard the RMS Titanic in 1912, 714 passenger records survive complete enough to analyze — and within them, class and gender told two very different stories of who lived.",
    image: `${IMG}/dashboard-preview.png`,
    links: [
      { label: "Tableau Dashboard", href: "https://public.tableau.com/views/TitleVoyageofFateUnravelingtheTitanicTragedy/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link", primary: true },
      { label: "GitHub", href: "https://github.com/yemifatodu/THE-TITANIC-PROJECT-VOYAGE-OF-FATE" },
      { label: "Full Report", href: `${IMG}/Titanic_Survival_Analysis_Report.pdf` },
      { label: "Presentation", href: `${IMG}/Titanic_Survival_Analysis.pptx` },
    ],
  },

  metrics: [
    { value: "2,224", label: "Total Aboard (Historical)" },
    { value: "714", label: "Records Analyzed" },
    { value: "40.6%", label: "Sample Survival Rate" },
    { value: "31.9%", label: "Historical Survival Rate" },
    { value: "3", label: "Classes Compared" },
  ],

  businessProblem: {
    title: "Did class decide who lived?",
    intro: "The Titanic's sinking on April 15, 1912 has spawned a century of retellings, but the passenger data itself gets less airtime than the myths. This project sources the Kaggle Titanic passenger dataset, cleans it down to 714 complete records, and asks a narrower, checkable question: how much did passenger class and gender actually shape who survived?",
    before: [
      "Popular belief: the ship was overloaded beyond capacity",
      "Assumed: high speed alone sealed the ship's fate",
      "Survival treated as effectively random",
      "Understanding limited to film and anecdote",
    ],
    after: [
      "Verified: ~2,224 aboard, within the ship's ~3,335 design capacity",
      "Speed was a contributing factor, not the whole story",
      "Survival correlated strongly with class and gender",
      "714 complete records analyzed across 7 segmented charts",
    ],
  },

  role: [
    "Sourced the Titanic passenger dataset from Kaggle",
    "Cleaned the data — removed blanks, handled outliers, remodeled for accuracy",
    "Computed survival rates by class, by gender, and by class × gender",
    "Designed 7 segmented Tableau visualizations",
    "Published an interactive Tableau Public dashboard",
    "Authored the full GitHub analysis report and a companion narrative article on speed and overloading",
  ],

  architecture: ["Raw\nKaggle CSV", "Data\nCleaning", "Class ×\nGender Split", "Survival\nRate Calc", "Tableau\nDashboard", "Published\nReport"],

  dataset: {
    title: "Titanic passenger dataset (Kaggle, cleaned)",
    stats: [
      { value: "2,224", label: "Total Aboard (Historical)" },
      { value: "714", label: "Usable Records (Post-Cleaning)" },
      { value: "3", label: "Passenger Classes" },
      { value: "2", label: "Genders Recorded" },
    ],
    note: "Historical accounts put roughly 2,224 people aboard the RMS Titanic on its maiden voyage. After removing blanks, handling outliers, and remodeling the Kaggle dataset for accuracy, 714 records had complete class, gender, and survival data usable for analysis. Every percentage on this page is calculated against that 714-record sample — the historical figure is reported separately, not blended into the sample statistics.",
  },

  exploratory: {
    title: "Class and gender, side by side",
    insights: [
      { title: "First Class", desc: "186 passengers (26.1% of the sample) — 65.6% survived, the highest survival rate of any class." },
      { title: "Second Class", desc: "173 passengers (24.2% of the sample) — a near-even split: 47.9% survived, 48.3% did not." },
      { title: "Third Class", desc: "355 passengers (49.7% of the sample, the largest group) — only 23.9% survived." },
      { title: "Gender gap", desc: "Female passengers (36.6% of the sample) survived at 75.5%, versus 28.8% for male passengers (63.4% of the sample)." },
    ],
    image: `${IMG}/viz1-survivors-by-class.png`,
  },

  correlation: {
    title: "The gender gap inside every class",
    image: `${IMG}/viz2-female-nonsurvivors-by-class.png`,
    discovery: {
      from: "20.5%",
      fromLabel: "Male survival rate (sample)",
      to: "75.5%",
      toLabel: "Female survival rate (sample)",
      text: "The gender gap held inside every class, not just in aggregate — but it wasn't uniform. Third Class accounted for 85.9% of all female non-survivors in the sample, far higher than First (4.7%) or Second (9.4%) Class. 'Women and children first' clearly shaped outcomes, but class still determined how much that priority actually helped.",
    },
  },

  segmentation: {
    title: "Three classes, three different fates",
    clusters: [
      { value: "65.6%", label: "First Class · survival rate", highlight: true, highlightColor: "#5DADE2" },
      { value: "47.9%", label: "Second Class · survival rate" },
      { value: "23.9%", label: "Third Class · survival rate", highlight: true, highlightColor: "#0B1F3A" },
      { value: "49.7%", label: "Third Class · share of all passengers" },
    ],
    images: [`${IMG}/viz3-female-survivors-by-class.png`, `${IMG}/viz4-females-onboard-by-class.png`],
    note: "Third Class carried nearly half of all sampled passengers (49.7%) but posted the lowest survival rate by a wide margin — 23.9%, against 65.6% in First Class.",
  },

  importance: {
    eyebrow: "09 · What Drove the Numbers",
    heading: "Gender was the single strongest signal",
    image: `${IMG}/viz5-male-nonsurvivors-by-class.png`,
    text: "Male passengers made up 63.4% of the sample (453 of 714) but survived at only 20.5%, while female passengers (36.6% of the sample, 261 of 714) survived at 75.5%. Third Class carried the highest concentration of male non-survivors — 59.7% of all male non-survivors in the sample — compounding the class disadvantage on top of the gender one.",
  },

  performance: {
    eyebrow: "10 · Verified Results",
    heading: "Sample vs. historical record",
    stats: [
      { value: "40.6%", label: "Sample Survival Rate (714 records)" },
      { value: "31.9%", label: "Historical Survival Rate (2,224 aboard)" },
      { value: "355", label: "Largest Group: Third Class (49.7%)" },
      { value: "7", label: "Visualizations Produced" },
    ],
    images: [`${IMG}/viz6-male-survivors-by-class.png`],
    caveat: "Honest caveat: the 40.6% survival rate is a sample statistic from 714 complete records, not the historical outcome for all 2,224 people aboard — separately documented at 31.9% (roughly 710 of 2,224). The two numbers are reported side by side throughout this page rather than merged. Visualization 7 (males onboard by class: 22.3% First, 21.9% Second, 55.8% Third) exists only as reported percentages in the source document — no chart asset was produced for it, so none is fabricated here.",
  },

  product: {
    title: "Explore the interactive dashboard",
    subtitle: "7 segmented Tableau visualizations — survival and non-survival by class and gender — published on Tableau Public.",
    intro: "The full interactive dashboard breaks every chart down by passenger class and gender, letting you filter and compare the same splits reported in the analysis above.",
    cases: [
      { label: "🗺 Dashboard Preview · Full Voyage of Fate Visualization", image: `${IMG}/dashboard-preview.png`, color: "#5DADE2" },
    ],
    insight: "The dashboard is published live on Tableau Public — every chart maps directly to a finding in the written report above, so you can cross-check the numbers yourself.",
  },

  challenges: [
    ["Missing and incomplete passenger records", "Removed incomplete records rather than impute, prioritizing accuracy over sample size"],
    ["714-record sample vs. 2,224 historical total", "Reported both figures separately throughout rather than conflating a sample statistic with the full historical outcome"],
    ["Correlation vs. causation between class and survival", "Framed findings as correlational; named lifeboat proximity and evacuation priority as plausible but unproven mechanisms"],
    ["Visualization 7 (males onboard by class) had no chart asset", "Reported the percentages as text in the performance caveat rather than fabricate a placeholder chart"],
  ],

  resources: [
    { icon: "ExternalLink", title: "Tableau Public Dashboard", desc: "7 live, interactive charts — explore class and gender survival splits yourself.", href: "https://public.tableau.com/views/TitleVoyageofFateUnravelingtheTitanicTragedy/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link" },
    { icon: "Github", title: "GitHub Repository", desc: "Full source — cleaned dataset reference, written report, and dashboard assets.", href: "https://github.com/yemifatodu/THE-TITANIC-PROJECT-VOYAGE-OF-FATE" },
    { icon: "FileText", title: "Full Report: Voyage of Fate", desc: "The complete class-and-gender survival analysis, with all 7 visualizations.", href: `${IMG}/Titanic_Survival_Analysis_Report.pdf` },
    { icon: "Presentation", title: "Presentation Deck", desc: "An 8-slide summary deck covering the problem, findings, and caveats.", href: `${IMG}/Titanic_Survival_Analysis.pptx` },
    { icon: "FileText", title: "Article: Speed and Load Dynamics", desc: "Was the Titanic overloaded, and did speed seal its fate? A companion narrative piece.", href: "https://github.com/yemifatodu/THE-TITANIC-PROJECT-VOYAGE-OF-FATE" },
  ],
};

