import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've shipped real software.</>}
      description="From locomotive control systems to AI agents and warehouse APIs."
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="relative pl-12 sm:pl-16"
            >
              <span className="absolute left-0 top-1.5 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-accent text-primary-foreground shadow-card-soft">
                <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
              </span>

              <div className="card-elevated p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold">{job.role}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                </div>

                <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-foreground/85">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
};
