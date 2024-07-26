import { notFound } from "next/navigation";
import dataSet from "../../public/planetData/planetData.json";
import PlanetComponent from "@/components/PlanetComponent";

export default function Page({ params }: { params: { slug: string } }) {
  const planet = params.slug as keyof typeof dataSet;
  const currentPlanetData = dataSet[planet];


  if (Object.keys(dataSet).includes(planet)) {
    return (
        <main className="xl:w-[90%] xl:mx-auto">
            <PlanetComponent planetData={currentPlanetData}/>

        </main>
    );
  } else {
    notFound();
  }
}
