import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, Github, Folder, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { allProjects } from "@/data/projects";

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12 animate-fade-in-up">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of projects I've worked on, from full-stack applications to frontend experiments.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${0.03 * index}s` }}
              >
                {/* Project Image/Preview */}
                <div
                  className="aspect-video w-full"
                  style={{ background: project.image }}
                >
                  <div className="w-full h-full flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                    <Folder size={36} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono text-muted-foreground mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-all"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-all"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-muted text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
