import { motion } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import { ProductCarousel } from "@/components/product-carousel";
import { PartnerLogos } from "@/components/partner-logos";
import { AnimatedCounter } from "@/components/animated-counter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Building, Cog, Camera, Phone } from "lucide-react";
import { staggerContainer, slideUpStagger } from "@/lib/animations";

export default function Home() {
  const [, setLocation] = useLocation();

  const expertiseCards = [
    {
      icon: Building,
      title: "About Us",
      subtitle: "25+ Years Experience",
      href: "/about",
      color: "hsl(220, 8.9%, 46.1%)"
    },
    {
      icon: Cog,
      title: "Products",
      subtitle: "Premium Quality",
      href: "/products",
      color: "hsl(220, 8.9%, 46.1%)"
    },
    {
      icon: Camera,
      title: "Gallery",
      subtitle: "Our Work",
      href: "/gallery",
      color: "hsl(220, 8.9%, 46.1%)"
    },
    {
      icon: Phone,
      title: "Contact",
      subtitle: "Get In Touch",
      href: "/contact",
      color: "hsl(220, 8.9%, 46.1%)"
    }
  ];

  const stats = [
    { value: 25, suffix: "+", label: "Years Experience" },
    { value: 200, suffix: "+", label: "Products" },
    { value: 100, suffix: "+", label: "Clients" },
    { value: 15, suffix: "+", label: "States" }
  ];

  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Quick Navigation Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            {...slideUpStagger}
            className="text-3xl font-bold text-center mb-12 text-foreground"
          >
            Our Expertise
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {expertiseCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={slideUpStagger}
                whileHover={{ scale: 1.05, y: -10 }}
                className="cursor-pointer"
                onClick={() => setLocation(card.href)}
              >
                <Card className="glass-morphism border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div 
                      className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: card.color }}
                    >
                      <card.icon className="text-white h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={slideUpStagger}>
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-3xl md:text-4xl font-bold mb-2"
                />
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Carousel */}
      <ProductCarousel />

      {/* Partner Logos */}
      <PartnerLogos />

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Why Choose GS AutoMech?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over 25 years of experience in precision manufacturing, we deliver 
              world-class solutions that exceed industry standards.
            </p>
            <Button
              size="lg"
              className="bg-[hsl(var(--gs-primary))] hover:bg-[hsl(var(--gs-primary-light))]"
              onClick={() => setLocation("/about")}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
