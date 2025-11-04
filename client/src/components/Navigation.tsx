import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", section: "home" },
    { name: "Portfolio", section: "portfolio" },
    { name: "About", section: "about" },
    { name: "Contact", section: "contact" },
  ];

  const scrollToSection = (section: string) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl md:text-2xl font-serif font-light tracking-tight hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="link-home"
          >
            Creative Studio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md ${
                  isActive(item.section)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`block w-full text-left px-4 py-3 text-base font-medium tracking-wide uppercase rounded-md hover-elevate active-elevate-2 ${
                  isActive(item.section)
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
