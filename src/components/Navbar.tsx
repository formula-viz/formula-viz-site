import Link from "next/link";
import Image from "next/image";
import YouTubeIcon from "./YouTubeIcon";

const Navbar = () => {
  return (
    <nav className="bg-[var(--f1-dark)] text-white py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="font-bold text-xl flex items-center">
            <Image
              src="/images/formula-viz-icon-circled-base.png"
              alt="Formula Viz Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text">formula-viz</span>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="hover:text-[var(--f1-red)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="hover:text-[var(--f1-red)] transition-colors"
          >
            How it Works
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://youtube.com/@formula-viz"
            target="_blank"
            aria-label="YouTube Channel"
            className="hover:opacity-80 transition-opacity"
          >
            <YouTubeIcon />
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
