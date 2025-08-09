import sadBusiness from "@/assets/sad-business.png";
import happyLemon from "@/assets/happy-lemon.png";

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-creative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Problem */}
          <div className="text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <img 
                src={sadBusiness} 
                alt="Negocio preocupado" 
                className="w-24 h-24 animate-pulse-soft"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-doodle font-bold text-foreground mb-4">
              ¿Sientes que tu presencia digital no te representa?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sabemos lo frustrante que es tener un negocio increíble pero que online 
              no logre transmitir esa magia. Los clientes no llegan, las ventas no 
              crecen, y sientes que estás perdiendo oportunidades cada día.
            </p>
          </div>
          
          {/* Solution */}
          <div className="text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <img 
                src={happyLemon} 
                alt="Limón sonriente" 
                className="w-24 h-24 animate-float"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-doodle font-bold text-foreground mb-4">
              En Limón.io, convertimos tu esencia en una experiencia digital única
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Creamos landing pages que no solo se ven hermosas, sino que cuentan 
              tu historia de manera auténtica y convierten visitantes en clientes fieles. 
              Con tecnología de vanguardia y un toque humano irresistible.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                ✨ Diseño único
              </span>
              <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
                🚀 Alta conversión
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                💫 IA + Creatividad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;