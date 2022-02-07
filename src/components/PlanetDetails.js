import React, { useEffect, useState } from 'react'
import { getPlanetsInfoByNameArray } from '../apiRequests';
import PlanetChart from './PlanetChart'

const PLANETS_TO_COMPARE = ['Tatooine', 'Alderaan', 'Naboo', 'Bespin', 'Endor'];
const PlanetDetails = (props) => {
    const { style } = props;

    const [planetsToCompare, setPlanetsToCompare] = useState([]);
    // const [MaxPopulation, setMaxPopulation] = useState(0);

    useEffect(() => {
        getPlanetsInfoByNameArray(PLANETS_TO_COMPARE).then(res => {
            // setMaxPopulation(res.MaxPopulation);
            //add percentage
            const planetWithPercetage = res.planetsInfo.map(el => { return { ...el, ...{ percentage: (el.population * 100) / res.MaxPopulation } } })
            setPlanetsToCompare(planetWithPercetage)
        });
    }, [])
    useEffect(() => {
        //TODo: Create New list: 
        console.log(planetsToCompare)
    }, [planetsToCompare])

    return (<div style={style}>
        <PlanetChart planetsToCompare={planetsToCompare} />
    </div>)
}

export default PlanetDetails;