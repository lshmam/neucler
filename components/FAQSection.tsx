import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Can the AI Receptionist handle multiple calls at once?",
    answer: "Yes! Our AI Receptionist can handle unlimited simultaneous calls, ensuring that no customer ever gets a busy signal. It provides consistent, high-quality service 24/7 without any waiting time."
  },
  {
    question: "Will AI replace my sales team?",
    answer: "No, AI is designed to augment and empower your sales team, not replace them. It handles routine tasks, lead qualification, and follow-ups, allowing your sales team to focus on high-value interactions and closing deals."
  },
  {
    question: "How do you measure the success of a social media campaign?",
    answer: "We track key metrics including engagement rates, reach, conversions, ROI, and customer acquisition costs. Our AI provides detailed analytics and insights to continuously optimize campaign performance."
  },
  {
    question: "What happens if the AI can't handle a specific request?",
    answer: "Our AI is designed to seamlessly escalate complex requests to your human team members. It will intelligently recognize when human intervention is needed and transfer the conversation smoothly, providing context to ensure continuity."
  }
];

export default function FAQSection() {
  return (
    <section className="flex flex-col px-4 py-12 md:py-20 lg:py-32 max-w-[90%] md:max-w-[936px] mx-auto">
      <h2 className="text-5xl md:text-6xl lg:text-7xl text-black mb-12 md:mb-20">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-300">
            <AccordionTrigger className="text-xl md:text-2xl lg:text-3xl text-black text-left py-6 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
