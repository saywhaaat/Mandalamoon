import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
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
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none" data-testid="lightbox-modal">
        <VisuallyHidden>
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription>{item.category} - {item.description || item.title}</DialogDescription>
        </VisuallyHidden>
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
          onClick={onClose}
          data-testid="button-close-lightbox"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Navigation Buttons */}
        {hasPrev && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
            onClick={handleNext}
            data-testid="button-next-item"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}

        {/* Content */}
        <div className="flex items-center justify-center h-full p-8 md:p-16">
          <div className="w-full h-full flex flex-col items-center justify-center">
            {/* Image or Video */}
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
                className="max-w-full max-h-full object-contain rounded-md"
              />
            )}

            {/* Info */}
            <div className="mt-8 text-center">
              <p className="text-xs uppercase tracking-wider text-white/70 mb-2">
                {item.category}
              </p>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-base text-white/80 max-w-2xl mx-auto">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
