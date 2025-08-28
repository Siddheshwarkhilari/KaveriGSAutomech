import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

interface CarouselProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  price: string;
}

export function ProductCarousel() {
  const [, setLocation] = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts: CarouselProduct[] = [
    {
      id: "1",
      name: "Heavy Duty Industrial Hinge",
      description: "Premium quality stainless steel hinge designed for heavy industrial applications with superior corrosion resistance and load capacity.",
      image: "/products/hinge-product-1.webp",
      category: "Industrial Hinges",
      features: ["Corrosion Resistant", "500kg Load Capacity", "Stainless Steel 316"],
      price: "$85"
    },
    {
      id: "2",
      name: "Hydraulic Pump System",
      description: "High-performance hydraulic pump system engineered for demanding industrial machinery with exceptional reliability and efficiency.",
      image: "/products/pump-product-1.webp",
      category: "Hydraulic Pumps",
      features: ["High Pressure Output", "Energy Efficient", "Low Maintenance"],
      price: "$1,250"
    },
    {
      id: "3",
      name: "Precision Control Valve",
      description: "Advanced control valve assembly providing precise fluid management for critical industrial applications.",
      image: "/products/valve-product-1.webp",
      category: "Control Valves",
      features: ["High Precision", "Remote Compatible", "Leak-Proof Design"],
      price: "$320"
    },
    {
      id: "4",
      name: "Marine Grade Fasteners",
      description: "Complete set of marine-grade stainless steel fasteners engineered for the harshest environmental conditions.",
      image: "/products/fastener-product-1.webp",
      category: "Fasteners",
      features: ["Marine Grade", "316L Stainless Steel", "Various Sizes"],
      price: "$45"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium manufacturing solutions designed for excellence and reliability
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-[700px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredProducts[currentSlide].image}
                      alt={featuredProducts[currentSlide].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>

                  {/* Product Details */}
                  <div className="bg-card p-8 md:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="mb-4 bg-[hsl(var(--gs-primary))]/10 text-[hsl(var(--gs-primary))] border-[hsl(var(--gs-primary))]/20"
                      >
                        {featuredProducts[currentSlide].category}
                      </Badge>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {featuredProducts[currentSlide].name}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {featuredProducts[currentSlide].description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {featuredProducts[currentSlide].features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-[hsl(var(--gs-primary))]">
                          {featuredProducts[currentSlide].price}
                        </div>
                        <div className="flex gap-3">
                          <Button 
                            variant="outline"
                            onClick={() => setLocation("/products")}
                            className="hover:bg-[hsl(var(--gs-primary))]/10 hover:border-[hsl(var(--gs-primary))]"
                          >
                            View All Products
                          </Button>
                          <Button 
                            onClick={() => setLocation(`/product/${featuredProducts[currentSlide].id}`)}
                            className="bg-[hsl(var(--gs-primary))] hover:bg-[hsl(var(--gs-primary-light))]"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[hsl(var(--gs-primary))] scale-125"
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-muted rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-[hsl(var(--gs-primary))]"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentSlide + 1) / featuredProducts.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
