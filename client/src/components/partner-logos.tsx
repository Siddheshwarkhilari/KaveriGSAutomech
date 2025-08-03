import { motion } from "framer-motion";

export function PartnerLogos() {
  const partners = [
    {
      name: "TechCorp Industries",
      logo: "/partner-logos/partner-logo-1.png",
      alt: "TechCorp Industries Logo"
    },
    {
      name: "Advanced Manufacturing",
      logo: "/partner-logos/partner-logo-2.png", 
      alt: "Advanced Manufacturing Logo"
    },
    {
      name: "Global Solutions",
      logo: "/partner-logos/partner-logo-3.png",
      alt: "Global Solutions Logo"
    },
    {
      name: "Innovation Partners",
      logo: "/partner-logos/partner-logo-4.png",
      alt: "Innovation Partners Logo"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Trusted by Industry Leaders
          </h3>
          <p className="text-muted-foreground">
            Partnering with the best to deliver excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 rounded-lg bg-background/50"
            >
              <img
                src={`${partner.logo}?t=${Date.now()}`}
                alt={partner.alt}
                className="max-w-full max-h-16 object-contain"
                onError={(e) => {
                  // Fallback to placeholder
                  e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="120" height="60" xmlns="http://www.w3.org/2000/svg">
                      <rect width="120" height="60" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1" rx="4"/>
                      <text x="60" y="35" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="10">
                        ${partner.name}
                      </text>
                    </svg>
                  `)}`;
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}