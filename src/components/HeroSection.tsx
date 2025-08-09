import { Button } from "@/components/ui/button";
import lemonPainter from "@/assets/lemon-painter.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-1/3 w-4 h-4 bg-primary/15 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Visual */}
          <div className="mb-8 flex justify-center">
            <img 
              src={lemonPainter} 
              alt="Limón Creativo" 
              className="w-32 h-32 md:w-40 md:h-40 animate-wiggle"
            />
          </div>
          
          {/* Main Message */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-doodle font-bold mb-6 text-foreground leading-tight">
            Tu negocio tiene una historia.{" "}
            <span className="text-primary">
              Nosotros creamos el lienzo
            </span>{" "}
            para contarla.
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Diseñamos landing pages que no solo se ven increíbles, sino que convierten 
            visitantes en clientes. Hecho con la magia de la IA y la pasión de un equipo.
          </p>
          
          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto font-doodle"
          >
            🍋 Cuéntanos tu historia
          </Button>
          
          {/* Decorative elements */}
          <div className="mt-12 flex justify-center items-center space-x-4 opacity-60">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;