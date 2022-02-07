import React, { useEffect, useState } from 'react'
import { getPlanetsInfoByNameArray } from '../apiRequests';
import PlanetChart from './PlanetChart/PlanetChart'

const PLANETS_TO_COMPARE = ['Tatooine', 'Alderaan', 'Naboo', 'Bespin', 'Endor'];

const PlanetDetails = (props) => {
    const { style } = props;
    const [planetsToCompare, setPlanetsToCompare] = useState([]);

    const newStyle = { ...style, ...{ background: 'black', borderRadius: '15px' } }
    /********************************* */
    /*        Use Effects              */
    /********************************* */
    useEffect(() => {
        getPlanetsInfoByNameArray(PLANETS_TO_COMPARE).then(res => {
            //Add percentage
            const planetWithPercetage = res.planetsInfo.map(el => { return { ...el, ...{ percentage: (el.population * 100) / res.MaxPopulation } } })
            setPlanetsToCompare(planetWithPercetage)
        });
    }, [])
    useEffect(() => {
        // console.log(planetsToCompare)
    }, [planetsToCompare])


    /********************************* */
    /*             Return              */
    /********************************* */
    return (<div style={newStyle}>
        <span style={{ fontFamily: 'Star Jedi', color: '#ed6c19', letterSpacing: '8px', textAlign: 'left' }}>
            PLanets Compare:
        </span>
        <PlanetChart planetsToCompare={planetsToCompare} />
    </div>)
}

export default PlanetDetails;