"use client"

import { motion } from "framer-motion"
import { CTAButton } from "./CTAButton"
import { Check, Play, Users, Clock, Award, Shield } from "lucide-react"

const benefits = [
  "8-week comprehensive video course with 40+ lessons",
  "Live weekly group coaching calls with Chris",
  "Personalized neural pattern assessment",
  "Access to private community of high performers",
  "Downloadable worksheets and practice guides",
  "30-day money-back guarantee",
  "Lifetime access to course materials",
  "Direct access to Chris for questions"
]

const courseModules = [
  {
    week: "Week 1-2",
    title: "Foundation & Assessment",
    description: "Understanding your current neural patterns and setting up your transformation roadmap."
  },
  {
    week: "Week 3-4", 
    title: "Core Rewiring Techniques",
    description: "Master the fundamental neuroscience-based techniques for neural pathway rewiring."
  },
  {
    week: "Week 5-6",
    title: "Integration & Practice",
    description: "Integrate new patterns into daily life and high-pressure situations."
  },
  {
    week: "Week 7-8",
    title: "Mastery & Automation",
    description: "Achieve automatic peak performance and create lasting transformation."
  }
]

export function ProductOfferSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Complete Neural Rewiring Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your performance with Chris Henry's proven neuroscience-based system, 
            trusted by top athletes and business leaders worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Course Preview/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Course Preview Video */}
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Course Preview</p>
                  <p className="text-sm opacity-70">See the transformation in action</p>
                </div>
              </div>
              {/* Placeholder for actual video */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors duration-300">
                  <Play className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">2,500+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">8 Weeks</div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Course Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Benefits List */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What You'll Get
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Course Modules */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Course Structure
              </h3>
              <div className="space-y-4">
                {courseModules.map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <div className="text-sm font-semibold text-blue-600 mb-1">
                      {module.week}
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {module.title}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {module.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <div className="text-center">
                <div className="text-sm opacity-90 mb-2">Limited Time Offer</div>
                <div className="text-4xl font-bold mb-2">
                  $497
                  <span className="text-lg opacity-75 line-through ml-2">$997</span>
                </div>
                <div className="text-lg opacity-90 mb-6">
                  One-time payment • Lifetime access
                </div>
                
                <div className="flex items-center justify-center mb-6 text-sm">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>30-day money-back guarantee</span>
                </div>

                <CTAButton 
                  variant="secondary" 
                  size="lg"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 text-lg py-4"
                >
                  Start Your Transformation
                </CTAButton>
                
                <div className="text-xs opacity-75 mt-4">
                  Join 2,500+ professionals who've transformed their performance
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
