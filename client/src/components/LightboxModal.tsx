import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PortfolioItem } from "./PortfolioGrid";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItem | null;
  allItems: PortfolioItem[];
  onNavigate?: (direction: "prev" | "next") => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  item,
  allItems,
  onNavigate,
}: LightboxModalProps) {
  if (!item) return null;

  const currentIndex = allItems.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allItems.length - 1;

  const handlePrev = () => {
    if (hasPrev && onNavigate) {
      onNavigate("prev");
    }
  };

  const handleNext = () => {
    if (hasNext && onNavigate) {
      onNavigate("next");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 bg-black border-none overflow-hidden" data-testid="lightbox-modal">
        <span className="sr-only">
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription>{item.category} - {item.description || item.title}</DialogDescription>
        </span>

        {/* Header Bar with Close Button */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
          <div className="flex-1" />
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full"
            onClick={onClose}
            data-testid="button-close-lightbox"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Navigation Buttons - At far edges */}
        {hasPrev && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full h-12 w-12 z-50"
            onClick={handlePrev}
            data-testid="button-prev-item"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}
        {hasNext && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full h-12 w-12 z-50"
            onClick={handleNext}
            data-testid="button-next-item"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}

        {/* Main Content Area */}
        <div className="h-full flex items-center justify-center px-16 md:px-20 py-16">
          {/* Image */}
          <div className="max-w-full max-h-full flex items-center justify-center">
            {item.category === "video" ? (
              <div className="relative w-full max-w-5xl aspect-video bg-black rounded-md overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-6">
                    <Play className="h-12 w-12 text-foreground fill-foreground" />
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full max-h-[70vh] object-contain rounded-sm"
              />
            )}
          </div>
        </div>

        {/* Info Footer */}
        <div className="absolute bottom-0 left-0 right-0 z-50 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-white/70 mb-1">
              {item.category}
            </p>
            <h3 className="text-xl md:text-2xl font-serif text-white mb-2">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm md:text-base text-white/80">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
