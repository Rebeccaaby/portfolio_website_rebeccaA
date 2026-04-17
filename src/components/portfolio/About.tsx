import { motion } from "framer-motion";
import { Section } from "./Section";
import { personal } from "@/data/portfolio";

export const About = () => {
  return (
    <Section id="about" eyebrow="About" title={<>A bit about me.</>}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-5 text-base sm:text-lg leading-relaxed text-foreground/85"
        >
          <p>{personal.about}</p>
          <p>{personal.aboutExtra}</p>
          <p className="text-muted-foreground">
            I'm currently looking for opportunities where I can keep learning, take on real responsibility,
            and contribute to systems that have meaningful impact.
          </p>
        </motion.div>
        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-elevated p-6 self-start"
        >
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/70">
            At a glance
          </h3>
          <dl className="mt-4 space-y-3 text-sm">
            <Row label="Based in" value={personal.location} />
            <Row label="Focus" value="Systems · ML · Data" />
            <Row label="Languages" value="Python · C/C++ · TS · SQL" />
            <Row label="Education" value="M.S. CS, UB · 2025" />
            <Row label="Status" value="Open to roles" />
          </dl>
        </motion.aside>
      </div>
    </Section>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0">
    <dt className="text-muted-foreground">{label}</dt>
    <dd className="font-medium text-foreground text-right">{value}</dd>
  </div>
);
