import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* ------------------------------------------------------------------
   SETTINGS: edit these before publishing
------------------------------------------------------------------- */
const SITE = "https://yemifatodu.online";
const ARTICLES_INDEX = "/articles"; // your article listing route
const PAGE_PATH = "/articles/from-raw-data-to-live-product"; // this article's route (canonical = SITE + PAGE_PATH)
const EMAIL = "info@yemifatodu.online";
const CALENDAR_URL = "https://calendly.com/yemifatodu/20-minutes-intro-call";
const HUUBOI_URL = "https://huuboi.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/yemi-fatodu/";
const GITHUB_URL = "https://github.com/yemifatodu";
// Adjust these slugs to match src/data/projects/*
const CASE_STUDIES = {
  churniq: "/projects/churniq",
  glucoseiq: "/projects/glucoseiq",
  arbitrageiq: "/projects/arbitrageiq",
  adidas: "/projects/adidas-sales-performance",
  titanic: "/projects/titanic-survival-analysis",
};
// Your existing write-ups, linked for internal SEO
const ARTICLES = {
  churniq: "/articles/churniq-accuracy-false-negatives-bank-churn",
  glucoseiq: "/articles/random-forest-vs-xgboost-glucoseiq-health-screening",
  arbitrageiq: "/articles/crypto-arbitrage-scanner-trading-fees",
  adidas: "/articles/digital-shift-covid-19-adidas-sales",
  titanic: "/articles/titanic-survival-analysis-what-determined-survival",
};

/* Two images. Put files in /public/images/ and use paths like "/images/builder-hero.jpg".
   Leave src empty to hide an image. Always write real alt text (it helps SEO and accessibility).
   Use 1600x900 (16:9) or similar, compressed to under ~250 KB (WebP or JPG). */
const IMAGES = {
  hero: {
    src: "",
    alt: "Describe the picture, e.g. Yemi Fatodu working on a laptop in Lagos",
    caption: "",
    width: 1600,
    height: 900,
  },
  inline: {
    src: "",
    alt: "Describe the picture, e.g. Screenshot of the HUUBOI platform homepage",
    caption: "",
    width: 1600,
    height: 900,
    afterSection: "huuboi", // section id after which this image appears
  },
};

/* Author portrait: place yemi-fatodu.webp in /public/images/ */
const AUTHOR_PHOTO = {
  src: "/images/yemi-fatodu.webp",
  alt: "Portrait of Yemi Fatodu, data scientist and full-stack builder",
  width: 720,
  height: 960,
};

const JOB_TITLE_SCHEMA = "Data Scientist, Full-Stack Developer, Business Intelligence Specialist";

const TITLE = "From Raw Data to Live Product: How I Build End to End";
const SEO_TITLE = "Yemi Fatodu | Data Scientist, ML Engineer, Full-Stack Builder";
const META_DESCRIPTION =
  "Yemi Fatodu is a data scientist, ML engineer, and full-stack builder. Read how I turn data into decisions and ship products, including HUUBOI, ChurnIQ, GlucoseIQ, and ArbitrageIQ.";
const PUBLISHED = "2026-10-08";

