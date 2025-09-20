"use client"

import { motion } from "framer-motion"
import { TestimonialCard } from "./TestimonialCard"

const testimonials = [
  {
    name: "Mark Selby",
    role: "4x World Snooker Champion",
    company: "Professional Snooker Association",
    content: "Chris identified a problem I had and together we worked on the mental aspect. Now I'm mentally iron-strong again. I'm bursting with confidence. This is a new start for me.",
    image: "/mark.png",
    rating: 5
  },
  {
    name: "Shaun Murphy",
    role: "World Snooker Champion",
    company: "Professional Snooker Association", 
    content: "Working with Chris has been transformative. His understanding of the mental game in snooker is unmatched. The techniques he teaches help you stay focused during those crucial moments.",
    image: "/shaun.png",
    rating: 5
  }
]

export function SocialProofSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real People
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how the Neural Rewiring process has transformed the performance of athletes, 
            executives, and professionals across industries.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Report improved focus and performance</div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">87%</div>
            <div className="text-gray-600">Experience reduced stress and anxiety</div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
            <div className="text-gray-600">Would recommend to colleagues</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


