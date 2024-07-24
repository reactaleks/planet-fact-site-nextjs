import Image from "next/image";
export default function PlanetImageComponent({
  planetData,
  pageSection,
}: PlanetInformation) {
  const imageSize = parseInt(planetData.radius.replace(/,/g, "").slice(0,2)) / 1 + '%'
  if (pageSection == "overview") {
    return (
      <div className="min-h-[258.7px] flex items-center justify-center">
        <Image
          src={planetData.overviewImage}
          width={450}
          height={450}
          alt=""
          priority
          className={`w-[154px] h-[154px] mx-auto`}
          style={{width: imageSize, height: imageSize}}
        />
      </div>
    );
  } else if (pageSection == "internal") {
    return ( 
      <div className="min-h-[258.7px] flex items-center justify-center">
        <Image
          src={planetData.internalStructureImage}
          width={450}
          height={450}
          alt=""
          priority
          className="w-[154px] h-[154px] mx-auto"
          style={{width: imageSize, height: imageSize}}
        />
      </div>
    );
  } else {
    return (
      <div className="min-h-[258.7px] flex items-center justify-center relative">
          <Image
            src={planetData.overviewImage}
            width={450}
            height={450}
            alt=""
            priority
            className="w-[154px] h-[154px] mx-auto"
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
