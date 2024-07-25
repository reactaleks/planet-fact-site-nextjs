interface PropTypes {
  heading: string;
}

export default function PlanetHeadingComponent({ heading }: PropTypes) {
  return (
    <h1 className="text-[40px] text-white uppercase text-center font-antonio col-span-6 row-start-6 col-start-1 md:text-start md:w-[75%] md:mx-auto">
      {heading}
    </h1>
  );
}
