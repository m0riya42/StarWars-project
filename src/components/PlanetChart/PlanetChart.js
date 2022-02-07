import React from 'react'
import PlanetChartHeader from './PlanetChartHeader';
import PlanetChartFooter from './PlanetChartFooter';
import PLanetChartLegend from './PLanetChartLegend';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles(() => ({
    containerChart: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '80%',
    }
}))
const PlanetChart = ({ planetsToCompare }) => {

    const classes = useStyles();
    return (<div className={classes.containerChart}>
        <PlanetChartHeader planetsToCompare={planetsToCompare} />
        <PLanetChartLegend planetsToCompare={planetsToCompare} />
        <PlanetChartFooter planetsToCompare={planetsToCompare} />
    </div>

    )
}

export default PlanetChart;