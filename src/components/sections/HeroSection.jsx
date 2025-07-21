import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import StatCard from '../common/StatCard';
import Button from '../ui/Button';
import { heroStats } from '../../data/stats';

export default function HeroSection({ scrollToSection }) {
  return (
    <section id="home" className="relative pt-16 bg-gradient-to-br from-black via-[#C78A3B] to-black text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#C0C9EE] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            <div className="inline-flex items-center bg-orange-500 bg-opacity-20 px-4 py-2 rounded-full text-orange-200 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Professional Earthing Solutions
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Electrical Safety
              <span className="block text-orange-400">& Earthing</span>
              <span className="block">Experts</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Sino-Tec India provides comprehensive electrical earthing and lightning protection services. 
              Ensuring safety, reliability, and compliance for your electrical installations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('services')}
                className="group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="grid grid-cols-2 gap-6">
                {heroStats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}