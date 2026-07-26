export const articlesData = [
  {
    slug: "digital-shift-covid-19-adidas-sales",
    title: "The Digital Shift: How COVID-19 Reshaped Adidas Sales",
    excerpt: "How pandemic-era demand shocks reshaped Adidas' revenue mix, and what the data says about the retailers who adapted fastest.",
    date: "2026-06-01",
    readTime: "8 min read",
    type: "case-study",
    tags: ["Data Analysis", "Retail", "COVID-19"],
    coverImage: "/articles/adidas-cover.jpg",
    mediumUrl: "https://medium.com/@yemifatodu/the-digital-shift-how-covid-19-reshaped-adidas-sales-methods-and-what-it-means-for-retailers-6e69e758e62a",
    content: `
      <p>Replace this with your full article body. This can include
      multiple paragraphs, headings, lists, and images written as HTML.</p>
    `
  },
  {
    slug: "how-i-think-like-a-data-analyst",
    title: "How I Think Like a Data Analyst Before I Open a Notebook",
    excerpt: "The questions I ask before touching a dataset -- and why most analysis mistakes happen before any code is written.",
    date: "2026-07-01",
    readTime: "6 min read",
    type: "insight",
    tags: ["Career", "Data Analysis", "Process"],
    coverImage: null,
    mediumUrl: null,
    content: `
      <p>Replace this with your full article body.</p>
    `
  }
  ,{
    slug: "churniq-accuracy-false-negatives-bank-churn",
    title: "86.8% Accuracy Isn't the Whole Story: What ChurnIQ Taught Me About False Negatives",
    excerpt: "A bank churn model hit 86.8% accuracy and 0.864 ROC-AUC — but the number that actually mattered for the business was recall. Here's why.",
    date: "2026-05-15",
    readTime: "11 min read",
    type: "case-study",
    tags: ["Machine Learning", "Churn Prediction", "Model Evaluation"],
    coverImage: "/projects/churniq/hero-kpi-strip.png",
    mediumUrl: null,
    faq: [
      { q: "Why isn't accuracy enough to evaluate a churn prediction model?", a: "Churn datasets are typically imbalanced, with far fewer churned customers than retained ones. A model can achieve high accuracy simply by favoring the majority class, while still failing to identify most at-risk customers — the group the model actually needs to catch." },
      { q: "What is recall in the context of churn prediction?", a: "Recall measures the percentage of actual churners the model correctly identifies. ChurnIQ's Random Forest model scored 44.23% recall on the churned class, meaning it caught less than half of the customers who were genuinely about to leave, despite 86.80% overall accuracy." },
      { q: "Why do false negatives matter more than false positives in churn models?", a: "A false positive typically costs a modest, low-risk retention outreach to a loyal customer. A false negative means an at-risk customer receives no intervention at all and is lost with no warning. On ChurnIQ's test set, that was 227 real customers." },
      { q: "What accuracy did the ChurnIQ model achieve?", a: "ChurnIQ, a Random Forest model, achieved 86.80% accuracy, 82.95% precision on the churned class, 44.23% recall on the churned class, and a 0.864 ROC-AUC, on a 10,000-row bank customer dataset with a 20.37% churn rate." },
      { q: "What features are most predictive of customer churn?", a: "Age (31% importance) and NumOfProducts (23% importance) were the two strongest predictors, together accounting for over half the model's decision weight. NumOfProducts is a notable case: its linear correlation with churn is nearly zero (-0.048), but its real relationship is a sharp non-linear U-shape, which only a tree-based model like Random Forest was able to capture." }
    ],
    content: `
      <p>ChurnIQ, a Random Forest model trained to predict bank customer churn, hit 86.80% accuracy with a 0.864 ROC-AUC on a 10,000-row banking dataset. Those are solid numbers by most standards — the kind that would headline a portfolio project without much more said about them.</p>

      <p>But accuracy alone doesn't answer the question a retention team actually needs answered: of the customers who were about to leave, how many did the model catch in time to act on?</p>

      <p>That's a different question than "how often was the model right overall," and the gap between those two questions is where this project got interesting.</p>

      <figure>
        <img src="/projects/churniq/hero-kpi-strip.png" alt="ChurnIQ bank customer churn prediction model dashboard" style="width:100%;border-radius:12px;" />
        <figcaption>Predicting which customers are about to leave — and catching the ones accuracy alone would miss.</figcaption>
      </figure>


      <h2><strong>Why Accuracy Can Hide the Real Problem in Churn Models.</strong></h2>

      <p>Churn datasets are almost always imbalanced — most customers don't churn in any given period, only a minority do. That imbalance means a model can score high accuracy while still performing poorly on the exact group it exists to identify.</p>

      <p>Take an extreme illustration: if only 15% of customers in a dataset actually churn, a model that predicts "will not churn" for every single customer scores 85% accuracy — and correctly identifies zero at-risk customers. No retention team could act on that model, despite its impressive-looking headline number.</p>

      <p>ChurnIQ's dataset had a churn rate of 20.37% — 2,037 of the 10,000 customers had left. Real imbalance, though not as extreme as the illustration above. The same underlying risk still applied: accuracy alone couldn't confirm the model was actually useful for the business problem it was built to solve.</p>

      <figure>
        <img src="/projects/churniq/boxplots-by-exited.png" alt="Feature distributions split by churn status for ChurnIQ" style="width:100%;border-radius:12px;" />
        <figcaption>Distributions split by churn status — a first look at how the two groups differ before any model is trained.</figcaption>
      </figure>

      <h2><strong>Breaking Down the Real Numbers</strong></h2>

      <p>86.80% accuracy and a 0.864 ROC-AUC are both strong summary statistics. But summary statistics average performance across the whole dataset, and a retention model's value lives almost entirely in one specific slice: how well it identifies the customers who are actually about to leave.</p>

      <p>Breaking that down separately: recall on the churned class was 44.23%, and precision on the churned class was 82.95%.</p>

      <p>That recall number is the one that actually tells a retention team what they're working with — specifically, that of every 100 customers genuinely about to churn, the model successfully flagged roughly 44 of them, and missed the other 56.</p>

      <figure>
        <img src="/projects/churniq/confusion-matrix.png" alt="Confusion matrix showing true positives, false positives, and false negatives for ChurnIQ" style="width:100%;border-radius:12px;" />
        <figcaption>Where the model succeeds — and where it misses.</figcaption>
      </figure>

      <h2><strong>Why False Negatives Cost More Than False Positives Here</strong></h2>

      <p>In a churn context, the two error types have very different real-world costs. A false positive means the model flags a loyal customer as at-risk — the cost is a probably-unnecessary retention offer, mildly wasteful but low-stakes. A false negative means a customer who was actually about to leave gets no intervention at all, and the business simply loses them with zero warning.</p>

      <p>That asymmetry is why recall on the churned class deserves at least as much attention as overall accuracy — arguably more. On ChurnIQ's test set, that translated into 227 real customers the model failed to flag as at-risk: 227 people who would have walked out the door with no retention offer, no outreach, no warning at all. An 86.80% accurate model that misses 227 actual churners isn't nearly as useful in practice as its headline number suggests, no matter how strong that number looks in isolation.</p>

      <h2><strong>What Drove the Predictions</strong></h2>

      <p>Feature importance rankings showed Age (31%) and NumOfProducts (23%) as the two dominant predictors, together accounting for over half the model's total decision weight. Add Balance (11%), and the top three features explain roughly two-thirds of every prediction the model makes.</p>

      <p>The NumOfProducts finding was the most interesting result in the whole analysis, mostly because a simple linear correlation check would have told me to ignore it. NumOfProducts has an almost-zero linear correlation with churn (-0.048) — on paper, a feature barely worth including. But the real relationship isn't linear at all, it's a sharp U-shape: customers with 1 product churn at 27.7%, customers with 2 products churn at just 7.6%, and customers with 3-4 products churn at 82.7-100%. Random Forest picked up on that shape immediately, ranking NumOfProducts as its second-most important feature (0.234 importance) despite the near-zero linear correlation. That gap — a feature linear correlation says is nearly irrelevant, and a tree-based model says is the second-strongest signal in the entire dataset — is exactly why a tree-based model was the right choice for this problem.</p>

      <figure>
        <img src="/projects/churniq/feature-importance.png" alt="Feature importance chart from ChurnIQ Random Forest model" style="width:100%;border-radius:12px;" />
        <figcaption>The customer attributes that most strongly predicted churn risk.</figcaption>
      </figure>

      <h2><strong>Why This Matters Beyond This One Project.</strong></h2>

      <p>The instinct to report a single headline metric and move on is understandable — it's simpler, and a high number is more immediately impressive than a nuanced breakdown. But for any model tied to a real decision — retention offers, fraud flags, medical screening, safety alerts — the metric that matters is the one aligned with the actual cost of getting it wrong, not necessarily the one that looks best in a summary table.</p>

      <p>For ChurnIQ specifically, that meant treating recall on the churned class as a co-equal metric alongside accuracy, not a footnote below it, and documenting the 227 false negatives as the primary target for the next iteration — through class weighting, threshold tuning, or resampling. The finished model is still the same Random Forest, same 86.80% accuracy, same 0.864 ROC-AUC — but the story around it is a more honest one, and a more useful one to a retention team trying to decide whether the model is actually ready to inform outreach decisions.</p>

      <h2><strong>Frequently Asked Questions</strong></h2>

      <p><strong>Why isn't accuracy enough to evaluate a churn prediction model?</strong><br/>
      Churn datasets are typically imbalanced, with far fewer churned customers than retained ones. A model can achieve high accuracy simply by favoring the majority class, while still failing to identify most at-risk customers — the group the model actually needs to catch.</p>

      <p><strong>What is recall in the context of churn prediction?</strong><br/>
      Recall measures the percentage of actual churners the model correctly identifies. ChurnIQ's Random Forest model scored 44.23% recall on the churned class, meaning it caught less than half of the customers who were genuinely about to leave, despite 86.80% overall accuracy.</p>

      <p><strong>Why do false negatives matter more than false positives in churn models?</strong><br/>
      A false positive typically costs a modest, low-risk retention outreach to a loyal customer. A false negative means an at-risk customer receives no intervention at all and is lost with no warning. On ChurnIQ's test set, that was 227 real customers.</p>

      <p><strong>What accuracy did the ChurnIQ model achieve?</strong><br/>
      ChurnIQ, a Random Forest model, achieved 86.80% accuracy, 82.95% precision on the churned class, 44.23% recall on the churned class, and a 0.864 ROC-AUC, on a 10,000-row bank customer dataset with a 20.37% churn rate.</p>

      <p><strong>What features are most predictive of customer churn?</strong><br/>
      Age (31% importance) and NumOfProducts (23% importance) were the two strongest predictors, together accounting for over half the model's decision weight. NumOfProducts is a particularly notable case: its linear correlation with churn is nearly zero (-0.048), but its real relationship is a sharp non-linear U-shape, which only a tree-based model like Random Forest was able to capture.</p>

      <p>Want the full technical breakdown and live model details? <a href="/projects/churniq">Check out the complete ChurnIQ project page →</a></p>
    `
  },
];


