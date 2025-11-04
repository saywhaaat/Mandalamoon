import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function Hero({
  backgroundImage,
  title,
  subtitle,
  ctaText = "View Portfolio",
  onCtaClick,
}: HeroProps) {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <Button
          size="lg"
          className="backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 text-white text-base px-8 py-6 rounded-md"
          onClick={onCtaClick || handleScroll}
          data-testid="button-hero-cta"
        >
          {ctaText}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
}
