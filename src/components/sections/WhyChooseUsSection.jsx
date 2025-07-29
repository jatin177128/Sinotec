import React from 'react';
import { 
  Shield, 
  Award, 
  Clock, 
  Users, 
  CheckCircle, 
  Star, 
  Zap, 
  Target,
  Globe,
  Heart,
  TrendingUp,
  PhoneCall
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "2+ Years of Excellence",
      description: "Over a decade and a half of proven expertise in electrical safety solutions across diverse industries.",
      highlight: "500+ Projects Completed"
    },
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified",
      description: "Quality management systems certified to international standards, ensuring consistent service delivery.",
      highlight: "100% Quality Assured"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified electrical engineers and technicians with extensive field experience and technical expertise.",
      highlight: "10+ Specialists"
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored electrical safety solutions designed specifically for your industry and operational requirements.",
      highlight: "Bespoke Design"
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "Successful implementations across manufacturing, oil & gas, telecommunications, and commercial sectors.",
      highlight: "99% Success Rate"
    }
  ];

  const achievements = [
    {
      icon: Globe,
      number: "2+",
      label: "Years Experience",
      description: "Industry leadership"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Earthing Systems done",
      description: "Successful installations"
    },
    {
      icon: Star,
      number: "10+",
      label: "Expert Team",
      description: "Certified professionals"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Client Satisfaction",
      description: "Quality guaranteed"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Industrial Manufacturing Ltd.",
      text: "Sino-Tec's lightning protection system saved our facility during the monsoon season. Exceptional service and reliability.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Tech Solutions Pvt. Ltd.",
      text: "Professional installation and ongoing maintenance support. Their team's expertise is unmatched in the industry.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Energy Corporation",
      text: "Comprehensive electrical safety audit helped us achieve compliance. Highly recommend their services.",
      rating: 5
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Trusted Partner in Electrical Safety
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With unmatched expertise, certified quality, and unwavering commitment to safety, 
            we deliver electrical solutions that protect your most valuable assets.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {reason.highlight}
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              
              <div className="mt-4 flex items-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Verified & Certified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Counter */}
        <div className="bg-white rounded-2xl p-12 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from satisfied clients across various industries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Secure Your Electrical Systems?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust Sino-Tec India for their electrical safety needs. 
            Get expert consultation and customized solutions today.
          </p>
          
          
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Site Assessment</span>
            </div>

            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>ISO Certified Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;