import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OfferingsGuarantee() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  const accentGreen = '#4fa33a';
  const headingBlue = '#0b63a6';
  const cardBlue = '#e6f5f8';
  const contactBlue = '#2a8bdc';

  return (
    <div className="bg-[#DFEEF5] overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
        {/* Centered Heading */}
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: headingBlue }}
        >
          Our Home Cleaning Offerings Guarantee
        </h2>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT CARD */}
          <div
            data-aos="fade-right"
            className="relative bg-[${cardBlue}] rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-500 hover:scale-105 transform space-y-4 overflow-hidden group"
          >
            {/* Animated Line */}
            <span className="absolute left-0 top-0 w-1 h-0 bg-[#4fa33a] group-hover:h-full transition-all duration-700"></span>

            <p data-aos="fade-up" data-aos-delay="100" className="text-gray-700 relative z-10">
              <span style={{ color: accentGreen, fontWeight: '600' }}>Eco-friendly solutions:</span> Not only are our cleaning products designed to protect the environment, but we also provide digital receipts that reduce paper waste.
            </p>
            <p data-aos="fade-up" data-aos-delay="300" className="text-gray-700 relative z-10">
              <span style={{ color: accentGreen, fontWeight: '600' }}>Thoroughly trained professionals:</span> Our Matthews and Waxhaw team undergoes rigorous training to clean your home the way you expect and treat you how you deserve.
            </p>
            <p data-aos="fade-up" data-aos-delay="500" className="text-gray-700 relative z-10">
              <span style={{ color: accentGreen, fontWeight: '600' }}>High-tech equipment:</span> We use HEPA filtration vacuums and cleaning methods that eliminate harmful germs, bacteria, and pathogens.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="space-y-6">

            <div
              data-aos="fade-left"
              className="relative bg-[${cardBlue}] rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-500 hover:scale-105 transform overflow-hidden group"
            >
              {/* Animated Line */}
              <span className="absolute right-0 bottom-0 w-1 h-0 bg-[#4fa33a] group-hover:h-full top-auto transition-all duration-700"></span>

              <p data-aos="fade-up" data-aos-delay="100" className="text-gray-700 mb-2 relative z-10">
                We confirm that you get best-in-class assistance and a clean home by performing onsite inspections for our cleaning professionals. This assures that our specialists uphold the highest quality standards possible and deliver on our satisfaction promise.
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className="text-gray-700 relative z-10">
                Whether you are in Matthews, Waxhaw, Charlotte or surrounding cities, contact our team of maids today!
              </p>
            </div>

            {/* Bottom contact card */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="relative bg-[${cardBlue}] rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-500 hover:scale-105 transform overflow-hidden group"
            >
              <span className="absolute right-0 bottom-0 w-1 h-0 bg-[#4fa33a] group-hover:h-full top-auto transition-all duration-700"></span>

              <p className="text-gray-700 mb-2 relative z-10">
                Get started with your Maid Services by calling <span style={{ color: contactBlue, fontWeight: '600' }}>(980) 479-1059</span> or <span className='hover:text-[#4fa33a] hover:underline font-semibold'>contacting us online.</span> 
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
