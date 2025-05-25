import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ServiceCard({ service, delay = 0 }) {
  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={delay}
      className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      <div className="mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <Link 
        to={service.link} 
        className="text-primary font-medium hover:text-secondary transition-colors flex items-center"
      >
        Learn More
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 ml-1" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
            clipRule="evenodd" 
          />
        </svg>
      </Link>
    </div>
  );
}