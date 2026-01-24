import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full py-20 sm:pt-35 overflow-hidden flex flex-col md:flex-row-reverse md:px-10 md:gap-5 items-center justify-start sm:justify-center bg-gray-800">
      {/* Content */}
      <div className="text-center md:text-left text-white">
        <h1 className="text-7xl font-extrabold mb-2">
          Little Lion
        </h1>

        <h2 className="global-accent-text text-center md:text-left md:pr-25 text-4xl md:text-4xl font-extrabold mb-2">
          Web Designs
        </h2>

        <p className="text-2xl md:text-2xl mb-8 lg:w-80">
          Every Business Can Make A Big Impression
        </p>
      </div>
      <div className="flex flex-col items-center gap-2"> 
          <Image
            src="/images/little-lion-logo.png"
            alt="Little Lion Logo of a Shih Tzu Dog"
            className="w-5/6 md:w-full lg:w-120 h-auto"
            width={1536}
            height={1024} 
          />
          <p className="text-white/50 text-xl italic">&quot;Shih Tzu&quot; - &quot;Little Lion&quot;</p>
      </div>  
    </section>
  );
}
