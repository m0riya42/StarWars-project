import React from 'react'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((props) => ({
    chartRows: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        height: '10%'
    },
    populationStyle: {
        fontSize: '18px',
        color: '#ed6c19',
        fontFamily: 'Roboto',
        fontWeight: '400',
        letterSpacing: '1px'
    },

}));
const PlanetChartHeader = ({ planetsToCompare }) => {
    const classes = useStyles();
    return (
        <div id="ChartTitle" className={classes.chartRows} >
            {
                planetsToCompare.map(planetChart => <p className={classes.populationStyle}>{`${planetChart.population}`}</p>)
            }
        </div>
    )
}

export default PlanetChartHeader;