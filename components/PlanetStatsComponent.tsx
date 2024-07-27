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
  const statItems = [['Rotation time', rotationTime], ['Revolution time', revolutionTime], ['Radius', radius], ['Average temp', averageTemp]]
  const statItem = statItems.map((item, key) => 
    <div key={key} className=" flex justify-between items-center uppercase font-spartan font-bold text-[8px] leading-[16px] tracking-[0.73px] 
      border border-1 border-[#979797] border-opacity-35 px-5
      w-full h-[48px] 
      md:flex-col md:w-[24%] md:h-[88px] md:justify-around md:items-start
      xl:text-[11px] xl:h-[128px] xl:justify-evenly">
        <span style={{ opacity: "50%" }} className="">{item[0]}</span>
        <span className=" font-antonio text-[24px] xl:text-[40px] font-medium">
          {item[1]}
        </span>
      </div>
  )


  return (
    <div className="text-white w-[90%] h-[216px] mx-auto flex flex-col justify-around 
    md:flex-row md:row-start-10 md:col-start-2 md:col-span-10 md:row-span-1 md:h-[88px] md:w-full
    xl:row-span-2 xl:row-start-10
    ">
      {statItem}
    </div>
  );
}
