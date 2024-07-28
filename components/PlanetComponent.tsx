"use client";
import { useState, useEffect } from "react";
import PlanetImageComponent from "./PlanetImageComponent";
import PlanetHeadingComponent from "./PlanetHeading";
import PlanetDescriptionComponent from "./PlanetDescriptionComponent";
import PlanetNavigationComponent from "./PlanetNavigationComponent";
import PlanetWikiLink from "./PlanetWikiLinkComponent";
import PlanetStatsComponent from "./PlanetStatsComponent";
import { motion } from "framer-motion";

export default function PlanetComponent({ planetData }: PlanetData) {
  const [pageSection, setPageSection] = useState("overview");

  useEffect(() => {
    setPageSection("overview");
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0}}
      animate={{ opacity: 100 }}
      transition={{
        ease: "linear",
        layout: { duration: 0.3 },
      }}
      className="z-20 flex flex-col justify-around min-h-screen md:grid md:grid-cols-12 md:grid-rows-12 md:max-h-screen"
    >
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
    </motion.div>
  );
}
