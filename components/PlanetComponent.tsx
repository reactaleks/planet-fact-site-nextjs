"use client";
import { useState, useEffect } from "react";
import PlanetImageComponent from "./PlanetImageComponent";
import PlanetDescriptionComponent from "./PlanetDescriptionComponent";

export default function PlanetComponent({ planetData }: PlanetData) {
  const [pageSection, setPageSection] = useState("overview");
  useEffect(() => {
    setPageSection("overview");
  }, []);

  return (
    <div className="max-h-screen z-20">
      <div className="flex justify-around items-center h-[50px] border border-x-0 border-y-1 border-[#979797] border-opacity-35 z-20">
        <div
          className={`font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center ${
            pageSection == "overview"
              ? "border border-x-0 border-t-0 border-b-4 border-yellow"
              : "border-none"
          } `}
          onClick={() => {
            setPageSection("overview");
          }}
        >
          <span className="hidden">01</span> Overview
        </div>
        <div
          className={`font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center ${
            pageSection == "internal"
              ? "border border-x-0 border-t-0 border-b-4 border-yellow"
              : "border-none"
          }`}
          onClick={() => {
            setPageSection("internal");
          }}
        >
          <span className="hidden">02 Internal</span> structure
        </div>
        <div
          className={`font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center ${
            pageSection == "geology"
              ? "border border-x-0 border-t-0 border-b-4 border-yellow"
              : "border-none"
          }`}
          onClick={() => {
            setPageSection("geology");
          }}
        >
          <span className="hidden">03</span> Surface{" "}
          <span className="hidden">Geology</span>{" "}
        </div>
      </div>

      <PlanetImageComponent
        pageSection={pageSection}
        planetData={planetData}
      />


      <h1 className="text-[40px] text-white uppercase text-center">{planetData.planetName}</h1>
      <PlanetDescriptionComponent pageSection={pageSection} planetData={planetData}/>

      <div className="text-white w-full flex justify-center">
        Source:
        <a href={planetData.wikiLink} target="_blank">
          Wikipedia
        </a>
      </div>

      <div className="text-white w-[90%] h-[216px] mx-auto flex flex-col justify-around">
        <div className="text-opacity-50 w-full h-[48px] flex justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
          Rotation Time
          <span className="text-opacity-100 font-antonio text-[24px] font-medium">
            {planetData.rotationTime}
          </span>
        </div>
        <div className="text-opacity-50 w-full h-[48px] flex justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
          Revolution Time
          <span className="text-opacity-100 font-antonio text-[24px] font-medium">
            {planetData.revolutionTime}
          </span>
        </div>
        <div className="text-opacity-50 w-full h-[48px] flex justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
          Radius
          <span className="text-opacity-100 font-antonio text-[24px] font-medium">
            {planetData.radius}KM
          </span>
        </div>
        <div className="text-opacity-50 w-full h-[48px] flex justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
          Average tem
          <span className="text-opacity-100 font-antonio text-[24px] font-medium">
            {planetData.averageTemp}&#8451;
          </span>
        </div>
      </div>
    </div>
  );
}
