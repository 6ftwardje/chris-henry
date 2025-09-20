"use client"

import { motion } from "framer-motion"
import { CTAButton } from "./CTAButton"

export function HeroSection() {

  return (
        <section className="relative min-h-screen overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.png?v=5"
          alt="Chris Henry - Mental Coach & Performance Expert"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 max-w-2xl"
          >
                  {/* Logo */}
                  <div className="mb-4">
                    <img 
                      src="/logo.png" 
                      alt="Neural Rewiring" 
                      className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[560px] xl:w-[700px] h-auto"
                    />
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      for Peak Performance
                    </span>
                  </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
              The neuroscience-based process created by{" "}
              <span className="text-white font-semibold">Chris Henry</span>, 
              trusted by world champions and business leaders.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3 text-base sm:text-lg text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span>Transform mental patterns in 6-8 weeks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span>Used by World Snooker Champions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span>95% success rate with consistent practice</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <CTAButton 
                variant="primary" 
                size="lg"
                className="text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white border-0 w-full sm:w-auto"
              >
                Discover the Process
              </CTAButton>
                  <CTAButton 
                    variant="outline" 
                    size="lg"
                    className="text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-black bg-white hover:bg-gray-100 hover:text-black w-full sm:w-auto"
                  >
                    Contact Chris
                  </CTAButton>
            </div>

            {/* Trust Indicator */}
                  <div className="pt-6">
              <p className="text-xs sm:text-sm text-gray-400">
                Featured in Sporza • BBC Sport • World Snooker Championship
              </p>
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  )
}


