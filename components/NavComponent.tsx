"use client";
import planetData from "../public/planetData/planetData.json";
import { useState, useEffect } from "react";

import Link from "next/link";

export default function NavComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = Object.keys(planetData).map((key) => {
    let planet = key as keyof typeof planetData;
    return (
      <Link
        key={key}
        href={`/${key}`}
        onClick={openMenu}
        className={`uppercase cursor-pointer flex items-center w-full h-[65px] mx-auto 
          border border-x-0 border-t-0 border-b-1 border-white border-opacity-25 
          md:justify-center md:border-none `}
      >
        <div className="w-[10%] md:hidden">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10"
              cy="10"
              r="10"
              fill={`${planetData[planet].planetColour}`}
            />
          </svg>
        </div>
        <div
          // style={{ borderColor: `${planetData[planet].planetColour}`}}
          className={`w-[80%] font-spartan text-[15px] font-bold leading-[25px] tracking-[1.36px] md:opacity-50 
        xl:h-full hover:xl:border-t-4 hover:xl:opacity-100 xl:[&:not(:hover)]:border-transparent xl:[&:not(:hover)]:border-t-4  xl:flex xl:justify-center xl:items-center xl:w-full`}
        >
          {key}
        </div>
        <div className="w-[10%] md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </div>
      </Link>
    );
  });

  return (
    <nav className="flex items-center justify-between w-full p-5 md:flex-col md:border md:border-x-0 md:border-t-0 md:border-b-1 md:border-white md:border-opacity-25 xl:flex-row xl:p-0 xl:px-5">
      <div className="font-antonio text-[28px] tracking-[-1.05px] uppercase text-white z-[21] md:w-[20%]">
        the planets
      </div>
      <button
        onClick={openMenu}
        className="w-[24px] h-[17px]  z-30 relative flex flex-col justify-center md:hidden"
      >
        <span
          className={`w-[24px] h-[3px] block bg-white mx-auto transition-all duration-300 ease-out ${
            menuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`w-[24px] h-[3px] block bg-white mx-auto transition-all duration-300 ease-out ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`w-[24px] h-[3px] block bg-white mx-auto transition-all duration-300 ease-out ${
            menuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
          }`}
        ></span>
      </button>
      <div
        className={`w-full h-[100%] xl:w-[50%] transform left-0 top-0 ease-in-out absolute md:relative md:flex md:transform-none md:h-[20%]  transition-all duration-500 z-20  ${
          menuOpen
            ? " bg-black text-whitea flex flex-col justify-evenly translate-y-0 z-19"
            : "-translate-y-full"
        }`}
      >
        <div className="w-[327px] md:w-full mx-auto my-auto flex flex-col justify-between md:justify-center text-white md:flex-row ">
          {navItems}
        </div>
      </div>
    </nav>
  );
}
