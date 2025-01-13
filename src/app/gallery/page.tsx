'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/kristof-korody-_KlwQzqdXr8-unsplash.jpg',
    alt: 'Elegant soufflé with mushrooms and herbs in a rustic bowl',
  },
  {
    src: '/images/kristof-korody-4bb4gqTeoKo-unsplash.jpg',
    alt: 'Gourmet appetizer with caviar and microgreens',
  },
  {
    src: '/images/kristof-korody-dqbqj3mdFfA-unsplash.jpg',
    alt: 'Perfectly cooked steak with grilled vegetables',
  },
  {
    src: '/images/kristof-korody-F0Y061kT4bM-unsplash.jpg',
    alt: 'Creamy soup with crispy kale and seasonal vegetables',
  },
  {
    src: '/images/kristof-korody-IXpYGLXaI3g-unsplash.jpg',
    alt: 'Artisanal pasta with white sauce and fresh herbs',
  },
  {
    src: '/images/kristof-korody-lSQGmRDRisU-unsplash.jpg',
    alt: 'Delicate dessert with fresh berries and ice cream',
  },
  {
    src: '/images/kristof-korody-O3gB6kC0wmI-unsplash.jpg',
    alt: 'Fresh shrimp salad with crispy croutons',
  },
  {
    src: '/images/kristof-korody-P3hY4dnjQgA-unsplash.jpg',
    alt: 'White asparagus with caviar and mustard seeds',
  },
  {
    src: '/images/kristof-korody-PZTKppUR0h0-unsplash.jpg',
    alt: 'Deconstructed dessert with meringue and pistachios',
  },
  {
    src: '/images/kristof-korody-VOC-tjwRwc4-unsplash.jpg',
    alt: 'Chocolate dessert with sugar-dusted churros',
  },
  {
    src: '/images/kristof-korody-wOcQe5-oKyo-unsplash (1).jpg',
    alt: 'Creative pasta presentation with orange sauce and herbs',
  }
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    if (selectedImage !== null) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') handlePrevious()
        if (e.key === 'ArrowRight') handleNext()
        if (e.key === 'Escape') setSelectedImage(null)
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  const handlePrevious = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Image Grid */}
      <div className="grid grid-cols-1 pt-20 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Image Slider Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4 flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="relative w-full h-full" onClick={e => e.stopPropagation()}>
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 