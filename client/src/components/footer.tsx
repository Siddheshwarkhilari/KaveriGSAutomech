import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "News", href: "#" }
    ],
    products: [
      { label: "Industrial Hinges", href: "/products" },
      { label: "Hydraulic Pumps", href: "/products" },
      { label: "Control Valves", href: "/products" },
      { label: "Fasteners", href: "/products" }
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Technical Support", href: "/contact" },
      { label: "Documentation", href: "#" },
      { label: "Warranty", href: "#" }
    ],
    resources: [
      { label: "Gallery", href: "/gallery" },
      { label: "Case Studies", href: "#" },
      { label: "Downloads", href: "#" },
      { label: "Blog", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: Mail,
      label: "info@gsautomech.com",
      href: "mailto:info@gsautomech.com"
    },
    {
      icon: MapPin,
      label: "123 Industrial Ave, Manufacturing District",
      href: "#"
    }
  ];

  return (
    <footer className="bg-[hsl(var(--gs-secondary-dark))] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[hsl(var(--gs-primary))] rounded-lg flex items-center justify-center">
                <Settings className="text-white text-sm" />
              </div>
              <span className="font-bold text-xl">GS AutoMech</span>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--gs-primary))] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4 text-foreground">COMPANY</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      className="text-muted-foreground hover:text-foreground hover:bg-muted/20 p-0 h-auto font-normal justify-start"
                    >
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4 text-foreground">PRODUCTS</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      className="text-muted-foreground hover:text-foreground hover:bg-muted/20 p-0 h-auto font-normal justify-start"
                    >
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-4 text-foreground">SUPPORT</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      className="text-muted-foreground hover:text-foreground hover:bg-muted/20 p-0 h-auto font-normal justify-start"
                    >
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <Card className="glass-morphism border-white/10 bg-white/5">
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-foreground text-center">OUR TRUSTED PARTNER</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: num * 0.1 }}
                    className="flex items-center justify-center p-3 rounded-lg bg-white/10"
                  >
                    <img
                      src={`/partner-logos/partner-logo-${num}.png?t=${Date.now()}`}
                      alt={`Partner ${num} Logo`}
                      className="max-w-full max-h-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
                            <rect width="80" height="40" fill="white" opacity="0.7" rx="4"/>
                            <text x="40" y="25" text-anchor="middle" fill="currentColor" font-family="Arial, sans-serif" font-size="8">
                              Partner ${num}
                            </text>
                          </svg>
                        `)}`;
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <Card className="glass-morphism border-white/10 bg-white/5">
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Get In Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <info.icon className="w-5 h-5 text-[hsl(var(--gs-primary))]" />
                    <span className="text-sm">{info.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} GS AutoMech. All rights reserved. Precision Engineering Since 1995.
            </div>
            <div className="flex space-x-6 text-sm">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground p-0 h-auto font-normal"
              >
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground p-0 h-auto font-normal"
              >
                Terms of Service
              </Button>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground p-0 h-auto font-normal"
              >
                Cookie Policy
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}