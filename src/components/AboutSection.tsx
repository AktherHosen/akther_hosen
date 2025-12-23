import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive and beautiful user experiences",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and seamless interactions",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <p className="font-mono text-primary mb-4">01. About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Passionate about crafting{" "}
              <span className="text-gradient">digital solutions</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hello! I'm a web developer with a strong interest in building
                clean, user-friendly websites and applications that solve real
                problems.
              </p>

              <p>
                My journey into web development began with curiosity — starting
                from simple HTML and CSS experiments and gradually moving into
                WordPress customization. Working on themes and plugins helped me
                understand how the web really works behind the scenes.
              </p>

              <p>
                Over time, I expanded my skills into JavaScript, React, and
                backend development, working on real-world projects that
                improved both my technical skills and problem-solving mindset.
              </p>

              <p>
                Today, I focus on building scalable, accessible, and
                performance-driven web applications. I enjoy learning new
                technologies, refining best practices, and continuously
                improving the quality of the products I build.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass rounded-xl p-6 hover:glow-subtle transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
