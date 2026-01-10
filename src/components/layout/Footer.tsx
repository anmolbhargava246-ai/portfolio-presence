import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const footerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Thinking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="font-display text-xl font-semibold text-foreground"
            >
              Portfolio
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Crafting thoughtful digital experiences with attention to detail
              and a focus on what matters.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
