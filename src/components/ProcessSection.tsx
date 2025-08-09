import processIcons from "@/assets/process-icons.png";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Nos conocemos",
      description: "Conversamos sobre tu negocio, tus sueños y desafíos. Entendemos tu esencia y a quién quieres llegar.",
      icon: "👥"
    },
    {
      number: "02", 
      title: "Creamos la magia",
      description: "Nuestro equipo combina creatividad humana con inteligencia artificial para diseñar tu experiencia única.",
      icon: "✨"
    },
    {
      number: "03",
      title: "Tu negocio brilla",
      description: "Lanzamos tu nueva presencia digital y acompañamos el crecimiento. ¡Es hora de conquistar el mundo!",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-doodle font-bold text-foreground mb-4">
            Así co-creamos tu página
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple, transparente y lleno de creatividad
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="text-center relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary/30 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
                </div>
              )}
              
              {/* Step Content */}
              <div className="relative z-10">
                {/* Step Number & Icon */}
                <div className="mb-6 flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center text-3xl mb-2 shadow-soft animate-wiggle">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-doodle font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Step Info */}
                <h3 className="text-2xl font-doodle font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur px-6 py-3 rounded-full shadow-soft">
            <span className="text-2xl animate-bounce">🍋</span>
            <span className="text-muted-foreground font-medium">
              ¿Listo para comenzar tu historia?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;