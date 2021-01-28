import React from 'react'
import { TableHeadContainer } from '../styles/TableStyles'

const TableHead = () => {
    return (
        <TableHeadContainer>
            <img src='/assets/check.svg' alt='checkbox icon' />

            <p>name</p>
            <p>location</p>
            <p>status</p>
            <p>entries</p>
            <p>risk people</p>

        </TableHeadContainer>
    )
}

export default TableHead
