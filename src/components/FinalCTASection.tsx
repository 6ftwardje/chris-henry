"use client"

import { motion } from "framer-motion"
import { CTAButton } from "./CTAButton"
import { Clock, Users, Shield, CheckCircle } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Scarcity Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-8 animate-pulse">
            <Clock className="w-5 h-5 mr-2" />
            Limited Time Offer - Ends Soon!
          </div>
          
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[80px]">
              <div className="text-3xl font-bold">07</div>
              <div className="text-sm opacity-80">Days</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[80px]">
              <div className="text-3xl font-bold">23</div>
              <div className="text-sm opacity-80">Hours</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[80px]">
              <div className="text-3xl font-bold">45</div>
              <div className="text-sm opacity-80">Minutes</div>
            </div>
          </div>
        </motion.div>

        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Don&apos;t Let Another Day Pass
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Without Peak Performance
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Join the 2,500+ professionals who&apos;ve already transformed their performance 
            with the Neural Rewiring process. Your breakthrough is just one decision away.
          </p>
        </motion.div>

        {/* Benefits Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Immediate Access</h3>
            <p className="text-gray-300">Start your transformation today with instant access to all course materials</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-300">Direct access to Chris and our community of high performers</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Risk-Free Guarantee</h3>
            <p className="text-gray-300">30-day money-back guarantee if you don&apos;t see results</p>
          </div>
        </motion.div>

        {/* Pricing & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-sm text-gray-300 mb-2">Regular Price</div>
              <div className="text-4xl font-bold text-gray-400 line-through mb-4">$997</div>
              
              <div className="text-sm text-green-400 mb-2">Limited Time Offer</div>
              <div className="text-6xl font-bold text-white mb-2">$497</div>
              <div className="text-lg text-gray-300">One-time payment • Lifetime access</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton 
                variant="primary" 
                size="lg"
                className="text-xl px-12 py-6 bg-white text-black hover:bg-gray-100 min-w-[280px]"
              >
                Start My Transformation
              </CTAButton>
              
              <CTAButton 
                variant="outline" 
                size="lg"
                className="text-xl px-12 py-6 border-white text-white hover:bg-white hover:text-black min-w-[280px]"
              >
                Schedule a Call
              </CTAButton>
            </div>

            <div className="text-center space-y-2 text-sm text-gray-400">
              <p>✓ 30-day money-back guarantee</p>
              <p>✓ Instant access to all materials</p>
              <p>✓ Lifetime updates and support</p>
            </div>
          </div>
        </motion.div>

        {/* Urgency Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-red-600/20 border border-red-500/30 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-red-400 mb-2">
              ⚠️ Limited Spots Available
            </h3>
            <p className="text-gray-300">
              Chris only takes on 50 new clients per quarter to ensure personalized attention. 
              <span className="text-white font-semibold"> Only 12 spots remaining this quarter.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
