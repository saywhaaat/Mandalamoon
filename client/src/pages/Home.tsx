import { useState } from "react";
import Hero from "@/components/Hero";
import PortfolioGrid, { PortfolioItem } from "@/components/PortfolioGrid";
import LightboxModal from "@/components/LightboxModal";
import heroImage from "@assets/generated_images/Hero_background_creative_workspace_e441edce.png";
import photo1 from "@assets/generated_images/Portfolio_photo_one_e81dbf2f.png";
import photo2 from "@assets/generated_images/Portfolio_photo_two_c5450fca.png";
import photo3 from "@assets/generated_images/Portfolio_photo_three_db19c8ba.png";
import art1 from "@assets/generated_images/Portfolio_art_one_ec5a7bbc.png";
import art2 from "@assets/generated_images/Portfolio_art_two_9328d591.png";
import art3 from "@assets/generated_images/Portfolio_art_three_120923c4.png";
import video1 from "@assets/generated_images/Portfolio_video_thumbnail_78fc26ef.png";

// TODO: remove mock functionality - replace with real data
const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    image: photo1,
    title: "Editorial Portrait",
    category: "photo",
    description: "A stunning editorial portrait captured in natural light with dramatic shadows and high contrast",
  },
  {
    id: "2",
    image: photo2,
    title: "Golden Hour Vista",
    category: "photo",
    description: "Mountain landscape at sunset showcasing nature's breathtaking beauty",
  },
  {
    id: "3",
    image: art1,
    title: "Fluid Abstractions",
    category: "art",
    description: "Abstract modern art with flowing organic shapes in earth tones and gold accents",
  },
  {
    id: "4",
    image: video1,
    title: "Creative Studio",
    category: "video",
    description: "Behind-the-scenes look at our creative process and studio environment",
  },
  {
    id: "5",
    image: art2,
    title: "Geometric Calm",
    category: "art",
    description: "Minimalist geometric abstract painting in soft pastel colors",
  },
  {
    id: "6",
    image: photo3,
    title: "Urban Stories",
    category: "photo",
    description: "Atmospheric street photography capturing the mood of the city",
  },
  {
    id: "7",
    image: art3,
    title: "Bold Expression",
    category: "art",
    description: "Vibrant expressive oil painting with bold brushstrokes and rich colors",
  },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    if (!selectedItem) return;

    const currentIndex = portfolioItems.findIndex((i) => i.id === selectedItem.id);
    let newIndex = currentIndex;

    if (direction === "prev" && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === "next" && currentIndex < portfolioItems.length - 1) {
      newIndex = currentIndex + 1;
    }

    setSelectedItem(portfolioItems[newIndex]);
  };

  return (
    <>
      <Hero
        backgroundImage={heroImage}
        title="Visual Storytelling"
        subtitle="Capturing moments through photography, video, and art. A creative agency bringing your vision to life."
      />
      <PortfolioGrid items={portfolioItems} onItemClick={handleItemClick} />
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        item={selectedItem}
        allItems={portfolioItems}
        onNavigate={handleNavigate}
      />
    </>
  );
}
