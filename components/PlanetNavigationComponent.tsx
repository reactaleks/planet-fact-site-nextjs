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
  return (
    <div className="flex md:flex-col justify-around items-center h-[50px]  border border-x-0 border-y-1 border-[#979797] border-opacity-35 z-19 
    col-span-5 row-span-6 row-start-7 col-start-7 
    md:border-none md:row-span-2 md:col-span-5 md:col-start-7 md:h-[152px]
    xl:col-start-9  xl:col-span-3 xl:w-full xl:text-[18px] xl:row-start-7">
      <div
        className={`planetNavItem font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center  
          md:w-[281px] md:h-[40px] md:border-1 md:border-[#979797] md:text-[9px] md:hover:bg-white md:hover:bg-opacity-25
          xl:w-full xl:text-[18px]  xl:h-[48px] xl:px-5 cursor-pointer  `  }
        onClick={() => {
          setPageSection("overview");
        }}
      >
        <span className="hidden md:block xl:opacity-50 xl:mr-5">01&nbsp;</span> Overview
      </div>
      <div
        className={`planetNavItem font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center  
          md:w-[281px] md:h-[40px] md:text-[9px] md:hover:bg-white md:hover:bg-opacity-25
          xl:w-full xl:text-[18px]  xl:h-[48px] xl:px-5  cursor-pointer `}

        onClick={() => {
          setPageSection("internal");
        }}
      >
        <span className="hidden md:block"><span className="xl:opacity-50 xl:mr-5">02</span> Internal&nbsp;</span> structure
      </div>
      <div
        className={`planetNavItem font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center  
          md:w-[281px] md:h-[40px] md:text-[9px] md:hover:bg-white md:hover:bg-opacity-25
          xl:w-full xl:text-[18px]  xl:h-[48px] xl:px-5 cursor-pointer `
        }

        onClick={() => {
          setPageSection("geology");
        }}
      >
        <span className="hidden md:block xl:opacity-50 xl:mr-5">03&nbsp;	</span> Surface
        <span className="hidden md:block">&nbsp;Geology</span>
      </div>
    </div>
  );
}
