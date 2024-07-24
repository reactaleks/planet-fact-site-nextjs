export default function PlanetDescriptionComponent({
  planetData,
  pageSection,
}: PlanetInformation) {
  if (pageSection == "overview") {
    return (
      <>
        <p className="text-white w-[90%] mx-auto text-center">
          {planetData.overviewContent}
        </p>
      </>
    );
  } else if (pageSection == "internal") {
    return (
      <>
        <p className="text-white w-[90%] mx-auto text-center">
          {planetData.internalStructureContent}
        </p>
      </>
    );
  } else {
    return (
      <>
        <p className="text-white w-[90%] mx-auto text-center">
          {planetData.surfaceGeology}
        </p>
      </>
    );
  }
}
