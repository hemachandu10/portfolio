import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "Problem Solver", "CSE Engineer", "Competitive Coder"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = del ? 50 : 110;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((p) => (p + 1) % roles.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="gradient-text">
      {text}
      <span className="caret h-[1em] align-middle" />
    </span>
  );
}

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#projects");
  };

  const openResume = () => {
    const resumeUrl = `${window.location.origin}/resume.pdf`;
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div
        className="absolute -top-32 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--gradient-aurora)" }}
      />

      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I'm <span className="gradient-text">Hema Chandu</span>
          </h1>

          <div className="mt-5 font-display text-2xl font-semibold sm:text-3xl md:text-4xl">
            <Typewriter />
          </div>

          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            Passionate about building scalable web applications and solving real-world problems
            with clean code, thoughtful design, and a curious mind.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              type="button"
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 glow-cyan"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <button
              type="button"
              onClick={openResume}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground hover:border-primary/50"
            >
              <Download className="h-4 w-4" /> Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-4"
          >
            {[
              { k: "250+", v: "Problems Solved" },
              { k: "10+", v: "Tech Stack" },
              { k: "2★", v: "CodeChef Coder" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl glass p-5 text-center">
                <div className="font-display text-3xl font-bold gradient-text">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
