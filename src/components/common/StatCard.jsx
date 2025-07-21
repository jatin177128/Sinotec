import React from 'react';

export default function StatCard({ number, label, description }) {
  return (
    <div className="text-center group">
      <div className="mb-2">
        <span className="text-3xl md:text-4xl font-bold text-zinc-500 group-hover:text-orange-400 transition-colors duration-300">
          {number}
        </span>
      </div>
      <h3 className="text-sm md:text-base font-semibold text-zinc-900 mb-1 uppercase tracking-wide">
        {label}
      </h3>
      <p className="text-xs md:text-sm text-zinc-900 opacity-80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}