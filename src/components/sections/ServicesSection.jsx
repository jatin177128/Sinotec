import React from 'react';
import { Zap, CheckCircle, ArrowRight, Shield, Settings, Globe, Wrench, Eye, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Earthing Systems",
      description: "Comprehensive earthing solutions designed to ensure electrical earthing and system reliability across all applications.",
      features: [
        "Chemical earthing",
        "Pipe & plate earthing",
        "Grid earthing systems",
        "Resistance testing"
      ],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=300&fit=crop"
    },
    {
      icon: Wrench,
      title: "Installation & Maintenance",
      description: "Professional installation services and ongoing maintenance programs to ensure optimal performance of electrical systems.",
      features: [
        "Expert installation",
        "Preventive maintenance",
        "Emergency repairs",
        "System upgrades"
      ],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=300&fit=crop"
    },
    {
      icon: Shield,
      title: "Lightning Protection Systems",
      description: "Advanced lightning protection solutions to safeguard your infrastructure from electrical surges and lightning strikes.",
      features: [
        "Lightning rod installation",
        "Surge protection devices",
        "Risk assessment studies",
        "System maintenance"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop"
    }
   
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Electrical Earthing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide complete electrical earthing solutions tailored to your specific requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-gradient-to-br from-orange-100 to-orange-200 w-12 h-12 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-orange-600" />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="text-orange-600 hover:text-orange-700 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-200">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Need Custom Electrical Solutions?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert team can design and implement tailored electrical earthing solutions 
              for your specific industry requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
  href="https://drive.google.com/file/d/1gsD5MRrwh6M-_oXORbxVIKpV78DjqXIr/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
>
  Download Brochure
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;