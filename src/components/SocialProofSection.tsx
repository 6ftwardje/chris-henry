"use client"

import { motion } from "framer-motion"
import { TestimonialCard } from "./TestimonialCard"

const companyLogos = [
  { name: "Manchester United", logo: "/logos/manchester-united.svg" },
  { name: "Liverpool FC", logo: "/logos/liverpool.svg" },
  { name: "BBC Sport", logo: "/logos/bbc-sport.svg" },
  { name: "Sky Sports", logo: "/logos/sky-sports.svg" },
  { name: "The Guardian", logo: "/logos/the-guardian.svg" },
  { name: "Sports Illustrated", logo: "/logos/sports-illustrated.svg" }
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Professional Tennis Player",
    company: "WTA Tour",
    content: "Chris's Neural Rewiring process completely transformed my mental game. I went from struggling with pressure situations to feeling completely calm and focused during crucial points. My ranking improved by 40 spots in just 6 months.",
    image: "/testimonials/sarah-mitchell.jpg",
    rating: 5
  },
  {
    name: "James Rodriguez",
    role: "CEO",
    company: "TechStart Inc.",
    content: "As a CEO, I was constantly overwhelmed and making poor decisions under pressure. The Neural Rewiring process helped me develop laser focus and emotional regulation. Our company's performance has increased by 60% since implementing these techniques.",
    image: "/testimonials/james-rodriguez.jpg",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Olympic Swimmer",
    company: "Team GB",
    content: "I've worked with many sports psychologists, but Chris's approach is different. It's not just about mental techniques - it's about actually rewiring your brain for automatic excellence. The results speak for themselves.",
    image: "/testimonials/emma-thompson.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Investment Banker",
    company: "Goldman Sachs",
    content: "The high-pressure environment of investment banking was taking its toll. Chris's Neural Rewiring process gave me the mental tools to stay calm and make better decisions, even during market volatility. Life-changing.",
    image: "/testimonials/michael-chen.jpg",
    rating: 5
  }
]

export function SocialProofSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Trusted by Top Professionals
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-12 w-32">
                <div className="text-gray-400 font-semibold text-sm">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-gray-600 text-lg mb-4">As featured in:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-gray-500 font-medium">BBC Sport</div>
            <div className="text-gray-500 font-medium">Sky Sports</div>
            <div className="text-gray-500 font-medium">The Guardian</div>
            <div className="text-gray-500 font-medium">Sports Illustrated</div>
          </div>
        </motion.div>

        {/* Testimonials */}
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
