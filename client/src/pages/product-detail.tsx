import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Star, Check } from "lucide-react";
import { slideUpStagger, staggerContainer } from "@/lib/animations";
import type { Product } from "@shared/schema";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const [selectedImage, setSelectedImage] = useState(0);

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["/api/products", id],
  });

  // Sample product images for the slider
  const productImages = [
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  ];

  const sampleFeatures = [
    "Corrosion resistant coating",
    "Load capacity: 500kg",
    "Temperature range: -40°C to 200°C",
    "Easy installation",
    "5-year warranty"
  ];

  const specifications = {
    "Material": "Stainless Steel 316",
    "Dimensions": "150mm x 100mm",
    "Weight": "2.5kg",
    "Finish": "Brushed",
    "Certification": "ISO 9001"
  };

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[hsl(var(--gs-primary))]" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-destructive">Product not found</p>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Button
          variant="ghost"
          onClick={() => setLocation("/products")}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Button>
      </div>

      {/* Product Images Slider */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <div>
            <div className="relative mb-4">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-[hsl(var(--gs-primary))]"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge
                  variant={product.inStock ? "default" : "destructive"}
                  className={product.inStock ? "bg-[hsl(var(--gs-success))]" : ""}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
                <Badge variant="outline">{product.category}</Badge>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(4.8/5 - 127 reviews)</span>
              </div>
            </div>

            <Card className="glass-morphism border-none">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-morphism border-none">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Features</h3>
                <ul className="space-y-2">
                  {sampleFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-[hsl(var(--gs-success))]" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                size="lg"
                className="bg-[hsl(var(--gs-primary))] hover:bg-[hsl(var(--gs-primary-light))]"
              >
                Request Quote
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Datasheet
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technical Specifications */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={slideUpStagger}
            className="text-2xl font-bold text-foreground mb-6"
          >
            Technical Specifications
          </motion.h2>
          <motion.div variants={slideUpStagger}>
            <Card className="glass-morphism border-none">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border/50">
                      <span className="text-muted-foreground">{key}:</span>
                      <span className="font-medium text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
