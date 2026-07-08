// glucoseiq.config.js
// All copy, metrics, images, and theme for the GlucoseIQ project page.
// Rendered by <ProjectTemplate project={glucoseiqConfig} />

const IMG = "/projects/glucoseiq"; // put all images + PDFs in /public/projects/glucoseiq/

export const glucoseiqConfig = {
  theme: {
    primary: "#0B2E33",
    secondary: "#0F3B42",
    accent: "#0891B2",
    bg: "#F0F9FA",
    displayFont: "'Playfair Display', serif",
    bodyFont: "'Inter', sans-serif",
  },

  meta: {
    title: "GlucoseIQ — AI-Powered Diabetes Risk Assessment | Yemi Fatodu",
    description: "A deployed dual-model (Random Forest + XGBoost) diabetes risk platform — 88.31% accuracy, 0.947 ROC-AUC, live Streamlit app with full transparent model comparison.",
    canonical: "https://yemifatodu.online/projects/glucoseiq",
  },

  hero: {
    eyebrow: "Data Science · Machine Learning · Healthcare",
    name: "🩺 GlucoseIQ",
    shortName: "GlucoseIQ",
    tagline: "Assess diabetes risk before symptoms escalate — a live, explainable dual-model screening tool built on the Pima Indians Diabetes dataset.",
    image: `${IMG}/hero-kpi-strip.png`,
    links: [
      { label: "Live Demo", href: "https://yemifatodu-glucoseiq.streamlit.app", primary: true },
      { label: "GitHub", href: "https://github.com/yemifatodu/glucoseiq" },
      { label: "Technical Report", href: `${IMG}/GlucoseIQ_Technical_Report.pdf` },
      { label: "Presentation", href: `${IMG}/GlucoseIQ_Presentation.pdf` },
    ],
  },

  metrics: [
    { value: "768", label: "Patients" },
    { value: "88.31%", label: "Accuracy (XGBoost)" },
    { value: "0.947", label: "ROC-AUC" },
    { value: "3", label: "Models Compared" },
    { value: "85.2%", label: "Recall (Diabetes)" },
  ],

  businessProblem: {
    title: "Diabetes risk is often caught too late for early intervention",
    intro: "Diabetes screening typically relies on a handful of clinical thresholds checked in isolation — a glucose reading here, a BMI number there — rather than a combined, weighted risk signal. Many at-risk patients don't clear any single threshold dramatically, but combined, their profile carries real predictive risk that simple rule-based screening misses.",
    before: [
      "Single-threshold screening (e.g. glucose alone)",
      "No combined risk scoring across factors",
      "No visibility into which factors drive risk for a given patient",
      "One-size-fits-all screening guidance",
    ],
    after: [
      "Combined, weighted risk score across 11 factors",
      "Two independent models cross-validate every prediction",
      "Feature-level drivers surfaced per patient",
      "Transparent model comparison, not a black box",
    ],
  },

  role: [
    "Sourced and cleaned the Pima Indians Diabetes dataset",
    "Identified and imputed biologically impossible zero-values using group-median imputation by Outcome",
    "Flagged statistical outliers via IQR without removing them, since extreme values are clinically valid for diabetic patients",
    "Trained and compared Logistic Regression, Random Forest, and XGBoost",
    "Evaluated all 3 models on accuracy, ROC-AUC, recall, and F1",
    "Selected XGBoost as production model based on recall performance",
    "Built and deployed the live Streamlit application",
    "Documented full methodology and model comparison transparently",
  ],

  architecture: ["CSV\nDataset", "Missing\nValue Fix", "Group-Median\nImputation", "Scaling", "3-Model\nTraining", "Model\nSelection", "Joblib\nSerialize", "Streamlit\nApp", "User\nVerdict"],

  dataset: {
    title: "Pima Indians Diabetes dataset",
    stats: [
      { value: "768", label: "Patients" },
      { value: "8", label: "Clinical Features" },
      { value: "5", label: "Columns w/ Hidden Missing Data" },
      { value: "~35%", label: "Diabetes Prevalence" },
    ],
    note: "A well-known quirk of this dataset: zero values in Glucose, BloodPressure, SkinThickness, Insulin, and BMI are biologically impossible and represent missing data recorded as zero rather than true measurements. These were identified and imputed using the median value within each Outcome group (diabetic vs. non-diabetic) rather than a blanket dataset-wide median — a more clinically sound approach that avoids distorting the two groups toward each other.",
    image: `${IMG}/missing-heatmap-comparison.png`,
  },

  eda: {
    text: "After imputing hidden missing values, feature distributions were re-examined — Glucose and BMI both show the expected rightward shift among diabetic patients, while Insulin's distribution remains the most irregular even post-imputation, reflecting genuine measurement variability in the original clinical data.",
    image: `${IMG}/imputation-distributions.png`,
  },

  exploratory: {
    title: "What separates diabetic from non-diabetic patients",
    insights: [
      { title: "Glucose", desc: "Diabetic patients show a clear rightward shift in glucose readings — the most clinically expected signal in the dataset." },
      { title: "BMI", desc: "Higher BMI is associated with diabetic outcomes, consistent with established clinical risk factors." },
      { title: "Age", desc: "Older patients trend toward higher diabetes prevalence, though with more overlap than Glucose or BMI." },
      { title: "Insulin", desc: "The most volatile feature by far — high variance in both groups even after group-median imputation, yet still confirmed as the single strongest predictor (~46% importance) in the deployed model." },
    ],
    image: `${IMG}/boxplots.png`,
  },

  correlation: {
    title: "Correlation and feature relationships",
    image: `${IMG}/correlation-heatmap.png`,
    discovery: {
      from: "5 columns",
      fromLabel: "Contained hidden missing data disguised as zero",
      to: "0",
      toLabel: "Remaining missing values after group-median imputation",
      text: "Rather than filling every gap with one dataset-wide median, missing values were imputed using the median within each Outcome group separately — diabetic patients' gaps filled from diabetic-group medians, non-diabetic gaps from non-diabetic medians. This avoids quietly pulling the two groups' distributions toward each other, which a single blanket median would do.",
    },
  },

  segmentation: {
    title: "Three models tested, one clear winner",
    clusters: [
      { value: "70.78%", label: "Logistic Regression · Baseline" },
      { value: "86.36%", label: "Random Forest" },
      { value: "88.31%", label: "XGBoost · Selected", highlight: true, highlightColor: "#0891B2" },
    ],
    images: [`${IMG}/model-comparison.png`],
    note: "XGBoost was selected for deployment based on the highest accuracy, ROC-AUC, and — most importantly for a health screening context — the highest recall (85.2%), meaning it misses the fewest actual diabetes cases of the three models tested.",
  },

  importance: {
    image: `${IMG}/feature-importance-xgb-labeled.png`,
    text: "Insulin is by far the strongest predictor in the deployed XGBoost model at ~46% importance — more than four times the weight of the next-highest features (SkinThickness and Glucose, both ~10-11%). This runs against the common assumption that Glucose alone would dominate a diabetes model, and is a genuinely useful finding to flag for clinical review rather than smooth over.",
  },

  performance: {
    stats: [
      { value: "88.31%", label: "Accuracy" },
      { value: "82.1%", label: "Precision (Diabetes)" },
      { value: "85.2%", label: "Recall (Diabetes)" },
      { value: "0.947", label: "ROC-AUC" },
    ],
    images: [`${IMG}/confusion-matrix-xgb.png`, `${IMG}/roc-curve-comparison.png`],
    caveat: "Honest caveat: recall is the priority metric in a health screening context, since a missed diabetes case (false negative) carries a real cost to patient outcomes. XGBoost's 8 false negatives out of 54 diabetic patients in the test set is an improvement over Random Forest's 11, but not zero — this model is a screening aid, not a diagnostic replacement, and should always be paired with clinical follow-up.",
  },

  product: {
    title: "Two models, two patients, two verdicts",
    intro: "The app lets you toggle between Random Forest and XGBoost as the active model — every prediction below was run live, not staged.",
    cases: [
      { label: "✔ Random Forest · Glucose 110, BMI 25, Age 30 → 98.0% NO DIABETES", image: `${IMG}/verdict-low-risk.png`, color: "#059669" },
      { label: "⚠ XGBoost · Glucose 156, BMI 32.1, Age 50, BP 144 → 78.2% DIABETES LIKELY", image: `${IMG}/verdict-high-risk.png`, color: "#DC2626" },
    ],
    insight: "The high-risk case flags HIGH on 4 of 6 biomarkers simultaneously — Glucose, BMI, Blood Pressure, and DPF Score — which is what pushes the combined probability well past the 50% threshold even though no single reading is extreme in isolation. This is the same pattern seen in the feature importance analysis: no one biomarker decides the outcome alone.",
    formImage: `${IMG}/input-form.png`,
    actionImage: `${IMG}/action-plan.png`,
  },

  challenges: [
    ["Hidden missing data (zeros in 5 columns)", "Identified biologically impossible zero-values and imputed using group-median-by-Outcome rather than a single blanket median"],
    ["Outliers in Glucose/Insulin for diabetic patients", "Flagged via IQR but deliberately not removed — extreme values are clinically valid for diabetic patients, and removing them would bias the model"],
    ["3 models with different strengths", "Deployed the highest-recall model (XGBoost) for a health screening context, not just the highest accuracy model"],
    ["Small test set (154 patients)", "Reported metrics with awareness that confidence intervals on this sample size are wider than a larger clinical dataset would allow"],
  ],

  resources: [
    { icon: "ExternalLink", title: "Live Demo", desc: "Run your own diabetes risk assessment on the deployed Streamlit app.", href: "https://yemifatodu-glucoseiq.streamlit.app" },
    { icon: "Github", title: "GitHub Repository", desc: "Full source — training notebook, app.py, and the trained model artifacts.", href: "https://github.com/yemifatodu/glucoseiq" },
    { icon: "FileText", title: "Technical Report (PDF)", desc: "Dataset, methodology, model comparison, and honest evaluation caveats.", href: `${IMG}/GlucoseIQ_Technical_Report.pdf` },
    { icon: "Presentation", title: "Presentation", desc: "Stakeholder-facing summary of findings and model recommendations.", href: `${IMG}/GlucoseIQ_Presentation.pdf` },
  ],
};
