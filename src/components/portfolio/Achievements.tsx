import { motion } from "framer-motion";
import { Award, Star, Target, Trophy } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Target, title: "250+ Problems", text: "Solved on LeetCode across DSA topics" },
  { icon: Star, title: "2★ CodeChef", text: "Active competitive programmer" },
  { icon: Trophy, title: "Strong DSA", text: "Solid grasp of algorithms & data structures" },
  { icon: Award, title: "Consistent", text: "Daily streaks and contest participation" },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="03 / Milestones"
      title={<>Achievements & <span className="gradient-text">accolades</span></>}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative overflow-hidden rounded-2xl glass p-6 text-center"
          >
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl"
              style={{ background: "var(--gradient-aurora)" }}>
              <a.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold">{a.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
