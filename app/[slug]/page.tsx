import { notFound } from "next/navigation";
import dataSet from "../../public/planetData/planetData.json";
import PlanetComponent from "@/components/PlanetComponent";



export default function Page({ params }: { params: { slug: string } }) {
  const planet = params.slug as keyof typeof dataSet;
  const currentPlanetData = dataSet[planet];


  if (Object.keys(dataSet).includes(planet)) {
    return (
        <PlanetComponent planetData={currentPlanetData}/>
    );
  } else {
    notFound();
  }
}
