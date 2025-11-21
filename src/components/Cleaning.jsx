import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiPhone } from 'react-icons/fi';

const heroImage =
  'https://www.thecleaningauthority.com/images/stock-photo-2022.2211210538469.jpeg';

export default function Cleaning() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  const accentGreen = '#4fa33a';
  const headingBlue = '#0b63a6';
  const cardBlue = '#e6f5f8';
  const contactBlue = '#2a8bdc';

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-15">

       {/* LEFT CONTENT */}
<div className="pt-2">

  {/* Heading */}
  <h1
    data-aos="fade-right"
    className="text-3xl md:text-4xl font-semibold leading-tight text-black"
  >
    Learn About Our Maid Services at <br />
    <a
      data-aos="zoom-in"
      data-aos-delay="200"
      className="text-[#4fa33a] hover:text-[#2a8bdc]"
    >
      The Cleaning Authority - Matthews-Waxhaw
    </a>
  </h1>

  {/* Subheading */}
  <p
    data-aos="fade-up"
    data-aos-delay="400"
    className="mt-6 text-lg md:text-xl font-medium"
    style={{ color: '#2176c7' }}
  >
    Professional Cleaning Services in Waxhaw, Marvin, Weddington, Matthews, Indian Trail, Mint Hill, Stallings, Monroe, & Surrounding Areas
  </p>

  {/* First paragraph */}
  <p
    data-aos="fade-left"
    data-aos-delay="600"
    className="mt-6 text-gray-700"
  >
    Do you currently have a home cleaning company you trust to keep your home sanitized in Waxhaw or Matthews? Now is the time to hire a company dedicated to your satisfaction, respecting your space, disinfecting every nook and cranny, and doing everything according to your busy schedule.
  </p>

  {/* Second paragraph */}
  <p
    data-aos="fade-up"
    data-aos-delay="800"
    className="mt-4 text-gray-700"
  >
    The Cleaning Authority - Matthews-Waxhaw is committed to top-notch maid services and using the most effective and environmentally conscious products. We offer you complete control of your home cleaning services, meaning you get to choose when we clean your home (weekly, monthly, or bimonthly).
  </p>

</div>
{/* RIGHT CARD - IMAGE + CONTACT */}
        <div className="relative rounded-2xl shadow-2xl overflow-hidden group mt-10" data-aos="fade-right">
          {/* IMAGE */}
          <img
            src={heroImage}
            alt="Cleaning service"
            className="w-full h-[500px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-2xl">
            <div className="text-white text-center px-6 py-4">
              <h3 className="text-2xl font-semibold mb-2 text-[#4fa33a] tracking-wide">
                Matthews, NC Office
              </h3>
              <p className="text-lg mb-1 text-white/90">The Cleaning Authority</p>
              <p className="text-lg mb-1 text-white/90">3519 Matthews - Mint Hill Road</p>
              <p className="text-lg mb-4 text-white/90">Matthews, NC 28105</p>

              {/* Contact */}
              <div className="flex items-center gap-3 justify-center text-lg">
                <div className="bg-[#4fa33a] p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-300">
                  <FiPhone />
                </div>
                <span className="text-[#2a8bdc] font-semibold">(980) 479-1059</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          section { padding-top: 3rem; padding-bottom: 3rem; }
        }
      `}</style>
    </section>
  );
}
