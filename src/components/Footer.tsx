import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand & Contact Form */}
          <div className="space-y-8">
            {/* Logo & Description */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-doodle font-bold mb-4 text-primary">
                🍋 Limon.io Creators
              </h3>
              <p className="text-background/80 leading-relaxed">
                Transformamos historias en experiencias digitales que conectan, 
                convierten y hacen crecer tu negocio.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Instagram"
              >
                📱
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h4 className="text-xl font-doodle font-semibold text-center md:text-left">
              ¡Conversemos sobre tu proyecto!
            </h4>
            
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-background/90">
                  Nombre
                </Label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Tu nombre"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-background/90">
                  Email
                </Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="tu@email.com"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-background/90">
                  Cuéntanos tu historia
                </Label>
                <Textarea 
                  id="message"
                  placeholder="Háblanos de tu negocio y qué sueñas lograr online..."
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 min-h-[100px]"
                />
              </div>
              
              <Button 
                variant="hero" 
                className="w-full bg-primary hover:bg-primary/90 text-foreground"
              >
                Enviar mensaje 🚀
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm text-center md:text-left">
              © 2024 Limon.io Creators. Todos los derechos reservados. 
              Hecho con 💛 para negocios que quieren brillar.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;