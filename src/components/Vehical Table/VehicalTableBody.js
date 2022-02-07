import { TableBody, TableCell, TableRow, makeStyles } from '@material-ui/core';
import React from 'react'


const useStyles = makeStyles(() => ({
    tableCells: {
        background: ' rgba(0, 0, 0, 1)',
        color: 'white',
        fontSize: '18px',
    }
}))


const VehicalTableBody = ({ VehicMaxPopulation }) => {
    const classes = useStyles();
    return (

        <TableBody>
            {VehicMaxPopulation?.pilotsNames?.map((name, index) =>
                <TableRow
                    key={name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell className={classes.tableCells} align="center">{`${VehicMaxPopulation.pilotsNames[index]}`}</TableCell>
                    <TableCell className={classes.tableCells} align="center">{`${VehicMaxPopulation.homePlanets[index].name}`}</TableCell>
                    <TableCell className={classes.tableCells} align="center">{`${VehicMaxPopulation.homePlanets[index].population}`}</TableCell>
                </TableRow>
            )}
        </TableBody>
    )
}

export default VehicalTableBody;