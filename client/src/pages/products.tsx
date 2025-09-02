import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { slideUpStagger, staggerContainer } from "@/lib/animations";

export default function Products() {
  // Product list with random names and descriptions for easy updating
  const products = [
    {
      id: 1,
      name: "Heavy-Duty Stainless Steel Hinge",
      description: "Built for tough industrial use, offering strength and corrosion resistance.",
      image: "/products/product-images/product-1.webp"
    },
    {
      id: 2,
      name: "Customized Flange",
      description: "Ensures smooth motion and low friction in high-speed mechanical systems.",
      image: "/products/product-images/product-2.webp"
    },
    {
      id: 3,
      name: "Customized Panel Locks",
      description: "Tailored locking solutions for various industrial applications.",
      image: "/products/product-images/product-3.webp"
    },
    {
      id: 4,
      name: "High tensile Fasteners",
      description: "High-strength fasteners for industrial applications",
      image: "/products/product-images/product-35.webp"
    },
    {
      id: 5,
      name: "Door Hinge Assembly",
      description: "Built for tough industrial use, offering strength and corrosion resistance.",
      image: "/products/product-images/product-5.webp"
    },
    {
      id: 6,
      name: "Panel Locks",
      description: "Secure locking solutions for industrial panels",
      image: "/products/product-images/product-6.webp"
    },
    {
      id: 7,
      name: "Industrial Fastener Set",
      description: "Complete set of high-strength bolts, nuts, and washers",
      image: "/products/product-images/product-27.webp"
    },
    {
      id: 8,
      name: "Door Lock Handle",
      description: "Ergonomic handles designed for industrial door locks",
      image: "/products/product-images/product-8.webp"
    },
    {
      id: 9,
      name: "Hinge",
      description: "Durable hinges for industrial applications",
      image: "/products/product-images/product-28.webp"
    },
    {
      id: 10,
      name: "Handle holder",
      description: "Robust holders for secure handle mounting",
      image: "/products/product-images/product-10.webp"
    },
    {
      id: 11,
      name: "Refer Lock Set",
      description: "Secure locking solutions for refrigeration units",
      image: "/products/product-images/product-11.webp"
    },
    {
      id: 12,
      name: "Tube Guide",
      description: "Precision-engineered tube guides for smooth operation",
      image: "/products/product-images/product-12.webp"
    },
    {
      id: 13,
      name: "Keeper",
      description: "Durable keepers for secure panel locking",
      image: "/products/product-images/product-13.webp"
    },
    {
      id: 14,
      name: "Cam & Keeper",
      description: "Integrated cam and keeper solutions for secure locking",
      image: "/products/product-images/product-14.webp"
    },
    {
      id: 15,
      name: "Clevise",
      description: "Heavy-duty clevis for secure connections",
      image: "/products/product-images/product-30.webp"
    },
    {
      id: 15,
      name: "Hinges",
      description: "Durable hinges for industrial applications",
      image: "/products/product-images/product-16.webp"
    },
    {
      id: 16,
      name: "New Product G",
      description: "Precision-engineered component for robotics",
      image: "/products/product-images/product-17.webp"
    },
    {
      id: 17,
      name: "Hinge",
      description: "Durable hinges for industrial applications",
      image: "/products/product-images/product-18.webp"
    },
    {
      id: 18,
      name: "U bolt",
      description: "Heavy-duty U bolts for secure fastening",
      image: "/products/product-images/product-19.webp"
    },
    {
      id: 20,
      name: "U bolt",
      description: "Precision-engineered U bolts for secure fastening",
      image: "/products/product-images/product-21.webp"
    },
    {
      id: 21,
      name: "New Product L",
      description: "Advanced actuator for industrial automation",
      image: "/products/product-images/product-22.webp"
    },
    {
      id: 22,
      name: "New Product M",
      description: "Custom part for advanced automation",
      image: "/products/product-images/product-23.webp"
    },
    {
      id: 23,
      name: "New Product N",
      description: "High-efficiency sensor integration",
      image: "/products/product-images/product-24.webp"
    },
    {
      id: 24,
      name: "Container refer lock set",
      description: "Secure locking solutions for refrigeration units",
      image: "/products/product-images/product-25.webp"
    },
    {
      id: 25,
      name: "Hinge",
      description: "Durable hinges for industrial applications",
      image: "/products/product-images/product-26.webp"
    },
    {
      id: 26,
      name: "Tube Guide",
      description: "Precision-engineered tube guides for smooth operation",
      image: "/products/product-images/product-7.webp"
    },
    {
      id: 27,
      name: "Hinge",
      description: "Durable hinges for industrial applications",
      image: "/products/product-images/product-9.webp"
    },
    {
      id: 28,
      name: "New Product L",
      description: "Advanced actuator for industrial automation",
      image: "/products/product-images/product-31.webp"
    },
    {
      id: 29,
      name: "Handle",
      description: "Ergonomic handles for easy operation",
      image: "/products/product-images/product-15.webp"
    },
    {
      id: 30,
      name: "Cable Tray",
      description: "High-efficiency cable management solutions",
      image: "/products/product-images/product-29.webp"
    },
    {
      id: 31,
      name: "Door Hinge",
      description: "Durable door hinges for industrial applications",
      image: "/products/product-images/product-32.webp"
    },
    {
      id: 32,
      name: "U Bracket",
      description: "Heavy-duty U brackets for secure mounting",
      image: "/products/product-images/product-33.webp"
    },
    {
      id: 33,
      name: "Canopy Locks",
      description: "Secure locking solutions for refrigeration units",
      image: "/products/product-images/product-34.webp"
    },
    {
      id: 34,
      name: "New Product N",
      description: "High-efficiency sensor integration",
      image: "/products/product-images/product-4.webp"
    },
    {
      id: 35,
      name: "New Product O",
      description: "Precision-engineered component for robotics",
      image: "/products/product-images/product-36.webp"
    },
    {
      id: 36,
      name: "New Product L",
      description: "Advanced actuator for industrial automation",
      image: "/products/product-images/product-37.webp"
    },
  ];



  return (
    <div className="pt-20">
      {/* Header */}
      <section className="gradient-bg text-black py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
          Innovative Engineering Products for Every Industrial Demand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg opacity-90"
          >
          "Premium Manufacturing, Tailored Solutions, and Swift Delivery"
          </motion.p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-foreground"
          >
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={slideUpStagger}
                className="group"
              >
                <Card className="glass-morphism border-border/50 hover:border-border transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={`${product.image}?t=${Date.now()}`}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to placeholder
                          e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                              <rect width="300" height="300" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1"/>
                              <text x="150" y="140" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="14">
                                ${product.name}
                              </text>
                              <text x="150" y="160" text-anchor="middle" fill="#9ca3af" font-family="Arial, sans-serif" font-size="12">
                                Product Image
                              </text>
                            </svg>
                          `)}`;
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{product.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
