'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-24">
        <Image
          src="/images/pizza.jpg"
          alt="Wood-fired pizza in our traditional oven"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl text-white font-cursive"
          >
            About Osteria Luna
          </motion.h1>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl mb-8 font-cursive">Our Story</h2>
          <p className="text-lg leading-relaxed mb-8">
            Osteria Luna, inspired by the enchanting Italian evenings where families gather under moonlit skies, 
            brings the magic of authentic Italian dining to modern American tables. Our philosophy centers on the 
            art of &ldquo;convivio&rdquo; - the joy of sharing good food, wine, and conversation.
          </p>
          <p className="text-lg leading-relaxed">
            Each evening, as the sun sets and the moon rises, our kitchens come alive with the rhythms of 
            traditional recipes passed down through generations, reimagined with contemporary flair and local ingredients.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
          {/* Atlanta Location */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] mb-8">
              <Image
                src="/images/pasta.jpg"
                alt="Fine dining at Osteria Luna Atlanta"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-3xl font-cursive mb-4">Luna Atlanta</h3>
            <p className="text-lg leading-relaxed">
              Nestled in the vibrant Avalon district of Alpharetta, our Atlanta location marries Southern charm 
              with Northern Italian elegance. The centerpiece of our dining room is the hand-crafted Acunto 
              pizza oven, brought stone by stone from Naples, where our pizzaioli craft perfect Neapolitan pies.
            </p>
          </motion.div>

          {/* Cary Location */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] mb-8">
              <Image
                src="/images/steak.jpg"
                alt="Evening dining at Osteria Luna Cary"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-3xl font-cursive mb-4">Luna Cary</h3>
            <p className="text-lg leading-relaxed">
              Our Cary location captures the essence of a Tuscan evening, with its warm terracotta walls and 
              intimate garden seating. Here, our chefs specialize in regional Italian dishes with a North Carolina 
              twist, featuring fresh catches from the coast and produce from local farmers.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 