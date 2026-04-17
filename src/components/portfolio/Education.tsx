import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { coursework, education } from "@/data/portfolio";

export const Education = () => {
  return (
    <Section id="education" eyebrow="Education" title={<>Academic foundation.</>}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            className="card-elevated p-6 sm:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground shadow-card-soft shrink-0">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold leading-snug">{e.school}</h3>
                <p className="text-primary font-medium text-sm">{e.degree}</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground font-mono">
                  <span>{e.period}</span>
                  {e.detail && <span className="text-foreground/70">{e.detail}</span>}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <CourseList title="Graduate Coursework" items={coursework.graduate} />
        <CourseList title="Undergraduate Coursework" items={coursework.undergraduate} />
      </motion.div>
    </Section>
  );
};

const CourseList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="card-elevated p-6">
    <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/75">
      {title}
    </h4>
    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground/80">
      {items.map((c) => (
        <li key={c} className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
          {c}
        </li>
      ))}
    </ul>
  </div>
);
