import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Sun, Moon } from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";


export default function PortfolioPreview() {
 const [theme, setTheme] = React.useState('dark');
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const reduceMotion = useReducedMotion();
  const skillsData = [
    { name: "Statistical Analysis", level: 75 },
    { name: "Data Mining", level: 70 },
    { name: "SQL", level: 80 },
    { name: "Machine Learning", level: 65 },
    { name: "Communication", level: 85 },
    { name: "Data Interpretation", level: 80 },
    { name: "Problem Solving", level: 75 },
    { name: "Data Management", level: 85 },
    { name: "Business Acumen", level: 65 },
    { name: "Predictive Analysis", level: 80 }
  ];

  const toolsData = [
    { name: "Excel", level: 95, link: "https://github.com/yemifatodu/Excel-Certification-Repos#excel-certification-repos" },
    { name: "Tableau", level: 75, link: "https://tabsoft.co/3QUmmCz" },
    { name: "Python", level: 70, link: "https://github.com/yemifatodu/Python-Certification-Repos#python-certification-repos" },
    { name: "SQL Server", level: 60, link: "https://github.com/yemifatodu/SQL-Certification-Repos#sql-certification-repos" },
    { name: "Google Analytics", level: 55, link: "#" }
  ];

  const projectData = [
    {
      title: "Diabetes Prediction Project",
      description: "Developed a supervised machine learning model to predict the probability of diabetes using Python, Pandas, NumPy, and logistic regression. The project involved full data science workflow: exploratory data analysis (EDA), data cleaning, feature selection, model building, and evaluation with metrics like accuracy, precision, recall, and AUC-ROC. Key insights highlighted glucose levels, BMI, and age as major predictors. Visualizations and dashboards provided clear interpretation of relationships between variables, supporting actionable healthcare insights.",
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
      title: "Adidas Product Sales 2020/21 Report",
      description: "Conducted an end-to-end sales analysis of Adidas data across five U.S. regions to compare 2020 and 2021 performance. Leveraged SQL, Excel, and Tableau to clean, aggregate, and visualize 9,649 rows of data, uncovering insights on regional trends, retailer performance, product category sales, units sold, pricing, and operating profit. Key findings highlighted strong growth in the West and Midwest regions, significant sales and profit increases for Men’s Street Footwear and Women’s Apparel, and evolving consumer price sensitivity post-pandemic, supporting data-driven strategic decisions.",
      method: " SQL • Excel • Tableau • Data Cleaning • EDA • Dashboarding • Visualization • Regional & Product Analysis • KPI Tracking",
      impact: "Identified top-performing regions driving revenue stability",
      role: "Business Intelligence Analyst",
      tech: ["Excel", "SQL", "Tableau"],
      featured: true,
      blog: "https://medium.com/@yemifatodu/the-digital-shift-how-covid-19-reshaped-adidas-sales-methods-and-what-it-means-for-retailers-6e69e758e62a",
      dashboard: "https://public.tableau.com/app/profile/yemi.fatodu1473/viz/ADIDASPRODUCTSALESANALYSISFORYEAR2020AND2021/Dashboard1",
      repo: "https://github.com/yemifatodu/ADIDAS-PRODUCT-SALES-ANALYSIS-FOR-THE-YEAR-2020-AND-2021#adidas-product-sales-analysis-for-the-year-2020-and-2021"
    },
    {
      title: "Sales Analysis(Intern Project)",
      description: "Performed end-to-end sales analysis of 185,950 transactions for 2019, leveraging SQL, Excel, and Tableau to clean, aggregate, and visualize data by product, city, month, and hour. Key insights included peak sales in December, top revenue from MacBook Pro and iPhone, high-performing cities like San Francisco, and temporal trends for targeted marketing and inventory optimization, supporting actionable, data-driven business decisions.",
      method: ": SQL • Excel • Tableau • Data Cleaning • EDA • Dashboarding • Visualization • Temporal & Geographic Analysis • Product & Customer Insights",
      impact: "Supported data-driven marketing optimization",
      role: "Data Analyst",
      tech: ["SQL", "Excel", "Tableau"],
      featured: true,
      blog: "https://medium.com/@yemifatodu/the-power-of-data-driven-decision-making-a4edc29eccbc",
      dashboard: "https://public.tableau.com/app/profile/yemi.fatodu1473/viz/MeriSkillInternship1SalesDashBoard/Dashboard1",
      repo: "https://github.com/yemifatodu/Sale_Data_MeriSkill_internship_project"
    },
    {
      title: "Shopper’s Trend",
      description: "Performed an end-to-end analysis of customer purchase behavior using a 3,900-row Kaggle dataset. Leveraged Excel and Tableau for data cleaning, EDA, and visualization to uncover insights on geographic distribution, gender demographics, product category trends, top-selling products, purchase frequency, and payment method preferences. Findings informed strategies for inventory optimization, targeted marketing, cross-selling, and payment experience enhancements, supporting data-driven business decisions and customer engagement initiatives.",
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
      title: "Voyage of Fate: Titanic Survival Analysis",
      description: "Conducted a detailed analysis of Titanic passenger survival patterns using a 714-record Kaggle dataset. Leveraged Excel and Tableau for data cleaning, EDA, and visualization to examine the impact of passenger class, gender, and demographics on survival outcomes. Key findings revealed higher survival rates for first-class passengers and women, highlighting socio-economic disparities and evacuation dynamics, and informing historical insights into maritime safety measures.",
      method: " Excel • Tableau • Data Cleaning • EDA • Dashboarding • Visualization • Survival Analysis • Class & Gender Impact • Historical Data Interpretation",
      impact: "Highlighted key survival drivers for modeling through descriptive analysis.",
      role: "Data Scientist",
      tech: ["Python", "Statistics", "EDA"],
      featured: true,
      blog: "https://medium.com/@yemifatodu/the-titanic-disaster-8b0183632f9",
      dashboard: "https://public.tableau.com/app/profile/yemi.fatodu1473/viz/TitleVoyageofFateUnravelingtheTitanicTragedy/Dashboard1",
      repo: "https://github.com/yemifatodu/THE-TITANIC-PROJECT-VOYAGE-OF-FATE"
    },
    {
      title: "Meri Skill HR Analytics Internship Project",
      description: "Performed an in-depth HR data analysis to uncover patterns in employee attrition, overtime, work experience, and performance trends. Leveraged Excel for data cleaning and exploration, SQL for advanced querying and metric calculations, and Tableau for interactive dashboards. Key insights included high attrition in Sales and HR departments, overtime patterns by role and tenure, and correlations between education, work experience, and performance. Delivered actionable recommendations to improve employee retention, optimize compensation, and enhance workforce productivity.",
      method: " Excel • SQL • Tableau • Data Cleaning • EDA • Dashboarding • HR Analytics • Attrition & Performance Insights • Workforce Optimization",
      impact: "Provided retention strategies for HR teams",
      role: "HR Data Analyst",
      tech: ["SQL", "Excel", "Tableau"],
      featured: true,
      blog: "https://medium.com/@yemifatodu/leveraging-data-in-hr-revolutionizing-workforce-management-with-analytics-ba2d363ee40c",
      dashboard: "https://public.tableau.com/app/profile/yemi.fatodu1473/viz/HRAnalysisProjectMeriSkill/Dashboard1",
      repo: "https://github.com/yemifatodu/HR_Analysis_meriSkill_project_Internship"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Yemi Fatodu | Data Scientist & Analytics Portfolio</title>
        <meta name="description" content="Portfolio of Opeyemi Ebenezer Fatodu (Yemi Fatodu), a Data Scientist specializing in analytics, machine learning, business intelligence, and data-driven decision making." />
        <meta name="keywords" content="Data Scientist, Data Analyst, Machine Learning, Business Intelligence, Python, SQL, Tableau, Analytics Portfolio" />
        <meta name="author" content="Opeyemi Ebenezer Fatodu" />
        <meta property="og:title" content="Yemi Fatodu | Data Scientist Portfolio" />
        <meta property="og:description" content="Explore projects, skills, and articles by Yemi Fatodu, a results-driven Data Scientist." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yemifatodu.github.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yemi Fatodu | Data Scientist" />
        <meta name="twitter:description" content="Analytics, Machine Learning, BI projects and insights." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
        <main role="main">
          {/* Sticky Navbar */}
          <header className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 z-50">
            <h1 className="text-xl font-bold">Portfolio Website</h1>
            <nav className="flex items-center space-x-6">
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white dark:bg-slate-800 transition" aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a href="#" className="hover:text-indigo-500">Home</a>
              <a href="#about" className="hover:text-indigo-500">About</a>
              <div className="relative group">
                <button className="hover:text-indigo-500">Contact</button>
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                  <a href="mailto:yemifatodu@gmail.com" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><polyline points="22,6 12,13 2,6" /></svg>
                    <span>Email</span>
                  </a>
                  <a href="tel:+14092695122" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></svg>
                    <span>Mobile Phone</span>
                  </a>
                  <a href="tel:+2347033736377" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11h18" /><path d="M5 7h14" /><path d="M7 15h10" /></svg>
                    <span>Landline</span>
                  </a>
                </div>
              </div>
            </nav>
          </header>

          {/* Hero Section */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            animate={reduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} className="max-w-5xl mx-auto text-center py-20">
            <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl font-bold">Opeyemi Ebenezer Fatodu</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">Data Scientist | Analytics | Machine Learning | Business Intelligence</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full">Open to Remote</span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full">Business & Finance</span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full">Retail & E‑commerce</span>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild className="rounded-2xl"><a href="#skills">View Skills</a></Button>
              <Button asChild variant="outline" className="rounded-2xl"><a href="https://your-cv-link.com" target="_blank" rel="noopener noreferrer">View CV</a></Button>
              <Button asChild variant="ghost" className="rounded-2xl"><a href="#projects">Projects</a></Button>
              </div>
            </div>
          </motion.section>

          {/* About Section */}
          <section id="about" className="max-w-5xl mx-auto py-16">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl">
              <CardContent className="p-6 text-slate-600 dark:text-slate-300">
                <img src="/profile.jpg" alt="Opeyemi Ebenezer Fatodu profile photo" loading="lazy" decoding="async" className="float-left w-32 h-32 mr-6 mb-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 object-cover" />
                <p>Hi, I’m Yemi Fatodu, a Data Scientist dedicated to turning complex data into actionable insights that drive strategic business decisions and innovation. With expertise in data analytics, predictive modeling, machine learning, and data visualization, I help organizations uncover hidden patterns, optimize processes, and forecast trends that support growth. </p>
                <p className="mt-4"> Over the course of my projects including HR analytics dashboards to monitor employee retention, sales trend analyses for major retail brands, and predictive models in healthcare and business performance, I have honed my ability to transform raw datasets into meaningful, reliable, and actionable intelligence. I leverage professional tools and techniques such as Python, SQL, Excel, and advanced statistical modeling to ensure data-driven decisions are both accurate and impactful.</p>
                <p className="mt-4">My work focuses on empowering organizations to harness their data for measurable outcomes, fostering innovation, and creating value in alignment with strategic objectives. I thrive at the intersection of technology, analytics, and business, helping teams convert information into tangible results.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Projects Section with description left and vertical links on right */}
          {/* Projects Section – scalable & featured */}
          <section id="blogs" className="max-w-5xl mx-auto py-16">
            <h2 className="text-3xl font-semibold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[{
                title: "Harnessing Data Science for Diabetes Prediction",
                link: "https://medium.com/@yemifatodu/harnessing-data-science-for-diabetes-prediction-transforming-healthcare-through-predictive-b57272b224e1"
              }, {
                title: "The Digital Shift: How COVID-19 Reshaped Adidas Sales",
                link: "https://medium.com/@yemifatodu/the-digital-shift-how-covid-19-reshaped-adidas-sales-methods-and-what-it-means-for-retailers-6e69e758e62a"
              }].map(post => (
                <a key={post.title} href={post.link} target="_blank" rel="noopener noreferrer" className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-indigo-500 transition block">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-sm text-slate-500 mt-2">Read on Medium →</p>
                </a>
              ))}
            </div>
          </section>

          <section id="projects" className="max-w-5xl mx-auto py-16">
            <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectData.filter(p => p.featured).map((project, idx) => (
                <Card key={idx} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl hover:border-indigo-500 transition transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <span className="inline-block mb-2 text-xs font-semibold text-indigo-400">Featured</span>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 mb-3">{project.description}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-2"><span className="font-semibold">Tech & Methods:</span> {project.method}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-2"><span className="font-semibold">Impact:</span> {project.impact}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-2"><span className="font-semibold">Role:</span> {project.role}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 bg-slate-200 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.blog} target="_blank" rel="noopener noreferrer">Blog Post</a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.dashboard} target="_blank" rel="noopener noreferrer">Dashboard</a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">Report Repository</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section – mobile perfected */}
          <section id="skills" className="max-w-5xl mx-auto py-16">
            <h2 className="text-3xl font-semibold mb-8">Core Skills</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map(skill => (
                <div key={skill.name} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-900 rounded-full h-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-indigo-500 h-4 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="tools" className="max-w-5xl mx-auto py-16">
            <h2 className="text-3xl font-semibold mb-8">Tools</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolsData.map(tool => (
                <a key={tool.name} href={tool.link} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 hover:border-indigo-500 transition">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{tool.name}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{tool.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-900 rounded-full h-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-indigo-500 h-4 rounded-full" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="max-w-5xl mx-auto py-16">
            <h2 className="text-3xl font-semibold mb-8">Experience</h2>
            <div className="grid gap-6">
              <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">Data Scientist Intern</h3>
                  <p className="text-indigo-400 text-sm">MeriSkill • 2024</p>
                  <p className="text-slate-500 dark:text-slate-400 mt-3">
                    Built predictive models, performed exploratory data analysis, and delivered actionable insights for healthcare and business datasets.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">Freelance Data Analyst</h3>
                  <p className="text-indigo-400 text-sm">Remote • 2023 – Present</p>
                  <p className="text-slate-500 dark:text-slate-400 mt-3">
                    Developed dashboards, sales analytics, automation pipelines, and business intelligence solutions using Python, SQL, Excel, and Tableau.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="max-w-5xl mx-auto py-16 text-center">
            <h2 className="text-3xl font-semibold mb-8">Certifications & Profiles</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">View my professional certifications, projects, and contributions on these platforms.</p>
            <div className="flex justify-center gap-8">
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-indigo-500 transition">
                <Linkedin size={24} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com/yemifatodu/EDUCATION-CERTIFICATE?tab=readme-ov-file#education-certificate" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-indigo-500 transition">
                <Github size={24} />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="max-w-5xl mx-auto py-16">
            <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl">
                <CardContent className="p-6">
                  <p className="italic text-slate-600 dark:text-slate-300">“Opeyemi demonstrated strong analytical thinking and consistently delivered actionable insights.”</p>
                  <p className="mt-4 font-semibold">Project Supervisor</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">MeriSkill</p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl">
                <CardContent className="p-6">
                  <p className="italic text-slate-600 dark:text-slate-300">“Clear communication, excellent dashboards, and timely delivery. Highly recommended.”</p>
                  <p className="mt-4 font-semibold">Client</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Business Analytics Project</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="max-w-5xl mx-auto py-20 text-center">
            <h2 className="text-3xl font-semibold mb-6">Let’s Work Together</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">Connect with me on any of these platforms</p>
            <div className="flex flex-wrap justify-center gap-8">
              {/* GitHub */}
              <a href="https://github.com/yemifatodu/EDUCATION-CERTIFICATE?tab=readme-ov-file#education-certificate" className="relative group hover:text-indigo-500 transition transform hover:scale-110" aria-label="GitHub">
                <Github size={28} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/yemi-fatodu/" className="relative group hover:text-indigo-500 transition transform hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={28} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">LinkedIn</span>
              </a>

              {/* Instagram */}
              <a href="#" className="relative group hover:text-indigo-500 transition transform hover:scale-110" aria-label="Instagram">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Instagram</span>
              </a>

              {/* X */}
              <a href="https://bit.ly/X-YEMIFATODU" className="relative group hover:text-indigo-500 transition transform hover:scale-110" aria-label="X">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.19 8.21L23 22h-6.77l-5.29-6.89L4.8 22H1.7l7.68-8.77L1 2h6.94l4.78 6.26L18.9 2z" /></svg>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">X (Twitter)</span>
              </a>

              {/* YouTube */}
              <a href="https://bit.ly/YEMIFATODU" className="relative group hover:text-indigo-500 transition transform hover:scale-110" aria-label="YouTube">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.6 3.7 12 3.7 12 3.7s-7.6 0-9.5.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 0 12a30 30 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2c1.9.5 9.5.5 9.5.5s7.6 0 9.5-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 24 12a30 30 0 0 0-.5-5.8zM9.6 15.5v-7l6.4 3.5-6.4 3.5z" /></svg>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">YouTube</span>
              </a>

              {/* Medium */}
              <a href="https://medium.com/@yemifatodu" className="relative group hover:text-indigo-500 transition transform hover:scale-110" aria-label="Medium">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4v16h20V4H2zm15.5 12.5c-1.7 0-3-2.1-3-4.5s1.3-4.5 3-4.5 3 2.1 3 4.5-1.3 4.5-3 4.5zm-5.5 0c-1.4 0-2.5-2.1-2.5-4.5s1.1-4.5 2.5-4.5 2.5 2.1 2.5 4.5-1.1 4.5-2.5 4.5zM5.8 15.9c-.9 0-1.8-1.7-1.8-3.9s.9-3.9 1.8-3.9 1.8 1.7 1.8 3.9-.9 3.9-1.8 3.9z" /></svg>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Medium</span>
              </a>

              {/* Upwork */}
              <a href="https://www.upwork.com/freelancers/~013e5a1a04e2af9d1b" className="relative group hover:text-indigo-500 transition transform hover:scale-110" aria-label="Upwork">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 7.3c-1.6 0-2.7.9-3.5 2.4-.8-1.5-1.7-3.4-2.3-5.1H9.2v7.8c0 1.5-.8 2.4-2.1 2.4s-2.1-.9-2.1-2.4V4.6H2.8v7.9c0 2.9 1.8 4.8 4.3 4.8s4.3-1.9 4.3-4.8v-2.1c.6 1.2 1.3 2.5 1.9 3.6.8 1.4 2 3.3 4.3 3.3 2.7 0 4.5-1.9 4.5-4.7 0-2.7-1.8-4.6-4.4-4.6z" /></svg>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Upwork</span>
              </a>

              {/* Fiverr */}
              <a href="https://www.fiverr.com/yemi_fatodu" className="relative group hover:text-indigo-500 transition transform hover:scale-110" aria-label="Fiverr">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M14.3 3.1c-3.1 0-5.1 1.7-5.1 5.1v1.2H7v3.2h2.2V21h3.6v-8.4h3l.6-3.2h-3.6V8.3c0-1.1.5-1.7 1.6-1.7h2V3.1h-2.1z" /></svg>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Fiverr</span>
              </a>
            </div>
          </section>

          <footer className="text-center text-slate-500 text-sm py-6">
            © 2025 Opeyemi Ebenezer Fatodu. All rights reserved.
          </footer>
        </main>
      </div>
    </>
  );
}
