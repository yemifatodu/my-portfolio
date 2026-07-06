// churniq.config.js
// All copy, metrics, images, and theme for the ChurnIQ project page.
// Rendered by <ProjectTemplate project={churniqConfig} />

const IMG = "/projects/churniq"; // put all images + PDFs in /public/projects/churniq/

export const churniqConfig = {
  theme: {
    primary: "#0A1628",
    secondary: "#0D1F3C",
    accent: "#C9A84C",
    bg: "#F0F4FA",
    displayFont: "'Playfair Display', serif",
    bodyFont: "'Inter', sans-serif",
  },

  meta: {
    title: "ChurnIQ — AI-Powered Bank Customer Churn Intelligence | Yemi Fatodu",
    description: "A deployed Random Forest churn-prediction platform for retail banking — 86.80% accuracy, live Streamlit app, full technical report, and transparent evaluation.",
    canonical: "https://yemifatodu.online/projects/churniq",
  },

  hero: {
    eyebrow: "Data Science · Machine Learning · Banking",
    name: "🏦 ChurnIQ",
    shortName: "ChurnIQ",
    tagline: "Predict customer attrition before it happens — a live, explainable Random Forest platform for retail banking retention teams.",
    image: `${IMG}/hero-kpi-strip.png`,
    links: [
      { label: "Live Demo", href: "https://yemifatodu-bank-churn-predictor.streamlit.app", primary: true },
      { label: "GitHub", href: "https://github.com/yemifatodu/bank-churn-predictor" },
      { label: "Technical Report", href: `${IMG}/ChurnIQ_Technical_Report.pdf` },
      { label: "Presentation", href: `${IMG}/ChurnIQ_Presentation.pdf` },
    ],
  },

  metrics: [
    { value: "10,000", label: "Customers" },
    { value: "86.80%", label: "Accuracy" },
    { value: "0.864", label: "ROC-AUC" },
    { value: "4", label: "Segments" },
    { value: "32.1%", label: "Highest-Risk Cluster" },
  ],

  businessProblem: {
    title: "Banks learn about churn too late",
    intro: "Retail banks typically only discover a customer is leaving after the account has already closed — at which point retention is no longer possible. Existing customer data contains real predictive signal about attrition risk, but it's rarely converted into a forward-looking score a retention team can act on before someone leaves.",
    before: [
      "Reactive retention — after the fact",
      "No individual risk scoring",
      "Generic, blanket campaigns",
      "No visibility into why a customer is at risk",
    ],
    after: [
      "Predictive scoring, before churn happens",
      "Per-customer probability + confidence",
      "Targeted, explainable interventions",
      "Feature-level drivers surfaced per prediction",
    ],
  },

  role: [
    "Designed the end-to-end ML pipeline (train.py)",
    "Built the preprocessing pipeline (scaling + one-hot encoding)",
    "Performed full EDA — distributions, correlation, segment analysis",
    "Trained & tuned the Random Forest classifier",
    "Built KMeans customer segmentation + PCA visualization",
    "Evaluated with ROC-AUC, precision/recall, confusion matrix",
    "Built and styled the live Streamlit application",
    "Wrote the full technical report and documented every caveat",
  ],

  architecture: ["CSV\nDataset", "EDA", "Cleaning\n& Scaling", "One-Hot\nEncoding", "Random\nForest", "Joblib\nSerialize", "Streamlit\nApp", "User\nVerdict"],

  dataset: {
    title: "Bank Customer Segmentation dataset",
    stats: [
      { value: "10,000", label: "Rows" },
      { value: "13", label: "Columns" },
      { value: "0", label: "Missing Values" },
      { value: "20.37%", label: "Churn Rate" },
    ],
    note: "Sourced from the Kaggle \"Bank Customer Churn\" dataset. No missing values, no duplicate records, and no duplicate customer IDs — data quality checks passed cleanly, so no imputation or deduplication was required.",
    image: `${IMG}/missing-values.png`,
  },

  eda: {
    text: "Credit Score is approximately normal; Age is right-skewed toward younger customers; Balance shows a large zero-balance spike alongside a separate normal-ish distribution for active balances; and the churn target itself is meaningfully imbalanced.",
    image: `${IMG}/feature-histograms.png`,
  },

  exploratory: {
    title: "What separates stayers from leavers",
    insights: [
      { title: "Age", desc: "Churned customers are noticeably older on average — median ~45 vs. ~36 for retained customers." },
      { title: "Balance", desc: "Churners carry higher median balances (~$109K vs ~$91K) — a counterintuitive signal explored further below." },
      { title: "Salary", desc: "Estimated salary shows almost no separation between the two groups." },
      { title: "Credit Score", desc: "Credit score alone barely differs between stayers and churners." },
    ],
    image: `${IMG}/boxplots-by-exited.png`,
  },

  correlation: {
    title: "Where linear correlation misleads",
    image: `${IMG}/correlation-heatmap.png`,
    discovery: {
      from: "-0.048",
      fromLabel: "Linear correlation (NumOfProducts)",
      to: "0.234",
      toLabel: "Random Forest importance (2nd highest)",
      text: "NumOfProducts has an almost-zero linear relationship with churn — but the real relationship is a sharp U-shape: 1 product churns at 27.7%, 2 products at just 7.6%, then 3–4 products spike to 82.7–100%. Linear correlation completely misses this, which is exactly why a tree-based model was the right choice here.",
    },
  },

  segmentation: {
    title: "Four customer segments, four risk profiles",
    clusters: [
      { value: "32.1%", label: "Cluster 1 · Inactive card holders", highlight: true, highlightColor: "#DC2626" },
      { value: "19.9%", label: "Cluster 2 · No credit card" },
      { value: "15.5%", label: "Cluster 0 · Active members" },
      { value: "13.5%", label: "Cluster 3 · Near-zero balance", highlight: true, highlightColor: "#059669" },
    ],
    images: [`${IMG}/churn-rate-by-cluster.png`, `${IMG}/cluster-pca-visualisation.png`],
    note: "Optimal k=4 selected via elbow method and silhouette score (0.12–0.15 across tested k values — real but not sharply separated clusters).",
  },

  importance: {
    image: `${IMG}/feature-importance.png`,
    text: "Age (31%) and NumOfProducts (23%) together account for nearly 55% of the model's total decision weight. Add Balance (11%) and the top three features explain roughly two-thirds of every prediction the model makes.",
  },

  performance: {
    stats: [
      { value: "86.80%", label: "Accuracy" },
      { value: "82.95%", label: "Precision (Churn)" },
      { value: "44.23%", label: "Recall (Churn)" },
      { value: "0.864", label: "ROC-AUC" },
    ],
    images: [`${IMG}/confusion-matrix.png`, `${IMG}/roc-curve.png`],
    caveat: "Honest caveat: because 79.6% of customers don't churn, accuracy alone is a misleading headline. The model's 227 false negatives are customers who would leave without intervention — the primary target for the next iteration (class weighting, threshold tuning, or resampling).",
  },

  product: {
    title: "See it discriminate — two real assessments",
    intro: "Same model, two different customer profiles, two different verdicts — run live on the deployed app.",
    cases: [
      { label: "✔ Male · 40 · France · 1 product → RETAIN", image: `${IMG}/verdict-low-risk.png`, color: "#059669" },
      { label: "⚠ Female · 73 · Germany · 4 products → CHURN", image: `${IMG}/verdict-high-risk.png`, color: "#DC2626" },
    ],
    insight: "The high-risk case is a good demonstration of the model weighing multiple signals rather than any one feature alone: age 73 sits in a normally low-risk band on its own, but 4 products held (which churns at 100% in training data) and a Germany location (32.4% churn) push the combined probability to 70.8%.",
    formImage: `${IMG}/input-form.png`,
    actionImage: `${IMG}/action-plan.png`,
  },

  challenges: [
    ["Class imbalance (20.37% churn)", "Reported class-level precision/recall, not just aggregate accuracy"],
    ["NumOfProducts non-linear relationship", "Chose a tree-based model over linear; investigated with grouped EDA"],
    ["Geography & Gender show real disparities", "Flagged for a fairness review before any production deployment"],
    ["Two model iterations exist (notebook vs. deployed)", "Documented both transparently rather than merging or hiding either"],
  ],

  resources: [
    { icon: "ExternalLink", title: "Live Demo", desc: "Run your own risk assessment on the deployed Streamlit app.", href: "https://yemifatodu-bank-churn-predictor.streamlit.app" },
    { icon: "Github", title: "GitHub Repository", desc: "Full source — train.py, app.py, and the trained model artifacts.", href: "https://github.com/yemifatodu/bank-churn-predictor" },
    { icon: "FileText", title: "Technical Report (PDF)", desc: "11-page report — dataset, methodology, EDA, evaluation, honest caveats.", href: `${IMG}/ChurnIQ_Technical_Report.pdf` },
    { icon: "Presentation", title: "Presentation", desc: "Stakeholder-facing summary of findings and recommendations.", href: `${IMG}/ChurnIQ_Presentation.pdf` },
  ],
};
