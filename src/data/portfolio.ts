export const personal = {
  name: "Rebecca Abraham",
  title: "Software Engineer",
  tagline: "Building reliable systems, backend services, and AI-driven, data-intensive software.",
  location: "Buffalo, NY",
  email: "rebeccaaby21@gmail.com",
  phone: "(814) 350-1680",
  linkedin: "https://www.linkedin.com/in/rebecca-abraham-0a9337198/",
  github: "https://github.com/Rebeccaaby",
  resumeUrl: "/Rebecca Abraham_Resume.pdf",
  about:
    "I'm a software engineer with a background in building reliable systems, backend services, and data-driven applications. I recently completed my Master's in Computer Science at the University at Buffalo, focusing on systems, machine learning, and large-scale data processing. I've worked across embedded systems and full-stack development — from maintaining production-level C/C++ software in the rail industry to building Python APIs, data pipelines, and AI-driven tools.",
  aboutExtra:
    "I enjoy solving practical problems — working with data, improving system performance, and building tools that make workflows more efficient. Lately I've been exploring how AI tools can speed up development and improve how systems are designed. Outside of code, I've been a teaching assistant, mentor, and student leader, which helps me communicate clearly and work well in teams.",
};

export const currentlyWorkingOn = [
  "Further improvements on the RAG QA System",
  "Job-assistant agent",
  "PhD Research agent",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "Delaware North",
    role: "Solution Engineer Intern",
    period: "May 2025 — Aug 2025",
    bullets: [
      "Built an AI agent using Copilot Studio to automate requirements generation, reducing manual effort by 60%.",
      "Standardized technical documentation for the Fortress loyalty platform in NetSuite ERP/POS, cutting onboarding time for new team members by 30%.",
      "Validated integrations via field-mapping checks and smoke testing, tracking issues in Jira to ensure data accuracy.",
      "Developed user-friendly SharePoint landing pages for central access to internal resources.",
      "Contributed to the product development lifecycle for guest-facing technologies.",
    ],
    tags: ["Copilot Studio", "NetSuite", "Jira", "SharePoint"],
  },
  {
    company: "Quest Global (at Wabtec)",
    role: "Embedded Software Developer",
    period: "Sep 2022 — Aug 2024",
    bullets: [
      "Maintained and enhanced locomotive control software in C/C++, resolving 50+ defects and delivering 10+ production features.",
      "Collaborated with cross-functional engineers in an Agile/SDLC framework to prepare and validate software changes prior to customer releases.",
      "Debugged system behavior using a virtual simulator (vSim) in VMware to identify root causes and verify fixes.",
      "Used Jenkins and Docker within the CI/CD pipeline to build, test, and validate software updates.",
      "Executed HITL (Hardware in the Loop) sanity tests in Linux to validate updates and ensure release stability.",
    ],
    tags: ["C/C++", "Jenkins", "Docker", "Linux", "VMware", "Agile"],
  },
  {
    company: "IAM Robotics",
    role: "Software Enterprise Intern",
    period: "May 2022 — Aug 2022",
    bullets: [
      "Built a warehouse management web service in Python with FastAPI + MySQL, enabling real-time inventory tracking.",
      "Designed REST APIs and integrated a Vue.js frontend so users could manage orders through a single interface.",
      "Containerized the service with Docker and validated endpoints using Postman.",
      "Automated cloud deployment on GCP using Terraform; tracked work in GitHub/Jira and documentation in Confluence.",
    ],
    tags: ["Python", "FastAPI", "MySQL", "Vue.js", "Docker", "GCP", "Terraform"],
  },
];

