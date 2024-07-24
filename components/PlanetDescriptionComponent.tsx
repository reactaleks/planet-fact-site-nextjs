

export default function PlanetDescriptionComponent({
  planetData,
  pageSection,
}: PlanetInformation) {

  interface SectionData {
    overview:string;
    internal:string;
    geology:string;
    [key:string]:string;
  }

  const sectionData:SectionData = {
      "overview": planetData.overviewContent,
      "internal": planetData.internalStructureContent,
      "geology": planetData.surfaceGeology,
  };

  if (sectionData.hasOwnProperty(pageSection)) {
    const index = pageSection
    const content = sectionData[index]

    return (
      <p className="min-h-[110px] text-white w-[75%] mx-auto text-center font-spartan font-normal text-[11px] leading-[22px] tracking-[0px]">
        {content}
      </p>
    );
  }
}
