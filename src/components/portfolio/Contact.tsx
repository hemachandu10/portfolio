import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <Section
      id="contact"
      eyebrow="07 / Get in touch"
      title={<>Let's <span className="gradient-text">build something</span></>}
      description="Have an idea, opportunity, or just want to say hi? Drop a message."
    >
      <div className="grid gap-8 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-4"
        >
          {[
            { icon: Mail, label: "Email", value: "bhemachandu10@gmail.com", href: "mailto:bhemachandu10@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", value: "Bandaru Hema Chandu", href: "https://www.linkedin.com/in/bandaru-hema-chandu-5baa612b6/" },
            { icon: Github, label: "GitHub", value: "@hemachandu10", href: "https://github.com/hemachandu10" },
          ].map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl glass p-5 transition-colors hover:bg-white/[0.06]">
              <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="font-medium">{c.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 rounded-3xl glass-strong p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
          </div>
          <div className="mt-4">
            <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              maxLength={1000}
              className="mt-2 w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm outline-none ring-0 transition-colors focus:bg-white/10 border border-border focus:border-primary/50"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:opacity-60"
            style={{ background: "var(--gradient-primary)" }}
          >
            {loading ? "Sending..." : "Send message"} <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Input({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={255}
        className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:bg-white/10 border border-border focus:border-primary/50"
        placeholder={label}
      />
    </div>
  );
}
