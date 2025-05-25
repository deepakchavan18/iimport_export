import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ServiceDetail({ service }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="order-2 lg:order-1"
      >
        <div className="flex items-center mb-4">
          <div className="mr-4">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-6">
          {service.fullDesc}
        </p>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FaCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary">
            Get a Quote
          </Link>
          <button className="btn-secondary">
            Download Brochure
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="order-1 lg:order-2"
      >
        <img 
          src={service.image} 
          alt={service.title} 
          className="rounded-lg shadow-xl w-full h-auto object-cover"
          style={{ maxHeight: '500px' }}
        />
      </motion.div>
    </div>
  );
}