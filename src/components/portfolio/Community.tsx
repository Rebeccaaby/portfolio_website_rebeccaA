import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";
import { Section } from "./Section";
import { achievements, community } from "@/data/portfolio";

export const Community = () => {
  return (
    <Section
      id="community"
      eyebrow="Community & Awards"
      title={<>Beyond the codebase.</>}
      description="Mentorship, leadership, and recognition that shaped how I work with people."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="card-elevated p-6 sm:p-7"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
              <Users className="h-4 w-4" />
            </span>
            <h3 className="font-display text-lg font-semibold">Community Involvement</h3>
          </div>
          <ul className="mt-5 space-y-4">
            {community.map((c) => (
              <li key={`${c.org}-${c.role}`} className="border-b border-border/60 pb-4 last:border-0 last:pb-0">
                <p className="text-sm font-medium text-foreground">{c.role}</p>
                <div className="mt-1 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span>{c.org}</span>
                  <span className="font-mono">{c.period}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="card-elevated p-6 sm:p-7"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
              <Award className="h-4 w-4" />
            </span>
            <h3 className="font-display text-lg font-semibold">Achievements</h3>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-foreground/85">
            {achievements.map((a) => (
              <li key={a} className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};
