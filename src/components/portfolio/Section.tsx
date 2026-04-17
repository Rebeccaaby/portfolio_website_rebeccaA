import { motion } from "framer-motion";

export const Section = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section id={id} className={`section-glow scroll-mt-24 py-20 md:py-28 ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary/60" />
            {eyebrow}
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export const Divider = () => (
  <div className="container">
    <div className="divider-gradient" />
  </div>
);
