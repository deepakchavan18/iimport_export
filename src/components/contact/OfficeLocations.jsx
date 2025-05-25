import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function OfficeLocations() {
  const offices = [
    {
      id: 1,
      city: 'New York',
      country: 'USA',
      address: '123 Trade Avenue, Business District, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'newyork@globaltrade.com',
      image: '/images/office-ny.jpg',
    },
    {
      id: 2,
      city: 'London',
      country: 'UK',
      address: '45 Commerce Street, Financial District, London, EC2N 1HQ',
      phone: '+44 20 1234 5678',
      email: 'london@globaltrade.com',
      image: '/images/office-london.jpg',
    },
    {
      id: 3,
      city: 'Singapore',
      country: 'Singapore',
      address: '78 Trade Center, Marina Bay, Singapore 018956',
      phone: '+65 6123 4567',
      email: 'singapore@globaltrade.com',
      image: '/images/office-singapore.jpg',
    },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title">Our Global Offices</h2>
          <p className="section-subtitle">
            Visit us at one of our international locations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div 
              key={office.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={(office.id - 1) * 100}
            >
              <div 
                className="h-48 bg-gray-300"
                style={{
                  backgroundImage: `url('${office.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{office.city}, {office.country}</h3>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </li>
                  <li className="flex items-center">
                    <FaPhone className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.phone}</span>
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.email}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}