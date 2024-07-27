"use client";
import { useState, useEffect } from "react";
import PlanetImageComponent from "./PlanetImageComponent";
import PlanetHeadingComponent from "./PlanetHeading";
import PlanetDescriptionComponent from "./PlanetDescriptionComponent";
import PlanetNavigationComponent from "./PlanetNavigationComponent";
import PlanetWikiLink from "./PlanetWikiLinkComponent";
import PlanetStatsComponent from "./PlanetStatsComponent";

export default function PlanetComponent({ planetData }: PlanetData) {
  const [pageSection, setPageSection] = useState("overview");
  
  useEffect(() => {
    setPageSection("overview");
  }, []);

  return (
    <div className="z-20 flex flex-col justify-around min-h-screen md:grid md:grid-cols-12 md:grid-rows-12 md:max-h-screen">
      <PlanetNavigationComponent
        pageSection={pageSection}
        setPageSection={setPageSection}
        planet={planetData.planetName.toLowerCase()}
      />

      <PlanetImageComponent pageSection={pageSection} planetData={planetData} />

      <PlanetHeadingComponent heading={planetData.planetName} />
      
      <PlanetDescriptionComponent
        pageSection={pageSection}
        planetData={planetData}
      />

      <PlanetWikiLink wikiLink={planetData.wikiLink} />

      <PlanetStatsComponent
        rotationTime={planetData.rotationTime}
        revolutionTime={planetData.revolutionTime}
        radius={planetData.radius}
        averageTemp={planetData.averageTemp}
      />
    </div>
  );
}
