import React from 'react'
import { makeStyles } from '@material-ui/core'
import PlanetChartHeader from './PlanetChartHeader';


const useStyles = makeStyles((props) => ({
    chartRows: {
        height: '10%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    namesStyle: {
        fontSize: '18px',
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: '400',
        letterSpacing: '1px'
    }
}));
const PlanetChartFooter = ({ planetsToCompare }) => {
    const classes = useStyles();
    return (
        <div id="ChartTitle" className={classes.chartRows} >
            {
                planetsToCompare.map(planetChart => <p className={classes.namesStyle}>{`${planetChart.name}`}</p>)
            }
        </div>
    )
}

export default PlanetChartFooter;