/* ------------------------------------------------------------------
   ARTICLE CONTENT
   Each paragraph is a string. A { list: [...] } entry renders bullets.
------------------------------------------------------------------- */
const SECTIONS = [
  {
    id: "the-short-version",
    title: "The short version",
    body: [
      "From the outside, it looks ordinary: someone at a desk in Lagos, a laptop, a few windows open, hours ahead. For me, that is where ideas take shape. I clean data, write code, build dashboards, train models, design applications, and fix the things that refuse to work.",
      "My titles have changed along the way: Data Analyst, Data Scientist, BI Developer, ML Engineer, Full-Stack Developer. I no longer think of them as separate careers. They are stages of one path. Understand the problem, work with the information, and build something people actually use.",
      "This article tells that story in full. If you are a recruiter, a founder, or an investor, it should show you how I think, how I work, and what I have shipped. If you only want the highlights, jump to the selected work or to the section on working together.",
    ],
  },
  {
    id: "where-it-started",
    title: "Where it started: curiosity about rows and columns",
    body: [
      "A spreadsheet is just rows and columns until you ask a question of it. Why did sales rise in one quarter and fall in the next? Which customers are worth the most? What is causing people to leave? What should we do with what we have just learned?",
      "That last question is the one that hooked me. Data on its own is inert. The value appears when someone uses it to make a better decision, and I realised early that I enjoyed being the person who connects the two.",
      "My first real projects were exactly that kind of exercise: take a dataset, clean it until it can be trusted, explore it until it starts to talk, and then explain what it says in plain language. Those habits (cleaning carefully, exploring honestly, explaining simply) still sit underneath everything I build today.",
    ],
  },
  {
    id: "what-analytics-taught-me",
    title: "What analytics and BI taught me",
    body: [
      "Analytics taught me to turn curiosity into decisions. A good analysis is not the one with the most charts. It is the one that makes the next action obvious to the person reading it.",
      "Business intelligence sharpened that lesson. A dashboard nobody understands is a failed dashboard, however clever the engineering behind it. Working in tools like Tableau showed me that communication is part of the technical work. Choosing the right chart, ordering the story, and removing everything that distracts from the point are skills, and they take as much practice as writing a query.",
      "My Adidas sales analysis is a clean example. I worked with a Kaggle dataset of 9,648 sales records and turned it into an interactive Tableau Public dashboard, so that someone with no technical background can explore performance by product, region, and retailer without reading a line of code. The goal was never to impress with complexity. It was to make the answer easy to find.",
      "Even small projects reinforce the same discipline. In my Titanic survival analysis, one of the figures I report is that 20.5% of men survived. An earlier draft of that number was wrong. I caught it by checking the figure against the source data before publishing, corrected it, and kept the habit: every number I publish must be traceable to the data it came from. It sounds basic, yet it is the habit that separates analysis people trust from analysis people question.",
    ],
  },
  {
    id: "from-what-happened-to-what-next",
    title: "From “what happened” to “what could happen next”",
    body: [
      "Describing the past is useful. Anticipating the future is where machine learning earns its place. Moving into data science changed the question I asked from “what happened?” to “what is likely to happen, and what could we do about it?”",
      "ChurnIQ is the project that frames this best. Customer churn is one of the most expensive problems a subscription or service business faces, because acquiring a new customer usually costs far more than keeping an existing one. ChurnIQ takes customer data and predicts who is likely to leave. After comparing approaches, the Random Forest model reached 86.80% accuracy with a 0.864 ROC-AUC. In practical terms, that gives a retention team a ranked list of at-risk customers, so effort goes where it is most likely to matter.",
      "GlucoseIQ applies the same thinking to healthcare. It is a diabetes risk prediction project where I trained and compared several models on the same data. XGBoost came out on top at 88.31% accuracy with a 0.947 ROC-AUC, with Random Forest close behind at 86.36% accuracy and 0.945 ROC-AUC. I report both on purpose. Showing the runner-up honestly tells a reader that the choice was made by comparison, not by assumption.",
      "Two lessons from these projects now guide how I model:",
      {
        list: [
          "Accuracy alone is not enough. I look at ROC-AUC and the cost of different kinds of errors, because in churn and healthcare a missed positive and a false alarm do not cost the same.",
          "A model is only finished when someone can use it. A notebook with a good score is a draft. The finished version has an interface, a clear explanation, and a user who can act on the output.",
        ],
      },
    ],
  },
  {
    id: "building-the-product",
    title: "Why analysis was not enough: building the product",
    body: [
      "At some point I noticed a pattern in my own work. I would finish an analysis, hand over a result, and feel that the most interesting part, the part where someone actually uses it, was still ahead and out of my hands. I wanted to build that part too.",
      "So I learned to think like a product builder. Who will use this? What problem do they have right now? What should the product do in the first ten seconds? How should it feel? Those questions led me into front-end and back-end development, and eventually into shipping complete applications on my own.",
      "This is the point where many data people stop, and it is where I think the most leverage sits. A team that can analyse but cannot ship waits on others. A team that can ship but cannot analyse guesses. Being comfortable on both sides means I can take an idea from a raw dataset to a deployed product without a long chain of handoffs.",
    ],
  },
  {
    id: "arbitrageiq",
    title: "ArbitrageIQ: engineering a data pipeline that runs on its own",
    body: [
      "ArbitrageIQ shows what happens when data science meets software engineering. It is a crypto arbitrage scanner that looks for price differences for the same asset across exchanges.",
      "The scanner covers five exchanges (Binance, KuCoin, Bybit, OKX, and Gate) and tracks 30 symbols. It runs asynchronously with up to 150 concurrent requests and repeats its scan every 10 minutes. Fetching that much market data one request at a time would be too slow to be useful, so concurrency was a design requirement from the start, not an optimisation added later.",
      "Building it taught me things no tutorial dataset can: handling rate limits and failed requests, keeping data consistent across sources that format things differently, and designing alerts so that the output is something a person can act on instead of a stream of noise. It also gave me a realistic view of what production data work involves. Data arrives late, APIs misbehave, and the pipeline still has to keep running.",
      "I use ArbitrageIQ as proof that I can build systems, not just models. It is also the foundation for a planned mobile version.",
    ],
  },
  {
    id: "huuboi",
    title: "HUUBOI: a luxury travel platform built end to end",
    body: [
      "HUUBOI is the project where all of this comes together. It is a global luxury travel platform that I am building and shipping on my own, using Next.js, Supabase, and Vercel.",
      "The idea starts from an everyday frustration. Planning a high-end trip means switching between dozens of tabs, from flights and stays to experiences and local detail, and holding the whole plan in your head. HUUBOI aims to bring more of that experience into one place, so people spend less time switching tabs and more time enjoying the trip.",
      "Building it means making decisions across every layer at once: the data model, authentication and storage, the design system, performance, search visibility, and the details of how a luxury product should feel. There is no team to hand a problem to. I own the architecture, the interface, and the launch. That is demanding, and it is also the best training I could ask for in judgement: knowing what to build now, what to defer, and what to cut.",
      "If you are an investor or partner, HUUBOI is the clearest picture of what I can do when the whole product is mine to build. You can see it at huuboi.com.",
    ],
  },
  {
    id: "how-i-work",
    title: "How I work",
    body: [
      "Across analytics, machine learning, and product work, my process has stayed surprisingly consistent.",
      {
        list: [
          "Frame the problem first. I talk to the people who live with it, because a precise question saves weeks of building the wrong thing.",
          "Explore before modelling. I check data quality, test assumptions, and look for what could mislead me before I train anything.",
          "Prototype fast, then measure honestly. A rough version in front of a real user teaches more than a polished plan.",
          "Verify every number. Before anything is published, each metric is checked against the actual source files. I have caught real discrepancies this way more than once.",
          "Ship something usable. The deliverable is a working product or a clear decision, not a folder of experiments.",
          "Work safely. I keep backups before edits and run secret scans before every push, because small habits prevent large mistakes.",
        ],
      },
      "The same stack runs through most of my recent work: Python for data and modelling, React and Next.js for interfaces, Supabase for data and authentication, and Vercel for deployment. This portfolio is itself built with React, Vite, Tailwind, and shadcn/ui, with each case study rendered from a shared template, so that new projects can be added quickly and consistently.",
    ],
  },
  {
    id: "what-i-do",
    title: "What I can do for your team or product",
    body: [
      "If you are deciding whether I am the right fit, here is the plain version of what I offer:",
      {
        list: [
          "Turn data into decisions through analytics, BI, and interactive dashboards.",
          "Build predictive models that answer a business question, such as churn, risk, or demand, and explain them in language a non-technical stakeholder can use.",
          "Ship full-stack products, from database and API to a polished interface, deployed and live.",
          "Automate data-heavy, repetitive workflows with reliable async pipelines and monitoring.",
        ],
      },
      "For recruiters and hiring managers, that means a single person who can move between analysis and engineering. For founders, it means someone who can take a problem from raw data to a working product. For investors and partners, HUUBOI and ArbitrageIQ show that I finish what I start.",
    ],
  },
  {
    id: "still-building",
    title: "Still learning, still building",
    body: [
      "I do not think of this as a finished story. I am still learning, still experimenting, and always working on more than one thing. The work ahead includes new case studies in healthcare and retention, the mobile version of ArbitrageIQ, and the continued growth of HUUBOI.",
      "What stays constant is the starting point. I begin with a question, I let the data answer it honestly, and I keep going until there is something people can use.",
      "I am Yemi Fatodu. I started with data. I became a builder.",
    ],
  },
];

