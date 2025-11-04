import About from "@/components/About";
import member1 from "@assets/generated_images/About_team_member_one_c705b478.png";
import member2 from "@assets/generated_images/About_team_member_two_e1cd077d.png";

// TODO: remove mock functionality - replace with real data
const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Lead Photographer & Co-Founder",
    bio: "Capturing authentic moments through a lens of creativity and passion. 10+ years experience in editorial and commercial photography with work featured in major publications.",
    image: member1,
  },
  {
    name: "Marcus Chen",
    role: "Creative Director & Co-Founder",
    bio: "Bringing visions to life through video and motion. Specialized in cinematic storytelling and brand narratives with a focus on emotional connection and visual impact.",
    image: member2,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About
        title="Meet The Team"
        description="We are a collective of artists, photographers, and storytellers united by our passion for visual creativity. Our work blends technical excellence with artistic vision to create compelling narratives that resonate."
        teamMembers={teamMembers}
      />
    </div>
  );
}
