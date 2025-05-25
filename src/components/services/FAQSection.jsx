import { Disclosure, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQSection() {
  const faqs = [
    {
      question: 'What types of products can you help import/export?',
      answer: 'We handle a wide range of products across various industries, including consumer goods, industrial equipment, electronics, textiles, food products (subject to regulatory requirements), and more. Our team can assess your specific product needs and provide tailored solutions.'
    },
    {
      question: 'How do you handle customs clearance and documentation?',
      answer: 'Our experts manage the entire customs clearance process, including preparation and submission of all required documentation, classification of goods, duty calculation, and compliance with regulatory requirements. We stay updated with changing regulations to ensure smooth clearance of your shipments.'
    },
    {
      question: 'What shipping methods do you offer?',
      answer: 'We provide multiple shipping options including air freight, sea freight, road transportation, and multimodal solutions. The best method for your shipment depends on factors like urgency, cost considerations, shipment size, and destination. Our team will recommend the most suitable option for your specific needs.'
    },
    {
      question: 'How do you ensure compliance with international trade regulations?',
      answer: 'We maintain a dedicated compliance team that stays current with international trade laws, sanctions, embargoes, and product-specific regulations. We conduct thorough compliance checks, provide necessary documentation, and offer guidance on regulatory requirements to ensure your shipments meet all legal obligations.'
    },
    {
      question: 'Can you help with market research for international expansion?',
      answer: 'Yes, our market analysis services include comprehensive research on target markets, competitor analysis, consumer behavior insights, regulatory environment assessment, and distribution channel evaluation. We help you identify opportunities and develop effective strategies for successful market entry.'
    },
    {
      question: 'What are your typical turnaround times for shipments?',
      answer: 'Turnaround times vary based on shipping method, destination, product type, and customs processing. Air freight typically takes 3-10 days, while sea freight can range from 15-60 days depending on the route. We provide estimated timeframes during the consultation phase and offer real-time tracking throughout the shipping process.'
    },
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our import and export services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className="bg-white rounded-lg shadow-md">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-lg font-medium text-dark focus:outline-none">
                      <span>{faq.question}</span>
                      <FaChevronDown
                        className={`${
                          open ? 'transform rotate-180 text-primary' : ''
                        } w-5 h-5 text-gray-500 transition-transform`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}