export type Project = {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "PowerUpTech — Tech Design Challenge",
    period: "May 2025 — Jul 2025",
    summary:
      "Designed Seneca Signal, a modular community info hub with admin dashboard, web interface, and SMS line.",
    bullets: [
      "Scalable system with AI chatbot and multilingual SMS support, implemented with low-code tools.",
      "Prototyped UI and user flows in Figma using the Builder.io plugin.",
      "Collaborated cross-functionally to ship a community-driven solution.",
    ],
    tags: ["Figma", "Builder.io", "AI Chatbot", "Low-code"],
  },
  {
    title: "AI-Powered Python Language Server Extension",
    period: "Jan 2025 — May 2025",
    summary:
      "VS Code Language Server for Python with AI completions, hover tooltips, and signature help.",
    bullets: [
      "Implemented LSP-based autocompletion, hover tooltips, and signature help in TypeScript.",
      "Integrated Hugging Face CodeLlama-7b-hf via REST for context-aware completions and inline docs.",
      "Client/server architecture over IPC using vscode-languageclient/server.",
      "Configured Webpack + TS pipelines and structured logging via Winston.",
    ],
    tags: ["TypeScript", "LSP", "CodeLlama", "Webpack", "Winston"],
  },
  {
    title: "The QueRY System: Question Resolution Yield",
    period: "Jan 2025 — May 2025",
    summary:
      "Hybrid RAG QA system combining RoBERTa with a Wikidata knowledge graph for higher factual accuracy.",
    bullets: [
      "Python RAG with Hugging Face Transformers, Sentence Transformers, and Chroma vector DB.",
      "SPARQL-based entity linking against the Wikidata knowledge graph.",
      "multi-qa-mpnet-base-dot-v1 embeddings with optimized semantic chunking.",
      "Tuned RecursiveCharacterTextSplitter chunking — improved factual accuracy by 15%.",
    ],
    tags: ["RAG", "RoBERTa", "Chroma", "SPARQL", "Hugging Face"],
  },
  {
    title: "Prognosis Paradigm",
    period: "Jan 2025 — May 2025",
    summary: "Hospital and Patient Care Management System on PostgreSQL with Tableau analytics.",
    bullets: [
      "Designed a 3NF schema with 10+ normalized tables and clean entity relationships.",
      "Python querying and analysis scripts for patient and hospital trend insights.",
      "Visualized 2,000+ data points in Tableau dashboards for operations.",
    ],
    tags: ["PostgreSQL", "Python", "Tableau"],
  },
  {
    title: "Parallel Edge Detection",
    period: "Jan 2025 — May 2025",
    summary: "High-performance hybrid MPI + OpenMP Sobel edge detection.",
    bullets: [
      "Compared pixel-wise OpenMP vs. tile-based OpenMP strategies.",
      "Analyzed performance with Amdahl's Law, Gustafson's Law, and parallel-efficiency metrics.",
    ],
    tags: ["MPI", "OpenMP", "C++", "HPC"],
  },
  {
    title: "NYC Airbnb Travel Stay Recommendations",
    period: "Aug 2024 — Dec 2024",
    summary:
      "Distributed ML pipeline on a 48k-record NYC Airbnb dataset using PySpark + scikit-learn.",
    bullets: [
      "Cleaned and preprocessed data with Python and PySpark; 10 EDA visualizations.",
      "Compared 6 models — Logistic Regression best at 81% accuracy.",
      "PySpark cut K-Means time from 34s → 1s; silhouette improved 0.34 → 0.77.",
      "Profiled Spark DAGs across preprocessing and training to find perf bottlenecks.",
    ],
    tags: ["PySpark", "Spark MLlib", "scikit-learn", "Python"],
  },
  {
    title: "Senior Design Project",
    period: "Aug 2021 — May 2022",
    summary: "Python pipelines analyzing 1TB of MCU battery performance data.",
    bullets: [
      "Heatmaps and Pareto charts using NumPy, Pandas, Folium, Matplotlib.",
      "Integrated real-time weather API to correlate environment with system performance.",
    ],
    tags: ["Python", "Pandas", "Matplotlib", "Folium"],
  },
  {
    title: "Undergraduate Research — Dr. Omar Ashour",
    period: "May 2021 — Dec 2022",
    summary:
      "Interactive nonlinear game in Twine to demonstrate Dementia symptoms and build caregiver empathy.",
    bullets: [
      "Branching narratives representing cognitive challenges of Dementia.",
      "Pre/post-test evaluations with nursing students measured empathy gains.",
    ],
    tags: ["Twine", "HTML", "CSS", "JavaScript", "UX Research"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "Java", "C++", "C#", "C", "TypeScript", "JavaScript", "SQL", "HTML"],
  },
  {
    group: "Web / Frameworks",
    items: ["FastAPI", "Vue.js", "Node.js", "REST", "HTTP", "NumPy", "Pandas"],
  },
  {
    group: "AI / ML",
    items: [
      "PyTorch",
      "Scikit-learn",
      "Hugging Face Transformers",
      "Retrieval-Augmented Generation",
      "PySpark",
      "Spark MLlib",
      "CodeLlama",
      "Matplotlib",
      "Folium",
    ],
  },
  { group: "Cloud", items: ["Google Cloud Platform", "AWS (Cloud9, S3)"] },
  { group: "Database", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  {
    group: "DevOps / Tools",
    items: [
      "GitHub",
      "Docker",
      "Jenkins",
      "Terraform",
      "Linux",
      "VMware",
      "Postman",
      "VS Code",
      "Jira",
      "Confluence",
      "NetSuite POS/ERP",
      "Tableau",
      "LSP",
      "Winston",
    ],
  },
];

export const education = [
  {
    school: "University at Buffalo",
    degree: "M.S., Computer Science and Engineering",
    detail: "GPA: 3.7",
    period: "Dec 2025",
  },
  {
    school: "Penn State Erie, The Behrend College",
    degree: "B.S., Software Engineering",
    detail: "",
    period: "Dec 2022",
  },
];

export const coursework = {
  graduate: [
    "Machine Learning",
    "Deep Learning",
    "Data Intensive Computing",
    "Computer Vision & Image Processing",
    "Advanced Computational Linguistics",
    "Operating Systems",
    "Data Models & Query Languages",
    "Parallel Algorithms",
    "Computer Security",
    "Algorithms Analysis & Design",
  ],
  undergraduate: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering",
    "Software Architecture",
    "Object-Oriented Design",
    "Web Services",
    "Software Testing",
    "Computer Organization & Design",
    "Programming Language Concepts",
    "Communication Networks",
    "Embedded Real-Time Systems",
  ],
};

export const community = [
  { org: "University at Buffalo", role: "CSE Workshop Coordinator", period: "Mar 2025 — Present" },
  { org: "University at Buffalo", role: "Graduate Teaching Assistant", period: "May 2025 — Dec 2025" },
  {
    org: "University at Buffalo",
    role: "Student Assistant — SEAS Office of K-12 Outreach",
    period: "Jan 2025 — Dec 2025",
  },
  { org: "Penn State Behrend", role: "BEST Mentor Program — Student Mentor", period: "Aug 2021 — Jan 2022" },
  {
    org: "Penn State Behrend",
    role: "Pathway to Success: Summer Start (PaSSS) — Student Mentor",
    period: "Jul 2021 — Aug 2021",
  },
];

export const achievements = [
  "Graduate Leadership Award — UB Computer Science and Engineering",
  "Tech Buffalo's PowerUpTech Design Challenge",
  "Most Outstanding President 2022 — South Asian Student Organization",
  "Standout Senior, Class of 2022",
  "Participant — Behrend Leadership Conference, Erie (Feb 2022)",
  "Participant — GE Student Leadership Conference, University Park (Mar 2019)",
  "Participant — SWE Local Conference, Baltimore (Feb 2019)",
];
