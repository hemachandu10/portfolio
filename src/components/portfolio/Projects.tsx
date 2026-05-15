import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./Section";
import resumeImg from "@/assets/project-resume.jpg";
import mealImg from "@/assets/project-meal.jpg";
import tasksImg from "@/assets/project-tasks.jpg";

const projects = [
  {
    title: "AI Resume Analyzer",
    tag: "AI · Full Stack",
    desc: "Upload a resume, get an ATS score, and receive actionable AI-powered improvement suggestions through a modern dashboard.",
    image: resumeImg,
    stack: ["React", "Node.js", "OpenAI", "Tailwind"],
    liveUrl: "https://resumeanalyser-ootk.onrender.com",
    githubUrl: "",
  },
  {
    title: "Healthy Meal Planner",
    tag: "SaaS · Health",
    desc: "Personalized meal plans with macro-based recommendations, food delivery integration, and a subscription model.",
    image: mealImg,
    stack: ["React", "Express", "MongoDB", "Stripe"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Full Stack Task Manager",
    tag: "Productivity",
    desc: "End-to-end task manager with authentication, CRUD, real-time updates, and a polished dashboard UI.",
    image: tasksImg,
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "",
    githubUrl: "",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="05 / Selected Work"
      title={<>Projects I've <span className="gradient-text">built</span></>}
      description="A selection of products I've designed and engineered — from AI tools to full-stack platforms."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-3xl glass ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={640}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs font-mono">
                {p.tag}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <div className="flex gap-2">
                  {p.githubUrl ? (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-9 w-9 place-items-center rounded-full glass transition-colors hover:bg-white/10"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  ) : (
                    <button className="grid h-9 w-9 place-items-center rounded-full glass transition-colors hover:bg-white/10" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </button>
                  )}
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-9 w-9 place-items-center rounded-full transition-transform hover:scale-110"
                      style={{ background: "var(--gradient-primary)" }}
                      aria-label="Live"
                    >
                      <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
                    </a>
                  ) : (
                    <button className="grid h-9 w-9 place-items-center rounded-full transition-transform hover:scale-110" style={{ background: "var(--gradient-primary)" }} aria-label="Live">
                      <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
                    </button>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-mono text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
