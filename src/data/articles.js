export const articlesData = [
  {
    slug: "debugging-a-production-hotel-booking-platform",
    title: "Debugging a Production Hotel Booking Platform: From Broken Login to Live OAuth",
    excerpt: "A double-hashed password, a monorepo TypeScript build failure, four misconfigured environment variables spread across two hosting platforms, and a client secret typo. Here's how each one got traced and fixed to bring a full-stack booking app fully live.",
    date: "2026-08-07",
    readTime: "9 min read",
    type: "case-study",
    tags: ["Full-Stack", "Debugging", "DevOps", "MERN"],
    coverImage: null,
    mediumUrl: null,
    faq: [
      { q: "Why would a login return 'Invalid Credentials' even with the correct password?", a: "If a password is manually hashed with bcrypt before being saved, and the database model also hashes passwords automatically on save via a pre-save hook, the password gets hashed twice. The stored value becomes a hash of a hash, which can never match a correct plain-text password on login." },
      { q: "What causes a TypeScript monorepo build to fail with a rootDir error?", a: "TS6059 fires when a file gets pulled into the compiled program (usually via an import) that sits outside the directory TypeScript has inferred or been told is the project's rootDir. In a monorepo where a backend package imports shared types from a sibling folder, rootDir needs to be set explicitly to the common parent directory, not left on its default." },
      { q: "Why do environment variables need separate values for local development and production?", a: "Local dev typically points services at localhost URLs, while production needs the real deployed URLs for the frontend and backend to find and trust each other. If a production environment variable is left at its local default, requests can silently fail or get blocked, even though the exact same code works fine locally." },
      { q: "What does an 'invalid_client' error mean during Google OAuth token exchange?", a: "It means the client secret sent to Google's token endpoint doesn't match what Google has on record for that OAuth client ID. This is commonly caused by a copy-paste transcription error, particularly between visually similar characters like lowercase L and uppercase I." },
      { q: "Why can a misconfigured CORS environment variable still work in production?", a: "If the backend's CORS logic includes a wildcard rule allowing any origin from a shared hosting domain (like *.vercel.app), a specific misconfigured origin variable can still be silently bypassed by that wildcard. It's a lucky save, not a real fix, and will break the moment the frontend moves to a custom domain." }
    ],
    content: `
      <p>The app worked. That was the problem.</p>

      <p>Everything ran cleanly on localhost — login, bookings, hotel search. Push to production, and one thing after another quietly broke: authentication, the build pipeline, cross-origin requests, and eventually Google Sign-In. None of it was a single bug. It was five separate, unrelated failures that only showed up once real infrastructure — two separate hosting platforms, a live database, a real OAuth provider — got involved.</p>

      <p>This is the trace-and-fix log for all five, in the order they surfaced.</p>

      <h2><strong>The Login Bug That Wasn't a Login Bug.</strong></h2>

      <p>The first symptom looked simple: sign in with the documented test credentials, get back a 400 and <code>"Invalid Credentials"</code> — every time, correct password included. The instinct is to assume a wrong password or a broken comparison. It was neither.</p>

      <p>A custom seed script had been written to reset a test account's password. It hashed the password manually with bcrypt, then called <code>.save()</code> on the user document. The model already had a Mongoose pre-save hook that hashes any modified password automatically. Calling <code>.save()</code> after a manual hash triggers that hook a second time — the database ends up storing a hash of a hash. No plain-text password, correct or otherwise, will ever compare true against that.</p>

      <p>The fix wasn't a code change at all — it was recognizing that the project's own seed script already did this correctly, assigning a plain-text password and letting the hook hash it exactly once. Re-running that script and wiping the corrupted record resolved it immediately.</p>

      <h2><strong>A Production Build That Only Failed in Production.</strong></h2>

      <p>With login fixed locally, the next deploy to Render failed outright: <code>TS6059: File shared/types.ts is not under rootDir</code>. The file in question hadn't even been touched — it was a shared types file, imported by several backend models, sitting one directory above the backend package in a small monorepo layout.</p>

      <p>TypeScript's <code>rootDir</code> was left unset in the backend's <code>tsconfig.json</code>, so the compiler inferred it narrowly from the backend's own <code>src/</code> folder. The moment it followed an import outside that folder — to the shared types package — it had no valid rootDir left that contained every file in the program, and refused to compile.</p>

      <p>The actual clue was hiding in the start script the whole time: <code>node dist/hotel-booking-backend/src/index.js</code> only makes sense if compiled output preserves the full monorepo path structure. That only happens if <code>rootDir</code> is explicitly set to the monorepo root, one level above the backend package — not left on TypeScript's local default. One line fixed it, and the build finally matched what the start command had been expecting all along.</p>

      <h2><strong>Two Platforms, Four Environment Variables, and a Markdown Link Hiding Inside a URL.</strong></h2>

      <p>Backend on Render, frontend on Vercel — two separate places to misconfigure the same handful of URLs, and both had drifted. The backend's <code>FRONTEND_URL</code> and <code>BACKEND_URL</code> were both still set to their local development defaults in the live environment. Requests were only surviving because the backend's CORS logic had a wildcard rule allowing any <code>*.vercel.app</code> origin through — a lucky save, not a real fix, and one that would have broken the instant a custom domain replaced the default Vercel subdomain.</p>

      <p>The more interesting bug was on the frontend side. Clicking "Continue with Google" silently did nothing — no navigation, no console error, no network request that looked wrong at a glance. Digging into the actual request URL in DevTools showed the real cause: <code>VITE_API_BASE_URL</code> in Vercel was set to a Markdown-formatted link — <code>[https://backend-url](https://backend-url)</code> — instead of a plain URL string. The browser couldn't parse that as an absolute address, so it silently resolved as a relative path back to the frontend's own domain. The button wasn't broken. The URL it was told to visit simply wasn't a URL.</p>

      <p>A classic copy-paste artifact: a link copied out of a chat or markdown document, formatting included, pasted straight into a plain-text config field. Correcting all four variables — and redeploying both platforms — got real cross-origin requests flowing correctly for the first time.</p>

      <h2><strong>Wiring Up Google OAuth, End to End.</strong></h2>

      <p>With the URLs fixed, Google Sign-In progressed further — all the way to a real Google consent screen, correctly branded, correctly scoped. Approving it bounced straight back to the sign-in page with <code>?error=token_exchange</code>.</p>

      <p>Server logs isolated it precisely: <code>invalid_client — the provided client secret is invalid</code>. Every other piece of the OAuth chain — client ID, redirect URI, both platform URLs — was already confirmed correct, since Google had rendered the real consent screen using them. Only the secret itself was wrong.</p>

      <p>The cause turned out to be one character: a lowercase <code>l</code> transcribed as an uppercase <code>I</code> while reading the secret off a screenshot instead of copying it directly. Two characters that are nearly indistinguishable in most UI fonts, in a 28-character machine-generated string with no room for a guess. Regenerating the secret and copying it directly from Google's authoritative credentials file — rather than reading it off a screen — closed the loop. Google Sign-In has worked end to end since.</p>

      <h2><strong>What Actually Made This Debugging Session Hard.</strong></h2>

      <p>None of these five bugs were individually difficult once isolated. What made the session slow was that every one of them was invisible from inside the code itself — they only existed in the gap between local and production: a database that had drifted from what the codebase assumed, a compiler config that quietly disagreed with a start script written for a different assumption, environment variables duplicated across two platforms with no single source of truth, and a secret that was correct everywhere except the one place it needed to be typed by hand.</p>

      <p>The fix for all five was the same discipline, applied five times: stop guessing, read the actual error message or response body precisely, and verify the one specific claim it's making — a stored hash, a compiled file path, a request URL, an OAuth error code — rather than the surrounding assumption about what should be happening.</p>

      <h2><strong>Frequently Asked Questions</strong></h2>

      <p><strong>Why would a login return 'Invalid Credentials' even with the correct password?</strong><br/>
      If a password is manually hashed with bcrypt before being saved, and the database model also hashes passwords automatically on save via a pre-save hook, the password gets hashed twice. The stored value becomes a hash of a hash, which can never match a correct plain-text password on login.</p>

      <p><strong>What causes a TypeScript monorepo build to fail with a rootDir error?</strong><br/>
      TS6059 fires when a file gets pulled into the compiled program (usually via an import) that sits outside the directory TypeScript has inferred or been told is the project's rootDir. In a monorepo where a backend package imports shared types from a sibling folder, rootDir needs to be set explicitly to the common parent directory, not left on its default.</p>

      <p><strong>Why do environment variables need separate values for local development and production?</strong><br/>
      Local dev typically points services at localhost URLs, while production needs the real deployed URLs for the frontend and backend to find and trust each other. If a production environment variable is left at its local default, requests can silently fail or get blocked, even though the exact same code works fine locally.</p>

      <p><strong>What does an 'invalid_client' error mean during Google OAuth token exchange?</strong><br/>
      It means the client secret sent to Google's token endpoint doesn't match what Google has on record for that OAuth client ID. This is commonly caused by a copy-paste transcription error, particularly between visually similar characters like lowercase L and uppercase I.</p>

      <p><strong>Why can a misconfigured CORS environment variable still work in production?</strong><br/>
      If the backend's CORS logic includes a wildcard rule allowing any origin from a shared hosting domain (like *.vercel.app), a specific misconfigured origin variable can still be silently bypassed by that wildcard. It's a lucky save, not a real fix, and will break the moment the frontend moves to a custom domain.</p>

      <p>Want to see it running? <a href="https://hotel-booking-management-system-five.vercel.app" target="_blank" rel="noopener noreferrer">Try the live demo →</a> or <a href="https://github.com/yemifatodu/Hotel-Booking-Management-System" target="_blank" rel="noopener noreferrer">browse the code on GitHub →</a></p>
    `
  },
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
      <p>In 2020, online sales made up 2.48% of Adidas' total US sales. By 2021, that number was 33.87%. A third of all sales, in other words, coming through a channel that barely registered the year before.</p>

      <p>I want to be careful with that stat, because it's the kind of thing that sounds made up even when it's not. So before going further: this comes from a 9,648-row Adidas US sales dataset covering 2020 and 2021, sourced from Kaggle, cleaned in Excel and SQL, and analyzed in Tableau alongside a full SQL query suite. Every number in this piece was re-derived directly from that raw transaction data during a verification pass, not carried over from an earlier calculation. I'll get into why that mattered specifically for this stat later on.</p>

      <figure>
        <img src="/projects/adidas-sales-performance/sales-method-shift.png" alt="Adidas sales method shift from in-store to online, 2020 to 2021" style="width:100%;border-radius:12px;" />
        <figcaption>In-store's share of sales fell from 51.57% to 36.60% in a single year, as online grew from a rounding error to a third of all sales.</figcaption>
      </figure>

      <h2>Setting the Baseline: What 2020 Actually Looked Like</h2>

      <p>Before getting into the shift itself, it's worth sitting with what 2020 looked like on its own terms. Total US sales across the dataset that year came to $182.08M. Of that, in-store purchases made up 51.57% -- just over half. Outlet sales took a meaningful chunk too. Online sales sat at 2.48%, which in dollar terms was a small enough slice that a casual read of the yearly summary could reasonably treat it as noise rather than a real channel.</p>

      <p>That's the point worth holding onto: nothing in the 2020 numbers on their own predicted what was coming. There's no early-warning uptick in the 2020 data that says "this is about to become a third of sales." The shift that shows up in 2021 isn't a continuation of a trend already visible in 2020 -- it's closer to a break.</p>

      <h2>2021: The Year the Channel Mix Flipped</h2>

      <p>By 2021, total sales had grown to $717.82M -- close to quadrupling in a single year, which is itself a number that needs its own explanation eventually, separate from the channel question. Inside that bigger number, online sales came to 33.87% of the total. In-store's share, which had been just over half the year before, dropped to 36.60%.</p>

      <p>Put in dollar terms rather than percentages: online sales grew roughly 52x between the two years. Not 52% -- 52 times. In-store sales also grew in absolute dollars, because total demand across every channel went up, but its share of the pie shrank because online's growth rate so dramatically outpaced it.</p>

      <figure>
        <img src="/projects/adidas-sales-performance/online-sales-growth-chart.png" alt="Adidas online sales growth chart 2020 to 2021" style="width:100%;border-radius:12px;" />
        <figcaption>A 52x dollar increase in online sales -- the single biggest structural shift in the dataset.</figcaption>
      </figure>

      <h2>Why I Didn't Just Report the Percentage and Move On</h2>

      <p>"Online sales went from a rounding error to a third of all sales" is a stat that's easy to state and risky to overstate. Framed as a percentage-point change, 2.48% to 33.87% sounds big but almost abstract. Framed as a roughly 5,200% increase in online's share of total sales, it starts to sound implausible -- like a rounding error or a unit mistake somewhere upstream.</p>

      <p>It isn't either of those things, but the fact that it sounds like it could be is exactly why this particular number went through the same verification pass as every other figure in the project. I traced the online and in-store sales-method totals back to the raw transaction rows for both years, recalculated the shares independently, and cross-checked them against the SQL query output rather than trusting a single spreadsheet formula. A stat this dramatic is precisely the kind that, if it were wrong, would be wrong in a way that looks impressive rather than obviously broken.</p>

      <h2>What This Shift Doesn't Tell You</h2>

      <p>It's worth being honest about the limits of this specific finding too. The channel-mix shift is aggregated across the whole US dataset -- it doesn't, on its own, tell you whether the shift was uniform across all five regions, or concentrated in a few. It also doesn't tell you which retailers captured the online growth versus which ones lost in-store share without gaining it back online. Those are related, real findings from the same project -- Sports Direct's operating profit jumped from $5.8M to $68.5M over the same period, for instance -- but they're separate data points, not proof of a causal link to the channel shift specifically. I'd rather flag that gap than imply a connection the data doesn't directly establish.</p>

      <h2>Why a Shift Like This Changes How You Read Everything Else</h2>

      <p>A structural change this size doesn't stay contained to one line item. Regional performance, retailer profitability, and product-category trends all sit downstream of which channel customers are actually buying through. A region or retailer that looked strong in an in-store-heavy world in 2020 isn't automatically strong once a third of demand has moved somewhere else entirely by 2021 -- and a region or retailer that looked weak in 2020 might simply have been better positioned for where demand was about to go.</p>

      <p>That's part of why I treated this channel shift as its own finding worth verifying carefully on its own terms, rather than a footnote sitting underneath the regional and retailer breakdowns elsewhere in the project. The scale of a structural shift like this is very often the real story in a retail dataset. The regional and retailer numbers are how that story plays out on the ground -- but they're easier to misread if you look at them before understanding the channel shift sitting underneath them.</p>

      <h2>The Broader Pattern, If You're Analyzing Retail Data Elsewhere</h2>

      <p>If there's a lesson here that generalizes past this one dataset, it's this: a percentage-point change and a multiple-of-growth change describe the same underlying shift, but they read completely differently to a reader, and neither one is wrong. 2.48% to 33.87% and "52x" are the same fact told two ways. Reporting both, rather than picking whichever framing sounds more dramatic, is the more honest way to hand a number to someone who's going to make a decision based on it.</p>

      <p>Want the full regional, retailer, and product-level breakdown behind this shift? <a href="/projects/adidas-sales-performance">Check out the complete Adidas Sales project page &rarr;</a></p>
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
  },
  {
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
  },
  {
    slug: "adidas-sales-analysis-verification-retrospective",
    title: "The Adidas Sales Story I Almost Got Wrong",
    excerpt: "Four numbers in a completed BI report didn't match their source data. Here's the verification pass that caught them before anyone else did -- and what it changed about how I build dashboards now.",
    date: "2026-06-25",
    readTime: "7 min read",
    type: "insight",
    tags: ["Data Analysis", "Verification", "Business Intelligence"],
    coverImage: null,
    mediumUrl: null,
    faq: [
      { q: "How do you catch errors in a dashboard before it's published?", a: "By running a dedicated verification pass that traces every displayed number back to its raw source and independently recalculates it, rather than relying on a visual or narrative review of the finished dashboard." },
      { q: "Why can a dashboard look finished but still be wrong?", a: "Visual review checks whether charts render correctly and numbers look internally consistent. It doesn't check whether those numbers actually match their underlying source data -- that requires a separate, deliberate verification step." },
      { q: "What kind of errors are hardest to catch in BI reports?", a: "Errors that are individually plausible -- a growth stat attributed to the wrong category, a quarterly 'highest' label pointing at the wrong quarter -- are harder to catch than obviously broken numbers, because they don't look wrong sitting next to correct data." },
      { q: "How big was the Adidas Sales dataset used in this analysis?", a: "9,648 verified rows covering two years (2020-2021) of US sales -- units sold, revenue, regional breakdowns, and product categories. An early draft cited 9,649 rows; the discrepancy was flagged and documented rather than silently corrected." }
    ],
    content: `
      <p>The dashboard was done. The report was written. Sixteen Tableau visuals rendered correctly, every number looked plausible sitting next to the others. By most reasonable definitions, the Adidas Sales analytics project was finished.</p>

      <p>It wasn't. Four things in that "finished" set of drafts didn't match their actual source data -- and the only reason that mattered is that I found them before anyone else did.</p>

      <p>This isn't the story of the analysis itself. It's the story of what almost went out the door instead.</p>


      <h2>What the Project Actually Was</h2>

      <p>The analysis was built on a 9,648-row Adidas US sales dataset from 2020-2021 -- units sold, revenue, regional breakdowns, retailer performance, and product categories across two pandemic years. The deliverable was a Tableau dashboard, a GitHub report, two Medium articles, and a full SQL query suite behind every regional and retailer breakdown.</p>

      <p>It's the kind of project that looks straightforward once it's built. Clean data, clear questions, sixteen charts that answer them. Nothing about the finished product suggested anything was wrong.</p>

      <h2>The Moment I Almost Skipped</h2>

      <p>Here's the part that's easy to leave out of a portfolio writeup: by the time the dashboards were visually complete, there was a real pull to just call it done. The charts rendered. The numbers looked internally consistent -- nothing jumped out as obviously broken. Everything felt finished.</p>

      <p>That feeling is exactly the trap. A dashboard that looks finished and a dashboard that's actually correct are two different claims, and only one of them can be confirmed by looking at it. Instead of stopping there, I ran a full line-by-line verification pass -- tracing every figure across the report, both Medium articles, and the SQL output back to the raw 9,648-row dataset, rather than trusting that a chart rendering cleanly meant its underlying number was right.</p>

      <h2>What the Verification Pass Found</h2>

      <p>Four things didn't match their source.</p>

      <p>An early draft cited 9,649 rows; the verified count from the source file was 9,648 -- a one-row discrepancy, flagged and left as a documented limitation rather than silently edited. A 2021 total profit figure carried a 1-cent rounding gap, confirmed immaterial and left as-is rather than forced to an artificial exact match.</p>

      <p>The other two were more consequential. A growth claim in an earlier draft attributed "over 400% growth" to Women's Athletic Footwear. Tracing it back to source data showed the real figure belonged to a different category entirely: <strong>Women's Apparel, at 407.37%</strong> growth -- ahead of Men's Athletic Footwear's 353.96%. And a "highest quarter" label for the West region's 2021 performance pointed at Q1; recomputing all four quarters directly from source corrected it to Q2.</p>

      <figure>
        <img src="/projects/adidas-sales-performance/extra-product-profit-by-year-1.png" alt="Adidas product category profit growth by year" style="width:100%;border-radius:12px;" />
        <figcaption>The corrected version — Women's Apparel, not Women's Athletic Footwear, was the real 400%+ grower.</figcaption>
      </figure>

      <p>None of the four were catastrophic on their own. That's what made them dangerous -- each one looked exactly as plausible as the correct numbers sitting right next to it. A reader working through the report or the Medium articles would have had no way to tell which numbers were right and which weren't. The only way to catch the difference was to go back to the source and recalculate, independent of how confident the number already looked.</p>

      <h2>Why This Almost Didn't Get Caught</h2>

      <p>The honest answer is that it almost didn't. The work had already gone through a build phase, a styling phase, a "does this look right" review across two articles and a report. Every one of those passes is a legitimate step -- and none of them would have caught a misattributed growth stat or a mislabeled quarter, because "does this look right" is a visual and narrative check, not a source-of-truth check.</p>

      <p>It took a separate, deliberate step -- one specifically designed to be mechanical rather than impressionistic, tracing every number back to the raw CSV -- to catch what the earlier, more natural-feeling review passes missed.</p>

      <h2>What Changed After This</h2>

      <p>This project is the reason a formal verification pass is now a non-negotiable step before anything ships, not an optional polish step reserved for high-stakes work. Every metric that appears in a final deliverable now gets traced back to its source and independently recalculated -- the SQL query, the notebook, the raw dataset -- regardless of how confident the earlier build process felt.</p>

      <figure>
        <img src="/projects/adidas-sales-performance/total-profit-by-year.png" alt="Adidas verified total profit by year, 2020 to 2021" style="width:100%;border-radius:12px;" />
        <figcaption>The numbers that actually shipped, after verification: $63.4M to $268.8M operating profit, 324.07% growth.</figcaption>
      </figure>

      <p>It's a small amount of extra time relative to the build itself. It's also the single step most likely to catch the kind of error that doesn't announce itself.</p>

      <h2>The Uncomfortable Part Worth Saying Out Loud</h2>

      <p>It would be easy to tell this story as "I caught four small things, no big deal." The more honest version is that a completed-looking, internally consistent, visually polished set of deliverables was one step away from going out with a misattributed growth stat and a mislabeled quarter in it -- and the only thing standing between "looks done" and "actually correct" was a process, not talent or care in the earlier steps.</p>

      <p>That's not the most flattering thing to admit in a portfolio piece built to showcase good work. But it's the more useful thing to say, because it's the actual lesson: confidence in a deliverable and correctness of a deliverable are not the same signal, and conflating them is exactly how errors like this slip through in the first place.</p>

      <h2>Frequently Asked Questions</h2>

      <p><strong>How do you catch errors in a dashboard before it's published?</strong><br/>
      By running a dedicated verification pass that traces every displayed number back to its raw source and independently recalculates it, rather than relying on a visual or narrative review of the finished dashboard.</p>

      <p><strong>Why can a dashboard look finished but still be wrong?</strong><br/>
      Visual review checks whether charts render correctly and numbers look internally consistent. It doesn't check whether those numbers actually match their underlying source data -- that requires a separate, deliberate verification step.</p>

      <p><strong>What kind of errors are hardest to catch in BI reports?</strong><br/>
      Errors that are individually plausible -- a growth stat attributed to the wrong category, a quarterly "highest" label pointing at the wrong quarter -- are harder to catch than obviously broken numbers, because they don't look wrong sitting next to correct data.</p>

      <p><strong>How big was the Adidas Sales dataset used in this analysis?</strong><br/>
      9,648 verified rows covering two years (2020-2021) of US sales. An early draft cited 9,649 rows; the discrepancy was flagged and documented rather than silently corrected.</p>

      <p>Want to see the full corrected dashboard and audit details? <a href="/projects/adidas-sales-performance">Check out the complete Adidas Sales project page →</a></p>
    `
  },
  {
    slug: "adidas-midwest-region-profit-growth",
    title: "The Smallest Region Had the Biggest Growth Number in the Adidas Dataset",
    excerpt: "West brought in the most sales and profit both years. Midwest, starting from the smallest base of any region, posted 1,778% profit growth. Neither number tells the whole story on its own.",
    date: "2026-07-12",
    readTime: "5 min read",
    type: "case-study",
    tags: ["Data Analysis", "Retail", "Regional Analysis"],
    coverImage: "/projects/adidas-sales-performance/profit-change-by-region.png",
    mediumUrl: null,
    faq: [
      { q: "Which Adidas US region had the highest sales and profit?", a: "West, in both 2020 and 2021, growing from about $76.9M to $193.0M in sales. It also held the largest share of 2021 sales at 26.89%." },
      { q: "Which region grew the fastest?", a: "Midwest posted 1,778% year-over-year profit growth, by far the steepest of any region -- but it started from the smallest base of the five regions in 2020." },
      { q: "Does a 1,778% growth number mean Midwest is now the top region?", a: "No. Midwest's 2021 sales share was 17.89%, below West, Northeast, and Southeast. A huge percentage growth off a small base and market leadership are two different things." },
      { q: "How were the five regions ranked by 2021 sales share?", a: "West at 26.89%, Northeast at 20.28%, Southeast at 18.33%, Midwest at 17.89%, and South at 16.61%." }
    ],
    content: `
      <p>West brought in more sales and more profit than any other Adidas US region in both 2020 and 2021 -- growing from roughly $76.9M to $193.0M in sales over the two years. If you were only looking for a winner, that's the headline.</p>

      <p>But it's not the biggest number in the regional breakdown. Midwest posted 1,778% profit growth year over year. Nothing else in the dataset comes close to that figure.</p>

      <figure>
        <img src="/projects/adidas-sales-performance/profit-change-by-region.png" alt="Adidas profit change by region 2020 to 2021" style="width:100%;border-radius:12px;" />
        <figcaption>Midwest's growth rate dwarfs every other region — but the story doesn't end there.</figcaption>
      </figure>

      <p>So which one actually matters? Depends what you're trying to answer.</p>

      <h2>Two Numbers, Two Different Questions</h2>

      <p>West's $193.0M answers "who's the biggest region." Midwest's 1,778% answers "who grew the fastest." Those aren't competing claims about the same thing, even though they get compared like they are all the time in business reporting.</p>

      <p>Midwest started 2020 from the smallest base of the five regions. A region that small can post a triple-digit or even four-digit percentage jump off a relatively modest dollar increase, just because the denominator is tiny. That's not a knock on the number -- 1,778% growth is real growth, and whatever drove it is worth understanding. But it's not the same claim as "Midwest is winning."</p>

      <figure>
        <img src="/projects/adidas-sales-performance/regional-profit-comparison.png" alt="Adidas regional profit comparison across five US regions" style="width:100%;border-radius:12px;" />
        <figcaption>West's absolute lead versus Midwest's relative growth rate — both real, both partial.</figcaption>
      </figure>

      <h2>Where Midwest Actually Landed</h2>

      <p>By 2021, Midwest held 17.89% of total sales -- fourth of the five regions, behind West (26.89%), Northeast (20.28%), and Southeast (18.33%), just ahead of South at 16.61%. A 1,778% grower sitting fourth out of five isn't a contradiction. It just means growth rate and market share answer different questions, and neither one is the "real" story by itself.</p>

      <p>If a stakeholder only saw the percentage, they'd probably assume Midwest had become a regional leader. If they only saw the sales share, they might miss that something genuinely unusual happened there between 2020 and 2021. Reporting both side by side, rather than picking whichever one sounds more impressive, is the only way to give an honest picture.</p>

      <p>Curious about the full regional and retailer breakdown? <a href="/projects/adidas-sales-performance">Check out the complete Adidas Sales project page →</a></p>
    `
  },
  {
    slug: "random-forest-vs-xgboost-practical-comparison",
    title: "Random Forest vs. XGBoost: A Practical Comparison From Two Real Projects",
    excerpt: "Not a benchmark on a toy dataset -- a comparison of Random Forest and XGBoost across two real, deployed projects: bank churn prediction and diabetes risk screening.",
    date: "2026-07-20",
    readTime: "10 min read",
    type: "case-study",
    tags: ["Machine Learning", "Model Comparison", "XGBoost"],
    coverImage: "/projects/glucoseiq/model-comparison.png",
    mediumUrl: null,
    faq: [
      { q: "Is XGBoost always better than Random Forest?", a: "No. In the one direct comparison run here -- GlucoseIQ -- XGBoost outperformed Random Forest by a meaningful margin. In practice, results vary based on dataset characteristics: feature interactions, class balance, dataset size, and noise level all influence which algorithm performs better on a given problem." },
      { q: "When should you use Random Forest instead of XGBoost?", a: "Random Forest is a strong choice for a fast, reasonably tuned baseline, especially on smaller or noisier datasets where it is less prone to overfitting without extensive hyperparameter tuning." },
      { q: "When should you use XGBoost instead of Random Forest?", a: "XGBoost is worth testing when Random Forest performance plateaus, particularly on datasets with a dominant but noisy feature." },
      { q: "What is the main difference between Random Forest and XGBoost?", a: "Random Forest builds many decision trees independently and averages their predictions (bagging). XGBoost builds trees sequentially, with each new tree specifically correcting the errors of the ones before it (boosting)." },
      { q: "Does the winning algorithm automatically mean the model is ready to use?", a: "No. In both projects compared here, the algorithm with the higher accuracy or ROC-AUC still had to be evaluated on recall for the specific class that mattered most." }
    ],
    content: `CONTENT_PLACEHOLDER`
  },
];