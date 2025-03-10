"use client";

import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);  // Check if navbar is open or closed (small screens)

  return (
    <nav className="flex justify-center w-screen my-8 px-4 md:px-8 sticky top-[2%] left-[50%] z-[999]">
      <div 
        className={`opacity-95 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl bg-[#f0edf5] rounded-full px-8 md:px-20 py-4 md:py-6 shadow-[0px_3px_15px_rgba(0,0,0,0.1)] 
        transition-all duration-300 ${menuOpen ? "py-10 rounded-xl" : ""}`}
      >
        {/* Top Row: Logo & Menu Button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <Image src="/tryitonlogo.png" width={120} height={70} alt="logo image" className="w-[80px] md:w-full" />
          </a>

          {/* Menu Button */}
          <button 
            className="block md:hidden" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6 hover:text-[#672ad1] hover:scale-[1.1] transition-all duration-150 cursor-pointer" stroke="#1f1f1f" /> : <AlignJustify className="w-6 h-6 hover:text-[#672ad1] hover:scale-[1.1] transition-all duration-150 cursor-pointer" stroke="#1f1f1f" />}
          </button>
        </div>

        {/* Navbar Links: Expands Inside the Navbar */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out 
          ${menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"} 
          md:max-h-none md:opacity-100 md:flex md:flex-row md:items-center`}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center mt-4 md:mt-0">
            <Link className="duration-200 hover:text-[#672ad1] text-lg" href="#">Headshots</Link>
            <Link className="duration-200 hover:text-[#672ad1] text-lg" href="#">Gallery</Link>
            <Link className="duration-200 hover:text-[#672ad1] text-lg" href="#">Corporate</Link>
            <Link className="duration-200 hover:text-[#672ad1] text-lg" href="#">About</Link>
            <Link className="duration-200 hover:text-[#672ad1] text-lg" href="#">New AI Tools</Link>
            <Link className="duration-200 hover:text-[#672ad1] text-lg font-bold" href="#">Log In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

