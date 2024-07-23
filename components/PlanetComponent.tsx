'use client'
import Image from "next/image"
import { useState, useEffect } from "react";


interface PropType {
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
    }
}

export default function PlanetComponent({planetData}:PropType) {
    const [pageSection, setPageSection] = useState('')
    useEffect(() => {setPageSection('overview')} , [])

    return (
        <>
            <div  onClick={() => {setPageSection('overview')}}>01 Overview</div>
            <div  onClick={() => {setPageSection('interanl')}}>02 Internal structure</div>
            <div  onClick={() => {setPageSection('geology')}}>03 Surface Geology</div>

            <Image src={planetData.overviewImage} width={450} height={450} alt="" priority/>
        </>
    )
}

