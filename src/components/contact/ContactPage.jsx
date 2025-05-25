import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

// Components
import PageHeader from '../layout/PageHeader';
import ContactForm from './ContactForm';
import OfficeLocations from './OfficeLocations';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
      title: 'Our Location',
      details: '123 Trade Avenue, Business District, New York, NY 10001, USA',
    },
    {
      icon: <FaPhone className="text-2xl text-primary" />,
      title: 'Phone Number',
      details: '+1 (555) 123-4567',
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary" />,
      title: 'Email Address',
      details: 'info@globaltrade.com',
    },
    {
      icon: <FaClock className="text-2xl text-primary" />,
      title: 'Working Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for any inquiries or to request a quote"
      />
      
      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div data-aos="fade-right">
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or need a customized solution? Our team is here to help. Reach out to us using any of the contact methods below or fill out the form, and we'll get back to you promptly.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-4 bg-light rounded-lg"
                  >
                    <div className="mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-80 bg-gray-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1621512789843!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div data-aos="fade-left">
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been successfully sent. We will contact you very soon!
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <ContactForm setFormSubmitted={setFormSubmitted} />
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Locations */}
      <OfficeLocations />
    </div>
  );
}