import { Table, TableBody, Paper, TableCell, TableRow, TableHead, TableContainer } from '@material-ui/core';
import React, { useState, useEffect } from 'react'


const VehicalTable = ({ VehicMaxPopulation }) => {

    return (<>
        {
            VehicMaxPopulation &&
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan="3">{`${VehicMaxPopulation.name}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Pilot</TableCell>
                            <TableCell align="center">Home Planet Name</TableCell>
                            <TableCell align="center">Home Planet Population</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {VehicMaxPopulation?.pilotsNames?.map((name, index, array) =>
                            <TableRow
                                key={name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{`${VehicMaxPopulation.pilotsNames[index]}`}</TableCell>
                                <TableCell align="center">{`${VehicMaxPopulation.homePlanets[index].name}`}</TableCell>
                                <TableCell align="center">{`${VehicMaxPopulation.homePlanets[index].population}`}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>

                </Table>
            </TableContainer>
        }

    </>
    )
}

export default VehicalTable;