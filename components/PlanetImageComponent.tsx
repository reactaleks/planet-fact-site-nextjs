import Image from "next/image";
export default function PlanetImageComponent({
  planetData,
  pageSection,
}: PlanetInformation) {
  const imageSize = parseInt(planetData.radius.replace(/,/g, "").slice(0,2)) / 1 + '%'
  console.log(imageSize)
  if (pageSection == "overview") {
    return (
      <>
        <Image
          src={planetData.overviewImage}
          width={450}
          height={450}
          alt=""
          priority
          className={`w-[154px] h-[w-154px] mx-auto`}
          style={{width: imageSize, height: imageSize}}
        />
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
          className="w-[154px] h-[154px] mx-auto"
          style={{width: imageSize, height: imageSize}}
        />
      </>
    );
  } else {
    return (
      <>
        <div className="relative">
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
            className="w-[75px] h-[100px] left-0 right-0 mx-auto bottom-0 absolute"
          />
        </div>
      </>
    );
  }
}
