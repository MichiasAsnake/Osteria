'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  "/asian-woman-eating-restaurant.jpg",
  "/group-dining-restaurant.jpg"
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[800px] mx-auto max-w-[1800px] my-8 mx-8 bg-white overflow-hidden">
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <Image
            key={`hero-image-${index}`}
            src={src}
            alt={`Osteria Luna culinary creation ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ transitionProperty: 'opacity, transform', transitionDuration: '1000ms' }}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-black/20" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-0 left-0"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white px-60 py-8 rounded-tr-sm overflow-hidden"
          >
            <h1 className="text-5xl md:text-7xl font-cursive tracking-tight text-black whitespace-nowrap">
              Welcome
            </h1>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          {images.map((_, idx) => (
            <motion.button
              key={`hero-dot-${idx}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.5 + idx * 0.1 }}
              onClick={() => setCurrentImage(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentImage ? 'bg-white scale-100' : 'bg-white/50 scale-90'
              }`}
              aria-label={`Show image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

