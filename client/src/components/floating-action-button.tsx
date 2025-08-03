import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useLocation } from "wouter";

export function FloatingActionButton() {
  const [, setLocation] = useLocation();

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
    >
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-[hsl(var(--gs-primary))] hover:bg-[hsl(var(--gs-primary-light))] shadow-lg animate-pulse-glow"
        onClick={() => setLocation("/contact")}
      >
        <Mail className="h-6 w-6" />
      </Button>
    </motion.div>
  );
}
