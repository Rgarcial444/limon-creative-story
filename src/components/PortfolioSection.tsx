import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ProjectData {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
}

const projects: ProjectData[] = [
  {
    id: "1",
    title: "Café Aromático Local",
    category: "Gastronomía",
    challenge: "Un café familiar con 20 años de historia necesitaba atraer clientes más jóvenes y aumentar pedidos online. Su presencia digital era inexistente y perdían ventas frente a cadenas comerciales.",
    solution: "Creamos una landing page que transmite la calidez del café familiar con un diseño moderno. Integramos sistema de pedidos online, menú digital interactivo y storytelling que resalta la historia familiar.",
    result: "Aumento del 300% en pedidos online y 150% más clientes jóvenes en 3 meses."
  },
  {
    id: "2", 
    title: "Consultoría de Bienestar",
    category: "Salud & Bienestar",
    challenge: "Una coach de vida exitosa necesitaba establecer autoridad online y generar leads calificados para sus programas de coaching premium.",
    solution: "Desarrollamos una plataforma que combina testimonios auténticos, contenido de valor y un sistema de evaluación gratuita que califica automáticamente a los prospectos.",
    result: "200% más consultas calificadas y lanzamiento exitoso de programa grupal con lista de espera."
  },
  {
    id: "3",
    title: "Escuela de Arte Infantil", 
    category: "Educación",
    challenge: "Una escuela de arte para niños necesitaba diferenciarse de la competencia y mostrar el impacto real de sus programas educativos.",
    solution: "Creamos una experiencia visual que muestra el progreso artístico de los estudiantes, con galería interactiva, testimonios de padres y sistema de inscripción simplificado.",
    result: "85% más inscripciones y expansión a segunda sede en 6 meses."
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-doodle font-bold text-foreground mb-4">
            Proyectos que hemos co-creado
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada página es una solución a un desafío real. Conoce algunas de nuestras historias.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-warm transition-all duration-300 transform hover:scale-105"
            >
              <Badge variant="secondary" className="mb-3">
                {project.category}
              </Badge>
              <h3 className="text-xl font-doodle font-semibold text-card-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.challenge.substring(0, 120)}...
              </p>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="creative" size="sm" className="w-full">
                    Ver Historia Completa
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-doodle">
                      {project.title}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
                          💡
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Desafío</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          🍋
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Solución Limón.io</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Result */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                          🚀
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Resultado</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed font-medium">
                        {project.result}
                      </p>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        <strong>Disclaimer:</strong> Prototipos con datos resguardados. 
                        La estética es una muestra de nuestro trabajo. Todos los derechos reservados.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;