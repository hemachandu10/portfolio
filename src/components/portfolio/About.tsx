import { motion } from "framer-motion";
import { Brain, Code2, GraduationCap, Rocket } from "lucide-react";
import { Section } from "./Section";

const cards = [
  { icon: GraduationCap, title: "B.Tech CSE Student", text: "Building strong foundations in computer science and engineering." },
  { icon: Code2, title: "Full Stack & AI", text: "Crafting end-to-end web apps and exploring intelligent systems." },
  { icon: Brain, title: "DSA Enthusiast", text: "Strong problem-solving skills sharpened daily with new challenges." },
  { icon: Rocket, title: "Self-Motivated", text: "Quick learner, consistent coder, always shipping something new." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title={<>The mind <span className="gradient-text">behind the code</span></>}
      description="I'm a Computer Science engineering student who loves turning ideas into polished products. I focus on clean architecture, performance, and thoughtful user experiences."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-colors hover:bg-white/[0.06]"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-30"
              style={{ background: "var(--gradient-aurora)" }} />
            <div className="relative flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
                style={{ background: "var(--gradient-primary)" }}>
                <c.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
