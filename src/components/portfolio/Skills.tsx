import { motion } from "framer-motion";
import { Section } from "./Section";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 82 },
  { name: "MongoDB", level: 80 },
  { name: "SQL", level: 78 },
  { name: "Git / GitHub", level: 90 },
  { name: "REST APIs", level: 85 },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / Toolbox"
      title={<>Technologies I <span className="gradient-text">work with</span></>}
      description="A growing stack of tools I use to design, build, and ship full-stack experiences."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="group rounded-2xl glass p-5 transition-colors hover:bg-white/[0.06]"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-base font-semibold">{s.name}</span>
              <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.04, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: "var(--gradient-primary)" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
