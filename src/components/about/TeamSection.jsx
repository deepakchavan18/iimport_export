import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: 'John Anderson',
      position: 'CEO & Founder',
      bio: 'With over 20 years of experience in international trade, John leads our company with vision and expertise.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'john@globaltrade.com',
      },
    },
    {
      id: 2,
      name: 'Sarah Williams',
      position: 'Operations Director',
      bio: 'Sarah oversees our global operations, ensuring efficient and seamless service delivery for all clients.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@globaltrade.com',
      },
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Head of Logistics',
      bio: 'Michael brings innovative solutions to optimize our logistics network and supply chain management.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@globaltrade.com',
      },
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      position: 'International Trade Specialist',
      bio: "Emily's expertise in global trade regulations helps our clients navigate complex compliance requirements.",
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@globaltrade.com',
      },
    },
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="section-title text-center" data-aos="fade-up">Our Leadership Team</h2>
        <p className="section-subtitle text-center mx-auto" data-aos="fade-up" data-aos-delay="100">
          Meet the experts behind our global trade solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <div 
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div 
                className="h-64 bg-gray-300"
                style={{
                  backgroundImage: `url('/images/team.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} className="text-gray-600 hover:text-primary transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={member.social.twitter} className="text-gray-600 hover:text-primary transition-colors">
                    <FaTwitter size={20} />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-primary transition-colors">
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}