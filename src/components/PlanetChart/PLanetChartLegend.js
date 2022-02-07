import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((props) => ({
    chartRows: {
        height: '70%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    legendStyle: {
        background: 'orange',
        width: '5%',
        borderRadius: '10px',
    }
}));
const PLanetChartLegend = ({ planetsToCompare }) => {
    const classes = useStyles();
    return (
        <div id="chartBar" className={classes.chartRows}>
            {
                planetsToCompare.map(planetChart =>
                    <div className={classes.legendStyle} style={{ height: `${planetChart.percentage}%` }}  >
                    </div>
                )
            }
        </div>
    )
}

export default PLanetChartLegend;