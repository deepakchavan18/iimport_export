import { Link } from 'react-router-dom';
import { FaCheckCircle, FaUsers, FaGlobeAmericas, FaHandshake, FaShieldAlt } from 'react-icons/fa';

// Components
import PageHeader from '../layout/PageHeader';
import TeamSection from './TeamSection';
import MissionVision from './MissionVision';

export default function AboutPage() {
  const values = [
    {
      id: 1,
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      title: 'Customer Focus',
      description: "We prioritize our clients' needs and strive to exceed their expectations with personalized solutions.",
    },
    {
      id: 2,
      icon: <FaGlobeAmericas className="text-4xl text-primary mb-4" />,
      title: 'Global Expertise',
      description: 'Our international experience and local knowledge enable us to navigate complex global trade environments.',
    },
    {
      id: 3,
      icon: <FaHandshake className="text-4xl text-primary mb-4" />,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical standards in all our operations.',
    },
    {
      id: 4,
      icon: <FaShieldAlt className="text-4xl text-primary mb-4" />,
      title: 'Reliability',
      description: 'We deliver on our promises and ensure consistent, dependable service for all our clients.',
    },
  ];

  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about our company, mission, and the team behind our success"
      />
      
      {/* Company Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="/images/warehouse.jpg" 
                alt="Our Warehouse" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, GlobalTrade has grown from a small local operation to a leading provider of import and export solutions worldwide. Our journey began with a simple mission: to simplify international trade for businesses of all sizes.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have expanded our services and global reach, establishing a strong network of partners and clients across 50+ countries. Our team of experts brings decades of combined experience in logistics, customs regulations, and international commerce.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we continue to innovate and adapt to the evolving global trade landscape, helping our clients navigate challenges and seize opportunities in international markets.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Comprehensive import and export solutions',
                  'Expert knowledge of international trade regulations',
                  'Strategic global partnerships',
                  'Dedicated customer support',
                  'Innovative logistics technology'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <MissionVision />
      
      {/* Our Values */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <h2 className="section-title text-center" data-aos="fade-up">Our Core Values</h2>
          <p className="section-subtitle text-center mx-auto" data-aos="fade-up" data-aos-delay="100">
            The principles that guide our business and relationships
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div 
                key={value.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <TeamSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Join the hundreds of businesses that trust GlobalTrade for their international trade needs.
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}