

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
      <p className="min-h-[110px] text-white w-[75%] mx-auto text-center font-spartan font-normal text-[11px] leading-[22px] tracking-[0px]
      col-span-6 row-start-7 
      md:text-start md:col-span-4 md:row-span-2 md:col-start-2 md:row-start-7 md:h-auto md:w-full
      xl:col-start-8 xl:row-start-4 xl:col-span-4 xl:w-full xl:text-[14px]
      ">
        {content}
      </p>
    );
  }
}
