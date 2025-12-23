import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@alexjohnson.dev", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-xl font-bold text-primary hover:glow-primary transition-all duration-300"
          >
            {"<Dev />"}
          </a>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-primary" /> by Alex Johnson © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};
