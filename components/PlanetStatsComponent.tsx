interface PropTypes {
  rotationTime: string;
  revolutionTime: string;
  radius: string;
  averageTemp: string;
}

export default function PlanetStatsComponent({
  rotationTime,
  revolutionTime,
  radius,
  averageTemp,
}: PropTypes) {
  return (
    <div className="text-white w-[90%] md:w-[100%] h-[216px] mx-auto flex flex-col justify-around md:flex-row md:row-start-10 md:col-start-2 md:col-span-10">
      <div className=" w-full h-[48px] md:w-[168px] md:h-[88px] md:justify-around  flex md:flex-col justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
        <span style={{ opacity: "50%" }} className="">Rotation Time</span>
        <span className=" font-antonio text-[24px] font-medium">
          {rotationTime}
        </span>
      </div>
      <div className=" w-full h-[48px] md:w-[168px] md:h-[88px] md:justify-around  flex md:flex-col justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
        <span style={{ opacity: "50%" }}>Revolution Time</span>
        <span className="font-antonio text-[24px] font-medium">
          {revolutionTime}
        </span>
      </div>
      <div className=" w-full h-[48px] md:w-[168px] md:h-[88px] md:justify-around flex md:flex-col justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
        <span style={{ opacity: "50%" }}>Radius</span>

        <span className=" font-antonio text-[24px] font-medium">
          {radius}KM
        </span>
      </div>
      <div className=" w-full h-[48px] md:w-[168px] md:h-[88px] md:justify-around  flex md:flex-col justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
        <span style={{ opacity: "50%" }}> Average temp</span>

        <span className=" font-antonio text-[24px] font-medium">
          {averageTemp}&#8451;
        </span>
      </div>
    </div>
  );
}
