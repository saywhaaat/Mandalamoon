import { useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioCard from "./PortfolioCard";

export interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  category: "photo" | "video" | "art";
  description?: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  onItemClick: (item: PortfolioItem) => void;
}

export default function PortfolioGrid({ items, onItemClick }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "photo" | "video" | "art">("all");

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  const filters = [
    { id: "all", label: "All Work" },
    { id: "photo", label: "Photography" },
    { id: "video", label: "Video" },
    { id: "art", label: "Art" },
  ] as const;

  return (
    <section className="py-20 md:py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our creative work spanning photography, video production, and contemporary art
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" data-testid="portfolio-filters">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="px-6 py-2 text-sm uppercase tracking-wider"
              data-testid={`button-filter-${filter.id}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <PortfolioCard
              key={item.id}
              {...item}
              onClick={() => onItemClick(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
