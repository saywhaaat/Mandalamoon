import About from "../About";
import member1 from "@assets/generated_images/About_team_member_one_c705b478.png";
import member2 from "@assets/generated_images/About_team_member_two_e1cd077d.png";

export default function AboutExample() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Lead Photographer",
      bio: "Capturing authentic moments through a lens of creativity and passion. 10+ years experience in editorial and commercial photography.",
      image: member1,
    },
    {
      name: "Marcus Chen",
      role: "Creative Director",
      bio: "Bringing visions to life through video and motion. Specialized in cinematic storytelling and brand narratives.",
      image: member2,
    },
  ];

  return (
    <About
      description="We are a collective of artists, photographers, and storytellers united by our passion for visual creativity. Our work blends technical excellence with artistic vision."
      teamMembers={teamMembers}
    />
  );
}
