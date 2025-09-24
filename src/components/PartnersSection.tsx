export const PartnersSection = () => {
  const partners = [
    { name: "Dodge", logo: "/dodge-logo.png" },
    { name: "Jeep", logo: "/jeep-logo.png" },
    { name: "Toyota", logo: "/toyota-logo.png" },
    { name: "Mercedes-Benz", logo: "/mercedes-logo.png" },
    { name: "Volkswagen", logo: "/volkswagen-logo.png" },
    { name: "Hyundai", logo: "/hyundai-logo.png" },
    { name: "Mazda", logo: "/mazda-logo.png" },
  ];

  return (
    <section className="py-16 bg-arctic-deep/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gradient-ice mb-12">
          Our Trusted Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group p-4 bg-card/20 backdrop-blur-sm rounded-lg border border-arctic-ice/20 hover:border-arctic-ice/40 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <div className="bg-white rounded-lg p-2"> {/* White background */}
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-12 w-12 object-contain" // Smaller to fit in container
                    />
                  </div>
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