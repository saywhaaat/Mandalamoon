interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface AboutProps {
  title?: string;
  description: string;
  teamMembers: TeamMember[];
}

export default function About({
  title = "About Us",
  description,
  teamMembers,
}: AboutProps) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center" data-testid={`team-member-${index}`}>
              <div className="mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-2" data-testid={`text-member-name-${index}`}>
                {member.name}
              </h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                {member.role}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground max-w-sm mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
