interface PlanetData {
    planetData: {
        planetName: string;
        overviewContent: string;
        internalStructureContent: string;
        surfaceGeology: string;
        overviewImage: string;
        internalStructureImage: string;
        surfaceGeologyImage: string;
        rotationTime: string;
        revolutionTime: string;
        radius: string;
        averageTemp: string;
        wikiLink: string;
        [key:string]:string;
    }
}

interface PlanetInformation extends PlanetData {
    pageSection: string;
}

