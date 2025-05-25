import { useRef } from 'react';
import Slider from 'react-slick';

export default function PartnerSection() {
  const sliderRef = useRef(null);
  
  // Partner logos would typically be actual company logos
  // For this example, we'll use placeholder colored boxes with text
  const partners = [
    { id: 1, name: 'Logistics Co.' },
    { id: 2, name: 'Global Shipping' },
    { id: 3, name: 'Trade Solutions' },
    { id: 4, name: 'Cargo Express' },
    { id: 5, name: 'World Freight' },
    { id: 6, name: 'Supply Chain Inc.' },
    { id: 7, name: 'Maritime Group' },
    { id: 8, name: 'Air Cargo Ltd.' },
  ];
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };
  
  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-center mb-10" data-aos="fade-up">
          Trusted by Leading Companies Worldwide
        </h2>
        
        <div data-aos="fade-up" data-aos-delay="100">
          <Slider ref={sliderRef} {...sliderSettings}>
            {partners.map((partner) => (
              <div key={partner.id} className="px-4">
                <div className="bg-white h-24 rounded-lg shadow-md flex items-center justify-center p-4">
                  <span className="text-lg font-semibold text-primary">{partner.name}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}