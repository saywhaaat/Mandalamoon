import PortfolioGrid, { PortfolioItem } from "../PortfolioGrid";
import photo1 from "@assets/generated_images/Portfolio_photo_one_e81dbf2f.png";
import photo2 from "@assets/generated_images/Portfolio_photo_two_c5450fca.png";
import photo3 from "@assets/generated_images/Portfolio_photo_three_db19c8ba.png";
import art1 from "@assets/generated_images/Portfolio_art_one_ec5a7bbc.png";
import art2 from "@assets/generated_images/Portfolio_art_two_9328d591.png";
import art3 from "@assets/generated_images/Portfolio_art_three_120923c4.png";
import video1 from "@assets/generated_images/Portfolio_video_thumbnail_78fc26ef.png";

const mockItems: PortfolioItem[] = [
  { id: "1", image: photo1, title: "Editorial Portrait", category: "photo" },
  { id: "2", image: photo2, title: "Golden Hour Vista", category: "photo" },
  { id: "3", image: art1, title: "Fluid Abstractions", category: "art" },
  { id: "4", image: video1, title: "Creative Studio", category: "video" },
  { id: "5", image: art2, title: "Geometric Calm", category: "art" },
  { id: "6", image: photo3, title: "Urban Stories", category: "photo" },
  { id: "7", image: art3, title: "Bold Expression", category: "art" },
];

export default function PortfolioGridExample() {
  return (
    <PortfolioGrid
      items={mockItems}
      onItemClick={(item) => console.log("Portfolio item clicked:", item.title)}
    />
  );
}
