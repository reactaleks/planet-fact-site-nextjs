import Image from "next/image";
export default function PlanetImageComponent({
  planetData,
  pageSection,
}: PlanetInformation) {
  const imageSize = 450 * parseInt(planetData.radius.replace(/,/g, "").slice(0,2)) / 100 + 'px'
  if (pageSection == "overview") {
    return (
      <div className="flex items-center justify-center col-span-8 col-start-3 row-span-6 row-start-1 md:col-span-4 md:col-start-5 md:row-start-1 md:row-span-5 xl:col-span-4 xl:col-start-3 xl:row-start-3">
        <Image
          src={planetData.overviewImage}
          width={450}
          height={450}
          alt=""
          priority
          className={`min-w-[111px] min-h-[111px] mx-auto md:min-w-[184px] md:min-h-[184px] xl:w-[336px] xl:h-[336px]`}
          style={{width: imageSize, height: imageSize}}
        />
      </div>
    );
  } else if (pageSection == "internal") {
    return ( 
      <div className="flex items-center justify-center col-span-8 col-start-3 row-span-6 row-start-1 md:col-span-4 md:col-start-5 md:row-start-1 md:row-span-5 xl:col-span-4 xl:col-start-3 xl:row-start-3">
        <Image
          src={planetData.internalStructureImage}
          width={450}
          height={450}
          alt=""
          priority
          className="min-w-[111px] min-h-[111px] mx-auto md:min-w-[184px] md:min-h-[184px]"
          style={{width: imageSize, height: imageSize}}
        />
      </div>
    );
  } else {
    return (
      <div className="relative flex items-center justify-center col-span-8 col-start-3 row-span-6 row-start-1 md:col-span-4 md:col-start-5 md:row-start-1 md:row-span-5 xl:col-span-4 xl:col-start-3 xl:row-start-3">
          <Image
            src={planetData.overviewImage}
            width={450}
            height={450}
            alt=""
            priority
            className="min-w-[111px] min-h-[111px] mx-auto md:min-w-[184px] md:min-h-[184px]"
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
