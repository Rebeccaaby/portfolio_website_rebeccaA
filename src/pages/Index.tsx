import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Community } from "@/components/portfolio/Community";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Divider } from "@/components/portfolio/Section";
import { personal } from "@/data/portfolio";

const Index = () => {
  // SEO: structured data for a Person
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.title,
    email: `mailto:${personal.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Buffalo", addressRegion: "NY" },
    url: typeof window !== "undefined" ? window.location.origin : undefined,
    sameAs: [personal.linkedin],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University at Buffalo" },
      { "@type": "CollegeOrUniversity", name: "Penn State Erie, The Behrend College" },
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Education />
      <Divider />
      <Community />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
