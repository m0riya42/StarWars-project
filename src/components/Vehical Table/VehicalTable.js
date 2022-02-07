import { Table, Paper, TableContainer } from '@material-ui/core';
import React from 'react'
import VehicalTableBody from './VehicalTableBody';
import VehicalTableHeader from './VehicalTableHeader';




const VehicalTable = ({ VehicMaxPopulation }) => {
    return (<>
        {
            VehicMaxPopulation &&
            <TableContainer component={Paper} style={{ borderRadius: '15px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <VehicalTableHeader VehicalName={VehicMaxPopulation.name} />
                    <VehicalTableBody VehicMaxPopulation={VehicMaxPopulation} />
                </Table>
            </TableContainer>
        }

    </>
    )
}

export default VehicalTable;