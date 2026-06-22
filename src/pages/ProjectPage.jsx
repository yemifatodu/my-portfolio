import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Globe } from "lucide-react";
import { projectData } from "../data/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-6">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-indigo-500 hover:underline font-medium">← Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Yemi Fatodu</title>
        <meta name="description" content={project.description.slice(0, 155)} />
        <meta property="og:title" content={`${project.title} | Yemi Fatodu`} />
        <meta property="og:description" content={project.description.slice(0, 155)} />
        <meta property="og:url" content={`https://yemifatodu.online/projects/${project.slug}`} />
        <link rel="canonical" href={`https://yemifatodu.online/projects/${project.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto flex justify-between items-center py-3 px-6">
            <Link to="/" className="text-xl font-bold tracking-tight hover:text-indigo-500 transition">Yemi Fatodu</Link>
            <Link to="/#projects" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-500 transition">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto py-16 px-6">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`text-xs px-2.5 py-0.5 font-bold tracking-wider uppercase rounded-full ${
              project.isHuuboi
                ? "bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400"
                : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
            }`}>
              {project.isHuuboi ? "Core Flagship Platform" : "Analytical Model"}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mt-4 mb-6"
          >
            {project.title}
          </motion.h1>

          {/* Tech Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 font-medium bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg">
                {t}
              </span>
            ))}
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm mb-6">
              <CardContent className="p-6 md:p-10 space-y-8">

                {/* Overview */}
                <div>
                  <h2 className="text-lg font-bold text-indigo-500 mb-3">Project Overview</h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800" />

                {/* Method */}
                <div>
                  <h2 className="text-lg font-bold text-indigo-500 mb-3">Architecture & Methods</h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.method}</p>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800" />

                {/* Impact & Role */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-lg font-bold text-indigo-500 mb-3">Impact Profile</h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.impact}</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-indigo-500 mb-3">Role</h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.role}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800" />

                {/* Links */}
                <div>
                  <h2 className="text-lg font-bold text-indigo-500 mb-4">Project Resources</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a href={project.blog} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-slate-200 dark:border-slate-800 bg-transparent hover:border-indigo-500 transition">
                        {project.isHuuboi ? "🌐 Live Portal" : "📝 Blog Post"}
                      </Button>
                    </a>
                    <a href={project.dashboard} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-slate-200 dark:border-slate-800 bg-transparent hover:border-indigo-500 transition">
                        {project.isHuuboi ? "✈️ Flight Search" : "📊 Dashboard"}
                      </Button>
                    </a>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-slate-200 dark:border-slate-800 bg-transparent hover:border-indigo-500 transition">
                        {project.isHuuboi ? "🚗 Car Rental" : "💻 GitHub Repo"}
                      </Button>
                    </a>
                  </div>
                </div>

              </CardContent>
            </Card>
          </motion.div>

          {/* Back Link */}
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-500 transition font-medium">
            <ArrowLeft size={15} /> Back to all projects
          </Link>
        </main>

        {/* Footer */}
        <footer className="text-center text-slate-400 dark:text-slate-500 text-xs py-8 border-t border-slate-200 dark:border-slate-800 max-w-5xl mx-auto px-6 mt-8">
          © {new Date().getFullYear()} Opeyemi Ebenezer Fatodu — Data Scientist, Full-Stack Developer & Business Intelligence Specialist.
        </footer>
      </div>
    </>
  );
}