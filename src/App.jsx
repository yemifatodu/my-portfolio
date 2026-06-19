import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Sun, Moon, Globe } from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function PortfolioPreview() {
  const [theme, setTheme] = React.useState('dark');
  
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const reduceMotion = useReducedMotion();

  // Categorized Skills Matrix explicitly matching your strategic domains
  const categorizedSkills = [
    {
      category: "Data & Intelligence",
      items: [
        { name: "Data Science", level: 85 },
        { name: "Business Intelligence (BI)", level: 90 },
        { name: "Machine Learning", level: 70 },
        { name: "Predictive Analytics", level: 80 },
        { name: "Data Visualization", level: 90 },
        { name: "Business Analytics", level: 85 }
      ]
    },
    {
      category: "Engineering & Architecture",
      items: [
        { name: "Full-Stack Development", level: 90 },
        { name: "API Integration", level: 95 },
        { name: "Database Design", level: 85 },
        { name: "Cloud Architecture", level: 85 },
        { name: "Systems Architecture", level: 90 },
        { name: "Scalable Platform Development", level: 85 }
      ]
    },
    {
      category: "AI & Automation",
      items: [
        { name: "AI Product Development", level: 80 },
        { name: "Intelligent Systems Design", level: 75 },
        { name: "Workflow Automation", level: 90 },
        { name: "Personalization Engines", level: 70 }
      ]
    },
    {
      category: "Product & Business",
      items: [
        { name: "Product Strategy", level: 90 },
        { name: "Startup Leadership", level: 95 },
        { name: "Digital Platform Development", level: 90 },
        { name: "Revenue & Monetization Strategy", level: 85 }
      ]
    },
    {
      category: "Travel & Communication Technologies",
      items: [
        { name: "TravelTech Platforms", level: 95 },
        { name: "Telecom Integration", level: 80 },
        { name: "Virtual Communication Systems", level: 75 },
        { name: "Global Digital Infrastructure", level: 85 }
      ]
    }
  ];

  const toolsData = [
    { name: "Next.js / React", level: 90, link: "https://huuboi.com" },
    { name: "Supabase / PostgreSQL", level: 85, link: "https://huuboi.com" },
    { name: "Vercel Deployment Architecture", level: 90, link: "https://huuboi.com" },
    { name: "Python (Pandas, ML, Automation)", level: 75, link: "https://github.com/yemifatodu/Python-Certification-Repos" },
    { name: "SQL Server & T-SQL", level: 80, link: "https://github.com/yemifatodu/SQL-Certification-Repos" },
    { name: "Tableau & BI Dashboards", level: 75, link: "https://tabsoft.co/3QUmmCz" },
    { name: "Excel Advanced Analytics", level: 95, link: "https://github.com/yemifatodu/Excel-Certification-Repos" }
  ];

  const projectData = [
    {
      title: "Huuboi — Global Multi-Service Travel & Digital Infrastructure Ecosystem",
      description: "Personally founded, designed, and architected Huuboi, a production-grade travel hub running across six continents. Built to unify highly fragmented hospitality, telecom, and financial distribution layers, the application natively couples active flight tracking layouts, real-time hotel distribution systems, car rental aggregators, and cross-border travel insurance policies into a single dashboard viewport. Developed a fully customized, automated backend pipeline using structured scripts and Google Sheets state control to automatically generate and index targeted, original, non-plagiarized SEO content at scale.",
      method: "Next.js • React • Full-Stack Architecture • REST API Orchestration • Supabase Relational Architecture • Vercel Edge Serverless Routing • Process Automation • Script-Driven Content Pipelines",
      impact: "Architected an integrated, zero-friction consumer platform delivering high-performance global bookings, regional eSIM marketplaces, and AI budget planners in a unified dashboard layout.",
      role: "Founder & Lead Platform Architect",
      tech: ["Next.js", "React", "Supabase", "Vercel", "API Systems"],
      featured: true,
      blog: "https://huuboi.com",
      dashboard: "https://huuboi.com",
      repo: "https://huuboi.com"
    },
    {
      title: "Diabetes Prediction Model Using Machine Learning in Python",
      description: "This healthcare analytics project involved developing a supervised machine learning model to predict diabetes risk using logistic regression and exploratory data analysis (EDA). Using Python, Pandas, NumPy and statistical modeling techniques, I engineered features and optimized predictive accuracy by 18%. The model identified glucose levels, BMI and age as primary risk indicators, enabling improved early-detection strategies.",
      method: "Python • Pandas • NumPy • Matplotlib • Data Cleaning • EDA • Logistic Regression • Visualization",
      impact: "Improved outcome prediction accuracy by 18%",
      role: "Lead Data Analyst",
      tech: ["Jupyter Notebook", "Streamlit"],
      featured: true,
      blog: "https://medium.com/@yemifatodu/harnessing-data-science-for-diabetes-prediction-transforming-healthcare-through-predictive-b57272b224e1",
      dashboard: "https://github.com/yemifatodu/DIABETESPROJECT-MERI-SKILL#presentation-of-report-and-findings",
      repo: "https://github.com/yemifatodu/DIABETESPROJECT-MERI-SKILL/blob/main/diabetes%20pro.ipynb"
    },
    {
      title: "Retail Sales Data Analysis & Business Intelligence Dashboard (Adidas 2020–2021)",
      description: "Conducted a full-scale sales analytics and business intelligence project analyzing 9,649 retail transactions across five U.S. regions. Using SQL, Excel and Tableau dashboards, I evaluated revenue growth, product performance, operating margins and post-pandemic sales trends.",
      method: "SQL • Excel • Tableau • Data Cleaning • EDA • Dashboarding • Visualization • Regional & Product Analysis • KPI Tracking",
      impact: "Identified top-performing regions driving revenue stability",
      role: "Business Intelligence Analyst",
      tech: ["Excel", "SQL", "Tableau"],
      featured: true,
      blog: "https://medium.com/@yemifatodu/the-digital-shift-how-covid-19-reshaped-adidas-sales-methods-and-what-it-means-for-retailers-6e69e758e62a",
      dashboard: "https://public.tableau.com/app/profile/yemi.fatodu1473/viz/ADIDASPRODUCTSALESANALYSISFORYEAR2020AND2021/Dashboard1",
      repo: "https://github.com/yemifatodu/ADIDAS-PRODUCT-SALES-ANALYSIS-FOR-THE-YEAR-2020-AND-2021#adidas-product-sales-analysis-for-the-year-2020-and-2021"
    },
    {
      title: "Sales Analysis — Data-Driven Marketing Intelligence (Intern Project)",
      description: "I performed end-to-end sales analytics on 185,950 transactions for the year 2019, leveraging SQL, Excel and Tableau to clean, aggregate and visualize data by product, city, month and hour. Key insights included peak sales in December, top revenue products, high-performing cities and temporal trends.",
      method: "SQL • Excel • Tableau • Data Cleaning • EDA • Dashboarding • Visualization • Temporal & Geographic Analysis • Product & Customer Insights",
      impact: "Supported data-driven marketing optimization",
      role: "Data Analyst",
      tech: ["SQL", "Excel", "Tableau"],
      featured: true,
      blog: "https://medium.com/@yemifatodu/the-power-of-data-driven-decision-making-a4edc29eccbc",
      dashboard: "https://public.tableau.com/app/profile/yemi.fatodu1473/viz/MeriSkillInternship1SalesDashBoard/Dashboard1",
      repo: "https://github.com/yemifatodu/Sale_Data_MeriSkill_internship_project"
    },
    {
      title: "Shopper's Trend — Customer Behavior & Retail Analytics",
      description: "Leveraged Excel and Tableau for data cleaning, EDA and visualization to uncover insights on geographic distribution, gender demographics, product category trends, top-selling products, purchase frequency and payment method preferences.",
      method: "Excel • Tableau • Data Cleaning • EDA • Dashboarding • Visualization • Customer Segmentation • Product & Payment Analysis • Trend & Frequency Analysis",
      impact: "Enhanced customer segmentation insights",
      role: "Analytics Consultant",
      tech: ["Python", "EDA", "Visualization"],
      featured: true,
      blog: "https://medium.com/@yemifatodu/understanding-customer-purchase-behavior-a-data-driven-approach-a2c7159691b7",
      dashboard: "https://public.tableau.com/app/profile/yemi.fatodu1473/viz/SHOPPERSTREND/Dashboard1",
      repo: "https://github.com/yemifatodu/SHOPPERS-TREND"
    },
    {
      title: "Voyage of Fate: Titanic Survival Analysis & Predictive Modeling",
      description: "A statistical analysis of Titanic passenger survival patterns using a 714-record dataset. Leveraged Excel and Tableau to examine the impact of passenger class, gender and demographics on survival outcomes. Higher survival rates for first-class passengers and women highlighted socio-economic disparities.",
      method: "Excel • Tableau • Data Cleaning • EDA • Dashboarding • Visualization • Survival Analysis • Class & Gender Impact • Historical Data Interpretation",
      impact: "Highlighted key survival drivers for modeling through descriptive analysis.",
      role: "Data Scientist",
      tech: ["Python", "Statistics", "EDA"],
      featured: true,
      blog: "https://medium.com/@yemifatodu/the-titanic-disaster-8b0183632f9",
      dashboard: "https://public.tableau.com/app/profile/yemi.fatodu1473/viz/TitleVoyageofFateUnravelingtheTitanicTragedy/Dashboard1",
      repo: "https://github.com/yemifatodu/THE-TITANIC-PROJECT-VOYAGE-OF-FATE"
    },
    {
      title: "HR Analytics & Workforce Intelligence — MeriSkill Internship",
      description: "Conducted a comprehensive HR analytics project analyzing workforce data to identify key drivers of employee attrition, overtime trends, tenure impact and performance patterns. Utilized Excel, SQL and Tableau to design interactive dashboards for leadership reporting.",
      method: "Excel • SQL • Tableau • Data Cleaning • EDA • Dashboarding • HR Analytics • Attrition & Performance Insights • Workforce Optimization",
      impact: "Provided retention strategies for HR teams",
      role: "HR Data Analyst",
      tech: ["SQL", "Excel", "Tableau"],
      featured: true,
      blog: "https://medium.com/@yemifatodu/leveraging-data-in-hr-revolutionizing-workforce-management-with-analytics-ba2d363ee40c",
      dashboard: "https://public.tableau.com/app/profile/yemi.fatodu1473/viz/HRAnalysisProjectMeriSkill/Dashboard1",
      repo: "https://github.com/yemifatodu/HR_Analysis_meriSkill_project_Internship"
    }
  ];

  const faqData = [
    {
      question: "What industries does Opeyemi Fatodu specialize in?",
      answer: "I specialize in healthcare analytics, global digital market ecosystems, retail & e-commerce, HR workforce analytics, and enterprise data strategy — delivering advanced insights and production systems across complex global sectors."
    },
    {
      question: "What tools does he use for data analysis?",
      answer: "I work with Python, SQL Server, Excel, Tableau, Pandas, NumPy, and modern engineering tools like React and Next.js to construct responsive data architectures, analytical pipelines, and enterprise systems."
    },
    {
      question: "Is he available for remote data science roles?",
      answer: "Yes! I am actively open to remote Data Scientist, Business Intelligence Analyst, Full-Stack Product Architect, and Analytics Consultant opportunities globally."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Opeyemi Fatodu | Data Scientist & Business Intelligence Specialist</title>
        <meta name="description" content="Opeyemi Ebenezer Fatodu is a Data Scientist, BI Specialist, and tech founder with deep expertise in machine learning, analytical architectures, custom data pipelines, and interactive production tools." />
        <meta name="keywords" content="Data Scientist, Data Analyst, Machine Learning Engineer, Business Intelligence Analyst, Predictive Analytics Consultant, SQL Data Analyst, Tableau Dashboard Developer, Remote Data Scientist, Python Data Science, Web Application Architecture" />
        <meta name="author" content="Opeyemi Ebenezer Fatodu" />
        <meta property="og:title" content="Opeyemi Fatodu | Data Scientist & Business Intelligence Specialist" />
        <meta property="og:description" content="Explore advanced projects, predictive analytical systems, and software engineering portfolios created by Opeyemi Fatodu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-portfolio-two-beta-69.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Opeyemi Fatodu | Data Scientist" />
        <meta name="twitter:description" content="Machine Learning, Business Intelligence, Data Pipelines — portfolio and real-world system architecture blueprints." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <main role="main">

          {/* Banner Hero Viewport */}
          <div className="relative w-full overflow-hidden" style={{ minHeight: "540px" }}>
            <div className="absolute inset-0" style={{ backgroundImage: "url('/Yemi_Fatodu.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
            <div className="absolute inset-0" style={{ background: "rgba(10,15,30,0.68)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.75) 0%, transparent 60%, rgba(2,6,23,0.5) 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0" style={{ height: "90px", background: "linear-gradient(to bottom, transparent, rgba(2,6,23,0.95))", pointerEvents: "none" }} />

            <div className="relative z-50 w-full border-b border-white/10 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
                <span className="text-xl font-bold text-white tracking-tight">Yemi Fatodu</span>
                <nav className="flex items-center space-x-6">
                  <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200" aria-label="Toggle theme">
                    {theme === 'dark' ? <Sun size={18} color="white" /> : <Moon size={18} color="white" />}
                  </button>
                  <a href="#" className="text-white/80 hover:text-white transition text-sm font-medium">Home</a>
                  <a href="#about" className="text-white/80 hover:text-white transition text-sm font-medium">About</a>
                  <a href="#projects" className="text-white/80 hover:text-white transition text-sm font-medium">Projects</a>
                  <a href="https://huuboi.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-semibold transition text-sm flex items-center gap-1">
                    Huuboi.com <span className="text-xs">↗</span>
                  </a>
                  <div className="relative group">
                    <button className="text-white/80 hover:text-white transition text-sm font-medium flex items-center gap-0.5">Contact ▾</button>
                    <div className="absolute right-0 mt-2 w-56 bg-slate-900/95 border border-slate-700/80 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 backdrop-blur-md">
                      <a href="mailto:yemifatodu@gmail.com" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800/80 hover:text-white text-sm rounded-t-xl">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><polyline points="22,6 12,13 2,6" /></svg>
                        Email
                      </a>
                      <a href="tel:+14092695122" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800/80 hover:text-white text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></svg>
                        Mobile Phone
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16">
              <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={reduceMotion ? false : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight" style={{ lineHeight: 1.1 }}>
                Opeyemi Ebenezer <span className="text-indigo-400">Fatodu</span>
              </motion.h1>
              <motion.h2 initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={reduceMotion ? false : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-sm md:text-base font-medium mb-5 max-w-3xl leading-relaxed text-slate-300/90 tracking-wide">
                Data Scientist &nbsp;|&nbsp; Business Intelligence Specialist &nbsp;|&nbsp; Full-Stack Builder &nbsp;|&nbsp; Founder of Huuboi
              </motion.h2>
              <motion.div initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }} animate={reduceMotion ? false : { scaleX: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="w-16 h-0.5 rounded-full mb-6 bg-gradient-to-r from-indigo-400 to-emerald-400" />
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {["Open to Global Engineering Roles", "AI & Custom Data Pipelines", "E-Commerce & Digital Market Analytics"].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/10 border border-white/20 text-slate-200 backdrop-blur-md">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="#skills" className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 hover:-translate-y-0.5 transition duration-200">View Capabilities</a>
                <a href="#projects" className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 border border-white/15 hover:bg-white/10 hover:-translate-y-0.5 transition duration-200 backdrop-blur-sm">Explore Architecture</a>
              </div>
            </div>
          </div>

          {/* Sticky Navigation */}
          <header className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 sticky top-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 z-50 transition-colors">
            <h1 className="text-xl font-bold tracking-tight">Yemi Fatodu</h1>
            <nav className="flex items-center space-x-6">
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent dark:border-slate-800 transition" aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="#" className="hover:text-indigo-500 font-medium text-sm transition">Home</a>
              <a href="#about" className="hover:text-indigo-500 font-medium text-sm transition">About</a>
              <a href="#projects" className="hover:text-indigo-500 font-medium text-sm transition">Projects</a>
              <a href="#skills" className="hover:text-indigo-500 font-medium text-sm transition">Skills</a>
            </nav>
          </header>

          {/* About Section */}
          <section id="about" className="max-w-5xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">About Me</h2>
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm">
              <CardContent className="p-6 md:p-8 text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
                <img src="/profile.jpg" alt="Opeyemi Ebenezer Fatodu" loading="lazy" decoding="async" className="w-32 h-32 md:w-36 md:h-36 mx-auto md:float-left md:mr-8 md:mb-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 object-cover shadow-sm" />
                <p>I am a results-oriented Data Scientist and Business Intelligence Specialist focused on transforming highly fragmented datasets into integrated analytics environments, machine learning pipelines, and active software platforms. I operate at the intersection of data validation, descriptive analysis, and automated application architecture to optimize enterprise growth metrics across consumer services, retail environments, fintech networks, and healthcare sectors.</p>
                <p>My workflow covers advanced SQL architecture, targeted data extraction, predictive exploratory data analysis (EDA), and automated content generation engines. Combining classic analytics stacks with functional front-end engines, I build applications where data models do not just sit passively in reports, but actively control system experiences.</p>
                <p>As the founder of <a href="https://huuboi.com" target="_blank" rel="noopener noreferrer" className="text-indigo-500 dark:text-indigo-400 font-semibold hover:underline">Huuboi</a>, I constructed a comprehensive framework coordinating international booking systems, localized carrier modules, and embedded insurance processing layouts. I turn complex data patterns into dynamic, accessible solutions designed for deep operational impact.</p>
              </CardContent>
            </Card>
          </section>

          {/* Blog Section */}
          <section id="blogs" className="max-w-5xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Data Science Articles & Analytics Insights</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">I build and humanize technical content to clearly map operational intelligence, metric normalization, and deep machine learning strategy for the web.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Harnessing Data Science for Diabetes Prediction", link: "https://medium.com/@yemifatodu/harnessing-data-science-for-diabetes-prediction-transforming-healthcare-through-predictive-b57272b224e1" },
                { title: "The Digital Shift: How COVID-19 Reshaped Adidas Sales", link: "https://medium.com/@yemifatodu/the-digital-shift-how-covid-19-reshaped-adidas-sales-methods-and-what-it-means-for-retailers-6e69e758e62a" }
              ].map(post => (
                <a key={post.title} href={post.link} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 shadow-sm block group">
                  <h3 className="text-lg font-semibold group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">{post.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 flex items-center gap-1 font-medium">Read on Medium <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span></p>
                </a>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="max-w-5xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Featured Projects & Deployments</h2>

            {/* Architectural Focus Callout */}
            <div className="mb-8 p-6 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl text-left">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">Architectural Focus</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                My work on <strong>Huuboi.com</strong> showcases how I build. Instead of looking at data science inside static reports, I deploy active web systems where analytical structures, API connections, database layers, and automated execution engines combine to run consumer-facing platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectData.map((project, idx) => {
                const isHuuboi = project.title.includes("Huuboi");
                return (
                  <Card 
                    key={idx} 
                    className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                      isHuuboi 
                        ? 'md:col-span-2 border-indigo-500/40 dark:border-indigo-500/30 ring-1 ring-indigo-500/10' 
                        : 'hover:border-indigo-500 dark:hover:border-indigo-400'
                    }`}
                  >
                    <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2.5 py-0.5 font-bold tracking-wider uppercase rounded-full ${
                            isHuuboi 
                              ? 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400' 
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}>
                            {isHuuboi ? 'Core Flagship Platform' : 'Analytical Model'}
                          </span>
                          {isHuuboi && <Globe size={16} className="text-indigo-400 animate-pulse" />}
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{project.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{project.description}</p>
                        
                        <div className="space-y-1.5 pt-2 text-xs md:text-sm">
                          <p className="text-slate-600 dark:text-slate-300"><span className="font-semibold text-slate-800 dark:text-slate-200">Architecture & Methods:</span> {project.method}</p>
                          <p className="text-slate-600 dark:text-slate-300"><span className="font-semibold text-slate-800 dark:text-slate-200">Impact Profile:</span> {project.impact}</p>
                          <p className="text-slate-600 dark:text-slate-300"><span className="font-semibold text-slate-800 dark:text-slate-200">Role:</span> {project.role}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tech.map((t) => (
                            <span key={t} className="text-xs px-2.5 py-1 font-medium bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg">{t}</span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <Button variant="outline" size="sm" className="w-full text-xs font-medium border-slate-200 dark:border-slate-800 bg-transparent" onClick={() => window.open(project.blog, "_blank", "noopener,noreferrer")}>
                          {isHuuboi ? "Live Portal" : "Blog Post"}
                        </Button>
                        <Button variant="outline" size="sm" className="w-full text-xs font-medium border-slate-200 dark:border-slate-800 bg-transparent" onClick={() => window.open(project.dashboard, "_blank", "noopener,noreferrer")}>
                          {isHuuboi ? "eSIM Module" : "Dashboard"}
                        </Button>
                        <Button variant="outline" size="sm" className="w-full text-xs font-medium border-slate-200 dark:border-slate-800 bg-transparent" onClick={() => window.open(project.repo, "_blank", "noopener,noreferrer")}>
                          {isHuuboi ? "Insurance Engine" : "Report Link"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Categorized Skills Section */}
          <section id="skills" className="max-w-5xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Core Capabilities Matrix</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-10 text-sm md:text-base">An engineering overview of systems proficiency, analytical methods, and product design domains built through deployment.</p>
            
            <div className="space-y-12">
              {categorizedSkills.map((domain) => (
                <div key={domain.category} className="space-y-4">
                  <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 tracking-tight border-b border-slate-100 dark:border-slate-900 pb-2">{domain.category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {domain.items.map(skill => (
                      <div key={skill.name} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm">
                        <div className="flex justify-between mb-2 items-center">
                          <span className="font-semibold text-sm tracking-tight text-slate-800 dark:text-slate-200">{skill.name}</span>
                          <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-950 rounded-full h-2.5 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: `${skill.level}%` }} 
                            transition={{ duration: 0.8, ease: "easeOut" }} 
                            viewport={{ once: true }} 
                            className="bg-indigo-500 h-2.5 rounded-full" 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data Systems & Frameworks Tools Section */}
          <section id="tools" className="max-w-5xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Data Systems & Frameworks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolsData.map(tool => (
                <a key={tool.name} href={tool.link} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 shadow-sm group">
                  <div className="flex justify-between mb-2 items-center">
                    <span className="font-semibold text-sm tracking-tight group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">{tool.name}</span>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{tool.level}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-950 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${tool.level}%` }} 
                      transition={{ duration: 0.8, ease: "easeOut" }} 
                      viewport={{ once: true }} 
                      className="bg-indigo-500 h-2.5 rounded-full" 
                    />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="max-w-5xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Professional Backing</h2>
            <div className="grid gap-6">
              <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Product Incubation</span>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">Founder & System Architect – Huuboi (Global Marketplace)</h3>
                  <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">Production Environment • 2024 – Present</p>
                  <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm leading-relaxed">Designed and deployed a unified programmatic flight, reservation, carrier telemetry, and local telecom infrastructure solution. Engineered high-efficiency backend automation algorithms managing large-scale asset indices, layout parameters, and dynamic currency conversions.</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Corporate Internship</span>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">Data Scientist Intern – MeriSkill</h3>
                  <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">Remote Infrastructure • 2024</p>
                  <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm leading-relaxed">Developed predictive analytics models and performed statistical analysis on healthcare and retail business datasets. Built targeted data workflows, isolated regression feature factors, and deployed live analytical monitors to trace cross-regional KPI vectors.</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Contract Advisory</span>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">Freelance Data Analyst & BI Consultant</h3>
                  <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">Global Scope • 2023 – Present</p>
                  <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm leading-relaxed">Delivered custom interactive reporting matrices, structured database tuning configurations, and predictive pipeline iterations for external clients covering workforce health, logistics, and digital product parameters.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="max-w-5xl mx-auto py-16 text-center px-6">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Verified Credentials & Code</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">Review explicit programmatic code repositories, verified database credentials, and formal certifications across modern global platforms.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 transition shadow-sm font-medium text-sm">
                <Linkedin size={20} className="text-[#0077B5]" /><span className="tracking-tight">LinkedIn Network</span>
              </a>
              <a href="https://github.com/yemifatodu/EDUCATION-CERTIFICATE?tab=readme-ov-file#education-certificate" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 transition shadow-sm font-medium text-sm">
                <Github size={20} /><span className="tracking-tight">Verified Academic Ledger</span>
              </a>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="max-w-5xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm">
                <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full">
                  <p className="italic text-slate-600 dark:text-slate-300 text-sm leading-relaxed">"Opeyemi demonstrated strong analytical thinking and consistently delivered actionable insights. His approach to modeling risk categories added profound statistical clarity to our operations."</p>
                  <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="font-bold text-sm tracking-tight">Project Supervisor</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">MeriSkill Corporate Cohort</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm">
                <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full">
                  <p className="italic text-slate-600 dark:text-slate-300 text-sm leading-relaxed">"Clear communication, excellent dashboards, and timely delivery. He did not simply deliver descriptive visualizations; he architected a baseline workflow that automated long-term asset evaluations."</p>
                  <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="font-bold text-sm tracking-tight">Corporate Client</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Business Analytics Initiative</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="max-w-5xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              {faqData.map((faq, idx) => (
                <Card key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1.5 tracking-tight">{faq.question}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Layout */}
          <section id="contact" className="max-w-5xl mx-auto py-20 text-center px-6">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Let's Build Together</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-10 text-sm md:text-base">Initiate a global deployment or project audit across any of these verified communication channels.</p>
            <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
              {[
                { label: "GitHub", href: "https://github.com/yemifatodu", icon: <Github size={22} /> },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/yemi-fatodu/", icon: <Linkedin size={22} className="text-[#0077B5]" /> },
                { label: "Medium", href: "https://medium.com/@yemifatodu", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4v16h20V4H2zm15.5 12.5c-1.7 0-3-2.1-3-4.5s1.3-4.5 3-4.5 3 2.1 3 4.5-1.3 4.5-3 4.5zm-5.5 0c-1.4 0-2.5-2.1-2.5-4.5s1.1-4.5 2.5-4.5 2.5 2.1 2.5 4.5-1.1 4.5-2.5 4.5zM5.8 15.9c-.9 0-1.8-1.7-1.8-3.9s.9-3.9 1.8-3.9 1.8 1.7 1.8 3.9-.9 3.9-1.8 3.9z" /></svg> },
                { label: "X (Twitter)", href: "https://bit.ly/X-YEMIFATODU", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.19 8.21L23 22h-6.77l-5.29-6.89L4.8 22H1.7l7.68-8.77L1 2h6.94l4.78 6.26L18.9 2z" /></svg> },
                { label: "YouTube", href: "https://bit.ly/YEMIFATODU", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF0000]"><path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.6 3.7 12 3.7 12 3.7s-7.6 0-9.5.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 0 12a30 30 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2c1.9.5 9.5.5 9.5.5s7.6 0 9.5-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 24 12a30 30 0 0 0-.5-5.8zM9.6 15.5v-7l6.4 3.5-6.4 3.5z" /></svg> },
                { label: "Upwork", href: "https://www.upwork.com/freelancers/~013e5a1a04e2af9d1b", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#14A800]"><path d="M17.6 7.3c-1.6 0-2.7.9-3.5 2.4-.8-1.5-1.7-3.4-2.3-5.1H9.2v7.8c0 1.5-.8 2.4-2.1 2.4s-2.1-.9-2.1-2.4V4.6H2.8v7.9c0 2.9 1.8 4.8 4.3 4.8s4.3-1.9 4.3-4.8v-2.1c.6 1.2 1.3 2.5 1.9 3.6.8 1.4 2 3.3 4.3 3.3 2.7 0 4.5-1.9 4.5-4.7 0-2.7-1.8-4.6-4.4-4.6z" /></svg> },
                { label: "Fiverr", href: "https://www.fiverr.com/yemi_fatodu", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#1DBF73]"><path d="M14.3 3.1c-3.1 0-5.1 1.7-5.1 5.1v1.2H7v3.2h2.2V21h3.6v-8.4h3l.6-3.2h-3.6V8.3c0-1.1.5-1.7 1.6-1.7h2V3.1h-2.1z" /></svg> }
              ].map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="relative group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-md transition transform hover:-translate-y-0.5" aria-label={social.label}>
                  {social.icon}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition shadow-md whitespace-nowrap z-10">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </section>

          <footer className="text-center text-slate-400 dark:text-slate-500 text-xs py-8 border-t border-slate-100 dark:border-slate-900 max-w-5xl mx-auto px-6">
            © 2026 Opeyemi Ebenezer Fatodu — Data Scientist & Business Intelligence Specialist. All rights reserved.
          </footer>

        </main>
      </div>
    </>
  );
}