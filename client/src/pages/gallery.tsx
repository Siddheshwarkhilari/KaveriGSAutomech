import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { slideUpStagger, staggerContainer } from "@/lib/animations";

export default function Gallery() {

  const photos = [
    {
      id: 1,
      src: "/gallery/gallery-photos/photo-2.webp",
      alt: "Engineering Excellence Together",
      description: "A snapshot of our dynamic team collaborating to deliver precision and quality in every project with cutting-edge technology."
    },
    {
      id: 2,
      src: "/gallery/gallery-photos/photo-1.webp",
      alt: "Passion in Action",
      description: "Focused, skilled, and dedicated—our team ensures smooth operations and flawless execution on the shop floor."
    },
    {
      id: 3,
      src: "/gallery/gallery-photos/photo-12.webp",
      alt: "Leading with Vision",
      description: "Our director sets the strategic direction, blending experience and innovation to guide the company forward."
    },
    {
      id: 4,
      src: "/gallery/gallery-photos/photo-11.webp",
      alt: "Driving Operational Excellence",
      description: "Committed to efficiency and quality, our director ensures every process aligns with our high standards."
    },
    {
      id: 5,
      src: "/gallery/gallery-photos/photo-7.webp",
      alt: "Championing Growth and Innovation",
      description: "With a keen eye on industry trends, our director fosters innovation and continuous improvement."
    },
    {
      id: 6,
      src: "/gallery/gallery-photos/photo-5.webp",
      alt: "Precision at Work",
      description: "Every cut, every component—our skilled workers make sure accuracy and quality come first."
    },
    {
      id: 7,
      src: "/gallery/gallery-photos/photo-6.webp",
      alt: "Hands That Build Excellence",
      description: "Dedicated craftsmanship and attention to detail define the work of our valued team members."
    },
    {
      id: 8,
      src: "/gallery/gallery-photos/photo-8.webp",
      alt: "Production Line",
      description: "Streamlined production line for efficient manufacturing"
    },
    {
      id: 9,
      src: "/gallery/gallery-photos/photo-9.webp",
      alt: "Quality Inspection",
      description: "Inspecting and measuring industrial components to ensure accuracy and precision."
    },
    {
      id: 10,
      src: "/gallery/gallery-photos/photo-10.webp",
      alt: "Assembly Process",
      description: "Assembly process for complex industrial components carried out on the shop floor."
    },
    {
      id: 12,
      src: "/gallery/gallery-photos/photo-4.webp",
      alt: "On Floor Machining",
      description: "Precision machining of components on the shop floor."
    }
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
            Explore Our Expertise — Showcasing Our Workshops in Snapshots
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg opacity-90"
          >
          "Discover the Craft Behind Every Captured Moment"
          </motion.p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-foreground"
          >
            Our Manufacturing Gallery
          </motion.h2>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={slideUpStagger}
                className="group"
              >
                <Card className="glass-morphism border-border/50 hover:border-border transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={`${photo.src}?t=${Date.now()}`}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to placeholder
                          e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                              <rect width="400" height="300" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1"/>
                              <text x="200" y="140" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="14">
                                ${photo.alt}
                              </text>
                              <text x="200" y="160" text-anchor="middle" fill="#9ca3af" font-family="Arial, sans-serif" font-size="12">
                                Gallery Image
                              </text>
                            </svg>
                          `)}`;
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{photo.alt}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{photo.description}</p>
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
