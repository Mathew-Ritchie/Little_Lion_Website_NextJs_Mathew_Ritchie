import Image from "next/image";
import "../app/globals.css"; 

export default function TheProcess() {

const processSteps = [
  {
    title: "Consultation",
    description: `We start by understanding your business, goals, and target audience. 
                  This helps us tailor our services to your specific needs. This is a 
                  chance for you to tell us what you would like from your website.`,
    icon: "/images/icons/helpdesk.gif"
  },
  {
    title: "Planning",
    description: `We create a detailed plan outlining the project scope, timeline, and 
                  deliverables. This ensures transparency and sets clear expectations. 
                  We also gather any content or materials needed for the website during 
                  this phase.`,
    icon: "/images/icons/strategy.gif"
  },
  {
    title: "Design & Development",
    description: `We design and develop your website, focusing on user experience, 
                  aesthetics, and functionality. We keep you involved throughout the 
                  process to ensure alignment with your vision.`,
    icon: "/images/icons/software.gif"
  },
  {
    title: "Review & Testing",
    description: `Before launch, we conduct thorough testing to ensure your website is 
                  fully functional, responsive, and optimized for performance across 
                  all devices and browsers. You as the client will get a chance to 
                  review the site and request any final changes.`,
    icon: "/images/icons/test.gif"
  },
  {
    title: "Launch",
    description: `Once everything is approved, we launch your website and ensure a 
                  smooth transition. Once your site is live, we make sure Google 
                  can find it!`,
    icon: "/images/icons/rocket.gif"
  },
  {
    title: "Ongoing Support",
    description: `We offer ongoing support and maintenance to keep your website updated, 
                  secure, and performing at its best.`,
    icon: "/images/icons/support.gif"
  }
];

  return (
    <section
      id="our-process"
      className="the-process-section bg-gray-800 min-h-screen w-full relative overflow-hidden flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4 text-center text-black">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-100">
          Our Web-design Process
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100">
          Our process is designed to ensure that we deliver high-quality, tailored web solutions
          that meet your unique needs and goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg shadow-xl shadow-white/20 text-gray-100">
              <Image src={step.icon} alt={`${step.title} Icon`} className="h-16 w-16 mx-auto" width={300} height={300} />
              <h3 className="text-lg font-bold mb-4">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
