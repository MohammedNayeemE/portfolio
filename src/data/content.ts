export const siteConfig = {
  name: "Mohammed Nayeem",
  title: "Software Engineer",
  email: "nayeemmohammed467@gmail.com",
  location: "Chennai, India",
  availability: "Open to opportunities",
  tagLine: "Building AI systems and writing code that humans can read.",
  currentFocus: "SpringBoot + Distributed Systems",
};

export const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/MohammedNayeemE",
    handle: "@MohammedNayeemE",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/nayeemmohammed",
    handle: "in/nayeemmohammed",
  },
  {
    label: "LeetCode",
    url: "https://leetcode.com/MohammedNayeem",
    handle: "Knight (1974)",
  },
];

export const aboutContent = {
  intro: `I'm a software engineer with a backend-heavy focus. I build AI-powered applications, scalable web systems, and enjoy solving complex algorithmic problems. Knight-rated on LeetCode with 800+ problems solved.`,
  extended: `I work across the stack—from designing LangGraph orchestration pipelines and FastAPI services to crafting React interfaces. I care about performance, clean architecture, and shipping software that actually works well.`,
  currently:
    "Exploring AI/ML pipelines, LangChain/LangGraph, and distributed systems.",
};

export const experience = [
  {
    company: "Aiverex Innovations",
    role: "Full Stack Developer Intern",
    period: "May 2024 — Aug 2024",
    description:
      "Built a scalable full-stack web application using React and Firebase for an NDA project. Improved SEO and performance to achieve Lighthouse scores of 90+ across metrics.",
    technologies: ["React", "Firebase", "SEO", "Performance Optimization"],
  },
  {
    company: "Bayzcrypt (Open Source)",
    role: "Contributor",
    period: "Sep 2024 — Nov 2024",
    description:
      "Contributed 400+ lines of code to a crypto transfer and decentralized network platform. Worked on frontend with React/Bootstrap and backend with PostgreSQL.",
    technologies: ["React", "Bootstrap", "PostgreSQL", "Figma"],
  },
  {
    company: "Chennai Institute of Technology",
    role: "B.E Computer Science",
    period: "2021 — 2025",
    description:
      "Computer Science and Engineering with CGPA 8.91. Active in hackathons and competitive programming.",
    technologies: ["Algorithms", "Data Structures", "System Design"],
  },
];

export const projects = [
  {
    title: "RiskEngine.ai",
    description:
      "AI backend using LangGraph to analyze prescriptions and patient data for drug interactions. Multi-staged LLM pipeline with OCR, rule-based validations, and Postgres-backed retrieval. FastAPI services with rate limiting and caching.",
    technologies: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Vision OCR",
    ],
    link: "https://github.com/MohammedNayeemE",
    featured: true,
  },
  {
    title: "UPI Khata",
    description:
      "Automated finance tracking system extracting UPI transactions from bank PDFs. LangGraph-powered NLQ pipeline using Llama 3 for intent detection and SQL generation. Privacy-first with local data storage.",
    technologies: [
      "FastAPI",
      "LangGraph",
      "Llama 3",
      "Next.js",
      "TypeScript",
      "SQLite",
    ],
    link: "https://github.com/MohammedNayeemE",
    featured: true,
  },
  {
    title: "Legal Rights Learning Platform",
    description:
      "Gamified platform to teach kids about legal rights. Integrated games, animated modules, and GenAI-powered quizzes tailored to different age groups.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "TypeScript",
      "Express.js",
    ],
    link: "https://github.com/MohammedNayeemE",
    featured: true,
  },
];

export const skills = {
  primary: ["Python", "TypeScript", "Go", "React", "Next.js", "FastAPI"],
  secondary: ["LangChain", "LangGraph", "PostgreSQL", "Docker", "Redis", "AWS"],
  tools: ["Git", "Linux", "Neovim", "Tmux", "Docker", "GitHub Actions"],
};

export const achievements = [
  {
    title: "Intel OneAPI Finalist",
    description: "Among 400 participants at Shaastra University",
    year: "Feb 2024",
  },
  {
    title: "Revamp Hackathon Winner",
    description: "1st place among 500 participants",
    year: "Mar 2024",
  },
  {
    title: "BITS Pilani Hackathon",
    description: "Top 10 winners",
    year: "Dec 2023",
  },
  {
    title: "TCS CodeVita",
    description: "Top 900 rank among 10,000 finalists",
    year: "Jan 2024",
  },
];

export const competitiveProgramming = {
  leetcode: {
    rating: 1974,
    badge: "Knight",
    problems: "800+",
    percentile: "Top 3.2%",
  },
  codechef: { rating: 1676, stars: 3 },
  codeforces: { rating: 1192, problems: "200+" },
};

export const books = [
  {
    title: "The Art of Readable Code",
    authors: "Dustin Boswell & Trevor Foucher",
    description:
      "Practical techniques for writing code that's easy to understand. Changed how I think about naming, comments, and code structure.",
    link: "https://www.oreilly.com/library/view/the-art-of/9781449318482/",
    category: "Software Engineering",
  },
];