/* ------------------------------------------------------------------
   PAGE
------------------------------------------------------------------- */
const PAGE_URL = SITE + PAGE_PATH;
const OG_IMAGE = IMAGES.hero.src
  ? (IMAGES.hero.src.startsWith("http") ? IMAGES.hero.src : SITE + IMAGES.hero.src)
  : "";
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: META_DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: PAGE_URL,
  ...(OG_IMAGE ? { image: [OG_IMAGE] } : {}),
  author: {
    "@type": "Person",
    name: "Yemi Fatodu",
    url: SITE,
    image: SITE + AUTHOR_PHOTO.src,
    sameAs: [LINKEDIN_URL, GITHUB_URL, "https://x.com/yemi_fatodu"],
    jobTitle: JOB_TITLE_SCHEMA,
  },
};

function Figure({ img, priority }) {
  if (!img || !img.src) return null;
  return (
    <figure className="my-8">
      <img
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-auto w-full rounded-lg border border-stone-300"
      />
      {img.caption && (
        <figcaption className="mt-3 text-base leading-6 text-stone-600">{img.caption}</figcaption>
      )}
    </figure>
  );
}

function Block({ item }) {
  if (typeof item === "string") {
    return <p className="mt-3.5 text-[17px] leading-[1.55] text-stone-800">{item}</p>;
  }
  return (
    <ul className="mt-3.5 list-disc space-y-1.5 pl-6 text-[17px] leading-[1.55] text-stone-800 marker:text-teal-800">
      {item.list.map((li) => (
        <li key={li}>{li}</li>
      ))}
    </ul>
  );
}

