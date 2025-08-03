import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [, setLocation] = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        rotateX: 10,
        rotateY: 10,
      }}
      className="product-card"
    >
      <Card className="glass-morphism border-none shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={product.image || "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge 
              variant={product.inStock ? "default" : "destructive"}
              className={product.inStock ? "bg-[hsl(var(--gs-success))]" : ""}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
            {product.price && (
              <span className="text-[hsl(var(--gs-primary))] font-bold">
                {product.price}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            className="w-full bg-[hsl(var(--gs-primary))] hover:bg-[hsl(var(--gs-primary-light))]"
            onClick={() => setLocation(`/product/${product.id}`)}
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
