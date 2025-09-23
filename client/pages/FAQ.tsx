import { ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How does Unlock work?",
    answer: "Unlock conducts meticulous due diligence on investment opportunities, providing comprehensive insights and transforming uncertainty into clarity. Our team of experts thoroughly analyzes companies, their financials, market trends, and potential risks to help you make smarter investment decisions."
  },
  {
    question: "What are the benefits?",
    answer: "By using Unlock's due diligence services, you can invest confidently, knowing that you have access to reliable and thorough information. Our insights give you a competitive edge in the investment world, helping you identify opportunities and avoid potential pitfalls."
  },
  {
    question: "How can I get started?",
    answer: "To get started with Unlock, simply join our waiting list, reach out to our team through the contact form or give us a call. We'll be happy to discuss your investment goals and how our services can support you in making informed decisions."
  },
  {
    question: "Is Unlock trustworthy?",
    answer: "Unlock is committed to providing accurate and reliable due diligence. Our team of experts follows rigorous processes to ensure the information we provide is trustworthy and up-to-date. We have a track record of helping investors make informed decisions with confidence."
  },
  {
    question: "What if I have more questions?",
    answer: "If you have more questions about Unlock's services or need further clarification, please don't hesitate to reach out to our team. We're here to assist you and provide the information you need to make confident investment decisions."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-unlock-dark">
      {/* FAQ Hero Section */}
      <section className="flex flex-col items-start justify-center px-4 sm:px-8 lg:px-[100px] py-16 lg:py-24">
        <div className="flex flex-col items-start max-w-4xl text-left w-full">
          {/* Title */}
          <div className="mb-10">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] font-extralight leading-[81%] tracking-[-2.88px] text-unlock-green font-aeonik">
              FAQs
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-[629px]">
            <p className="text-white text-lg sm:text-xl font-light leading-[120%] font-aeonik">
              Find answers to common questions about Unlock's services to help
              you make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="px-4 sm:px-8 lg:px-[100px] xl:px-[300px] pb-16 lg:pb-24">
        <div className="w-full">
          <Accordion type="multiple" className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#3E3E3E] last:border-b-0"
              >
                <AccordionTrigger className="py-4 px-0 hover:no-underline group">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-white text-2xl lg:text-[32px] font-light leading-[110%] font-aeonik text-left">
                      {faq.question}
                    </h3>
                    <div className="flex items-center justify-center p-1.5 rounded-2xl">
                      <ChevronUp className="h-4 w-4 text-unlock-green transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-6">
                  <div className="pl-8">
                    <p className="text-white text-sm font-light leading-[150%] font-aeonik">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
