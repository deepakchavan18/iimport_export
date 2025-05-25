import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import PageHeader from '../layout/PageHeader';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Product categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'food', name: 'Food & Beverages' },
    { id: 'machinery', name: 'Machinery' },
    { id: 'automotive', name: 'Automotive' },
  ];
  
  // Products data
  const allProducts = [
    {
      id: 1,
      name: 'Smart Electronics',
      category: 'electronics',
      image: '/images/electronics.jpg',
      description: 'High-quality consumer electronics from leading manufacturers worldwide.',
      origin: 'Multiple Countries',
    },
    {
      id: 2,
      name: 'Premium Textiles',
      category: 'textiles',
      image: '/images/textiles.jpg',
      description: 'Luxurious fabrics and textiles sourced from the finest mills globally.',
      origin: 'India, China, Italy',
    },
    {
      id: 3,
      name: 'Gourmet Foods',
      category: 'food',
      image: '/images/food.jpg',
      description: 'Specialty food products and beverages from renowned international producers.',
      origin: 'France, Italy, Spain',
    },
    {
      id: 4,
      name: 'Industrial Machinery',
      category: 'machinery',
      image: '/images/machinery.jpg',
      description: 'Advanced industrial equipment and machinery for manufacturing and production.',
      origin: 'Germany, Japan, USA',
    },
    {
      id: 5,
      name: 'Automotive Parts',
      category: 'automotive',
      image: '/images/automotive.jpg',
      description: 'High-performance automotive components and accessories for various vehicle types.',
      origin: 'Germany, Japan, USA',
    },
    {
      id: 6,
      name: 'Mobile Devices',
      category: 'electronics',
      image: '/images/electronics.jpg',
      description: 'Latest smartphones and tablets from leading global manufacturers.',
      origin: 'South Korea, China, USA',
    },
    {
      id: 7,
      name: 'Organic Foods',
      category: 'food',
      image: '/images/food.jpg',
      description: 'Certified organic food products sourced from sustainable producers worldwide.',
      origin: 'Multiple Countries',
    },
    {
      id: 8,
      name: 'Fashion Textiles',
      category: 'textiles',
      image: '/images/textiles.jpg',
      description: 'Trendy fabrics and materials for the fashion industry.',
      origin: 'Italy, Turkey, India',
    },
    {
      id: 9,
      name: 'Precision Tools',
      category: 'machinery',
      image: '/images/machinery.jpg',
      description: 'High-precision tools and equipment for various industrial applications.',
      origin: 'Germany, Switzerland, Japan',
    },
  ];
  
  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);
  
  return (
    <div>
      <PageHeader 
        title="Our Products" 
        subtitle="Discover our wide range of high-quality import and export products"
      />
      
      {/* Products Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">
              We source and distribute premium products from around the world
            </p>
          </div>
          
          {/* Product Filters */}
          <ProductFilter 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          {/* Products Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
          
          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600">
                No products match your current filter. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Custom Solutions */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="/images/shipping.jpg" 
                alt="Custom Solutions" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="section-title">Custom Sourcing Solutions</h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our expert team can source specific products tailored to your business requirements from our extensive global network of suppliers.
              </p>
              <p className="text-gray-600 mb-8">
                We handle everything from supplier identification and quality control to logistics and delivery, ensuring you receive high-quality products that meet your specifications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Request Custom Sourcing
                </Link>
                <Link to="/services" className="btn-secondary">
                  Learn About Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            Ready to Import or Export?
          </h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Contact our team today to discuss your product needs and get a customized quote.
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}