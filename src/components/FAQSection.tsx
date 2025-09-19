"use client"

import { motion } from "framer-motion"
import { FAQAccordion } from "./FAQAccordion"
import { HelpCircle, MessageCircle, Phone } from "lucide-react"

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

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Get personalized answers to your specific 
              questions about the Neural Rewiring process.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Get detailed answers within 24 hours
                </p>
                <a 
                  href="mailto:chris@chrishenry.com"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  chris@chrishenry.com
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Phone className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Phone Consultation</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Schedule a 15-minute discovery call
                </p>
                <a 
                  href="tel:+442079460958"
                  className="text-green-600 font-medium hover:text-green-700"
                >
                  +44 20 7946 0958
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <HelpCircle className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Get instant answers during business hours
                </p>
                <button className="text-purple-600 font-medium hover:text-purple-700">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
