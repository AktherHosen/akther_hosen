import { Code2, Database, Server, Globe, Smartphone, Palette, Terminal, GitBranch, Cloud, Layers, Zap, Box, FileCode, Braces, Hash, Cpu, FileJson, Flame, Leaf, Route, AppWindow, Send } from "lucide-react";

const skills = {
  frontend: [
    { name: "React", icon: Code2 },
    { name: "JavaScript", icon: FileJson },
    { name: "TypeScript", icon: Braces },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Vue.js", icon: Layers },
    { name: "HTML/CSS", icon: FileCode },
  ],
  backend: [
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Route },
    { name: "Firebase", icon: Flame },
    { name: "MongoDB", icon: Leaf },
    { name: "PostgreSQL", icon: Database },
    { name: "REST APIs", icon: Cpu },
  ],
 tools: [
    { name: "Git", icon: GitBranch },
    { name: "Vercel", icon: Cloud },
    { name: "Postman", icon: Send },    
    { name: "VS Code", icon: AppWindow },
    { name: "Figma", icon: Smartphone },
    { name: "Terminal", icon: Terminal },
  ],
};

const SkillCard = ({ name, icon: Icon }: { name: string; icon: React.ElementType }) => (
  <div className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
    <div className="relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-background border border-border/50 group-hover:border-primary/30 transition-all duration-300">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors">{name}</span>
    </div>
  </div>
);

const SkillCategory = ({ 
  title, 
  skills, 
  delay 
}: { 
  title: string; 
  skills: { name: string; icon: React.ElementType }[]; 
  delay: string;
}) => (
  <div className="animate-fade-in-up" style={{ animationDelay: delay }}>
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      <h3 className="text-lg font-semibold text-primary px-4">{title}</h3>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="font-mono text-primary mb-4">02. Skills & Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </div>

        <div className="space-y-12">
          <SkillCategory title="Frontend" skills={skills.frontend} delay="0.2s" />
          <SkillCategory title="Backend" skills={skills.backend} delay="0.4s" />
          <SkillCategory 
            title="Tools & Others" 
            skills={skills.tools} 
            delay="0.6s" 
          />
        </div>
      </div>
    </section>
  );
};
