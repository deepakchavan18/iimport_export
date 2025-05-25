import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { FaShip, FaGlobeAmericas, FaTruckMoving, FaWarehouse, FaFileContract, FaChartLine } from 'react-icons/fa';

// Components
import PageHeader from '../layout/PageHeader';
import ServiceDetail from './ServiceDetail';
import ProcessSection from './ProcessSection';
import FAQSection from './FAQSection';

export default function ServicesPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const services = [
    {
      id: 'import',
      title: 'Import Services',
      icon: <FaShip className="text-4xl text-primary mb-4" />,
      shortDesc: 'Comprehensive import solutions tailored to your business needs.',
      fullDesc: 'Our import services provide end-to-end solutions for businesses looking to source products from international markets. We handle everything from supplier identification to customs clearance and final delivery.',
      features: [
        'Supplier verification and management',
        'International purchasing assistance',
        'Customs documentation and compliance',
        'Import duty and tax management',
        'Cargo insurance and risk management',
        'Last-mile delivery coordination'
      ],
      image: '/images/shipping.jpg'
    },
    {
      id: 'export',
      title: 'Export Solutions',
      icon: <FaGlobeAmericas className="text-4xl text-primary mb-4" />,
      shortDesc: 'End-to-end export management services for global market access.',
      fullDesc: 'Our export solutions help businesses expand their reach to international markets. We provide comprehensive support from market research to documentation, shipping, and regulatory compliance.',
      features: [
        'Export market identification and research',
        'Export documentation preparation',
        'Customs clearance assistance',
        'International shipping coordination',
        'Regulatory compliance management',
        'Export financing options'
      ],
      image: '/images/logistics.jpg'
    },
    {
      id: 'logistics',
      title: 'Logistics Management',
      icon: <FaTruckMoving className="text-4xl text-primary mb-4" />,
      shortDesc: 'Streamlined logistics solutions for efficient global operations.',
      fullDesc: 'Our logistics management services optimize your supply chain for maximum efficiency and cost-effectiveness. We coordinate transportation, warehousing, and distribution to ensure smooth operations.',
      features: [
        'Multimodal transportation management',
        'Route optimization and planning',
        'Carrier selection and management',
        'Freight forwarding services',
        'Real-time shipment tracking',
        'Performance analytics and reporting'
      ],
      image: '/images/warehouse.jpg'
    },
    {
      id: 'warehousing',
      title: 'Warehousing',
      icon: <FaWarehouse className="text-4xl text-primary mb-4" />,
      shortDesc: 'Secure storage facilities with advanced inventory management.',
      fullDesc: 'Our warehousing services provide secure storage solutions with advanced inventory management systems. We offer flexible options to meet your specific storage and distribution needs.',
      features: [
        'Short and long-term storage options',
        'Climate-controlled facilities',
        'Inventory management systems',
        'Order fulfillment services',
        'Cross-docking capabilities',
        'Value-added services (labeling, kitting, etc.)'
      ],
      image: '/images/warehouse.jpg'
    },
    {
      id: 'compliance',
      title: 'Trade Compliance',
      icon: <FaFileContract className="text-4xl text-primary mb-4" />,
      shortDesc: 'Expert guidance on regulations, tariffs, and compliance requirements.',
      fullDesc: 'Our trade compliance services help businesses navigate the complex landscape of international trade regulations. We ensure your operations meet all legal requirements and minimize compliance risks.',
      features: [
        'Customs regulations consulting',
        'Tariff classification assistance',
        'Trade agreement utilization',
        'Import/export license management',
        'Compliance training programs',
        'Audit preparation and support'
      ],
      image: '/images/shipping.jpg'
    },
    {
      id: 'market-analysis',
      title: 'Market Analysis',
      icon: <FaChartLine className="text-4xl text-primary mb-4" />,
      shortDesc: 'Detailed market insights for strategic business expansion.',
      fullDesc: 'Our market analysis services provide valuable insights into international markets, helping you identify opportunities and develop effective entry strategies for global expansion.',
      features: [
        'Market size and growth assessment',
        'Competitor analysis',
        'Consumer behavior research',
        'Regulatory environment evaluation',
        'Distribution channel analysis',
        'Market entry strategy development'
      ],
      image: '/images/logistics.jpg'
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive import and export solutions for your global business needs"
      />
      
      {/* Services Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              We provide end-to-end solutions for all your international trade requirements
            </p>
          </div>
          
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex flex-wrap justify-center space-x-1 rounded-xl bg-gray-100 p-1 mb-12">
              {services.map((service) => (
                <Tab
                  key={service.id}
                  className={({ selected }) =>
                    `w-full max-w-[180px] rounded-lg py-3 px-4 text-sm font-medium leading-5 transition-all
                    ${
                      selected
                        ? 'bg-primary text-white shadow'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`
                  }
                  data-aos="fade-up"
                >
                  {service.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {services.map((service) => (
                <Tab.Panel key={service.id}>
                  <ServiceDetail service={service} />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            Need a Customized Solution?
          </h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Our team of experts is ready to develop a tailored approach to meet your specific import and export requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
              Request a Consultation
            </Link>
            <Link to="/products" className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-primary transition-all">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}