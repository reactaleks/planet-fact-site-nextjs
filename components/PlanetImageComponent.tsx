import Image from "next/image";
export default function PlanetImageComponent({
  planetData,
  pageSection,
}: PlanetInformation) {
  const imageSize = parseInt(planetData.radius.replace(/,/g, "").slice(0,2)) / 1 + '%'
  if (pageSection == "overview") {
    return (
      <div className="min-h-[258.7px] flex items-center justify-center col-span-8 row-span-6 col-start-3 row-start-1">
        <Image
          src={planetData.overviewImage}
          width={450}
          height={450}
          alt=""
          priority
          className={`w-[154px] h-[154px] mx-auto md:w-[213px] md:h-[213px]`}
          style={{width: imageSize, height: imageSize}}
        />
      </div>
    );
  } else if (pageSection == "internal") {
    return ( 
      <div className="min-h-[258.7px] flex items-center justify-center col-span-8 row-span-6 col-start-3 row-start-1">
        <Image
          src={planetData.internalStructureImage}
          width={450}
          height={450}
          alt=""
          priority
          className="w-[154px] h-[154px] mx-auto md:w-[213px] md:h-[213px]"
          style={{width: imageSize, height: imageSize}}
        />
      </div>
    );
  } else {
    return (
      <div className="min-h-[258.7px] flex items-center justify-center relative col-span-8 row-span-6 col-start-3 row-start-1">
          <Image
            src={planetData.overviewImage}
            width={450}
            height={450}
            alt=""
            priority
            className="w-[154px] h-[154px] mx-auto md:w-[213px] md:h-[213px]"
            style={{width: imageSize, height: imageSize}}
          />
          <Image
            src={planetData.surfaceGeologyImage}
            width={326}
            height={398}
            alt=""
            priority
            className="w-[75px] h-[100px] absolute bottom-0"
          />
      </div>
    );
  }
}
