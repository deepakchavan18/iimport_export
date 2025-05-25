import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGlobeAmericas } from 'react-icons/fa';

export default function ProductCard({ product }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      data-aos="fade-up"
    >
      <div 
        className="h-64 bg-gray-300 relative overflow-hidden"
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center text-gray-500 mb-6">
          <FaGlobeAmericas className="mr-2" />
          <span className="text-sm">Origin: {product.origin}</span>
        </div>
        <div className="flex justify-between items-center">
          <Link 
            to={`/products/${product.id}`} 
            className="text-primary font-medium hover:text-secondary transition-colors flex items-center"
          >
            View Details
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
          <Link 
            to="/contact" 
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Inquire
          </Link>
        </div>
      </div>
    </motion.div>
  );
}