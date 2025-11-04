import Hero from "../Hero";
import heroImage from "@assets/generated_images/Hero_background_creative_workspace_e441edce.png";

export default function HeroExample() {
  return (
    <Hero
      backgroundImage={heroImage}
      title="Visual Storytelling"
      subtitle="Capturing moments through photography, video, and art. A creative agency bringing your vision to life."
      ctaText="Explore Our Work"
      onCtaClick={() => console.log("CTA clicked")}
    />
  );
}
