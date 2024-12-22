import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    quote: "The platform's real-time processing capabilities have transformed our operations. We've seen a 50% reduction in transaction processing time.",
    author: "Sarah Chen",
    title: "CTO, Digital First Bank",
    logo: "/logos/dfb-logo.svg"
  },
  {
    quote: "Implementing this solution helped us expand to 12 new markets in just 6 months. The multi-currency support is seamless.",
    author: "Michael Rodriguez",
    title: "Head of Innovation, Global Payments Co",
    logo: "/logos/gpc-logo.svg"
  },
  {
    quote: "Bank-grade security out of the box. Our compliance team was impressed with the robust security features and regulatory compliance.",
    author: "Emma Thompson",
    title: "CISO, Future Finance",
    logo: "/logos/ff-logo.svg"
  }
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See what our clients say about their experience
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                  <div className="h-16 mb-8">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.author}'s company logo`}
                      className="h-full w-auto"
                    />
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex flex-col items-center">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-blue-600 mt-1">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Client Logos */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          {testimonials.map((client) => (
            <div key={client.title} className="flex justify-center items-center">
              <img 
                src={client.logo} 
                alt={client.title}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}