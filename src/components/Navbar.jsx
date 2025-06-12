import { useEffect, useRef } from "react";

const Navbar = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Simple logo spin animation on mount
    if (logoRef.current) {
      logoRef.current.animate(
        [
          { transform: "rotate(0deg) scale(1)" },
          { transform: "rotate(360deg) scale(1.2)" },
          { transform: "rotate(360deg) scale(1)" }
        ],
        {
          duration: 1200,
          easing: "ease-in-out"
        }
      );
    }
  }, []);

  return (
    <nav className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ">
      <div className="max-w-4xl mx-auto flex items-center gap-4 py-4 px-6">
        {/* Animated Logo */}
        <div
          ref={logoRef}
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-400 to-pink-500 flex items-center justify-center shadow-lg animate-bounce"
        >
          {/* Simple wallet icon SVG */}
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <rect x="3" y="7" width="18" height="10" rx="3" fill="currentColor" opacity="0.2"/>
            <rect x="3" y="7" width="18" height="10" rx="3" stroke="currentColor" />
            <circle cx="17" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
        <span className="text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg select-none transition-all duration-300 hover:scale-105">
          WEB WALLET
        </span>
      </div>
    </nav>
  );
};

export default Navbar;