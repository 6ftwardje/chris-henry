"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "How long does the Neural Rewiring process take to see results?",
    answer: "Most participants start seeing improvements within 2-3 weeks of consistent practice. The full transformation typically occurs over 6-8 weeks, with lasting changes becoming permanent after 3 months of application."
  },
  {
    question: "Is this backed by scientific research?",
    answer: "Yes, the Neural Rewiring process is based on cutting-edge neuroscience research, including neuroplasticity studies, cognitive behavioral therapy, and performance psychology. Chris has spent years refining these methods with top athletes and business leaders."
  },
  {
    question: "What's the difference between this and regular coaching?",
    answer: "Traditional coaching focuses on external techniques and strategies. Neural Rewiring goes deeper, targeting the subconscious neural pathways that drive behavior, thoughts, and performance. It's about rewiring your brain for automatic excellence."
  },
  {
    question: "Do I need any special equipment or setup?",
    answer: "No special equipment required. You'll need a quiet space for daily practice sessions (10-15 minutes), a notebook for reflection, and access to our online course platform. Everything else is provided in the program."
  },
  {
    question: "What if I'm not an athlete or in business?",
    answer: "The Neural Rewiring process works for anyone seeking peak performance - students, artists, entrepreneurs, professionals, or anyone wanting to overcome mental blocks and achieve their potential. The principles apply universally."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you don't see measurable improvements in your focus, performance, or mental clarity within 30 days, we'll refund your investment in full."
  }
]

export function FAQAccordion() {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
            <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}



