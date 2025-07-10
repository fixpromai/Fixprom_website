import React from 'react';
import './Testimonials.css';

const testimonials = [
  { name: 'Ganeshsandeep', text: '“Loved this extension from FixPromAI—it makes my job so much easier!”', stars: '⭐⭐⭐⭐⭐' },
  { name: 'Sanjeev Kumar', text: '“Nice!!!!!!!!!!!!!!!!”', stars: '⭐⭐⭐⭐' },
  { name: 'Akhilesh', text: '“#Timesaver Easy fix !!”', stars: '⭐⭐⭐⭐⭐' },
  { name: 'Harthik reddy', text: '“toooo good this is.. loved it, very helpful, made my tasks very simple.”', stars: '⭐⭐⭐⭐' },
  { name: 'Ganesh Naidu', text: '“The fixprom professional and easy to use. It makes a good first impression with clear branding.”', stars: '⭐⭐⭐⭐' },
    { name: 'Priyankle Mourya', text: '“Very useful and time saving, FixProm makes prompt correction quick, simple, and incredibly effective! .”', stars: '⭐⭐⭐⭐⭐' },
  { name: 'Chandini Kankanala', text: '“Simple, effective, and saves so much time. FixProm is a must-have tool.”', stars: '⭐⭐⭐' },
  { name: 'srikanth jalluri', text: '“FixProm is a simple, efficient, and time-saving solution—an essential tool for any workflow.”', stars: '⭐⭐⭐⭐⭐' },
];

export default function Testimonials() {
  const allTestimonials = [...testimonials, ...testimonials]; // For infinite scroll loop

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">What Our Users Say</h2>
        <div className="testimonial-scroll-wrapper">
          <div className="testimonial-track">
            {allTestimonials.map((item, i) => (
              <div className="testimonial-card" key={i}>
                <p className="testimonial-text">“{item.text.replace(/“|”/g, '')}”</p>
                <h4 className="testimonial-name">{item.name}</h4>
                <p className="testimonial-stars">{item.stars}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
