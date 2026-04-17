import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { personal } from "@/data/portfolio";

export const Contact = () => {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something.</>}
      description="The fastest way to reach me is email. I'm open to engineering roles, AI/ML work, and interesting collaborations."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-elevated p-8 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-accent opacity-20 blur-3xl" />
          {/* <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Say hello</p> */}
          <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-gradient">SAY HELLO!</span>{/* <span className="text-gradient">{personal.email}</span> */}
          </h3>
          <p className="mt-4 text-muted-foreground max-w-md">
            Drop a note about a role, an idea, or just to say hi. I usually respond within a day or two.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href={`mailto:${personal.email}`}>
                <Mail /> Email me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={personal.linkedin} target="_blank" rel="noreferrer">
                <Linkedin /> LinkedIn <ArrowUpRight />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="card-elevated p-6 sm:p-7"
        >
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/75">
            Direct
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
            <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value={personal.phone} href={`tel:${personal.phone.replace(/\D/g, "")}`} />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value={personal.location} />
            <ContactRow
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="rebecca-abraham-0a9337198"
              href={personal.linkedin}
              external
            />
          </ul>
        </motion.aside>
      </div>
    </Section>
  );
};

const ContactRow = ({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) => {
  const content = (
    <span className="flex items-center justify-between gap-4 group">
      <span className="flex items-center gap-3 min-w-0">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
          <span className="block truncate text-foreground font-medium">{value}</span>
        </span>
      </span>
      {href && <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />}
    </span>
  );

  return (
    <li className="border-b border-border/60 pb-3 last:border-0 last:pb-0">
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="block"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
};
