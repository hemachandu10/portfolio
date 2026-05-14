import { Github, Linkedin, Code2, Trophy } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/hemachandu10", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/bandaru-hema-chandu-5baa612b6/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/hemachandu10/", label: "LeetCode" },
  { icon: Trophy, href: "https://www.codechef.com/users/hemachandu10", label: "CodeChef" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl glass">
            <span className="gradient-text font-mono text-sm font-bold">HC</span>
          </span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hema Chandu. Crafted with care.
          </p>
        </div>
        <div className="flex gap-2">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-xl glass transition-colors hover:bg-white/10">
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
