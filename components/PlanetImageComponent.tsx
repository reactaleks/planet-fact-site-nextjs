import Image from "next/image";
import { motion } from "framer-motion";

export default function PlanetImageComponent({
  planetData,
  pageSection,
}: PlanetInformation) {
  const imageSize =
    (450 * parseInt(planetData.radius.replace(/,/g, "").slice(0, 2))) / 100 +
    "px";
  if (pageSection == "overview") {
    return (
      <motion.div
        animate={["initial"]}
        variants={{
          initial: {
            y: [-1, 10],
            x: [-10, 1],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
        }}
        className="flex items-center justify-center col-span-8 col-start-3 row-span-6 row-start-1 md:col-span-6 md:col-start-4 md:row-start-1 md:row-span-6 xl:col-span-4 xl:col-start-3 xl:row-start-3"
      >
        <Image
          src={planetData.overviewImage}
          width={450}
          height={450}
          alt=""
          priority
          className={`min-w-[111px] min-h-[111px] mx-auto md:min-w-[184px] md:min-h-[184px] xl:min-h-[500px] xl:min-w-[500px]`}
          style={{ width: imageSize, height: imageSize }}
        />
      </motion.div>
    );
  } else if (pageSection == "internal") {
    return (
      <motion.div
        animate={["initial"]}
        variants={{
          initial: {
            y: [-1, 10],
            x: [-10, 1],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
        }}
        className="flex items-center justify-center col-span-8 col-start-3 row-span-6 row-start-1 md:col-span-6 md:col-start-4 md:row-start-1 md:row-span-6 xl:col-span-4 xl:col-start-3 xl:row-start-3"
      >
        <Image
          src={planetData.internalStructureImage}
          width={450}
          height={450}
          alt=""
          priority
          className="min-w-[111px] min-h-[111px] mx-auto md:min-w-[184px] md:min-h-[184px] xl:min-h-[500px] xl:min-w-[500px]"
          style={{ width: imageSize, height: imageSize }}
        />
        
      </motion.div>
    );
  } else {
    return (
      <motion.div
        animate={["initial"]}
        variants={{
          initial: {
            y: [-1, 10],
            x: [-10, 1],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            },
          },
        }}
        className="relative flex items-center justify-center col-span-8 col-start-3 row-span-6 row-start-1 md:col-span-6 md:col-start-4 md:row-start-1 md:row-span-6 xl:col-span-4 xl:col-start-3 xl:row-start-3"
      >
        <Image
          src={planetData.overviewImage}
          width={450}
          height={450}
          alt=""
          priority
          className="min-w-[111px] min-h-[111px] mx-auto md:min-w-[184px] md:min-h-[184px] xl:min-h-[500px] xl:min-w-[500px]"
          style={{ width: imageSize, height: imageSize }}
        />
        <Image
          src={planetData.surfaceGeologyImage}
          width={326}
          height={398}
          alt=""
          priority
          className="w-[25%] absolute -bottom-4 md:w-[40%] md:bottom-24 xl:-bottom-8"
        />
      </motion.div>
    );
  }
}
