import Image from "next/image";

export default function Samples() {
  return (
    <section
      id="our-samples"
      className="min-h-screen bg-gray-700 w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="container text-white mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Samples</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Here are a few samples of our recent work. Each project is tailored to meet the unique
          needs of our clients, showcasing our commitment to quality and creativity.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
          {/* Sample 1 */}
          <a href="https://sample-restaurant-site.netlify.app/" target="_blank" className="sm:w-2/3 md:w-1/2 lg:w-2/5 h-100">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg h-100">
            <Image
              src="/images/restaurant.png"
              alt="Screenshot of Restaurant sample Website"
              className="w-full h-48 object-cover rounded-md mb-4"
              width={1455}
              height={899}
            />
            <h3 className="text-lg font-bold mb-2">E-commerce Website</h3>
            <p>
              A one page website that is perfect for a small restaurant. offers large components to showcase you menu and mant ways for users to make contact.
            </p>
          </div>
          </a>
          {/* Sample 2 */}
           <a href="https://sample-hotel-website-mathew-ritchie.netlify.app/" target="_blank" className="sm:w-2/3 md:w-1/2 lg:w-2/5 h-100">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg  h-100">
            <Image
              src="/images/hotel.png"
              alt="Screenshot of Hotel Sample Website"
              className="w-full h-48 object-cover rounded-md mb-4"
              width={1455}
              height={899}
            />
            <h3 className="text-lg font-bold mb-2">Portfolio Website</h3>
            <p>
              A multi-page website ideal for a boutique hotel, with pages for room types and facilities. The site has many contact options for users and links to external booking sites.
            </p>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
}