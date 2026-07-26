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
  {
    slug: "titanic-survival-analysis-what-determined-survival",
    title: "I Analyzed 714 Titanic Passenger Records — Here's What Determined Survival",
    excerpt: "A data analyst breaks down 714 real Titanic passenger records to see what actually predicted survival -- beyond \"women and children first\" -- using verified class and gender splits, not assumptions.",
    date: "2026-04-15",
    readTime: "5 min read",
    type: "case-study",
    tags: ["Data Analysis", "Tableau", "Exploratory Data Analysis"],
    coverImage: "/projects/titanic-survival-analysis/dashboard-preview.png",
    mediumUrl: null,
    faq: [
      { q: "Did being a woman guarantee survival on the Titanic?", a: "No. Being a woman dramatically increased survival probability -- 75.5% versus 20.5% for men -- but class still mattered. Third Class accounted for 85.9% of all female passengers in the sample who did not survive, far higher than First Class (4.7%) or Second Class (9.4%)." },
      { q: "Was \"women and children first\" actually followed?", a: "Largely, for women -- female passengers survived at nearly four times the rate of male passengers across the full sample. This project analyzed class and gender specifically, not age, so this data alone cannot confirm the \"children\" half of that claim." },
      { q: "What was the overall Titanic survival rate?", a: "Two numbers, reported separately rather than blended: 40.6% among the 714 passengers with complete records analyzed, versus a historical estimate of roughly 31.9% for all ~2,224 people aboard." },
      { q: "Is this a machine learning prediction model?", a: "No -- this is an exploratory data analysis project built in Tableau, not a predictive ML model. It answers what happened and to whom, based on real historical records, not what will happen in a new case." },
      { q: "Is the Titanic dataset good for beginners in data science?", a: "Yes. It is small, well-documented, and has a clear binary outcome (survived or did not), making it a common first project for practicing data cleaning, segmentation, and exploratory analysis." }
    ],
    content: `
      <p>Everyone knows the line: "women and children first." It's the go-to explanation for who survived the sinking of the Titanic on April 15, 1912. It's also incomplete — at least judging by what the data actually shows.</p>

      <p>I ran a full survival analysis on the classic Titanic passenger dataset, sourced from Kaggle and cleaned down from roughly 2,224 people aboard to 714 complete records with usable class, gender, and survival data. The real story turned out to be two variables working together, not one rule holding on its own: sex mattered enormously, but class shaped how much that priority actually helped.</p>

      <figure>
        <img src="/projects/titanic-survival-analysis/dashboard-preview.png" alt="Voyage of Fate Titanic Survival Analysis Tableau dashboard" style="width:100%;border-radius:12px;" />
        <figcaption>The full interactive dashboard — 7 segmented visualizations breaking down survival by class and gender.</figcaption>
      </figure>

      <h2>Why I Chose the Titanic Dataset</h2>

      <p>The Titanic dataset is a standard benchmark for a reason: it's small enough to analyze thoroughly by hand, but rich enough to test real segmentation and cleaning decisions. After removing incomplete records and remodeling the raw Kaggle data for accuracy, 714 of the roughly 2,224 people aboard had complete enough class, gender, and survival data to analyze.</p>

      <p>The goal wasn't to build a predictive model — this is a Tableau-based exploratory analysis, not a machine learning project. It was to understand which of the two most talked-about factors, sex and class, actually carried the most weight, and to be honest about where a clean 714-record sample and the messier full historical picture diverge.</p>

      <h2>Overall Survival Rate — And Why Two Numbers Matter Here</h2>

      <p>Of the 714 passengers with complete records, 40.6% survived. But that's a sample statistic, not the historical outcome for everyone aboard: separately documented accounts put the true survival rate for all ~2,224 people aboard at 31.9%, roughly 710 people. I'm reporting both numbers side by side throughout this piece rather than quietly picking whichever one sounds better — conflating a clean sample with a messier historical reality is exactly the kind of shortcut that makes an analysis less trustworthy.</p>

      <h2>Finding #1: Sex Was the Single Strongest Predictor</h2>

      <p>This is the part where "women and children first" holds up clearly. Male passengers made up 63.4% of the sample — 453 of 714 — but survived at only 20.5%. Female passengers, 36.6% of the sample at 261 of 714, survived at 75.5%: nearly four times the male rate.</p>

      <h2>Finding #2: Passenger Class Was Nearly as Powerful</h2>

      <p>Third Class carried 355 passengers — 49.7% of the entire sample, the largest single group — and survived at only 23.9%. First Class, by comparison, survived at 65.6% (186 passengers, 26.1% of the sample), and Second Class landed in between at 47.9% (173 passengers, 24.2% of the sample).</p>

      <figure>
        <img src="/projects/titanic-survival-analysis/viz1-survivors-by-class.png" alt="Titanic survivors by passenger class" style="width:100%;border-radius:12px;" />
        <figcaption>First Class survived at nearly three times the rate of Third Class.</figcaption>
      </figure>

      <h2>Finding #3: The Gender Gap Held Inside Every Class — But Not Evenly</h2>

      <p>Third Class accounted for 85.9% of all female non-survivors in the sample, far higher than First Class (4.7%) or Second Class (9.4%). The same pattern held for men: Third Class accounted for 59.7% of all male non-survivors. "Women and children first" clearly shaped outcomes — but class determined how much that priority actually protected you.</p>

      <figure>
        <img src="/projects/titanic-survival-analysis/viz2-female-nonsurvivors-by-class.png" alt="Female non-survivors by passenger class" style="width:100%;border-radius:12px;" />
        <figcaption>Nearly 9 in 10 female non-survivors in the sample were traveling Third Class.</figcaption>
      </figure>

      <figure>
        <img src="/projects/titanic-survival-analysis/viz5-male-nonsurvivors-by-class.png" alt="Male non-survivors by passenger class" style="width:100%;border-radius:12px;" />
        <figcaption>The same class concentration held for male non-survivors, at a somewhat lower but still dominant share.</figcaption>
      </figure>

      <h2>What Didn't Make the Cut — and Why That Matters</h2>

      <p>This analysis deliberately stayed inside class and gender rather than layering in age, family size, fare, or a predictive model — not because those variables wouldn't be interesting, but because I hadn't actually run that analysis, and I'd rather publish a narrower, fully-verified piece than pad it with claims I can't back with real numbers.</p>

      <p>One small example of that same discipline, straight from the original report: one of seven planned visualizations — males onboard broken down by class (22.3% First, 21.9% Second, 55.8% Third) — exists only as reported percentages in the source document. No chart asset was ever produced for it, so I'm not fabricating one here either; I'm stating the numbers as text, exactly as the original report does.</p>

      <h2>Try It Yourself</h2>

      <p>The dataset is publicly available on <a href="https://www.kaggle.com/competitions/titanic" target="_blank" rel="noopener noreferrer">Kaggle, under the Titanic: Machine Learning from Disaster competition</a>. It's a genuinely good starting project for anyone learning data cleaning, segmentation, or exploratory data analysis — small enough to fully understand by hand before you ever touch a model.</p>

      <p>The full interactive breakdown — all 7 Tableau visualizations, cross-checkable chart by chart — is on <a href="/projects/titanic-survival-analysis">the complete Voyage of Fate project page</a>.</p>

      <h2>Frequently Asked Questions</h2>

      <p><strong>Did being a woman guarantee survival on the Titanic?</strong><br/>
      No. Being a woman dramatically increased survival probability — 75.5% versus 20.5% for men — but class still mattered. Third Class accounted for 85.9% of all female passengers in the sample who did not survive.</p>

      <p><strong>Was "women and children first" actually followed?</strong><br/>
      Largely, for women — female passengers survived at nearly four times the rate of male passengers. This project analyzed class and gender specifically, not age, so this data alone can't confirm the "children" half of that claim.</p>

      <p><strong>What was the overall Titanic survival rate?</strong><br/>
      Two numbers, reported separately: 40.6% among the 714 passengers with complete records analyzed, versus a historical estimate of roughly 31.9% for all ~2,224 people aboard.</p>

      <p><strong>Is this a machine learning prediction model?</strong><br/>
      No — this is an exploratory data analysis project built in Tableau, not a predictive ML model. It answers what happened and to whom, not what will happen next.</p>

      <p><strong>Is the Titanic dataset good for beginners in data science?</strong><br/>
      Yes. It's small, well-documented, and has a clear binary outcome, making it a common first project for practicing data cleaning and exploratory analysis.</p>
    `
  },
  {
    slug: "crypto-arbitrage-scanner-trading-fees",
    title: "Building a Crypto Arbitrage Scanner That Actually Accounts for Fees",
    excerpt: "Most crypto arbitrage tutorials ignore trading fees entirely. Here's how ArbitrageIQ calculates real net profit across 5 exchanges -- and a fee-table bug that was silently defaulting two of them to the wrong rate.",
    date: "2026-05-20",
    readTime: "8 min read",
    type: "case-study",
    tags: ["Data Engineering", "Crypto", "System Design"],
    coverImage: "/projects/arbitrageiq/hero-dashboard.png",
    mediumUrl: null,
    faq: [
      { q: "Does ArbitrageIQ give investment advice?", a: "No. ArbitrageIQ is a decision-support scanner that surfaces detected price discrepancies after fees -- it does not execute trades automatically and this article describes how the system's own detection logic works, not a recommendation to trade." },
      { q: "What's the difference between gross spread and net arbitrage profit?", a: "Gross spread is the raw price difference between two exchanges. Net profit subtracts trading fees from both the buy and sell leg, plus a withdrawal fee -- in ArbitrageIQ's own illustrative example, a 0.25% gross spread shrank to roughly 0.10% net profit once all three fees were applied." },
      { q: "Why do crypto exchanges have different trading fees?", a: "Fees vary by exchange based on business model, volume tier, and order type. Because of this variation, a fee-aware arbitrage system needs an explicit, accurate fee entry for every exchange -- a single global assumption isn't safe, which is exactly what caused the OKX/Gate bug described in this piece." },
      { q: "What tools are used to build a crypto arbitrage scanner?", a: "ArbitrageIQ uses Python with the ccxt library for exchange connectivity, SQLite for scan history, Streamlit for the live dashboard, and a Telegram bot for real-time alerts." },
      { q: "How many exchanges does ArbitrageIQ monitor?", a: "Five: Binance, KuCoin, Bybit, OKX, and Gate, across 30 trading symbols, with a 0.15% minimum net-profit threshold and a 10-minute default scan interval. The exchange list is deliberately built around real-world accessibility from Nigeria, not a generic 'top exchanges' list -- Kraken, Coinbase, and Bitfinex were excluded due to regional access restrictions." }
    ],
    content: `
      <p>Search "crypto arbitrage bot" and you'll find dozens of tutorials that calculate a "profit opportunity" as simply the price difference between two exchanges. Buy low on Exchange A, sell high on Exchange B, pocket the spread.</p>

      <p>That number is fiction. It's gross spread, not profit -- and the gap between the two is exactly where most beginner arbitrage strategies quietly lose money.</p>

      <p>I built ArbitrageIQ, a live scanner monitoring five exchanges and thirty trading symbols, specifically to solve for net profit -- spread minus every real fee involved -- because gross spread by itself is close to useless as a trading signal.</p>

      <p><em>A quick note before going further: this is a description of how ArbitrageIQ's own detection logic works, not investment advice or a recommendation to trade.</em></p>

      <figure>
        <img src="/projects/arbitrageiq/hero-dashboard.png" alt="ArbitrageIQ live trading terminal dashboard" style="width:100%;border-radius:12px;" />
        <figcaption>The ArbitrageIQ live scanning terminal — Binance-inspired UI, five exchanges tracked in real time.</figcaption>
      </figure>

      <h2>Why Gross Spread Is a Misleading Number</h2>

      <p>Here's a real illustrative case from ArbitrageIQ's own detection logic: a 0.25% gross spread -- the kind of number that looks immediately profitable on a raw price-comparison dashboard -- shrank to roughly 0.10% net profit once trading fees on both legs and a withdrawal fee were applied.</p>

      <p>That's the trap that catches people running arbitrage strategies off of raw price-comparison scripts: the opportunity looks real and evaporates the moment real costs are applied. A scanner that doesn't subtract fees isn't finding arbitrage opportunities -- it's finding noise.</p>

      <h2>The Architecture Behind ArbitrageIQ</h2>

      <p>ArbitrageIQ monitors five exchanges -- Binance, KuCoin, Bybit, OKX, and Gate -- across thirty trading symbols, using 150 concurrent async requests per scan to keep latency low, with a $100k minimum volume filter to avoid low-liquidity slippage. The default scan interval is ten minutes.</p>

      <p>The stack is intentionally simple: Python with <a href="https://github.com/ccxt/ccxt" target="_blank" rel="noopener noreferrer">ccxt</a> for exchange connectivity, SQLite for storing scan history, a Streamlit dashboard for live monitoring, and a Telegram bot for real-time opportunity alerts. The hard part of this project was never the infrastructure -- it was the fee math.</p>

      <h3>Why These Five Exchanges</h3>

      <p>The exchange list wasn't arbitrary. It reflects which major exchanges are actually reliably accessible from Nigeria, where I'm based -- Kraken, Coinbase, and Bitfinex were all excluded due to regional access restrictions. The list was built around real-world accessibility rather than copying a generic "top exchanges" list from another tutorial.</p>

      <h2>The Fee Model: Where the Real Work Happens</h2>

      <p>Every exchange has its own fee schedule, and fees vary by trade type, trading pair, and account tier. Rather than treat fees as a single flat assumption, ArbitrageIQ runs a triple-fee calculation on every candidate opportunity -- a buy-side trading fee, a sell-side trading fee, and a withdrawal fee -- before deciding whether a spread is a real, executable opportunity.</p>

      <h2>The Bug: Two Exchanges Were Silently Using the Wrong Fees</h2>

      <p>While auditing the fee lookup table, I found that OKX and Gate had no entries at all -- meaning any calculation involving those two exchanges was silently defaulting to Binance's fee rate instead of their own.</p>

      <p>This is a dangerous kind of bug precisely because it doesn't throw an error. The scanner kept running, kept producing results, and every one of those results looked plausible. Nothing crashed. Nothing flagged. The only way to catch it was to manually cross-check every exchange's actual applied fee rate against its published rate -- the same verification discipline I apply to every project before numbers go anywhere near a report or a live decision.</p>

      <p>The fix: explicit fee-table entries for every exchange, with researched placeholder rates now in place, flagged for account-tier verification as a next step, and no fallback path that could silently substitute one exchange's rate for another's again.</p>

      <h2>What Counts as a Real Opportunity</h2>

      <p>After fees are subtracted, ArbitrageIQ only surfaces an opportunity if the net spread clears a 0.15% minimum profitability threshold -- giving some margin against slippage between the moment an opportunity is detected and the moment a trade could actually execute.</p>

      <figure>
        <img src="/projects/arbitrageiq/control-panel.png" alt="ArbitrageIQ scanner control panel showing threshold, interval, and watchlist settings" style="width:100%;border-radius:12px;" />
        <figcaption>The scanner control panel — threshold, interval, and watchlist all configurable, not hardcoded.</figcaption>
      </figure>

      <p>This threshold matters because crypto order books move fast. A spread that's real at the moment of the scan can shrink or disappear by the time an order is placed, especially on lower-liquidity pairs.</p>

      <h2>Async Concurrency: Why 150 Requests at Once</h2>

      <p>Querying five exchanges across thirty symbols sequentially would be far too slow to catch time-sensitive opportunities. Running 150 concurrent async requests lets the scanner check all exchange/symbol combinations close to simultaneously, so the price snapshot used for arbitrage calculations reflects a genuinely comparable moment in time across exchanges, rather than comparing a fresh Binance price against a KuCoin price fetched thirty seconds earlier.</p>

      <figure>
        <img src="/projects/arbitrageiq/telegram-alert.png" alt="Real Telegram alert from ArbitrageIQ showing a detected opportunity" style="width:100%;border-radius:12px;" />
        <figcaption>A real Telegram alert — the scanner reaches your phone the moment a net-positive opportunity clears the threshold.</figcaption>
      </figure>

      <h2>Being Honest About What the Data Can and Can't Say Yet</h2>

      <p>ArbitrageIQ's current opportunity log holds 15 logged opportunities from roughly a 15-hour observation window. Early tier breakdowns exist (roughly a fifth of logged opportunities landing in the high, ≥0.5% tier), but that sample is explicitly too small to support a reliable claim about which exchange tends to be cheapest or how often high-tier opportunities really occur. I'd rather publish that limitation plainly than imply a pattern the data doesn't yet support.</p>

      <p>The system is also, honestly, a decision-support tool rather than a fully automated trading system -- executing on a detected opportunity still requires manual action or a separate trading bot, and the current Streamlit Cloud deployment scans on-demand while the dashboard session is active, not continuously in the background.</p>

      <h2>What This Project Reinforced</h2>

      <p>The infrastructure for a crypto arbitrage scanner isn't the hard part -- connecting to exchange APIs, storing results, sending alerts, all of that is well-trodden ground. The actual differentiator is whether the numbers the system reports are real. A scanner that reports gross spread as "profit" isn't wrong in an obvious way; it's wrong in a way that looks completely normal until someone checks the fee math by hand.</p>

      <p>That's the same lesson that shows up across every project I build: the system is rarely where things quietly go wrong. It's the unverified assumption sitting underneath it.</p>

      <h2>Frequently Asked Questions</h2>

      <p><strong>Does ArbitrageIQ give investment advice?</strong><br/>
      No. ArbitrageIQ is a decision-support scanner that surfaces detected price discrepancies after fees -- it does not execute trades automatically, and this article describes how the system's own detection logic works, not a recommendation to trade.</p>

      <p><strong>What's the difference between gross spread and net arbitrage profit?</strong><br/>
      Gross spread is the raw price difference between two exchanges. Net profit subtracts trading fees from both the buy and sell leg, plus a withdrawal fee -- in ArbitrageIQ's own illustrative example, a 0.25% gross spread shrank to roughly 0.10% net profit once all three fees were applied.</p>

      <p><strong>Why do crypto exchanges have different trading fees?</strong><br/>
      Fees vary by exchange based on business model, volume tier, and order type. A fee-aware arbitrage system needs an explicit, accurate fee entry for every exchange -- a single global assumption isn't safe, which is exactly what caused the OKX/Gate bug described above.</p>

      <p><strong>What tools are used to build a crypto arbitrage scanner?</strong><br/>
      ArbitrageIQ uses Python with the ccxt library for exchange connectivity, SQLite for scan history, Streamlit for the live dashboard, and a Telegram bot for real-time alerts.</p>

      <p><strong>How many exchanges does ArbitrageIQ monitor?</strong><br/>
      Five: Binance, KuCoin, Bybit, OKX, and Gate, across 30 trading symbols, with a 0.15% minimum net-profit threshold and a 10-minute default scan interval.</p>

      <p>Want to see the live dashboard and full technical documentation? <a href="/projects/arbitrageiq">Check out the complete ArbitrageIQ project page →</a></p>
    `
  },
  {
    slug: "random-forest-vs-xgboost-glucoseiq-health-screening",
    title: "Two Models, One Diagnosis: Why I Ran Random Forest AND XGBoost on GlucoseIQ",
    excerpt: "XGBoost hit 88.31% accuracy and a 0.947 ROC-AUC on GlucoseIQ's diabetes screening data. But in a screening context, the model with the higher score isn't automatically the right choice -- here's why recall decided it, not the leaderboard number.",
    date: "2026-06-10",
    readTime: "9 min read",
    type: "case-study",
    tags: ["Machine Learning", "Healthcare", "Model Comparison"],
    coverImage: "/projects/glucoseiq/hero-kpi-strip.png",
    mediumUrl: null,
    faq: [
      { q: "Is XGBoost always better than Random Forest?", a: "Not universally -- performance depends on the dataset, feature types, and tuning. In this project, XGBoost outperformed both Random Forest (86.36% accuracy) and a Logistic Regression baseline (70.78% accuracy), but the comparison was run explicitly across all three rather than assumed in advance." },
      { q: "Why is recall important in medical machine learning models?", a: "Recall measures how many actual positive cases the model correctly identifies. XGBoost's 85.2% recall on the diabetic class meant 8 missed cases out of 54 diabetic patients in the test set -- fewer than Random Forest's 11 missed cases on the same test set. In screening contexts, a missed case typically carries a higher real-world cost than a false alarm." },
      { q: "What accuracy is considered good for a diabetes prediction model?", a: "There's no universal threshold -- it depends on the dataset and how the model will be used. GlucoseIQ's XGBoost model reached 88.31% accuracy, but accuracy alone wasn't the deciding factor; recall on the at-risk class was evaluated separately before the model was selected." },
      { q: "Should I always train multiple models and compare them?", a: "For any use case where errors aren't equally costly in both directions -- which includes most health, safety, or fraud-related predictions -- comparing multiple models past their headline accuracy score is a reasonable practice. This project trained and compared three: Logistic Regression, Random Forest, and XGBoost." },
      { q: "What features are most predictive of diabetes risk in this model?", a: "Insulin was by far the strongest predictor at approximately 46% importance -- more than four times the weight of the next-highest features, SkinThickness and Glucose (both roughly 10-11%). This runs against the common assumption that Glucose alone would dominate a diabetes model." }
    ],
    content: `
      <p><em>This is a data science portfolio project, not a medical diagnostic tool. GlucoseIQ is a screening aid intended to demonstrate model comparison methodology -- it does not replace clinical evaluation, and no prediction from it should be treated as a diagnosis.</em></p>

      <p>Most tutorials pick one algorithm, train it, report the accuracy, and move on. For GlucoseIQ -- a health screening model designed to flag diabetes risk from patient data -- I deliberately trained three: a Logistic Regression baseline, Random Forest, and XGBoost, on the exact same data, with the exact same evaluation criteria.</p>

      <p>The reason wasn't to find a slightly better leaderboard number. It was to make sure the "best" model was actually the right model for a screening context, where the cost of a wrong answer isn't symmetric -- missing a real case of risk is a very different kind of mistake than flagging someone who turns out to be fine.</p>

      <figure>
        <img src="/projects/glucoseiq/hero-kpi-strip.png" alt="GlucoseIQ diabetes risk screening model dashboard" style="width:100%;border-radius:12px;" />
        <figcaption>Three models compared on the same 768-patient dataset — 88.31% accuracy from the model actually selected for deployment.</figcaption>
      </figure>

      <h2>Why Screening Models Aren't Like Other Classification Problems</h2>

      <p>In most classification tasks, accuracy is a reasonable headline number. In health screening, it can be actively misleading.</p>

      <p>GlucoseIQ's dataset -- the well-known Pima Indians Diabetes dataset, 768 patients -- has roughly 35% diabetes prevalence. A model that predicted "no risk" for every patient would score a deceptively high accuracy while missing every actual at-risk case. This is why accuracy was tracked as one signal among several, not the deciding one. Recall -- the percentage of actual at-risk cases correctly identified -- mattered just as much, because a missed case in a screening context has a real-world cost that a false alarm doesn't carry in the same way.</p>

      <h2>Three Models, Head to Head</h2>

      <p>All three models were trained on identical features and identical train/test splits, evaluated against the same metrics, to keep the comparison fair.</p>

      <p><strong>Logistic Regression</strong> (baseline): 70.78% accuracy.<br/>
      <strong>Random Forest</strong>: 86.36% accuracy.<br/>
      <strong>XGBoost</strong>: 88.31% accuracy, 0.947 ROC-AUC, 82.1% precision on the diabetic class, 85.2% recall on the diabetic class -- the strongest result of the three.</p>

      <figure>
        <img src="/projects/glucoseiq/model-comparison.png" alt="Random Forest vs XGBoost vs Logistic Regression accuracy comparison" style="width:100%;border-radius:12px;" />
        <figcaption>Three models tested, one clear winner on the combined metrics that actually mattered.</figcaption>
      </figure>

      <p>On paper, that settles it. XGBoost wins, ship XGBoost. But headline accuracy alone doesn't tell the full story of how a model behaves on the specific cases a screening tool exists to catch.</p>

      <h2>Why I Didn't Stop at the Accuracy Number</h2>

      <p>Before finalizing XGBoost as the model to ship, I broke down recall separately on the test set's 54 diabetic patients: XGBoost missed 8 of them (85.2% recall), while Random Forest missed 11 on the same test set. That gap -- 3 fewer missed diabetic cases -- is the number that actually mattered for a screening use case, more than the roughly 2-point accuracy gap between the two models.</p>

      <figure>
        <img src="/projects/glucoseiq/confusion-matrix-xgb.png" alt="XGBoost confusion matrix showing true positives, false positives, and false negatives" style="width:100%;border-radius:12px;" />
        <figcaption>Where XGBoost succeeds — and where its remaining 8 false negatives are.</figcaption>
      </figure>

      <p>This step is easy to skip, because a single accuracy or ROC-AUC number already feels like a complete answer. It isn't. A deployed model runs at one specific decision threshold, and how it performs there -- particularly on false negatives -- is what actually matters for a screening use case, not how well it separates classes across every hypothetical threshold.</p>

      <figure>
        <img src="/projects/glucoseiq/roc-curve-comparison.png" alt="ROC curve comparison between Random Forest and XGBoost models" style="width:100%;border-radius:12px;" />
        <figcaption>XGBoost's ROC curve confirmed 0.947 AUC — the strongest class-separation of the models compared.</figcaption>
      </figure>

      <h2>What "Best Model" Actually Means Here</h2>

      <p>XGBoost's 88.31% accuracy and 0.947 ROC-AUC represent a strong, well-generalizing model. But the decision to use it wasn't made on those two numbers alone -- it was made after confirming its recall on the at-risk class held up under the same scrutiny, rather than assuming a higher headline score automatically meant a safer model for this specific use case.</p>

      <p>That's a distinction that's easy to gloss over in a portfolio project, but it's exactly the kind of judgment call that separates "I trained a model that scored well" from "I chose a model appropriate for the problem it's solving."</p>

      <h2>What Drove the Predictions</h2>

      <p>Understanding *why* XGBoost made the predictions it did mattered as much as the score itself. Insulin was, by a wide margin, the strongest predictor at roughly 46% importance -- more than four times the weight of the next-highest features, SkinThickness and Glucose (both roughly 10-11%). That's a genuinely useful finding to flag rather than smooth over: it runs against the common assumption that Glucose alone would dominate a diabetes model, and is consistent with <a href="https://www.cdc.gov/diabetes/basics/risk-factors.html" target="_blank" rel="noopener noreferrer">established clinical risk factors for diabetes</a> broadly, even if the relative weighting is a genuinely interesting result worth flagging for clinical review rather than assuming at face value.</p>

      <figure>
        <img src="/projects/glucoseiq/feature-importance-xgb-labeled.png" alt="Feature importance chart from XGBoost diabetes risk model" style="width:100%;border-radius:12px;" />
        <figcaption>Insulin dominates the model's decision weight — more than four times the next-highest feature.</figcaption>
      </figure>

      <h2>Why This Approach Generalizes Beyond Health Data</h2>

      <p>The core lesson from GlucoseIQ isn't specific to diabetes screening or even to healthcare. It applies anywhere the cost of a false negative and a false positive aren't equal -- fraud detection, churn prediction, safety monitoring, quality control. I ran the same discipline on <a href="/articles/churniq-accuracy-false-negatives-bank-churn">ChurnIQ's churn prediction model</a>, where the same principle held: the model with the best single summary metric isn't automatically the right choice. The right choice is the one that performs best on the error type that actually costs the most in context.</p>

      <h2>Frequently Asked Questions</h2>

      <p><strong>Is XGBoost always better than Random Forest?</strong><br/>
      Not universally -- performance depends on the dataset, feature types, and tuning. In this project, XGBoost outperformed both Random Forest (86.36% accuracy) and a Logistic Regression baseline (70.78% accuracy), but the comparison was run explicitly across all three rather than assumed in advance.</p>

      <p><strong>Why is recall important in medical machine learning models?</strong><br/>
      Recall measures how many actual positive cases the model correctly identifies. XGBoost's 85.2% recall meant 8 missed cases out of 54 diabetic patients in the test set, versus Random Forest's 11 missed cases on the same test set. A missed case in a screening context typically carries a higher real-world cost than a false alarm.</p>

      <p><strong>What accuracy is considered good for a diabetes prediction model?</strong><br/>
      There's no universal threshold. GlucoseIQ's XGBoost model reached 88.31% accuracy, but accuracy alone wasn't the deciding factor -- recall on the at-risk class was evaluated separately before the model was selected.</p>

      <p><strong>Should I always train multiple models and compare them?</strong><br/>
      For any use case where errors aren't equally costly in both directions, comparing multiple models past their headline accuracy score is a reasonable practice. This project trained and compared three: Logistic Regression, Random Forest, and XGBoost.</p>

      <p><strong>What features are most predictive of diabetes risk in this model?</strong><br/>
      Insulin was by far the strongest predictor at approximately 46% importance -- more than four times the weight of the next-highest features, SkinThickness and Glucose (both roughly 10-11%).</p>

      <p>Want the full technical breakdown, code, and live model comparison? <a href="/projects/glucoseiq">Check out the complete GlucoseIQ project page →</a></p>
    `
  }
];





