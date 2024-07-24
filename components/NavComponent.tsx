"use client";
import planetData from "../public/planetData/planetData.json";
import { useState } from "react";

import Link from "next/link";

export default function NavComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = Object.keys(planetData).map((key) => {
    return (
      <Link
        key={key}
        href={`/${key}`}
        onClick={openMenu}
        className="uppercase flex w-[90%] mx-auto border border-x-0 border-t-0 border-b-2 border-white"
      >
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#DEF4FC" />
          </svg>
        </div>

        {key}
      </Link>
    );
  });

  return (
    <>
      <button onClick={openMenu} className="w-[52px] h-[52px] bg-yellow z-30 relative flex flex-col justify-center">
        <span className={`w-[32px] h-[3px] block bg-black mx-auto transition-all duration-300 ease-out ${menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
        <span className={`w-[32px] h-[3px] block bg-black mx-auto transition-all duration-300 ease-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`w-[32px] h-[3px] block bg-black mx-auto transition-all duration-300 ease-out ${menuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>

      </button>
      <div
        className={`w-full h-screen transform left-0 top-0 ease-in-out absolute transition-all duration-500 z-20  ${
          menuOpen
            ? " bg-black text-white flex flex-col justify-center translate-y-0"
            : "-translate-y-full"
        }`}
      >
        {navItems}
      </div>
    </>
  );
}
