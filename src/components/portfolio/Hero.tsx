import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal, currentlyWorkingOn } from "@/data/portfolio";

const initials = personal.name
  .split(" ")
  .map((n) => n[0])
  .join("");

export const Hero = () => {
  return (
    <section id="top" className="hero-surface relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to new opportunities
          </div> */}

          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Rebecca Abraham</span>.
            <br />
            <span className="text-foreground/85">Software Engineer</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            {personal.tagline} Recent <span className="text-foreground font-medium">M.S. in CS</span> from
            the University at Buffalo, with experience across embedded C/C++, Python backends, and
            AI-driven tooling.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {personal.location}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#projects">
                See my work <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={personal.resumeUrl} download>
                <Download /> Download Resume
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialIcon href={`mailto:${personal.email}`} label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={personal.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={personal.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialIcon>
          </div>
        </motion.div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-accent opacity-30 blur-3xl" />
            <div className="relative animate-float">
              <div className="profile-glow flex h-1000 w-1000 sm:h-1000 sm:w-1000 lg:h-1000 lg:w-1000 items-center justify-center rounded-full bg-gradient-accent">
                {/* <span className="font-display text-7xl font-bold text-primary-foreground/95 select-none"> */}
                  <img 
                    src="profile pic.jpg" 
                    alt="Profile" 
                    className="h-full w-full rounded-full object-cover"
                  />{/* {initials} */}
                {/* </span> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Currently working on */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="container mt-16 lg:mt-20"
      >
        <div className="rounded-2xl border border-border/70 bg-card/70 backdrop-blur-md p-5 sm:p-6 shadow-card-soft">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="font-display text-sm font-semibold tracking-wide uppercase text-foreground/80">
                Currently working on
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {currentlyWorkingOn.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    aria-label={label}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-foreground/70 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:shadow-card-soft"
  >
    {children}
  </a>
);

const FloatingChip = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`absolute hidden sm:block rounded-full border border-border bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-mono text-foreground/80 shadow-card-soft ${className ?? ""}`}
  >
    {children}
  </motion.div>
);
