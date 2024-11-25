import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen text-white font-lexend-regular bg-black">
        <Navbar />
        
        <main className="max-w-4xl mx-auto py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl text-white font-lexend-bold mb-4">
              FAQ
            </h1>
            <p className="text-lg text-gray-300">
              Everything you need to know about Relevancy
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl">What is Relevancy?</AccordionTrigger>
              <AccordionContent className="text-xl text-gray-400">
                Relevancy is an AI networking and recruiting agent. You input your ideal job, ideal company, ideal location, and we match you with the most optimal connections to get you those jobs. We do the cold outreach, emailing, and setting of meetings. All you have to do is show up and smile.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl">What features does Relevancy offer?</AccordionTrigger>
              <AccordionContent className="text-xl text-gray-400">
                <p>Relevancy is a full service networking platform that can:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Lead list generation</li>
                  <li>Cold email generation and automation</li>
                  <li>Response automation and meeting scheduling</li>
                  <li>Important notifications and reminders so that you and your connection don't miss the meeting</li>
                  <li>Seamless integration with Gmail</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl">How much does Relevancy cost?</AccordionTrigger>
              <AccordionContent className="text-xl text-gray-400">
                Relevancy is currently in beta with limited spots (50 total). The price is $499/month. Due to the limited nature of our beta, once a spot is taken, it cannot be reclaimed. At this time, we do not offer free trials, discounts, or refunds.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-2xl">Is Relevancy secure?</AccordionTrigger>
              <AccordionContent className="text-xl text-gray-400">
                All data is encrypted end-to-end using industry-standard encryption. We never store your email passwords - we use OAuth2 for secure access to your email accounts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-2xl">Which email providers do you support?</AccordionTrigger>
              <AccordionContent className="text-xl text-gray-400">
                Relevancy currently supports only Gmail accounts. We're working on adding support for more email providers in the future.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-2xl">How does Relevancy handle my data?</AccordionTrigger>
              <AccordionContent className="text-xl text-gray-400">
                Your privacy and data security are our top priorities. We only access the emails needed to provide our service, and we never store your email passwords. All data processing is done securely and in compliance with industry standards.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-lexend-bold mb-4">Still have questions?</h2>
            <p>
              Contact us at{' '}
              <a 
                href="mailto:founders@relevancy.ai" 
                className="text-white hover:opacity-80 transition-opacity underline"
              >
                founders@relevancy.ai
              </a>
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
