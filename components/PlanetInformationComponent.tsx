import Image from "next/image";
export default function PlanetInformationComponent({
  planetData,
  pageSection,
}: PlanetInformation) {
  if (pageSection == "overview") {
    return (
      <>
        <Image
          src={planetData.overviewImage}
          width={450}
          height={450}
          alt=""
          priority
        />
        <p>{planetData.overviewContent}</p>
      </>
    );
  } else if (pageSection == "internal") {
    return (
      <>
        <Image
          src={planetData.internalStructureImage}
          width={450}
          height={450}
          alt=""
          priority
        />
        <p>{planetData.internalStructureContent}</p>
      </>
    );
  } else {
    return (
      <>
        <div className="relative w-[450px] h-[450px]">
          <Image
            src={planetData.overviewImage}
            width={450}
            height={450}
            alt=""
            priority
          />
          <Image
            src={planetData.surfaceGeologyImage}
            width={326}
            height={398}
            alt=""
            priority
            className="absolute right-0 left-0 top-0 bottom-0"
          />
        </div>
        <p>{planetData.surfaceGeology}</p>
      </>
    );
  }
}
