'use client'
import { useState, useEffect } from "react";
import PlanetInformationComponent from "./PlanetInformationComponent";

export default function PlanetComponent({planetData}:PlanetData) {
    const [pageSection, setPageSection] = useState('')
    useEffect(() => {setPageSection('overview')} , [])

    return (
        <div className="max-h-screen absolute top-0">
            <div  onClick={() => {setPageSection('overview')}}>01 Overview</div>
            <div  onClick={() => {setPageSection('internal')}}>02 Internal structure</div>
            <div  onClick={() => {setPageSection('geology')}}>03 Surface Geology</div>

            <PlanetInformationComponent pageSection={pageSection} planetData={planetData}/>
            <div>Source: <a href={planetData.wikiLink} target="_blank">Wikipedia</a></div>
            <div>Rotation Time: {planetData.rotationTime} </div>
            <div>Revolution Time: {planetData.revolutionTime}</div>
            <div>Radius: {planetData.radius} KM</div>
            <div>Average tem: {planetData.averageTemp} &#8451;</div>
        </div>
    )
}

