'use client'
import { useState, useEffect } from "react";
import PlanetInformationComponent from "./PlanetInformationComponent";

export default function PlanetComponent({planetData}:PlanetData) {
    const [pageSection, setPageSection] = useState('')
    useEffect(() => {setPageSection('overview')} , [])

    return (
        <>
            <div  onClick={() => {setPageSection('overview')}}>01 Overview</div>
            <div  onClick={() => {setPageSection('internal')}}>02 Internal structure</div>
            <div  onClick={() => {setPageSection('geology')}}>03 Surface Geology</div>

            <PlanetInformationComponent pageSection={pageSection} planetData={planetData}/>
        </>
    )
}

