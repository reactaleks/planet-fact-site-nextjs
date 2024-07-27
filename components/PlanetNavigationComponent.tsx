
interface PropTypes {
  pageSection: string;
  setPageSection: React.Dispatch<React.SetStateAction<string>>;
  planet: string;
}



export default function PlanetNavigationComponent({
  pageSection,
  setPageSection,
  planet,
}: PropTypes) {

  const colors = {
    'earth': [`border-planetColors-earth`,`md:bg-planetColors-earth`],
    'mars': [`border-planetColors-mars`,`md:bg-planetColors-mars`],
    'jupiter': [`border-planetColors-jupiter`,`md:bg-planetColors-jupiter`],
    'saturn': [`border-planetColors-saturn`,`md:bg-planetColors-saturn`],
    'uranus': [`border-planetColors-uranus`,`md:bg-planetColors-uranus`],
    'neptune': [`border-planetColors-neptune`,`md:bg-planetColors-neptune`],
    'venus': [`border-planetColors-venus`,`md:bg-planetColors-venus`],
    'mercury': [`border-planetColors-mercury`,`md:bg-planetColors-mercury`],

  } as PlanetColors

  const planetNavItems = ['overview', 'internal', 'geology']

  const planetNav = planetNavItems.map((item, key) => 
      <div
      key={key}
      className={`planetNavItem font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center  
        border border-b-4 border-t-0 border-x-0 md:border-b-0 md:border-1
        md:w-[281px] md:h-[40px] md:border-1 md:border-[#979797] md:text-[9px] ${pageSection == item && colors.hasOwnProperty(planet) ?  `${colors[planet][0]} ${colors[planet][1]}` : 'border-transparent '} md:hover:bg-white md:hover:bg-opacity-50
        xl:w-full xl:text-[18px]  xl:h-[48px] xl:px-5 cursor-pointer`}
      onClick={() => {
        setPageSection(item);
      }}
    >
      <span className="hidden md:block xl:opacity-50 xl:mr-5">0{key + 1}&nbsp;</span> {item}
    </div>

  )


  return (
    <div className="flex md:flex-col justify-around items-center h-[50px]  border border-x-0 border-y-1 border-[#979797] border-opacity-35 z-19 
    col-span-5 row-span-6 row-start-7 col-start-7 
    md:border-none md:row-span-2 md:col-span-5 md:col-start-7 md:h-[152px]
    xl:col-start-9  xl:col-span-3 xl:w-full xl:text-[18px] xl:row-start-7">
      {planetNav}
    </div>
  );
}
