import { motion } from "framer-motion";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";

export const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected projects.</>}
      description="A mix of AI, data, systems, and full-stack work — academic and beyond."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.05 }}
            className="card-elevated p-6 sm:p-7 flex flex-col"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg sm:text-xl font-semibold leading-snug">{p.title}</h3>
              <span className="font-mono text-[11px] text-muted-foreground shrink-0">{p.period}</span>
            </div>
            <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed">{p.summary}</p>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {p.bullets.slice(0, 3).map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-border/60">
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};
