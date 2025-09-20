"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CTAButton } from "./CTAButton"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // TODO: Integrate with your CRM/email service
    console.log("Form submitted:", formData)
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 border border-green-200 rounded-xl p-8"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We've received your message and will get back to you within 24 hours.
            </p>
            <p className="text-gray-500">
              Check your email for a special gift from Chris Henry.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Performance?
              </h2>
              <p className="text-gray-600 mb-8">
                Get in touch to discuss how the Neural Rewiring process can help you 
                achieve peak performance in your field.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px]"
                    placeholder="Tell us about your goals and challenges..."
                  />
                </div>

                <CTAButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </CTAButton>

                <p className="text-xs text-gray-500">
                  By submitting this form, you agree to our privacy policy and terms of service. 
                  We'll never share your information with third parties.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Email</div>
                    <div className="text-gray-600">chris@chrishenry.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Phone</div>
                    <div className="text-gray-600">+44 20 7946 0958</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Location</div>
                    <div className="text-gray-600">Varsenare, Belgium</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Response Times</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Email: Within 24 hours</li>
                    <li>• Phone: Same day callback</li>
                    <li>• Urgent inquiries: Within 4 hours</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Ready to Start?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Book a free 15-minute discovery call to discuss your goals and see how the Neural Rewiring process can help you.
                </p>
                <CTAButton
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Book Discovery Call
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


