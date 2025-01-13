'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

export function Locations() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row gap-8 items-center"
      >
        <div className="w-full sm:w-1/2 relative aspect-[4/3]">
          <Image
            src="/asian-woman-eating-restaurant.jpg"
            alt="Woman enjoying dining at Osteria Luna"
            fill
            className="object-cover"
          />
        </div>
        <Card className="w-full md:w-1/2 transition-all duration-300 border-2 border-black hover:shadow-2xl hover:-translate-y-1 rounded-none">
          <CardHeader>
            <CardTitle className="text-4xl md:text-6xl font-cursive tracking-tight">Host A Party</CardTitle>
          </CardHeader>
          <div className="border-b-2 border-black mb-4"></div>
          <CardContent className="space-y-4 p-6">
            <p className="text-black font-sans text-lg leading-relaxed">
              Create unforgettable memories in our enchanting private dining spaces. Perfect for intimate gatherings 
              or grand celebrations under the moonlit ambiance of Osteria Luna.
            </p>
            <div className="flex gap-4">
              <Button className="w-24" variant="outline" size="sm" style={{ backgroundColor: 'black', color: 'white' }}>
                Atlanta
              </Button>
              <Button className="w-24" variant="outline" size="sm" style={{ backgroundColor: 'black', color: 'white' }}>
                Cary
              </Button>
            </div>
            <p className="text-sm text-black font-sans">
              For more information or to book an event, please contact our events team.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row-reverse gap-8 items-center mt-16"
      >
        <div className="w-full md:w-1/2 relative aspect-[4/3]">
          <Image
            src="/group-dining-restaurant.jpg"
            alt="Group dining experience at Osteria Luna"
            fill
            className="object-cover"
          />
        </div>
        <Card className="w-full md:w-1/2 transition-all duration-300 border-2 border-black hover:shadow-2xl hover:-translate-y-1 rounded-none">
          <CardHeader>
            <CardTitle className="text-4xl md:text-6xl font-cursive tracking-tight">Our Specialties</CardTitle>
          </CardHeader>
          <div className="border-b-2 border-black mb-4"></div>
          <CardContent className="space-y-4 p-6">
            <p className="text-black font-sans text-lg leading-relaxed">
              Experience the artistry of our chefs as they craft authentic Italian dishes with local ingredients. 
              From hand-rolled pasta to wood-fired pizzas, each dish captures the essence of traditional Italian cuisine.
            </p>
            <div className="flex gap-4">
              <Button className="w-24" variant="outline" size="sm" style={{ backgroundColor: 'black', color: 'white' }}>
                View Menu
              </Button>
              <Button className="w-24" variant="outline" size="sm" style={{ backgroundColor: 'black', color: 'white' }}>
                Reserve
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
