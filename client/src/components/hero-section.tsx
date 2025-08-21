import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowDown, Play } from "lucide-react";

export function HeroSection() {
  const [, setLocation] = useLocation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="gradient-bg min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 2,
        }}
      />
      <motion.div
        className="absolute bottom-32 right-8 w-6 h-6 bg-white/20 rounded-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 4,
        }}
      />

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >
            <img
              src={`/logo/logo.png?t=${Date.now()}`}
              alt="GS AutoMech Logo"
              className="w-30 h-30 object-contain"
              onError={(e) => {
                // Fallback to icon if logo doesn't exist
                e.currentTarget.style.display = 'none';
                const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'block';
                }
              }}
            />
            <svg
              className="w-10 h-10 hidden"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
            </svg>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Kaveri GS AutoMech
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-6 opacity-90"
        >
          Precision Engineering Solutions
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg mb-8 opacity-80"
        >
          Manufacturing Excellence Since 1995
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-[hsl(var(--gs-primary))] text-white hover:bg-[hsl(var(--gs-primary-light))] animate-pulse-glow px-8 py-3 rounded-full font-semibold"
            onClick={() => setLocation("/about")}
          >
            Explore Our Story
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="bg-[hsl(var(--gs-primary))] text-white hover:bg-[hsl(var(--gs-primary-light))] animate-pulse-glow px-8 py-3 rounded-full font-semibold"
            onClick={() => setLocation("/products")}
          >
            <Play className="mr-2 h-4 w-4" />
            View Products
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
