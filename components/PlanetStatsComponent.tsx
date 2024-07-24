interface PropTypes {
    rotationTime:string;
    revolutionTime:string;
    radius:string;
    averageTemp:string;
}

export default function PlanetStatsComponent({rotationTime,revolutionTime,radius,averageTemp}:PropTypes) {
  return (
      <div className="text-white w-[90%] h-[216px] mx-auto flex flex-col justify-around ">
        <div className=" w-full h-[48px] flex justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
          Rotation Time
          <span className=" font-antonio text-[24px] font-medium">
            {rotationTime}
          </span>
        </div>
        <div className=" w-full h-[48px] flex justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
          Revolution Time
          <span className="font-antonio text-[24px] font-medium">
            {revolutionTime}
          </span>
        </div>
        <div className=" w-full h-[48px] flex justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
          Radius
          <span className=" font-antonio text-[24px] font-medium">
            {radius}KM
          </span>
        </div>
        <div className=" w-full h-[48px] flex justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] border border-1 border-[#979797] border-opacity-35 px-5">
          Average temp
          <span className=" font-antonio text-[24px] font-medium">
            {averageTemp}&#8451;
          </span>
        </div>
      </div>
  );
}
