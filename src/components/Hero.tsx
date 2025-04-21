import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-[var(--f1-dark)] text-white">
      {/* Grid background with axes */}
      <div className="absolute inset-0 bg-[var(--f1-dark)]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
                 linear-gradient(to right, rgba(200, 200, 200, 0.1) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(200, 200, 200, 0.1) 1px, transparent 1px)
               `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              F1 Qualifying
              <span className="text-[var(--fviz-cyan)]"> Visualizations</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Experience Formula 1 qualifying sessions like never before with
              our automatically generated visualization videos that break down
              every crucial lap and highlight the most exciting moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/videos" className="f1-button text-center">
                Latest Videos
              </Link>
              <Link href="/about" className="f1-secondary-button text-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="lg:w-3/4 mt-8 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/video-snap.png"
                alt="Formula 1 qualifying visualization sample"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
