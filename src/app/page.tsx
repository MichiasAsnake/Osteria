'use client'

import Hero from '@/components/hero'
import { Locations } from '@/components/locations'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-24 bg-black">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-cursive text-5xl text-white md:text-6xl mb-6"
          >
            Our Story
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg mb-8 text-white font-sans px-4"
          >
            At Osteria Luna, we believe in the magic of moonlit dinners and the joy of shared moments. 
            Our kitchens celebrate the timeless traditions of Italian cuisine while embracing local flavors 
            and modern techniques. Each dish tells a story of heritage, innovation, and the simple pleasure 
            of gathering around a table under the evening sky.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>
      <Locations />
      <section className="relative py-40">
        <Image
          src="/images/outdoor-eating-area.jpg"
          alt="Osteria Luna evening ambiance"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 60%' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto bg-white/50 p-12 text-center"
          >
            <motion.h2 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-6xl font-cursive mb-8 text-black"
            >
              Dine Under the Stars
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-white"
              >
                Make a Reservation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

