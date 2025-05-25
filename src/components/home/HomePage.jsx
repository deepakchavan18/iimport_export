import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaShip, FaWarehouse, FaGlobeAmericas, FaTruckMoving, FaFileContract, FaChartLine } from 'react-icons/fa';

// Components
import HeroSection from './HeroSection';
import ServiceCard from './ServiceCard';
import TestimonialCard from './TestimonialCard';
import CounterSection from './CounterSection';
import PartnerSection from './PartnerSection';

export default function HomePage() {
  // Settings for the testimonials slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Services data
  const services = [
    {
      id: 1,
      title: 'Import Services',
      description: 'Comprehensive import solutions tailored to your business needs with customs clearance and documentation support.',
      icon: <FaShip className="text-4xl text-primary" />,
      link: '/services',
    },
    {
      id: 2,
      title: 'Export Solutions',
      description: 'End-to-end export management services to help your products reach global markets efficiently.',
      icon: <FaGlobeAmericas className="text-4xl text-primary" />,
      link: '/services',
    },
    {
      id: 3,
      title: 'Logistics Management',
      description: 'Streamlined logistics solutions including transportation, warehousing, and distribution services.',
      icon: <FaTruckMoving className="text-4xl text-primary" />,
      link: '/services',
    },
    {
      id: 4,
      title: 'Warehousing',
      description: 'Secure storage facilities with inventory management systems to optimize your supply chain.',
      icon: <FaWarehouse className="text-4xl text-primary" />,
      link: '/services',
    },
    {
      id: 5,
      title: 'Trade Compliance',
      description: 'Expert guidance on trade regulations, tariffs, and compliance requirements for smooth operations.',
      icon: <FaFileContract className="text-4xl text-primary" />,
      link: '/services',
    },
    {
      id: 6,
      title: 'Market Analysis',
      description: 'Detailed market insights and analysis to help you identify new opportunities and expand your business.',
      icon: <FaChartLine className="text-4xl text-primary" />,
      link: '/services',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, Tech Innovations Inc.',
      content: 'GlobalTrade has transformed our international business operations. Their expertise in handling complex import regulations saved us time and money. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Operations Director, Global Foods',
      content: 'We\'ve been working with GlobalTrade for over 5 years, and they\'ve consistently delivered exceptional service. Their team\'s attention to detail and proactive approach has made our export process seamless.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Founder, Chen Manufacturing',
      content: 'As a manufacturing business expanding internationally, we needed a reliable partner for our logistics. GlobalTrade provided end-to-end solutions that helped us enter new markets with confidence.',
      rating: 4,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="section-title">Your Trusted Partner for Global Trade Solutions</h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in international trade, GlobalTrade provides comprehensive import and export solutions to businesses worldwide. Our expertise spans across various industries, ensuring smooth and efficient trade operations for our clients.
              </p>
              <p className="text-gray-600 mb-8">
                We understand the complexities of global commerce and offer tailored services to meet your specific needs. From customs clearance to logistics management, our team of experts is dedicated to simplifying your international trade journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  Learn More
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img 
                src="/images/shipping.jpg" 
                alt="Global Shipping" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="section-title text-center" data-aos="fade-up">Our Services</h2>
          <p className="section-subtitle text-center mx-auto" data-aos="fade-up" data-aos-delay="100">
            We offer a comprehensive range of import and export services to meet your global trade needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                service={service}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Counter Section */}
      <CounterSection />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <h2 className="section-title text-center" data-aos="fade-up">What Our Clients Say</h2>
          <p className="section-subtitle text-center mx-auto" data-aos="fade-up" data-aos-delay="100">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
          
          <div className="max-w-4xl mx-auto mt-12" data-aos="fade-up" data-aos-delay="200">
            <Slider {...sliderSettings}>
              {testimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            Ready to Expand Your Global Reach?
          </h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Partner with GlobalTrade for seamless import and export solutions tailored to your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
              Get Started Today
            </Link>
            <Link to="/services" className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-primary transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <PartnerSection />
    </div>
  );
}