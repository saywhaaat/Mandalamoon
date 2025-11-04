interface AboutProps {
  title?: string;
  description: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function About({
  title = "About",
  description,
  name,
  role,
  bio,
  image,
}: AboutProps) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Artist Profile */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-md overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                  data-testid="img-artist-photo"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-serif mb-3" data-testid="text-artist-name">
                {name}
              </h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
                {role}
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
