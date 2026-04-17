import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background/50">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personal.name}. Built with care in Buffalo, NY.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/70 text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/70 text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/70 text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
