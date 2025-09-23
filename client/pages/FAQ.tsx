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
    answer:
      "Unlock conducts meticulous due diligence on investment opportunities, providing comprehensive insights and transforming uncertainty into clarity. Our team of experts thoroughly analyzes companies, their financials, market trends, and potential risks to help you make smarter investment decisions.",
  },
  {
    question: "What are the benefits?",
    answer:
      "By using Unlock's due diligence services, you can invest confidently, knowing that you have access to reliable and thorough information. Our insights give you a competitive edge in the investment world, helping you identify opportunities and avoid potential pitfalls.",
  },
  {
    question: "How can I get started?",
    answer:
      "To get started with Unlock, simply join our waiting list, reach out to our team through the contact form or give us a call. We'll be happy to discuss your investment goals and how our services can support you in making informed decisions.",
  },
  {
    question: "Is Unlock trustworthy?",
    answer:
      "Unlock is committed to providing accurate and reliable due diligence. Our team of experts follows rigorous processes to ensure the information we provide is trustworthy and up-to-date. We have a track record of helping investors make informed decisions with confidence.",
  },
  {
    question: "What if I have more questions?",
    answer:
      "If you have more questions about Unlock's services or need further clarification, please don't hesitate to reach out to our team. We're here to assist you and provide the information you need to make confident investment decisions.",
  },
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

      {/* Call-to-Action Section */}
      <section className="relative overflow-hidden">
        {/* Decorative Line Graphics */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <svg
            className="absolute top-[12%] left-[6%] w-[88%] h-[72%] xl:left-[5%] xl:w-[90%] 2xl:left-[3%] 2xl:w-[94%] 2xl:h-[76%]"
            width="1241"
            height="394"
            viewBox="0 0 1241 394"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M1047.3 387.582H1.61719V0.898438H1239.39V387.582"
              stroke="#F5F7F0"
              strokeWidth="0.83"
              strokeMiterlimit="10"
            />
            <path
              d="M586.07 387.582H1049.19"
              stroke="#00BB77"
              strokeWidth="6"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative px-4 sm:px-8 lg:px-24 xl:px-32 2xl:px-40 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 w-full max-w-none">
            {/* Left Section - Icon and Title */}
            <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-12 flex-1">
              {/* Unlock Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="w-16 h-24 lg:w-[81px] lg:h-[130px] 2xl:w-[100px] 2xl:h-[160px]"
                  width="81"
                  height="130"
                  viewBox="0 0 81 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M70.0821 64.9911V31.9944C70.0821 11.9569 56.9434 0 34.9478 0C12.9522 0 0 11.9569 0 31.9944V65H10.9179V98.0056C10.9179 118.043 23.9855 130 45.8656 130C67.7458 130 81 118.043 81 98.0056V64.9911H70.0821ZM45.8834 109.661C37.0532 109.661 32.7624 105.678 32.7624 97.4823V65H21.8446V32.5355C21.8446 24.1 26.011 20.1706 34.9656 20.1706C43.9202 20.1706 48.2553 24.1 48.2553 32.5355V64.9911H59.1643V67.0756H59.1732V97.4823C59.1732 105.678 54.8202 109.661 45.8834 109.661Z"
                    fill="#00BB77"
                  />
                </svg>
              </div>

              {/* Title */}
              <div className="flex-1 max-w-none">
                <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[84px] 2xl:text-[112px] font-normal leading-[90%] font-aeonik">
                  Unlock Your Investment Potential Today
                </h2>
              </div>
            </div>

            {/* Right Section - Description and Button */}
            <div className="flex flex-col items-start gap-4 w-full lg:w-auto lg:max-w-[420px] 2xl:max-w-[520px] flex-shrink-0">
              <p className="text-white text-sm font-normal leading-[150%] font-aeonik">
                Schedule a consultation or request more information about
                Unlock's comprehensive due diligence services.
              </p>

              <div className="flex items-center gap-4">
                <a href="/join" className="bg-white text-unlock-dark px-8 lg:px-10 py-2.5 lg:py-3 rounded font-aeonik text-sm lg:text-base font-medium uppercase leading-[150%] hover:bg-white/90 transition-colors">
                  JOIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
