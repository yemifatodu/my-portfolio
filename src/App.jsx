import { Routes, Route, Link, Navigate } from "react-router-dom";
import { projectData } from "./data/projects";
import ProjectPage from "./pages/ProjectPage";
import ChurnIQPage from "./pages/ChurnIQPage";
import GlucoseIQPage from "./pages/GlucoseIQPage";
import ArbitrageIQPage from "./pages/ArbitrageIQPage";
import AdidasSalesPage from "./pages/AdidasSalesPage";
import TitanicSurvivalPage from "./pages/TitanicSurvivalPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlePage from "./pages/ArticlePage";
import ResumeRedirect from "./pages/ResumeRedirect";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { 
  Github, Linkedin, Sun, Moon, Globe, Menu, X, ChevronUp, 
  Mail, Phone, Award, Code, Database, Brain, 
  Layers, Zap, Sparkles, ArrowRight, ExternalLink, Newspaper
} from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function PortfolioPreview() {
  const [theme, setTheme] = React.useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [expandedAbout, setExpandedAbout] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reduceMotion = useReducedMotion();

  const toolsData = [
    { name: "Next.js / React", level: 90, link: "https://huuboi.com", description: "Modern frontend framework" },
    { name: "Supabase / PostgreSQL", level: 85, link: "https://huuboi.com", description: "Backend & database" },
    { name: "Vercel / AWS", level: 90, link: "https://huuboi.com", description: "Deployment & hosting" },
    { name: "Python (ML / Automation)", level: 75, link: "https://github.com/yemifatodu/Python-Certification-Repos", description: "Data science & scripting" },
    { name: "SQL Server & T-SQL", level: 80, link: "https://github.com/yemifatodu/SQL-Certification-Repos", description: "Enterprise databases" },
    { name: "Tableau / Power BI", level: 75, link: "https://tabsoft.co/3QUmmCz", description: "Business intelligence" }
  ];

  const testimonials = [

    {
      quote: "Clear communication, excellent dashboards, and timely delivery. He didn't just deliver descriptive visualizations; he architected a baseline workflow that automated long-term asset evaluations.",
      author: "Corporate Client",
      role: "Business Analytics Initiative",
      rating: 5
    },
    {
      quote: "Working with Yemi on the Huuboi platform was transformative. He brought a rare combination of data science rigor and full-stack engineering that turned complex requirements into a seamless product.",
      author: "Travel Industry Partner",
      role: "Global Distribution Network",
      rating: 5
    }
  ];

  return (
    <Routes>
      <Route path="/projects/churniq" element={<ChurnIQPage />} />
      <Route path="/projects/glucoseiq" element={<GlucoseIQPage />} />
      <Route path="/projects/arbitrageiq" element={<ArbitrageIQPage />} />
      <Route path="/projects/adidas-sales-performance" element={<AdidasSalesPage />} />
      <Route path="/projects/titanic-survival-analysis" element={<TitanicSurvivalPage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
      <Route path="/resume" element={<ResumeRedirect />} />
      <Route path="*" element={<>
        <Helmet>
          <title>Opeyemi Fatodu | Data Scientist & Full-Stack Developer</title>
          <meta name="description" content="Opeyemi Ebenezer Fatodu is a Data Scientist, Full-Stack Developer, and tech founder with deep expertise in machine learning, analytical architectures, custom data pipelines, and interactive production tools." />
          <meta name="keywords" content="Data Scientist, Full-Stack Developer, Machine Learning Engineer, Business Intelligence Analyst, Predictive Analytics Consultant, SQL Data Analyst, Tableau Dashboard Developer, Remote Data Scientist, Python Data Science, Web Application Architecture" />
          <meta name="author" content="Opeyemi Ebenezer Fatodu" />
          <meta property="og:title" content="Opeyemi Fatodu | Data Scientist & Full-Stack Developer" />
          <meta property="og:description" content="Explore advanced projects, predictive analytical systems, and software engineering portfolios created by Opeyemi Fatodu." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yemifatodu.online" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Opeyemi Fatodu | Data Scientist & Full-Stack Developer" />
          <meta name="twitter:description" content="Machine Learning, Business Intelligence, Data Pipelines — portfolio and real-world system architecture blueprints." />
          <link rel="canonical" href="https://yemifatodu.online" />
        </Helmet>

        <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
          <main role="main">

            {/* ─── Navbar ─── */}
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-colors">
              <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Yemi Fatodu
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-200 dark:border-emerald-800/50">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    Available for work
                  </span>
                </div>
                
                <nav className="hidden md:flex items-center space-x-6">
                  <button 
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200" 
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                  {['Home', 'About', 'Projects', 'Skills'].map(item => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`} 
                      className="hover:text-teal-500 transition text-sm font-medium relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full" />
                    </a>
                  ))}
                  <Link 
                    to="/articles" 
                    className="hover:text-teal-500 transition text-sm font-medium relative group flex items-center gap-1"
                  >
                    Articles
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full" />
                  </Link>
                  <a 
                    href="https://huuboi.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-teal-400 hover:text-teal-300 font-semibold transition text-sm flex items-center gap-1"
                  >
                    Huuboi.com <ExternalLink size={14} />
                  </a>
                  <div className="relative group">
                    <button className="hover:text-teal-500 transition text-sm font-medium flex items-center gap-1">
                      Contact <ChevronUp size={14} className="rotate-180 group-hover:rotate-0 transition" />
                    </button>
                    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                      <a href="mailto:hello@yemifatodu.online" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm transition">
                        <Mail size={16} className="text-teal-500" />
                        <span>hello@yemifatodu.online</span>
                      </a>
                      <a href="tel:+2347033736377" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm transition border-t border-slate-100 dark:border-slate-800">
                        <Phone size={16} className="text-teal-500" />
                        <span>+234 703 373 6377</span>
                      </a>
                    </div>
                  </div>
                </nav>

                <div className="flex items-center gap-2 md:hidden">
                  <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200" aria-label="Toggle theme">
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                  <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 hover:text-teal-500 transition" aria-label="Toggle menu">
                    {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col gap-3"
                >
                  {['Home', 'About', 'Projects', 'Skills'].map(item => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`} 
                      className="hover:text-teal-500 transition text-sm font-medium py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                  <Link 
                    to="/articles" 
                    className="hover:text-teal-500 transition text-sm font-medium py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Articles
                  </Link>
                  <a href="https://huuboi.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold text-sm py-1 flex items-center gap-1">
                    Huuboi.com <ExternalLink size={14} />
                  </a>
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                    <a href="mailto:hello@yemifatodu.online" className="text-sm hover:text-teal-500 transition flex items-center gap-2">
                      <Mail size={16} /> Email
                    </a>
                    <a href="tel:+2347033736377" className="text-sm hover:text-teal-500 transition flex items-center gap-2">
                      <Phone size={16} /> Phone
                    </a>
                  </div>
                </motion.div>
              )}
            </header>

            {/* ─── Hero ─── */}
            <section className="max-w-6xl mx-auto py-12 md:py-20 px-6">
              <div className="grid md:grid-cols-[340px_1fr] gap-10 md:gap-14 items-center">

                {/* Portrait */}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  animate={reduceMotion ? false : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative mx-auto md:mx-0 w-56 md:w-full max-w-xs"
                >
                  <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-teal-500/30 hidden md:block" />
                  <img
                    src="/profile.jpg"
                    alt="Opeyemi Ebenezer Fatodu"
                    loading="eager"
                    decoding="async"
                    className="relative w-full aspect-[4/5] object-cover rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl"
                  />
                </motion.div>

                {/* Text */}
                <div className="text-center md:text-left">
                  <motion.h1
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight font-heading"
                  >
                    Opeyemi Ebenezer Fatodu
                  </motion.h1>

                  <motion.h2
                    initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                    animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-sm md:text-base font-medium mb-4 max-w-3xl mx-auto md:mx-0 leading-relaxed text-slate-600 dark:text-slate-300"
                  >
                    Data Scientist &nbsp;|&nbsp; Full-Stack Developer &nbsp;|&nbsp; Business Intelligence Specialist &nbsp;|&nbsp; Founder of Huuboi
                  </motion.h2>

                  <motion.div
                    initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                    animate={reduceMotion ? false : { scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-16 h-0.5 rounded-full mb-5 mx-auto md:mx-0 bg-gradient-to-r from-teal-500 to-teal-300"
                  />

                  <motion.p
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto md:mx-0 mb-5 leading-relaxed"
                  >
                    Building AI-powered software that turns complex data into intelligent business decisions — open to remote, hybrid, and global opportunities.
                  </motion.p>

                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap justify-center md:justify-start gap-2 mb-5"
                  >
                    {["Data Pipelines", "AI Products", "Intelligent Analytics", "Software Engineering"].map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap justify-center md:justify-start gap-3"
                  >
                    <a href="#projects" className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-teal-600 shadow-lg shadow-teal-600/30 hover:bg-teal-500 hover:-translate-y-0.5 transition duration-200">
                      View Projects
                    </a>
                    <a href="/resume" className="px-5 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition duration-200">
                      Download Resume
                    </a>
                    <a href="#contact" className="px-5 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition duration-200">
                      Let's Work Together
                    </a>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ─── About ─── */}
            <section id="about" className="max-w-5xl mx-auto py-12 px-6">
              <span className="block text-xs font-bold tracking-widest uppercase text-teal-500 dark:text-teal-400 mb-2">Background</span>
              <h2 className="text-3xl font-bold mb-6 tracking-tight font-heading">About Me</h2>
              <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm">
                <CardContent className="p-6 md:p-8 text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">

                  
                  <p>I am an AI Developer, Data Scientist, and Machine Learning Engineer passionate about building intelligent software that transforms complex data into practical business solutions. My work combines machine learning, business intelligence, data engineering, and modern web technologies to create applications that help organizations make faster, smarter, and more informed decisions.</p>
                  
                  <p>I specialize in designing end-to-end analytics solutions, from data collection and preprocessing to predictive modeling, interactive dashboards, REST APIs, and production-ready applications. Using technologies such as Python, SQL, Streamlit, FastAPI, and Tableau, I develop scalable platforms that automate workflows, uncover actionable insights, and solve real-world challenges across healthcare, finance, and emerging technologies.</p>
                  
                  <p>My flagship fintech and ML apps include <strong>ChurnIQ</strong>, a bank churn predictor achieving 86.8% accuracy; <strong>GlucoseIQ</strong>, a diabetes risk assessment tool powered by dual Random Forest and XGBoost models; and <strong>ArbitrageIQ</strong>, a live crypto arbitrage tracker that scans multiple exchanges and delivers real-time alerts via Telegram. Each is built end-to-end — from model training to a deployed, interactive Streamlit dashboard — and reflects how I approach data science: not as static reports, but as production systems people can actually use.</p>
                  
                  <p>As the founder of Huuboi, I designed a technology framework for digital travel services that integrates international booking workflows, localized transportation modules, and insurance processes into a unified platform. This experience strengthened my ability to bridge data, software engineering, and business strategy while building solutions that scale.</p>
                  
                  <p>I enjoy tackling complex problems, learning emerging technologies, and developing AI-powered products that deliver measurable value. Whether working independently or as part of a multidisciplinary team, my goal is to build software that is technically robust, user-focused, and impactful.</p>
                  
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <button onClick={() => setExpandedAbout(!expandedAbout)} className="text-teal-500 dark:text-teal-400 font-semibold hover:underline text-sm flex items-center gap-2">
                      {expandedAbout ? '▼ Hide' : '▶ View'} Huuboi Skills Breakdown
                    </button>
                    {expandedAbout && (
                      <div className="mt-4 space-y-4 text-sm">
                        <p className="font-semibold text-slate-800 dark:text-slate-200">Based on my architectural design and development of <a href="https://huuboi.com" target="_blank" rel="noopener noreferrer" className="text-teal-500">Huuboi.com</a>, I have actively demonstrated a sophisticated, multi-disciplinary toolkit. Running a global travel platform solo requires moving far beyond passive data analysis—I execute as a full-stack engineer, data architect, and systems specialist.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-bold text-teal-500">Data & Intelligence</h4>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                              <li><strong>Data-Driven Decision Making:</strong> Architecting a multi-continental travel hub requires analyzing real-time distribution data, pricing corridors, and travel demand.</li>
                              <li><strong>KPI Development & Monitoring:</strong> Integrating financial and engagement layers to track user booking behavior and retention metrics.</li>
                              <li><strong>Data Analytics & Visualization:</strong> Building analytical layouts and state management strategies to track platform usage data.</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-teal-500">AI & Process Automation</h4>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                              <li><strong>Process & Workflow Automation:</strong> Automated content generation pipeline linking structured scripts with spreadsheet state control.</li>
                              <li><strong>AI Product Development:</strong> Integration of AI-powered travel budget planner for real-time cost management.</li>
                              <li><strong>Prompt Engineering:</strong> Fine-tuning prompts to generate original, non-plagiarized, SEO-optimized content at scale.</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-teal-500">Software Engineering & Full-Stack</h4>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                              <li><strong>Full-Stack Web Development:</strong> Using Next.js and React for a modern, responsive user interface.</li>
                              <li><strong>API Design & Integration:</strong> Orchestrating backend layers pulling live data from multiple global sources.</li>
                              <li><strong>Database Design:</strong> Integrating relational architectures to maintain state controls and multi-service hooks.</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-teal-500">Cloud & Infrastructure</h4>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                              <li><strong>Modern Web Hosting:</strong> Pushing staging branches and production deployments through cloud platforms.</li>
                              <li><strong>Supabase:</strong> Database management, secure auth token handling, and backend storage.</li>
                              <li><strong>Vercel:</strong> High-performance edge routing, serverless function processing, and UI hosting.</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-teal-500">Travel Technology</h4>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                              <li><strong>Travel Platform Development:</strong> Creating unified consumer experience across six continents.</li>
                              <li><strong>Travel Marketplace Architecture:</strong> Embedding flight engines, hotels, car rentals, and insurance lookup matrices.</li>
                              <li><strong>Digital Travel Services Integration:</strong> Embedded frameworks for regional eSIM marketplace and cross-border insurance.</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-teal-500">Product Management & Leadership</h4>
                            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                              <li><strong>Startup Leadership:</strong> Standing up a global travel platform independently.</li>
                              <li><strong>Platform Monetization:</strong> Implementing multiple yield vectors including transaction fees, affiliate commissions, and direct sales.</li>
                              <li><strong>MVP Development:</strong> Dissecting complex logistics into simple, immediate platform features.</li>
                            </ul>
                          </div>
                        </div>
                        <p className="font-semibold text-slate-800 dark:text-slate-200 mt-4">By demonstrating these exact components through <a href="https://huuboi.com" target="_blank" rel="noopener noreferrer" className="text-teal-500">Huuboi.com</a>, I prove to global companies that I am not just a data scientist who analyzes clean spreadsheets in isolation. I am an <span className="text-teal-500">advanced systems builder</span> who understands how data structures, automated code execution, and real-world consumer software intersect to generate real enterprise value.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* ─── Articles & Research ─── */}
            <section id="articles" className="max-w-5xl mx-auto py-12 px-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold tracking-tight font-heading">Articles & Research</h2>
                <Link to="/articles" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-teal-500 hover:underline">
                  View all <ArrowRight size={14} />
                </Link>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-8">I build and humanize technical content to clearly map operational intelligence, metric normalization, and deep machine learning strategy for the web.</p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Harnessing Data Science for Diabetes Prediction", link: "https://medium.com/@yemifatodu/harnessing-data-science-for-diabetes-prediction-transforming-healthcare-through-predictive-b57272b224e1" },
                  { title: "The Digital Shift: How COVID-19 Reshaped Adidas Sales", link: "https://medium.com/@yemifatodu/the-digital-shift-how-covid-19-reshaped-adidas-sales-methods-and-what-it-means-for-retailers-6e69e758e62a" }
                ].map(post => (
                  <a key={post.title} href={post.link} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 shadow-sm block group">
                    <h3 className="text-lg font-semibold group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">{post.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 flex items-center gap-1 font-medium">Read on Medium <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span></p>
                  </a>
                ))}
              </div>
              <div className="mt-6 sm:hidden">
                <Link to="/articles" className="inline-flex items-center gap-1 text-sm font-semibold text-teal-500 hover:underline">
                  View all articles <ArrowRight size={14} />
                </Link>
              </div>
            </section>

            {/* ─── Projects ─── */}
            <section id="projects" className="max-w-5xl mx-auto py-16 px-6">
              <span className="block text-xs font-bold tracking-widest uppercase text-teal-500 dark:text-teal-400 mb-2">Selected Work</span>
              <h2 className="text-3xl font-bold mb-8 tracking-tight font-heading">Featured Projects & Deployments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectData.map((project, idx) => {
                  const isHuuboi = project.title.includes("Huuboi");
                  return (
                    <Card
                      key={idx}
                      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                        isHuuboi
                          ? 'md:col-span-2 border-teal-500/40 dark:border-teal-500/30 ring-1 ring-teal-500/10'
                          : 'hover:border-teal-500 dark:hover:border-teal-400'
                      }`}
                    >
                      <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full space-y-6">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className={`text-xs px-2.5 py-0.5 font-bold tracking-wider uppercase rounded-full ${
                              isHuuboi
                                ? 'bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                            }`}>
                              {isHuuboi ? 'Core Flagship Platform' : 'Analytical Model'}
                            </span>
                            {isHuuboi && <Globe size={16} className="text-teal-400 animate-pulse" />}
                          </div>
                          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{project.title}</h3>
                          <p className={`text-slate-500 dark:text-slate-400 text-sm leading-relaxed ${isHuuboi ? "" : "line-clamp-2"}`}>{project.description}</p>
                          
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.tech.map((t) => (
                              <span key={t} className="text-xs px-2.5 py-1 font-medium bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg">{t}</span>
                            ))}
                          </div>
                        </div>
                        {isHuuboi ? (
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          <a href={project.blog} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" size="sm" className="w-full text-xs font-medium border-slate-200 dark:border-slate-800 bg-transparent">Live Portal</Button>
                          </a>
                          <a href={project.dashboard} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" size="sm" className="w-full text-xs font-medium border-slate-200 dark:border-slate-800 bg-transparent">Flight Search</Button>
                          </a>
                          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" size="sm" className="w-full text-xs font-medium border-slate-200 dark:border-slate-800 bg-transparent">Car Rental</Button>
                          </a>
                        </div>
                      ) : (
                        <Link to={`/projects/${project.slug}`} className="w-full">
                          <Button size="sm" className="w-full text-xs font-medium bg-teal-600 text-white hover:bg-teal-500">View Full Project →</Button>
                        </Link>
                      )}
                    </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* ─── Skills / Technology Stack ─── */}
            <section id="skills" className="max-w-5xl mx-auto py-16 px-6">
              <h2 className="text-3xl font-bold mb-2 tracking-tight font-heading">Technology Stack</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-10 text-sm md:text-base">A comprehensive overview of my technical expertise across languages, frameworks, and tools</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Languages */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-100 dark:bg-teal-950/50 rounded-xl">
                      <Code size={20} className="text-teal-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "SQL", "R"].map(item => (
                      <span key={item} className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI & Machine Learning */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-100 dark:bg-teal-950/50 rounded-xl">
                      <Brain size={20} className="text-teal-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">AI & Machine Learning</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "XGBoost", "Scikit-learn", "SHAP"].map(item => (
                      <span key={item} className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-100/70 dark:bg-teal-950/40 rounded-xl">
                      <Database size={20} className="text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Backend</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["FastAPI", "REST APIs", "Node.js"].map(item => (
                      <span key={item} className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-100 dark:bg-teal-950/50 rounded-xl">
                      <Layers size={20} className="text-teal-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Frontend</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Streamlit"].map(item => (
                      <span key={item} className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-100/70 dark:bg-teal-950/40 rounded-xl">
                      <Database size={20} className="text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Databases</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "MongoDB", "Supabase"].map(item => (
                      <span key={item} className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visualization */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-100 dark:bg-teal-950/50 rounded-xl">
                      <Globe size={20} className="text-teal-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Visualization</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Tableau", "Plotly", "Power BI"].map(item => (
                      <span key={item} className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cloud & Tools */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition md:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-teal-100/70 dark:bg-teal-950/40 rounded-xl">
                      <Zap size={20} className="text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Cloud & Tools</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Google Cloud", "Vercel", "GitHub"].map(item => (
                      <span key={item} className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ─── Experience ─── */}
            <section id="experience" className="max-w-5xl mx-auto py-16 px-6">
              <span className="block text-xs font-bold tracking-widest uppercase text-teal-500 dark:text-teal-400 mb-2">Track Record</span>
              <h2 className="text-3xl font-bold mb-8 tracking-tight font-heading">Experience</h2>
              <div className="grid gap-6">
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">Product Incubation</span>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">Founder & System Architect – Huuboi (Global Marketplace)</h3>
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">Production Environment • 2026 – Present</p>
                    <p className="text-slate-500 dark:text-slate-400 mt-3 text-base leading-relaxed">Designed and deployed a unified programmatic flight, reservation, carrier telemetry, and local telecom infrastructure solution. Engineered high-efficiency backend automation algorithms managing large-scale asset indices, layout parameters, and dynamic currency conversions.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">Corporate Internship</span>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">Data Scientist Intern – Remote Job</h3>
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">Remote Infrastructure • 2024</p>
                    <p className="text-slate-500 dark:text-slate-400 mt-3 text-base leading-relaxed">Developed predictive analytics models and performed statistical analysis on healthcare and retail business datasets. Built targeted data workflows, isolated regression feature factors, and deployed live analytical monitors to trace cross-regional KPI vectors.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">Contract Advisory</span>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1">Freelance Data Analyst & BI Consultant</h3>
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">Global Scope • 2023 – Present</p>
                    <p className="text-slate-500 dark:text-slate-400 mt-3 text-base leading-relaxed">Delivered custom interactive reporting matrices, structured database tuning configurations, and predictive pipeline iterations for external clients covering workforce health, logistics, and digital product parameters.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* ─── Education & Certifications ─── */}
            <section id="certifications" className="max-w-5xl mx-auto py-16 text-center px-6">
              <h2 className="text-3xl font-bold mb-4 tracking-tight font-heading">Education & Certifications</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">Verified academic credentials, professional certifications, and programmatic code repositories.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-teal-500 transition shadow-sm font-medium text-sm">
                  <Linkedin size={20} className="text-[#0077B5]" /><span className="tracking-tight">LinkedIn</span>
                </a>
                <a href="https://github.com/yemifatodu/EDUCATION-CERTIFICATE?tab=readme-ov-file#education-certificate" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-teal-500 transition shadow-sm font-medium text-sm">
                  <Github size={20} /><span className="tracking-tight">Education & Certifications</span>
                </a>
              </div>
            </section>

            {/* ─── Testimonials ─── */}
            <section id="testimonials" className="max-w-5xl mx-auto py-12 px-6">
              <h2 className="text-3xl font-bold mb-8 tracking-tight font-heading">Testimonials</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, idx) => (
                  <Card key={idx} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm">
                    <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full">
                      <p className="italic text-slate-600 dark:text-slate-300 text-sm leading-relaxed">"{testimonial.quote}"</p>
                      <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <p className="font-bold text-sm tracking-tight font-heading">{testimonial.author}</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* ─── Contact ─── */}
            <section id="contact" className="max-w-5xl mx-auto py-20 text-center px-6">
              <span className="block text-xs font-bold tracking-widest uppercase text-teal-500 dark:text-teal-400 mb-2">Get in Touch</span>
              <h2 className="text-3xl font-bold mb-4 tracking-tight font-heading">Let's Build Together</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-10 text-sm md:text-base">Initiate a global deployment or project audit across any of these verified communication channels.</p>
              <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
                <a href="https://github.com/yemifatodu" target="_blank" rel="noopener noreferrer" className="relative group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-md transition transform hover:-translate-y-0.5" aria-label="GitHub">
                  <Github size={22} />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition shadow-md whitespace-nowrap z-10">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/yemi-fatodu/" target="_blank" rel="noopener noreferrer" className="relative group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-md transition transform hover:-translate-y-0.5" aria-label="LinkedIn">
                  <Linkedin size={22} className="text-[#0077B5]" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition shadow-md whitespace-nowrap z-10">LinkedIn</span>
                </a>
                <a href="https://medium.com/@yemifatodu" target="_blank" rel="noopener noreferrer" className="relative group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-md transition transform hover:-translate-y-0.5" aria-label="Medium">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4v16h20V4H2zm15.5 12.5c-1.7 0-3-2.1-3-4.5s1.3-4.5 3-4.5 3 2.1 3 4.5-1.3 4.5-3 4.5zm-5.5 0c-1.4 0-2.5-2.1-2.5-4.5s1.1-4.5 2.5-4.5 2.5 2.1 2.5 4.5-1.1 4.5-2.5 4.5zM5.8 15.9c-.9 0-1.8-1.7-1.8-3.9s.9-3.9 1.8-3.9 1.8 1.7 1.8 3.9-.9 3.9-1.8 3.9z" /></svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition shadow-md whitespace-nowrap z-10">Medium</span>
                </a>
                <a href="https://bit.ly/X-YEMIFATODU" target="_blank" rel="noopener noreferrer" className="relative group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-md transition transform hover:-translate-y-0.5" aria-label="X">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.19 8.21L23 22h-6.77l-5.29-6.89L4.8 22H1.7l7.68-8.77L1 2h6.94l4.78 6.26L18.9 2z" /></svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition shadow-md whitespace-nowrap z-10">X (Twitter)</span>
                </a>
                <a href="https://bit.ly/YEMIFATODU" target="_blank" rel="noopener noreferrer" className="relative group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-md transition transform hover:-translate-y-0.5" aria-label="YouTube">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF0000]"><path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.6 3.7 12 3.7 12 3.7s-7.6 0-9.5.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 0 12a30 30 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2c1.9.5 9.5.5 9.5.5s7.6 0 9.5-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 24 12a30 30 0 0 0-.5-5.8zM9.6 15.5v-7l6.4 3.5-6.4 3.5z" /></svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition shadow-md whitespace-nowrap z-10">YouTube</span>
                </a>
                <a href="https://www.upwork.com/freelancers/~013e5a1a04e2af9d1b" target="_blank" rel="noopener noreferrer" className="relative group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-md transition transform hover:-translate-y-0.5" aria-label="Upwork">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#14A800]"><path d="M17.6 7.3c-1.6 0-2.7.9-3.5 2.4-.8-1.5-1.7-3.4-2.3-5.1H9.2v7.8c0 1.5-.8 2.4-2.1 2.4s-2.1-.9-2.1-2.4V4.6H2.8v7.9c0 2.9 1.8 4.8 4.3 4.8s4.3-1.9 4.3-4.8v-2.1c.6 1.2 1.3 2.5 1.9 3.6.8 1.4 2 3.3 4.3 3.3 2.7 0 4.5-1.9 4.5-4.7 0-2.7-1.8-4.6-4.4-4.6z" /></svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition shadow-md whitespace-nowrap z-10">Upwork</span>
                </a>
                <a href="https://www.fiverr.com/yemi_fatodu" target="_blank" rel="noopener noreferrer" className="relative group p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-md transition transform hover:-translate-y-0.5" aria-label="Fiverr">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#1DBF73]"><path d="M14.3 3.1c-3.1 0-5.1 1.7-5.1 5.1v1.2H7v3.2h2.2V21h3.6v-8.4h3l.6-3.2h-3.6V8.3c0-1.1.5-1.7 1.6-1.7h2V3.1h-2.1z" /></svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition shadow-md whitespace-nowrap z-10">Fiverr</span>
                </a>
              </div>
            </section>

            {/* ─── Footer ─── */}
            <footer className="text-center text-slate-400 dark:text-slate-500 text-xs py-8 border-t border-slate-200 dark:border-slate-800 max-w-5xl mx-auto px-6">
              © {new Date().getFullYear()} Opeyemi Ebenezer Fatodu. All rights reserved.
            </footer>

          </main>
        </div>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 p-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-500 hover:scale-105 transition-all duration-200"
            aria-label="Back to top"
          >
            <ChevronUp size={22} />
          </button>
        )}
      </>} />
    </Routes>
  );
}









