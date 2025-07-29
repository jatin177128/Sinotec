import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../../assets/image.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <img className='h-10' src={Logo} alt="SI" />
              <div className="ml-3">
                <h3 className="text-xl font-bold">SINO-TEC INDIA</h3>
                <p className="text-sm text-orange-400 font-medium">ELECTRICAL EARTHING SERVICES</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of electrical earthing solutions with expertise in design, 
              installation, and maintenance of earthing systems for various industries.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578048068673" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/sinotec-india" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin size={20} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={16} className="text-orange-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  3A/37, Gaurav path, UIT, Bhiwadi, Distt. Alwar - 301019 (Rajasthan)
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-orange-400 mr-3 flex-shrink-0" />
                <a href="tel:+91 7851853728" className="text-gray-300 text-sm hover:text-orange-400 transition-colors">
                  +91 7851853728
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-orange-400 mr-3 flex-shrink-0" />
                <a href="mailto:Sinotecncr@gmail.com" className="text-gray-300 text-sm hover:text-orange-400 transition-colors">
                  Sinotecncr@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Sino-Tec India. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/contact" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Get Quote
              </Link>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}