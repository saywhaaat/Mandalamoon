import { Play } from "lucide-react";

interface PortfolioCardProps {
  id: string;
  image: string;
  title: string;
  category: "photo" | "video" | "art";
  onClick: () => void;
}

export default function PortfolioCard({
  image,
  title,
  category,
  onClick,
}: PortfolioCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-md cursor-pointer"
      onClick={onClick}
      data-testid={`card-portfolio-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Video Play Icon */}
        {category === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transition-transform group-hover:scale-110">
              <Play className="h-8 w-8 text-foreground fill-foreground" />
            </div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs uppercase tracking-wider text-white/70 mb-2">
              {category}
            </p>
            <h3 className="text-xl md:text-2xl font-serif text-white">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
