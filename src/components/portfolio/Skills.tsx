import { motion } from "framer-motion";
import { Brain, Cloud, Code2, Database, Layers, Wrench } from "lucide-react";
import { Section } from "./Section";
import { skills } from "@/data/portfolio";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Languages: Code2,
  "Web / Frameworks": Layers,
  "AI / ML": Brain,
  Cloud: Cloud,
  Database: Database,
  "DevOps / Tools": Wrench,
};

export const Skills = () => {
  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title={<>Tools I reach for.</>}
      description="Grouped by what I use them for, not just an alphabet soup."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((g, i) => {
          const Icon = ICONS[g.group] ?? Code2;
          return (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className="card-elevated p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground shadow-card-soft">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="font-display text-base font-semibold">{g.group}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
