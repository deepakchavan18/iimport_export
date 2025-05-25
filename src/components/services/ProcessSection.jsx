import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: 'Consultation',
      description: 'We begin with a detailed consultation to understand your specific import/export needs and objectives.',
    },
    {
      id: 2,
      title: 'Strategy Development',
      description: 'Our team develops a customized strategy tailored to your business requirements and market goals.',
    },
    {
      id: 3,
      title: 'Implementation',
      description: 'We execute the plan, handling all logistics, documentation, and regulatory compliance aspects.',
    },
    {
      id: 4,
      title: 'Monitoring',
      description: 'Throughout the process, we provide real-time updates and tracking of your shipments.',
    },
    {
      id: 5,
      title: 'Delivery & Follow-up',
      description: 'We ensure successful delivery and conduct a follow-up review to optimize future operations.',
    },
  ];
  
  return (
    <section className="py-20 bg-light">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            A streamlined approach to ensure efficient and reliable service delivery
          </p>
        </div>
        
        {/* Process Steps - Desktop */}
        <div className="hidden md:block relative mb-20" data-aos="fade-up">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="relative z-10 flex justify-between">
            {steps.map((step) => (
              <div 
                key={step.id}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setActiveStep(step.id)}
              >
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 transition-all
                    ${activeStep === step.id 
                      ? 'bg-primary text-white scale-110' 
                      : activeStep > step.id 
                        ? 'bg-primary bg-opacity-20 text-primary' 
                        : 'bg-gray-200 text-gray-500'
                    }`}
                >
                  {step.id}
                </div>
                <h3 
                  className={`text-lg font-semibold transition-all
                    ${activeStep === step.id ? 'text-primary' : 'text-gray-700'}`}
                >
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Process Steps - Mobile */}
        <div className="md:hidden space-y-6 mb-12">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`p-4 rounded-lg cursor-pointer transition-all
                ${activeStep === step.id 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white'
                }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4
                    ${activeStep === step.id 
                      ? 'bg-white text-primary' 
                      : 'bg-primary bg-opacity-20 text-primary'
                    }`}
                >
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </div>
              {activeStep === step.id && (
                <p className="mt-4 pl-14">{step.description}</p>
              )}
            </div>
          ))}
        </div>
        
        {/* Step Details - Desktop */}
        <motion.div 
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            {steps.find(step => step.id === activeStep)?.title}
          </h3>
          <p className="text-gray-600">
            {steps.find(step => step.id === activeStep)?.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}