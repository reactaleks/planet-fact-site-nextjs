interface PropTypes {
  heading: string;
}

export default function PlanetHeadingComponent({ heading }: PropTypes) {
  return (
    <h1 className="text-[40px] text-white uppercase text-center font-antonio 
    col-span-6 row-start-6 col-start-1 
    md:text-start md:w-full md:mx-auto md:text-[48px] md:col-span-3 md:col-start-2
    xl:col-span-3 xl:row-start-2 xl:col-start-9 xl:w-full xl:text-[80px]
     ">
      {heading}
    </h1>
  );
}
