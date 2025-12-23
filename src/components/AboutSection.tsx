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
                Hello! I'm Alex, a web developer based in San Francisco with a passion 
                for creating beautiful, functional websites and applications.
              </p>
              <p>
                My journey into web development started back in 2018 when I decided to 
                try customizing a WordPress theme — turns out hacking together a custom 
                design taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at a 
                startup, a large corporation, and a student-led design studio. My main 
                focus these days is building accessible, inclusive products and digital 
                experiences for a variety of clients.
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
