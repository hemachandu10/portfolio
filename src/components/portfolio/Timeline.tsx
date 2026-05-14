import { motion } from "framer-motion";
import { Section } from "./Section";

const events = [
  { year: "2022", title: "Started B.Tech CSE", text: "Began the engineering journey with a focus on Computer Science." },
  { year: "2023", title: "Discovered Web Dev", text: "Fell in love with HTML, CSS, JavaScript and the React ecosystem." },
  { year: "2024", title: "Full Stack & DSA", text: "Built MERN projects and crossed 100+ DSA problems." },
  { year: "2025", title: "AI & Real Products", text: "250+ LeetCode solved, 2★ CodeChef, building AI-powered apps." },
];

export function Timeline() {
  return (
    <Section
      id="experience"
      eyebrow="06 / Journey"
      title={<>The <span className="gradient-text">learning path</span></>}
      description="A snapshot of milestones along my engineering journey."
    >
      <div className="relative">
        <div
          className="absolute left-4 top-0 h-full w-px md:left-1/2"
          style={{ background: "linear-gradient(to bottom, transparent, var(--cyan), var(--violet), transparent)" }}
        />
        <div className="space-y-10">
          {events.map((e, i) => (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full md:left-1/2"
                style={{ background: "var(--gradient-aurora)", boxShadow: "0 0 0 4px var(--background), 0 0 20px var(--violet)" }} />
              <div className="ml-10 w-full rounded-2xl glass p-6 md:ml-0 md:w-1/2">
                <span className="font-mono text-xs text-primary">{e.year}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
