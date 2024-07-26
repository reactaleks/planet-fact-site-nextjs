interface PropTypes {
  pageSection: string;
  setPageSection: React.Dispatch<React.SetStateAction<string>>;
  color: string;
}
export default function PlanetNavigationComponent({
  pageSection,
  setPageSection,
  color,
}: PropTypes) {
  return (
    <div className="flex md:flex-col justify-around items-center h-[50px]  border border-x-0 border-y-1 border-[#979797] border-opacity-35 z-19 
    col-span-5 row-span-6 row-start-7 col-start-7 
    md:border-none md:row-span-2 md:col-span-5 md:col-start-7 md:h-[152px]
    xl:col-start-8  xl:col-span-4 xl:w-full xl:text-[18px] xl:row-start-7">
      <div
        style={{borderColor: pageSection == 'overview' ? `${color}` : `rgba(0, 0, 0, 0)`}}
        className={`font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center border border-x-0 border-t-0 border-b-4 
          md:w-[281px] md:h-[40px] md:border-1 md:border-[#979797] md:text-[9px] 
          xl:w-full xl:text-[18px]`}
        onClick={() => {
          setPageSection("overview");
        }}
      >
        <span className="hidden md:block">01&nbsp;</span> Overview
      </div>
      <div
        style={{borderColor: pageSection == 'internal' ? `${color}` : `rgba(0, 0, 0, 0)`}}
        className={`font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center border border-x-0 border-t-0 border-b-4 
          md:w-[281px] md:h-[40px] md:text-[9px] 
          xl:w-full xl:text-[18px]`}

        onClick={() => {
          setPageSection("internal");
        }}
      >
        <span className="hidden md:block">02 Internal&nbsp;</span> structure
      </div>
      <div
        style={{borderColor: pageSection == 'geology' ? `${color}` : `rgba(0, 0, 0, 0)`}}
        className={`font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center border border-x-0 border-t-0 border-b-4 
          md:w-[281px] md:h-[40px] md:text-[9px] 
          xl:w-full xl:text-[18px]`}

        onClick={() => {
          setPageSection("geology");
        }}
      >
        <span className="hidden md:block">03&nbsp;	</span> Surface
        <span className="hidden md:block">&nbsp;Geology</span>
      </div>
    </div>
  );
}
