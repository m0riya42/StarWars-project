import React from 'react'
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles((props) => ({
    chartRows: {
        height: '80%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    populationStyle: {
        fontSize: '15px',
    },
    namesStyle: {
        fontSize: '15px',
        color: 'white'
    }
}));
const PlanetChart = ({ planetsToCompare }) => {
    const classes = useStyles();
    return (<>
        <div id="ChartTitle" className={classes.chartRows} style={{ height: '10%' }}>
            {
                planetsToCompare.map(planetChart => <p className={classes.populationStyle}>{`${planetChart.population}%`}</p>)
            }
        </div>
        <div id="chartBar" className={classes.chartRows}>
            {
                planetsToCompare.map(planetChart =>
                    <div style={{ background: '#e6c826b0', width: '5%', height: `${planetChart.percentage}%` }}>
                    </div>
                )
            }
        </div>
        <div id="ChartTitle" className={classes.chartRows} style={{ height: '10%' }}>
            {
                planetsToCompare.map(planetChart => <p className={classes.namesStyle}>{`${planetChart.name}%`}</p>)
            }
        </div>
    </>
    )
}

export default PlanetChart;