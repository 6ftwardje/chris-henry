"use client"

import { motion } from "framer-motion"
import { FAQAccordion } from "./FAQAccordion"
import { HelpCircle } from "lucide-react"

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-blue-600 mr-4" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about the Neural Rewiring process 
            and how it can transform your performance.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <FAQAccordion />
        </motion.div>

      </div>
    </section>
  )
}


