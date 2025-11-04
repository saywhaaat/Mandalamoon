import PortfolioCard from "../PortfolioCard";
import photoImage from "@assets/generated_images/Portfolio_photo_one_e81dbf2f.png";

export default function PortfolioCardExample() {
  return (
    <div className="max-w-sm">
      <PortfolioCard
        id="1"
        image={photoImage}
        title="Editorial Portrait"
        category="photo"
        onClick={() => console.log("Portfolio card clicked")}
      />
    </div>
  );
}
