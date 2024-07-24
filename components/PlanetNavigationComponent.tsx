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
    <div className="flex justify-around items-center h-[50px] border border-x-0 border-y-1 border-[#979797] border-opacity-35 z-19">
      <div
        style={{borderColor: `${color}`}}
        className={`font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center ${
          pageSection == "overview"
            ? `border border-x-0 border-t-0 border-b-4 ` 
            : "border-none"
        } `}
        onClick={() => {
          setPageSection("overview");
        }}
      >
        <span className="hidden">01</span> Overview
      </div>
      <div
        style={{borderColor: `${color}`}}
        className={`font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center ${
          pageSection == "internal"
            ? `border border-x-0 border-t-0 border-b-4`
            : "border-none"
        }`}
        onClick={() => {
          setPageSection("internal");
        }}
      >
        <span className="hidden">02 Internal</span> structure
      </div>
      <div
        style={{borderColor: `${color}`}}
        className={`font-spartan text-[9px] text-white tracking-[1.93px] uppercase  h-full flex items-center ${
          pageSection == "geology"
            ? `border border-x-0 border-t-0 border-b-4 `
            : "border-none"
        }`}
        onClick={() => {
          setPageSection("geology");
        }}
      >
        <span className="hidden">03</span> Surface{" "}
        <span className="hidden">Geology</span>{" "}
      </div>
    </div>
  );
}
