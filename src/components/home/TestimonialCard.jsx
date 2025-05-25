import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-4">
      <div className="flex justify-between items-start mb-6">
        <FaQuoteLeft className="text-4xl text-primary opacity-20" />
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} text-xl`} 
            />
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-dark">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}