interface PropTypes {
  heading: string;
}

export default function PlanetHeadingComponent({ heading }: PropTypes) {
  return (
    <h1 className="text-[40px] text-white uppercase text-center font-antonio">
      {heading}
    </h1>
  );
}
