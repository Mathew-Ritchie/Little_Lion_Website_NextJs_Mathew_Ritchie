export default function OurServices() {

const services = [
  {
    title: "Website Development",
    subTitle: `Bring your business online with a professional, modern website tailored to your needs.
              We create sites that look great, perform smoothly, and help you connect with clients.`,
    listItem: [{strong:"Custom Designs", listItem:"Unique layouts that reflect your brand"},
               {strong:"Responsive & Mobile-Friendly", listItem:"Perfect on all devices"},
               {strong:"Clear Navigation", listItem:"Easy-to-use menus and smooth flow"},
               {strong:"Content & Media Integration", listItem:"Services, galleries, videos, and more"},
               {strong:"Contact & Lead Features", listItem:"Forms, click-to-call, and bookings"},
               {strong:"SEO-Optimized", listItem:"Built to get your business noticed online"},
               {strong:"Fast & Secure", listItem:"Quick-loading pages with SSL protection"},
               {strong:"Post-Launch Support", listItem:"Assistance to keep your site running smoothly"}],
    quote: ``
  },
  {
    title: "Search Engine Optimisation (SEO)",
    subTitle: `Get your business noticed online with SEO that drives traffic, generates leads, and
              grows your brand.`,
    listItem: [{strong:"Keyword Strategy", listItem:"Find the terms your customers are searching for"},
               {strong:"On-Page SEO", listItem:"Optimize content, headings, meta tags, and images"},
               {strong:"Technical SEO", listItem:"Boost site speed, mobile usability, and security"},
               {strong:"Local SEO", listItem:"Help local customers find your business easily"},
               {strong:"Content Optimization", listItem:"Improve existing pages and create high-impact content"},
               {strong:"Analytics & Reporting", listItem:"Track performance and get actionable insights"},
               {strong:"Ongoing SEO", listItem:"Continuous improvements to maintain top rankings"},
               ],
    quote: `Let us help your business reach the right audience with SEO that works.`
  },
  {
    title: "Hosting",
    subTitle: `Keep your website online, fast, and secure with our professional hosting services.`,
    listItem: [{strong:"Fast & Reliable", listItem:"Quick loading times and consistent uptime"},
               {strong:"Secure", listItem:"SSL and security measures to protect your site"},
               {strong:"Support", listItem:"Expert help whenever you need it"},
               ],
    quote: `Let us handle the technical side, so your website is always secure, fast, and ready
              for your visitors.`
  },
]
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
        <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-center justify-items-center">
          {services && services.map((items , index) => (
            <div key={index} className="bg-white/90 p-6 px-5 rounded-lg shadow-md text-black flex flex-col justify-center items-center">
                <h3 className="text-3xl font-bold pb-2">{items.title}</h3>
                <hr className="mb-2 w-5/6"></hr>
                <p className="text-xl text-black font-bold pb-2">
              {items.subTitle}
            </p>
             <ul className="mb-4 text-lg list-disc pl-2">
              {items.listItem.map((listItem, index) => (
                <li key={index} className="text-left" >
                  <strong>{listItem.strong}:</strong>{listItem.listItem}
                </li>
              ))}
              </ul>
              {items.quote && (<p>{items.quote}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
