import { motion } from "framer-motion";
import { useState } from "react";

interface MasonryItem {
  id: number;
  src: string;
  alt: string;
  height?: number;
}

interface MasonryGridProps {
  items: MasonryItem[];
  columns?: number;
}

export function MasonryGrid({ items, columns = 2 }: MasonryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div 
        className="masonry-grid"
        style={{ columnCount: columns }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="masonry-item cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(item.src)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full rounded-lg shadow-sm"
              style={{ height: item.height ? `${item.height}px` : 'auto' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Full-size image modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </motion.div>
      )}
    </>
  );
}
