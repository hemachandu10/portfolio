import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Code2, Trophy } from "lucide-react";
import { Section } from "./Section";

const profiles = [
  {
    name: "GitHub",
    handle: "@hemachandu10",
    desc: "Open source contributions & projects",
    href: "https://github.com/hemachandu10",
    icon: Github,
    img: "https://ghchart.rshah.org/8b5cf6/hemachandu10",
    alt: "GitHub contributions graph",
  },
  {
    name: "LeetCode",
    handle: "hemachandu10",
    desc: "250+ problems solved · Active streak",
    href: "https://leetcode.com/u/hemachandu10/",
    icon: Code2,
    img: "https://leetcard.jacoblin.cool/hemachandu10?theme=dark&font=JetBrains%20Mono&ext=heatmap",
    alt: "LeetCode stats card",
  },
  {
    name: "CodeChef",
    handle: "hemachandu10",
    desc: "2★ competitive programmer",
    href: "https://www.codechef.com/users/hemachandu10",
    icon: Trophy,
  },
  {
    name: "LinkedIn",
    handle: "Bandaru Hema Chandu",
    desc: "Let's connect professionally",
    href: "https://www.linkedin.com/in/bandaru-hema-chandu-5baa612b6/",
    icon: Linkedin,
  },
];

export function Profiles() {
  return (
    <Section
      id="profiles"
      eyebrow="04 / Coding Profiles"
      title={<>Where I <span className="gradient-text">code & connect</span></>}
      description="Find me across platforms — from competitive programming to open source."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl glass-strong">
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground">{p.handle}</p>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
            {p.img && (
              <div className="mt-5 overflow-hidden rounded-xl bg-black/30 p-3">
                <img src={p.img} alt={p.alt} loading="lazy" className="mx-auto max-h-44 w-auto" />
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
