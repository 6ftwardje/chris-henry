"use client"

import { motion } from "framer-motion"
import { CTAButton } from "./CTAButton"
import { Brain, Target, Zap, ArrowRight } from "lucide-react"

const processSteps = [
  {
    step: 1,
    title: "Identify Neural Patterns",
    description: "We map your current mental patterns and identify the specific neural pathways causing performance blocks, stress, or underachievement.",
    icon: Brain,
    color: "from-blue-500 to-blue-600"
  },
  {
    step: 2,
    title: "Rewire Neural Pathways",
    description: "Using proven neuroscience techniques, we systematically rewire your brain to create new, high-performance neural pathways.",
    icon: Target,
    color: "from-purple-500 to-purple-600"
  },
  {
    step: 3,
    title: "Integrate & Automate",
    description: "The new patterns become automatic, creating effortless peak performance in high-pressure situations.",
    icon: Zap,
    color: "from-green-500 to-green-600"
  }
]


const proofPoints = [
  {
    metric: "6-8 weeks",
    description: "Average time to see significant improvements"
  },
  {
    metric: "95%",
    description: "Success rate with consistent practice"
  },
  {
    metric: "3 months",
    description: "Time for permanent neural pathway changes"
  },
  {
    metric: "40%",
    description: "Average performance improvement"
  }
]

export function ProblemProcessProofSection() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Neural Rewiring Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A scientifically-proven 3-step process that permanently rewires your brain 
            for automatic peak performance.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {step.step}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (except for last step) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Neural Rewiring process has been refined through years of work with 
              top athletes and business leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {proofPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {point.metric}
                </div>
                <div className="text-gray-700 font-medium">
                  {point.description}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton 
              variant="primary" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Start Your Transformation
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
