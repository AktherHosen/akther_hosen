import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects, otherProjects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="font-mono text-primary mb-4">03. Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Things I've <span className="text-gradient">Built</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-32">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-center animate-fade-in-up`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div
                    className="relative aspect-video rounded-2xl shadow-elevated overflow-hidden border border-border/50"
                    style={{ background: project.image }}
                  >
                    <div className="w-full h-full flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center">
                        <Folder size={64} className="text-primary mx-auto mb-4 opacity-50" />
                        <p className="font-mono text-sm text-muted-foreground">
                          Project Preview
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-primary text-sm">Featured Project</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl" />
                  <div className="relative bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-background border border-border/50 font-mono text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-secondary/50 text-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-secondary/50 text-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Other Noteworthy Projects</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.slice(0, 3).map((project, index) => (
            <div
              key={project.title}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative bg-secondary/30 border border-border/50 rounded-xl p-8 h-full group-hover:border-primary/30 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Folder size={28} className="text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/projects">
            <Button variant="heroOutline" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
