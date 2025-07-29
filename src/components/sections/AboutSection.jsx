import React from 'react';
import { Shield, CheckCircle, ChevronRight, Award } from 'lucide-react';

const AboutSection = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              About Sino-Tec India
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leading Electrical Earthing Specialists
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              With over years of experience in electrical safety solutions, Sino-Tec India has established 
              itself as a trusted partner for businesses and industries across India. We specialize in 
              comprehensive earthing systems, lightning protection, and electrical safety audits.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Team</h3>
                  <p className="text-gray-600">Certified professionals with extensive experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                  <p className="text-gray-600">ISO certified processes and premium materials</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Comprehensive Solutions</h3>
                  <p className="text-gray-600">End-to-end electrical safety services</p>
                </div>
              </div>

            </div>
            
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
            >
              Learn More
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-blue-100 mb-6">
                To provide world-class electrical earthing and lightning protection solutions that ensure 
                safety, reliability, and compliance for our clients across all industries.
              </p>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-orange-400 mr-2" />
                  <span className="font-semibold">ISO 9001:2015 Certified</span>
                </div>
                <p className="text-sm text-blue-500">
                  Committed to quality management systems and continuous improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;