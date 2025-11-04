import { useState } from "react";
import LightboxModal from "../LightboxModal";
import { Button } from "@/components/ui/button";
import { PortfolioItem } from "../PortfolioGrid";
import photo1 from "@assets/generated_images/Portfolio_photo_one_e81dbf2f.png";
import photo2 from "@assets/generated_images/Portfolio_photo_two_c5450fca.png";

const mockItems: PortfolioItem[] = [
  { id: "1", image: photo1, title: "Editorial Portrait", category: "photo", description: "A stunning editorial portrait captured in natural light" },
  { id: "2", image: photo2, title: "Golden Hour Vista", category: "photo", description: "Mountain landscape at sunset" },
];

export default function LightboxModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigate = (direction: "prev" | "next") => {
    if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "next" && currentIndex < mockItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)} data-testid="button-open-lightbox">
        Open Lightbox
      </Button>
      <LightboxModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        item={mockItems[currentIndex]}
        allItems={mockItems}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
