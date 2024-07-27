
interface PropTypes {
  pageSection: string;
  setPageSection: React.Dispatch<React.SetStateAction<string>>;
  planet: string;
}

interface PlanetColors {
  [key: string]: string;
  earth: string;
  mars: string;
  jupiter: string;
  saturn: string;
  uranus: string;
  neptune: string;
  venus: string;
  mercury: string;
}

export default function PlanetNavigationComponent({
  pageSection,
  setPageSection,
  planet,
}: PropTypes) {

  const colors = {
    'earth': `md:hover:bg-planetColors-earth`,
    'mars': 'md:hover:bg-planetColors-mars',
    'jupiter': 'md:hover:bg-planetColors-jupiter',
    'saturn': 'md:hover:bg-planetColors-saturn',
    'uranus': 'md:hover:bg-planetColors-uranus',
    'neptune': 'md:hover:bg-planetColors-neptune',
    'venus': 'md:hover:bg-planetColors-venus',
    'mercury': 'md:hover:bg-planetColors-mercury',
  } as PlanetColors

  const planetNavItems = ['overview', 'internal', 'geology']

  const planetNav = planetNavItems.map((item, key) => 
      <div
      key={key}
      className={`planetNavItem font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center  
        md:w-[281px] md:h-[40px] md:border-1 md:border-[#979797] md:text-[9px] ${colors.hasOwnProperty(planet) ? colors[planet] : ''} md:hover:bg-opacity-100
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
