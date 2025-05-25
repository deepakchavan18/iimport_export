import { useState, useEffect, useRef } from 'react';
import { FaGlobeAmericas, FaShippingFast, FaUsers, FaBuilding } from 'react-icons/fa';

export default function CounterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const counters = [
    {
      id: 1,
      icon: <FaGlobeAmericas className="text-4xl text-primary mb-4" />,
      number: 50,
      label: 'Countries Served',
    },
    {
      id: 2,
      icon: <FaShippingFast className="text-4xl text-primary mb-4" />,
      number: 10000,
      label: 'Shipments Completed',
    },
    {
      id: 3,
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      number: 500,
      label: 'Satisfied Clients',
    },
    {
      id: 4,
      icon: <FaBuilding className="text-4xl text-primary mb-4" />,
      number: 15,
      label: 'Years of Experience',
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-primary text-white"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {counters.map((counter) => (
            <div key={counter.id} className="p-6">
              {counter.icon}
              <h3 className="text-4xl font-bold mb-2">
                {isVisible ? (
                  <Counter end={counter.number} duration={2} />
                ) : (
                  0
                )}
                {counter.id === 1 && '+'}
              </h3>
              <p className="text-lg">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Counter animation component
function Counter({ end, duration }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(progressPercent * end));
      
      if (progressPercent < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return <span>{count.toLocaleString()}</span>;
}