export default function FromRawDataToLiveProductPage() {
  return (
    <main className="bg-stone-50 text-stone-900" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <Helmet>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        {OG_IMAGE && <meta property="og:image" content={OG_IMAGE} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        {OG_IMAGE && <meta name="twitter:image" content={OG_IMAGE} />}
        <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
      </Helmet>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-20">
        <header className="max-w-4xl">
          <img
            src={AUTHOR_PHOTO.src}
            alt={AUTHOR_PHOTO.alt}
            width={AUTHOR_PHOTO.width}
            height={AUTHOR_PHOTO.height}
            loading="eager"
            decoding="async"
            className="float-right ml-5 mb-3 w-28 rounded-lg border border-stone-300 object-cover sm:ml-8 sm:w-44 md:w-56"
          />
          <Link to={ARTICLES_INDEX} className="text-base text-teal-800 underline">
            Back to all articles
          </Link>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-[44px]">{TITLE}</h1>
          <p className="mt-4 text-lg leading-[1.55] text-stone-700">
            Data scientist, ML engineer, and full-stack builder. How I went from asking questions of
            spreadsheets to shipping products, and the work that shows it.
          </p>
          <div className="clear-both" />
        </header>

        <div className="mt-10 max-w-4xl">
          <Figure img={IMAGES.hero} priority />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <nav aria-label="Article contents" className="hidden lg:block">
            <div className="sticky top-8">
              <p className="text-base font-semibold text-stone-900">On this page</p>
              <ul className="mt-3 space-y-2 border-l border-stone-300 pl-4 text-base">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-stone-700 hover:text-teal-800 hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <article className="max-w-[68ch]">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id} className="mb-10 scroll-mt-8">
                <h2 className="text-[28px] font-bold leading-tight">{s.title}</h2>
                {s.body.map((item, i) => (
                  <Block key={i} item={item} />
                ))}

                {s.id === IMAGES.inline.afterSection && <Figure img={IMAGES.inline} />}

                {s.id === "huuboi" && (
                  <p className="mt-3.5 text-[17px] leading-[1.55] text-stone-800">
                    <a className="text-teal-800 underline" href={HUUBOI_URL} target="_blank" rel="noopener noreferrer">Visit huuboi.com</a>
                  </p>
                )}
              </section>
            ))}

            <section aria-labelledby="selected-work" className="mb-14">
              <h2 id="selected-work" className="text-[28px] font-bold leading-tight">
                Projects and write-ups mentioned here
              </h2>
              <ul className="mt-6 space-y-6">
                <li>
                  <p className="text-xl font-semibold">HUUBOI</p>
                  <p className="mt-1 text-[17px] leading-[1.55] text-stone-800">
                    Global luxury travel platform on Next.js, Supabase, and Vercel.{" "}
                    <a className="text-teal-800 underline" href={HUUBOI_URL} target="_blank" rel="noopener noreferrer">
                      Visit huuboi.com
                    </a>
                  </p>
                </li>
                <li>
                  <p className="text-xl font-semibold">ChurnIQ</p>
                  <p className="mt-1 text-[17px] leading-[1.55] text-stone-800">
                    Churn prediction with a Random Forest at 86.80% accuracy and 0.864 ROC-AUC.{" "}
                    <Link className="text-teal-800 underline" to={CASE_STUDIES.churniq}>Read the case study</Link>{" · "}<Link className="text-teal-800 underline" to={ARTICLES.churniq}>Read the article</Link>
                  </p>
                </li>
                <li>
                  <p className="text-xl font-semibold">GlucoseIQ</p>
                  <p className="mt-1 text-[17px] leading-[1.55] text-stone-800">
                    Diabetes risk prediction where XGBoost led at 88.31% accuracy and 0.947 ROC-AUC.{" "}
                    <Link className="text-teal-800 underline" to={CASE_STUDIES.glucoseiq}>Read the case study</Link>{" · "}<Link className="text-teal-800 underline" to={ARTICLES.glucoseiq}>Read the article</Link>
                  </p>
                </li>
                <li>
                  <p className="text-xl font-semibold">ArbitrageIQ</p>
                  <p className="mt-1 text-[17px] leading-[1.55] text-stone-800">
                    Async crypto arbitrage scanner across five exchanges and 30 symbols.{" "}
                    <Link className="text-teal-800 underline" to={CASE_STUDIES.arbitrageiq}>Read the case study</Link>{" · "}<Link className="text-teal-800 underline" to={ARTICLES.arbitrageiq}>Read the article</Link>
                  </p>
                </li>
                <li>
                  <p className="text-xl font-semibold">Adidas Sales Dashboard</p>
                  <p className="mt-1 text-[17px] leading-[1.55] text-stone-800">
                    9,648 sales records explored in an interactive Tableau Public dashboard.{" "}
                    <Link className="text-teal-800 underline" to={CASE_STUDIES.adidas}>View the project</Link>{" · "}<Link className="text-teal-800 underline" to={ARTICLES.adidas}>Read the article</Link>
                  </p>
                </li>
                <li>
                  <p className="text-xl font-semibold">Titanic Survival Analysis</p>
                  <p className="mt-1 text-[17px] leading-[1.55] text-stone-800">
                    Exploratory analysis with every figure verified against the source data.{" "}
                    <Link className="text-teal-800 underline" to={CASE_STUDIES.titanic}>View the project</Link>{" · "}<Link className="text-teal-800 underline" to={ARTICLES.titanic}>Read the article</Link>
                  </p>
                </li>
              </ul>
            </section>

            <section id="work-with-me" className="scroll-mt-8 border-t border-stone-300 pt-8">
              <h2 className="text-[28px] font-bold leading-tight">Work with me</h2>
              <p className="mt-3.5 text-[17px] leading-[1.55] text-stone-800">
                I am open to remote contract work in data science, machine learning, and full-stack
                development. If you are hiring, building, or investing, you can{" "}
                <a className="text-teal-800 underline" href={`mailto:${EMAIL}`}>email me</a>
                {CALENDAR_URL && (
                  <>
                    {" "}or{" "}
                    <a className="text-teal-800 underline" href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                      book a 20-minute call
                    </a>
                  </>
                )}
                . You can also find me on{" "}
                <a className="text-teal-800 underline" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {", "}
                <a className="text-teal-800 underline" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
                {", and "}
                <a className="text-teal-800 underline" href="https://x.com/yemi_fatodu" target="_blank" rel="noopener noreferrer">X</a>.
              </p>
            </section>
            <nav
              aria-label="Article navigation"
              className="mt-12 flex flex-wrap gap-3 border-t border-stone-300 pt-8"
            >
              <Link
                to={ARTICLES_INDEX}
                className="inline-flex items-center rounded-xl border border-stone-400 px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                Back to all articles
              </Link>
              <Link
                to="/"
                className="inline-flex items-center rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                Back to homepage
              </Link>
            </nav>
          </article>
        </div>
      </div>
    </main>
  );
}
