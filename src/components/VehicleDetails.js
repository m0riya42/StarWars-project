import React, { useState, useEffect } from 'react'
import { getPilotsInfo } from '../apiRequests'
import VehicalTable from './Vehical Table/VehicalTable';


const isEmptyObject = (obj) => Object.keys(obj).length === 0;
const VehicleDetails = ({ vehicles }) => {

    const [calcVehicInfo, setCalcVehicInfo] = useState([]);
    const [VehicMaxPopulation, setVehicMaxPopulation] = useState({});

    const calculateSumPopulation = (homePlanets) => {
        let sum = 0;
        homePlanets.forEach(plant => plant.population !== "unknown" ? sum = sum + parseInt(plant.population) : null)
        return sum;
    }

    const initCalculatedVehicles = async () => {
        const vecAcc = [];

        for (let vehicle of vehicles) {
            let name = vehicle.name, pilotsInfo, sum = 0;
            if (vehicle.pilots.length) {
                pilotsInfo = await getPilotsInfo(vehicle.pilots);
                sum = calculateSumPopulation(pilotsInfo.homePlanets);
            }
            else {
                pilotsInfo = { pilotsNames: [], homePlanets: [] };
            }
            vecAcc.push({ ...{ name, sumPopulation: sum }, ...pilotsInfo })
        }

        setCalcVehicInfo(vecAcc);
    }
    /********************************* */
    /*        Use Effects              */
    /********************************* */

    useEffect(() => {
        initCalculatedVehicles();
    }, [vehicles])

    useEffect(() => {
        const getMaxPopulationObj = (obj1, obj2) => obj1.sumPopulation > obj2.sumPopulation ? obj1 : obj2;
        setVehicMaxPopulation(calcVehicInfo?.reduce((acc, curr) => isEmptyObject(acc) ? curr : getMaxPopulationObj(curr, acc), {}))

    }, [calcVehicInfo])

    useEffect(() => {
        console.log(VehicMaxPopulation);
    }, [VehicMaxPopulation])

    /********************************* */
    /*             Return              */
    /********************************* */
    return (<VehicalTable VehicMaxPopulation={VehicMaxPopulation} />);
}


export default VehicleDetails;