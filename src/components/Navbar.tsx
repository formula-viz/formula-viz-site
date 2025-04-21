import Link from "next/link";
import Image from "next/image";

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
            href="/for-recruiters"
            className="hover:text-[var(--f1-red)] transition-colors"
          >
            For Recruiters
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://youtube.com/@formula-viz"
            target="_blank"
            aria-label="YouTube Channel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="var(--yt-red)"
              viewBox="0 0 16 16"
              className="hover:text-white transition-colors"
            >
              <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                fillRule="evenodd"
              />
              <path d="M6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="white" />
            </svg>
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
