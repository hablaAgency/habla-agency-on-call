
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    avatar: "/placeholder.svg",
    text: "Mi relación con Guido es sólida, amigable y excelente. Honestamente, tener ese tipo de vínculo y apoyo hace que trabajar con ellos sea fácil.",
    name: "Astrid Martínez",
    position: "PA",
    company: "",
    rating: 5,
    date: "2 de enero de 2025"
  },
  {
    id: 2,
    avatar: "/placeholder.svg",
    text: "Un trabajo excelente, superó mis expectativas.",
    name: "Avi Pilcer",
    position: "AR",
    company: "",
    rating: 5,
    date: "24 de junio de 2024"
  },
  {
    id: 3,
    avatar: "/placeholder.svg",
    text: "Muy atentos, interesados en entender lo que necesitás. Ordenados en su trabajo y claros al reportar.",
    name: "Jorge Seamos Bosques",
    position: "AR",
    company: "",
    rating: 5,
    date: "1 de marzo de 2024"
  },
  {
    id: 4,
    avatar: "/placeholder.svg",
    text: "En mi experiencia trabajando con los chicos, todo súper bien, profesional y prolijo. Siempre responden súper rápido y atienden todo tipo de dudas (¡incluso muchas que exceden el servicio contratado!). Súper contenta :)",
    name: "María José Mas D'Alessandro",
    position: "AR",
    company: "",
    rating: 5,
    date: "15 de diciembre de 2023"
  },
  {
    id: 5,
    avatar: "/placeholder.svg",
    text: "Lo que más destaco, más allá de la calidad en cada tarea, es la predisposición y las ideas que traen a cada reunión y avance. Los reportes mensuales son espectaculares y clarísimos. Me parece algo que destaca su servicio y ayuda a mantener un seguimiento claro de todo el trabajo que se viene haciendo.",
    name: "Delfina Schiano",
    position: "AR",
    company: "",
    rating: 5,
    date: "7 de diciembre de 2023"
  },
  {
    id: 6,
    avatar: "/placeholder.svg",
    text: "¿Qué más se puede pedir? La campaña en redes fue genial, porque las consultas se multiplicaron notablemente. De nuestro lado no medimos el efecto en detalle, pero fue significativo.",
    name: "Gloria Canseco",
    position: "AR",
    company: "",
    rating: 5,
    date: "4 de diciembre de 2023"
  },
  {
    id: 7,
    avatar: "/placeholder.svg",
    text: "Encontramos creatividad, disposición, innovación, seguimiento y comprensión de nuestras necesidades.",
    name: "Silvana Golzman",
    position: "AR",
    company: "",
    rating: 5,
    date: "4 de octubre de 2023"
  },
  {
    id: 8,
    avatar: "/placeholder.svg",
    text: "Recientemente contraté sus servicios para una campaña publicitaria. Desde el primer contacto, escucharon mis ideas y necesidades, y gracias a su experiencia, lograron materializarlas de una forma que superó mis expectativas. La velocidad con la que trabajaron fue asombrosa; cada paso del proceso se manejó eficientemente, permitiéndome tener la campaña lista en tiempo récord. Pero lo que realmente destacó fue la calidad del trabajo final. Los diseños, mensajes y estrategias implementadas fueron excelentes. La atención al detalle y la creatividad en cada elemento de la campaña fueron admirables. Además, su disposición para hacer ajustes según mis devoluciones fue muy valorada.",
    name: "Josefina Chevalie",
    position: "US",
    company: "",
    rating: 5,
    date: "3 de noviembre de 2023"
  },
  {
    id: 9,
    avatar: "/placeholder.svg",
    text: "Excelente equipo de trabajo y profesionales. Logran captar la esencia de cada tarea y reflejarla en los trabajos solicitados. Muy buena atención de cada uno de ellos. Altamente recomendable.",
    name: "Gabriela Gallo",
    position: "AR",
    company: "",
    rating: 5,
    date: "4 de diciembre de 2023"
  },
  {
    id: 10,
    avatar: "/placeholder.svg",
    text: "Tuve una experiencia excelente con Habla, mi portfolio y certificados de autenticidad quedaron de primera. ¡Gran servicio!",
    name: "Isabela Dias Da Silva",
    position: "AR",
    company: "",
    rating: 5,
    date: "4 de diciembre de 2023"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-habla-gray">
      <div className="container mx-auto">
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Lo que dicen nuestros clientes</h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white p-6 md:p-8 rounded-3xl shadow-md flex flex-col items-center">
                      <Avatar className="w-24 h-24 mb-6 bg-habla-blue">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-habla-blue text-white text-xl">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <blockquote className="mb-6 text-center text-gray-700 max-w-2xl">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex mb-3">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <footer className="text-center">
                        <p className="font-semibold text-lg">{testimonial.name} <span className="text-gray-500">({testimonial.position})</span></p>
                        <p className="text-sm text-gray-500">📅 {testimonial.date}</p>
                      </footer>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-habla-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white shadow-md border border-gray-200 rounded-full"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white shadow-md border border-gray-200 rounded-full"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
