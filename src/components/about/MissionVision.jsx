import { FaLightbulb, FaCompass } from 'react-icons/fa';

export default function MissionVision() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div 
            data-aos="fade-right"
            className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <FaCompass className="text-4xl mr-4" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg mb-6">
              To simplify global trade by providing innovative, reliable, and efficient import and export solutions that enable businesses to expand their international reach.
            </p>
            <ul className="space-y-3">
              {[
                'Deliver exceptional service that exceeds client expectations',
                'Streamline complex international trade processes',
                'Build lasting partnerships based on trust and mutual success',
                'Continuously innovate to address evolving global trade challenges'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Vision */}
          <div 
            data-aos="fade-left"
            className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <FaLightbulb className="text-4xl mr-4" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg mb-6">
              To be the leading global trade facilitator, recognized for our expertise, integrity, and commitment to empowering businesses of all sizes to thrive in international markets.
            </p>
            <ul className="space-y-3">
              {[
                'Create a world where international trade is accessible to all businesses',
                'Set the industry standard for service excellence and innovation',
                'Develop sustainable trade solutions that benefit businesses and communities',
                'Foster a global network of trusted partners and satisfied clients'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}