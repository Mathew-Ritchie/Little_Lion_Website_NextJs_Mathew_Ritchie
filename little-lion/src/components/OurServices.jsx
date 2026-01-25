// Packages.js (or your component file name)
import React from "react";
//import packagesImage from "../assets/packages.png"; // Ensure path is correct

export default function OurServices() {
  return (
    <section
      id="our-packages"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 bg-gray-800/60"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0  bg-no-repeat -z-10 bg-right md:bg-bottom-right bg-fixed bg-size-[100%] md:bg-size-[70%]"
        style={{
          backgroundImage: `url("/images/packages.png")`,
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="global-accent-text text-shadow-lg text-shadow-black/20 text-6xl md:text-6xl font-extrabold mb-6">Our Services</h1>
      </div>
      <div className="mb-12">
        {" "}
        {/* Added margin-bottom to ensure content isn't hidden */}
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-center justify-items-center">
          {/* Package 1 */}
          <div className="bg-white/90 p-6 px-5 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold">Website development</h3>
            <p className="text-lg">
              Bring your business online with a professional, modern website tailored to your needs.
              We create sites that look great, perform smoothly, and help you connect with clients.
            </p>
            <ul className="mb-4 list-disc text-left">
              <li>
                <strong>Custom Designs</strong> – Unique layouts that reflect your brand
              </li>
              <li>
                <strong>Responsive & Mobile-Friendly</strong> – Perfect on all devices
              </li>
              <li>
                <strong>Clear Navigation</strong> – Easy-to-use menus and smooth flow
              </li>
              <li>
                <strong>Content & Media Integration</strong> – Services, galleries, videos, and more
              </li>
              <li>
                <strong>Contact & Lead Features</strong> – Forms, click-to-call, and bookings
              </li>
              <li>
                <strong>SEO-Optimized</strong> – Built to get your business noticed online
              </li>
              <li>
                <strong>Fast & Secure</strong> – Quick-loading pages with SSL protection
              </li>
              <li>
                <strong>Post-Launch Support</strong> – Assistance to keep your site running smoothly
              </li>
            </ul>
          </div>

          <div className="bg-white/90 p-6 px-8  rounded-lg shadow-md ">
            <h3 className="text-3xl font-bold">Search Engine Optimisation (SEO)</h3>
            <p className="text-lg">
              Get your business noticed online with SEO that drives traffic, generates leads, and
              grows your brand.
            </p>
            <ul className="mb-4 list-disc text-left">
              <li>
                <strong>Keyword Strategy</strong> – Find the terms your customers are searching for
              </li>
              <li>
                <strong>On-Page SEO</strong> – Optimize content, headings, meta tags, and images
              </li>
              <li>
                <strong>Technical SEO</strong> – Boost site speed, mobile usability, and security
              </li>
              <li>
                <strong>Local SEO</strong> – Help local customers find your business easily
              </li>
              <li>
                <strong>Content Optimization</strong> – Improve existing pages and create
                high-impact content
              </li>
              <li>
                <strong>Analytics & Reporting</strong> – Track performance and get actionable
                insights
              </li>
              <li>
                <strong>Ongoing SEO</strong> – Continuous improvements to maintain top rankings
              </li>
            </ul>
            <p>Let us help your business reach the right audience with SEO that works.</p>
          </div>
          <div className="bg-white/90 p-6 px-8  rounded-lg shadow-md">
            <h3 className="text-3xl font-bold">Hosting</h3>
            <p className="text-lg">
              Keep your website online, fast, and secure with our professional hosting services.
            </p>
            <ul className="mb-4 list-disc text-left">
              <li>
                <strong>Fast & Reliable</strong> – Quick loading times and consistent uptime
              </li>
              <li>
                <strong>Secure</strong> – SSL and security measures to protect your site
              </li>
              <li>
                <strong>Support</strong> – Expert help whenever you need it
              </li>
            </ul>
            <p>
              Let us handle the technical side, so your website is always secure, fast, and ready
              for your visitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
