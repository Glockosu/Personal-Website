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
                
                <img src='/../images/icons/icons8-a-80.png' alt="Logo" width={40} height={40} />
                
                <Link href="/">
                  <span className="ml-3 font-bold text-lg">Alex Johannesson</span>
                </Link>
                </div>
                <div className="flex items-center">
                {/* GitHub Icon */}
                <button
                  className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-teal-700 hover:text-[var(--background-start)] transition-colors duration-300"
                  onClick={() => window.location.href = 'https://drive.google.com/file/d/1SalYPyueenrhXLIiON2F3ommvObVGqra/view?usp=sharing'}
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