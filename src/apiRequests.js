export const getApiRequest = ({ url, handleFunction }) => {
    return fetch(url)
        .then(response => response.json()).then((res => handleFunction ? handleFunction(res) : res))
}



export const getHomeLandInfo = (url) => {
    return getApiRequest({ url }).then((pilotHomeLand) => {
        return { name: pilotHomeLand.name, population: pilotHomeLand.population }
    });
}

export const getPilotInfo = async (pilotInfo) => {
    const pilotHomeLand = await getHomeLandInfo(pilotInfo.homeworld);
    return {
        pilotName: pilotInfo.name, pilotHomeLand

    }
}

export const getPilotInformation = (pilotUrl) => getApiRequest({
    url: pilotUrl, handleFunction: getPilotInfo
});


export const getPilotsInfo = async (pilots) => {
    const pilotsAcc = { pilotsNames: [], homePlanets: [] };
    for (let pilot of pilots) {
        await getPilotInformation(pilot).then(res => {
            pilotsAcc.pilotsNames.push(res.pilotName);
            pilotsAcc.homePlanets.push(res.pilotHomeLand);
        });
    }
    return pilotsAcc

}

export const getPlanetsInfoByName = (name) => {
    console.log(`https://swapi.py4e.com/api/planets?search=${name}`);
    return getApiRequest({ url: `https://swapi.py4e.com/api/planets?search=${name}` }).then(planet => planet.results[0])
}


export const getPlanetsInfoByNameArray = async (nameArray) => {
    const planetsInfo = [];
    let MaxPopulation = 0;
    const setMaxPopulation = (num) => MaxPopulation = Math.max(num, MaxPopulation);
    for (let name of nameArray) {
        await getPlanetsInfoByName(name).then((planet) => {
            planetsInfo.push({ name: planet.name, population: planet.population })
            setMaxPopulation(parseInt(planet.population))
        })
    }
    return { ...{ planetsInfo }, ...{ MaxPopulation } };
}
