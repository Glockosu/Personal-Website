/* eslint-disable @next/next/no-img-element */
// components/Header.jsx
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

const Header = () => {
  return (
    <header className="text-white bg-gradient-to-b from-[var(--background-start)] to-[var(--background-end)]">
        <div className="border-b border-gray-600">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <div className="flex items-center">
                {/* Logo Image */}
                
                <a href="/" className="inline-flex items-center mx-2 hover:-translate-y-1 transition-transform duration-300" target="_blank" rel="noopener noreferrer">
                  <img src="/../images/icons/icons8-a-80.png" alt="Logo" className="w-10 h-10" />
                  <span className="ml-3 font-bold text-lg">Alex Johannesson</span>
                </a>
                </div>
                <div className="flex items-center">
                {/* GitHub Icon */}
                <button
                  className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-teal-700 hover:text-[var(--background-start)] transition-colors duration-300"
                  onClick={() => window.open('/AlexJohannesson_Resume.pdf', '_blank')}
                >
                  Resume
                </button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;