import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row-reverse md:gap-5 items-center justify-center bg-gray-800">
      {/* Content */}
      <div className="container text-center md:text-left text-white md:w-90">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
          Little Lion
        </h1>

        <h2 className="global-accent-text text-center md:text-left md:pr-25 text-3xl md:text-3xl font-extrabold mb-6">
          Web Designs
        </h2>

        <p className="text-xl md:text-2xl mb-8 lg:w-80">
          Even small businesses can make a big impression
        </p>
      </div>
      <Image
        src="/images/little-lion-logo.png"
        alt="Little Lion Logo of a Shih Tzu Dog"
        className="w-2/3 md:w-1/3 lg:w-1/2 h-auto"
        width={1536}
        height={1024} 
      />
    </section>
  );
}
