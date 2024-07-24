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
    let planet = key as keyof typeof planetData

    return (
      <Link
        key={key}
        href={`/${key}`}
        onClick={openMenu}
        className={`uppercase flex w-[90%] mx-auto border border-x-0 border-t-0 border-b-2 border-white`}
      >
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill={`${planetData[planet].planetColour}`} />
          </svg>
        </div>

        {key}
      </Link>
    );
  });

  return (
    <nav className="w-full flex justify-between items-center p-5">
      <div className="font-antonio text-[28px] tracking-[-1.05px] uppercase text-white">the planets</div>
      <button onClick={openMenu} className="w-[24px] h-[17px]  z-30 relative flex flex-col justify-center">
        <span className={`w-[24px] h-[3px] block bg-white mx-auto transition-all duration-300 ease-out ${menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
        <span className={`w-[24px] h-[3px] block bg-white mx-auto transition-all duration-300 ease-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`w-[24px] h-[3px] block bg-white mx-auto transition-all duration-300 ease-out ${menuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>

      </button>
      <div
        className={`w-full h-[100%] transform left-0 top-0 ease-in-out absolute transition-all duration-500 z-20  ${
          menuOpen
            ? " bg-black text-whitea flex flex-col justify-evenly translate-y-0 z-19"
            : "-translate-y-full"
        }`}
      >
        <div className="w-[327px] mx-auto my-auto flex flex-col justify-between text-white">
          {navItems}

        </div>
      </div>
    </nav>
  );
}
