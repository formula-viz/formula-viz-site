import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-[var(--f1-dark)] text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-repeat"></div>

      <div className="max-w-7xl mx-auto px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Automated F1 Qualifying
            <span className="text-[var(--f1-red)]"> Visualizations</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Experience Formula 1 qualifying sessions like never before with our
            automatically generated visualization videos that break down every
            crucial lap and highlight the most exciting moments.
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
      </div>
    </div>
  );
};

export default Hero;
