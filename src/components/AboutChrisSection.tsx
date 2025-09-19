"use client"

import { motion } from "framer-motion"
import { CTAButton } from "./CTAButton"
import { Award, Brain, Users, Trophy, Target } from "lucide-react"

const credentials = [
  {
    icon: Brain,
    title: "Neuroscience Expert",
    description: "Advanced studies in cognitive neuroscience and performance psychology"
  },
  {
    icon: Trophy,
    title: "Professional Snooker Player",
    description: "Competed at the highest levels of professional snooker for over 15 years"
  },
  {
    icon: Users,
    title: "Performance Coach",
    description: "Coached 500+ athletes and business leaders to peak performance"
  },
  {
    icon: Award,
    title: "Published Author",
    description: "Author of 'The Mental Game' and contributor to leading sports psychology journals"
  }
]

const achievements = [
  {
    number: "500+",
    label: "Athletes Coached",
    description: "From amateur to Olympic level"
  },
  {
    number: "95%",
    label: "Success Rate",
    description: "Of clients achieve measurable improvements"
  },
  {
    number: "15+",
    label: "Years Experience",
    description: "In performance coaching and neuroscience"
  },
  {
    number: "50+",
    label: "Countries",
    description: "Clients served worldwide"
  }
]

export function AboutChrisSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
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
            Meet Chris Henry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The mind behind the Neural Rewiring process - a unique blend of 
            professional sports experience and cutting-edge neuroscience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">CH</div>
                  <div className="text-lg opacity-90">Professional Headshot</div>
                  <div className="text-sm opacity-70">Replace with actual photo</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20" />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-gray-600">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Main Bio */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                From Professional Snooker to Neuroscience Pioneer
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Chris Henry&apos;s journey began on the professional snooker circuit, where he competed 
                  at the highest levels for over 15 years. During this time, he experienced firsthand 
                  the mental challenges that can make or break performance at the elite level.
                </p>
                
                <p>
                  After retiring from professional competition, Chris dedicated himself to understanding 
                  the neuroscience behind peak performance. He studied cognitive neuroscience and 
                  performance psychology, combining academic knowledge with real-world experience 
                  to develop the Neural Rewiring process.
                </p>
                
                <p>
                  Today, Chris has coached over 500 athletes and business leaders, from Olympic 
                  competitors to Fortune 500 executives. His unique approach has been featured 
                  in leading sports psychology journals and adopted by top sports teams worldwide.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
                >
                  <credential.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {credential.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {credential.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <CTAButton 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Work with Chris
              </CTAButton>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-6">
              Chris's Philosophy
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              &quot;Performance isn&apos;t just about technique or strategy - it&apos;s about how your brain 
              processes information, manages pressure, and executes under stress. When you 
              rewire the neural pathways that drive your behavior, peak performance becomes 
              automatic, not effortful.&quot;
            </p>
            <div className="mt-6 text-lg opacity-90">
              - Chris Henry
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
