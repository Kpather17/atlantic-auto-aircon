export const PartnersSection = () => {
  // Placeholder partner logos
  const partners = [
    { name: "Toyota", logo: "🚗" },
    { name: "Honda", logo: "🚙" },
    { name: "Ford", logo: "🚐" },
    { name: "BMW", logo: "🚘" },
    { name: "Mercedes", logo: "🚔" },
    { name: "Audi", logo: "🚖" },
  ];

  return (
    <section className="py-16 bg-arctic-deep/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gradient-ice mb-12">
          Our Trusted Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="group p-6 bg-card/20 backdrop-blur-sm rounded-lg border border-arctic-ice/20 hover:border-arctic-ice/40 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <p className="text-sm text-arctic-frost group-hover:text-arctic-ice transition-colors">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};