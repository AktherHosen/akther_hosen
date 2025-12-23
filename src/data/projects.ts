export const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payments via Stripe, and an intuitive admin dashboard. Built with performance and scalability in mind.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    image: "linear-gradient(145deg, hsl(220 16% 18%) 0%, hsl(220 16% 10%) 100%)",
    category: "Full Stack",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool featuring real-time updates, drag-and-drop kanban boards, and team workspaces. Includes notification system and activity logging.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    image: "linear-gradient(145deg, hsl(220 16% 16%) 0%, hsl(220 16% 9%) 100%)",
    category: "Full Stack",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered platform that generates marketing copy, blog posts, and social media content. Features customizable tone, brand voice settings, and export options.",
    tech: ["Python", "FastAPI", "OpenAI", "React", "TailwindCSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "linear-gradient(145deg, hsl(220 16% 20%) 0%, hsl(220 16% 11%) 100%)",
    category: "AI/ML",
  },
];

export const otherProjects = [
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with location detection, 7-day forecasts, and animated weather icons.",
    tech: ["React", "OpenWeather API", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Frontend",
    image: "linear-gradient(145deg, hsl(220 16% 17%) 0%, hsl(220 16% 10%) 100%)",
  },
  {
    title: "Portfolio Template",
    description: "A customizable developer portfolio template with dark mode and smooth animations.",
    tech: ["Next.js", "TailwindCSS", "MDX"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Frontend",
    image: "linear-gradient(145deg, hsl(220 16% 15%) 0%, hsl(220 16% 9%) 100%)",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with private messaging, group chats, and file sharing.",
    tech: ["React", "Firebase", "WebRTC"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Full Stack",
    image: "linear-gradient(145deg, hsl(220 16% 19%) 0%, hsl(220 16% 11%) 100%)",
  },
  {
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency price tracker with portfolio management and price alerts.",
    tech: ["React", "CoinGecko API", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Frontend",
    image: "linear-gradient(145deg, hsl(220 16% 16%) 0%, hsl(220 16% 10%) 100%)",
  },
  {
    title: "Blog CMS",
    description: "A headless CMS for managing blog content with markdown support and image optimization.",
    tech: ["Node.js", "Express", "MongoDB", "AWS S3"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Backend",
    image: "linear-gradient(145deg, hsl(220 16% 18%) 0%, hsl(220 16% 10%) 100%)",
  },
  {
    title: "Recipe Finder",
    description: "Search and save recipes with ingredient-based filtering and nutritional information.",
    tech: ["Vue.js", "Spoonacular API", "Vuex"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Frontend",
    image: "linear-gradient(145deg, hsl(220 16% 17%) 0%, hsl(220 16% 9%) 100%)",
  },
];

export const allProjects = [...featuredProjects, ...otherProjects];
