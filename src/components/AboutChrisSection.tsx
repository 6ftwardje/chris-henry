"use client"

import { motion } from "framer-motion"
import { CTAButton } from "./CTAButton"
import { Award, Brain, Users, Trophy, Target } from "lucide-react"

const credentials = [
  {
    icon: Brain,
    title: "Mental Coach to World Champions",
    description: "Coached both finalists in 2021 World Snooker Championship - Mark Selby & Shaun Murphy"
  },
  {
    icon: Trophy,
    title: "Professional Snooker Player",
    description: "Former professional snooker player with over 15 years competitive experience"
  },
  {
    icon: Users,
    title: "Performance Coach",
    description: "Over 20 years living in Belgium, coaching top professional snooker players"
  },
  {
    icon: Award,
    title: "Featured in Major Media",
    description: "Recognized by Sporza and international sports media for coaching expertise"
  }
]

const achievements = [
  {
    number: "20+",
    label: "Years in Belgium",
    description: "Living and coaching in Varsenare, Belgium"
  },
  {
    number: "2",
    label: "World Champions",
    description: "Coached both finalists in 2021 World Championship"
  },
  {
    number: "15+",
    label: "Years Pro Experience",
    description: "Professional snooker player and coach"
  },
  {
    number: "4",
    label: "World Titles",
    description: "Helped Mark Selby achieve his 4th world championship"
  }
]

export function AboutChrisSection() {

  return (
    <section id="about" className="pb-20 bg-white">
      <div className="max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
          {/* Profile Image - Full Height */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="h-full min-h-[500px] lg:min-h-[600px]">
              <img
                src="/chris.png"
                alt="Chris Henry - Mental Coach & Performance Expert"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 flex flex-col justify-center p-8 lg:p-12 xl:p-16 space-y-8 max-w-4xl mx-auto lg:mx-0 bg-gray-50"
          >
            {/* Header */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Meet Chris Henry
              </h2>
              <p className="text-xl text-gray-600">
                The mental coach behind world champions
              </p>
            </div>

            {/* Main Bio */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Chris Henry is the mental coach who guided both finalists in the 2021 World Snooker Championship. 
                Living in Belgium for over 20 years, he's transformed how top athletes approach mental performance.
              </p>
              
              <p className="text-lg">
                His approach is simple: <strong>"I teach players things that automatically give them positive thoughts. 
                Good emotions lead to better performance."</strong> This philosophy helped Mark Selby win his 4th world title.
              </p>
              
              <p className="text-lg">
                As featured in <a href="https://sporza.be/nl/2021/05/04/chris-henry-mental-coach-snooker~1620133401829/" 
                   target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:text-blue-700 underline font-semibold">
                  Sporza
                </a>, Chris combines 15+ years of professional snooker experience with cutting-edge neuroscience 
                to create lasting performance breakthroughs.
              </p>
            </div>

            {/* Key Credentials */}
            <div className="bg-gray-800 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">Key Achievements</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="font-bold text-3xl">20+</div>
                  <div className="text-sm">Years in Belgium</div>
                </div>
                <div>
                  <div className="font-bold text-3xl">2</div>
                  <div className="text-sm">World Champions Coached</div>
                </div>
                <div>
                  <div className="font-bold text-3xl">15+</div>
                  <div className="text-sm">Years Pro Experience</div>
                </div>
                <div>
                  <div className="font-bold text-3xl">4</div>
                  <div className="text-sm">World Titles Helped Win</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
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
      </div>
    </section>
  )
}
