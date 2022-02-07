import { TableCell, TableRow, TableHead, makeStyles } from '@material-ui/core';
import React from 'react';



const useStyles = makeStyles(() => ({
    tableHeader: {
        color: '#e6c826',
        fontWeight: 800,
        background: 'black',
        fontSize: '23px',
        padding: '15px',
    },
    SpanTitle: {
        fontFamily: 'Star Jedi',
        color: '#ed6c19',
        letterSpacing: '8px',
    },
    tableTitles: {
        background: ' rgba(0, 0, 0, 1)',
        color: 'orange',
        fontSize: '18px',
    },

}))
const VehicalTableHeader = ({ VehicalName }) => {
    const classes = useStyles();
    return (<>
        <TableHead >
            <TableRow>
                <TableCell align="center" colSpan="3" className={classes.tableHeader}>
                    <p>
                        <span className={classes.SpanTitle}>vehicle name: </span>
                        {`${VehicalName?.toUpperCase()}`}
                    </p></TableCell>
            </TableRow>
            <TableRow>
                <TableCell className={classes.tableTitles} align="center">Pilot</TableCell>
                <TableCell className={classes.tableTitles} align="center">Home Planet Name</TableCell>
                <TableCell className={classes.tableTitles} align="center">Home Planet Population</TableCell>
            </TableRow>
        </TableHead>

    </>
    )
}

export default VehicalTableHeader;