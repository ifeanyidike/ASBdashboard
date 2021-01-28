import React from 'react'
import { TableContainer } from '../styles/TableStyles'
import TableHead from './TableHead'
import TableItem from './TableItem'
import { colors } from "../styles/definitions"

const Table = () => {
    return (
        <TableContainer>
            <TableHead />
            <TableItem
                name='Courtney Henry'
                state='Lagos state'
                address='775 Rolling Green Rd.'
                statusColor={colors.indigo}
                statusBgColor={colors.indigoBg}
                status='No issues'
                entry='19 Unique Entries'
                entryType='Homogenous'
                riskColor={colors.midGreen}
                riskLevel='Low Risk'
                arrowIcon='arrowrightdown'
            />
            <TableItem
                name='Darrell Steward'
                state='Lagos state'
                address='7529 E. Pecan St.'
                statusColor={colors.tickYellow}
                statusBgColor={colors.lightYellow}
                status='2 issues found'
                entry='10 Unique Entries'
                entryType='Heterogenous'
                riskColor={colors.midBlue}
                riskLevel='Mid Risk'
                arrowIcon='arrowright'
            />
            <TableItem
                name='Cody Fisher'
                state='Lagos state'
                address='3605 Parker Rd.'
                statusColor={colors.indigo}
                statusBgColor={colors.indigoBg}
                status='No issues'
                entry='8 Unique Entries'
                entryType='Homogenous'
                riskColor={colors.midBlue}
                riskLevel='Mid Risk'
                arrowIcon='arrowright'
            />
            <TableItem
                name='Bessie Cooper'
                state='Lagos state'
                address='775 Rolling Green Rd.'
                statusColor={colors.tickYellow}
                statusBgColor={colors.lightYellow}
                status='1 issue found'
                entry='12 Unique Entries'
                entryType='Heterogenous'
                riskColor={colors.midRed}
                riskLevel='High Risk'
                arrowIcon='arrowup'
            />
            <TableItem
                name='Annette Black'
                state='Lagos state'
                address='8080 Railroad St.'
                statusColor={colors.indigo}
                statusBgColor={colors.indigoBg}
                status='No Issues'
                entry='13 Unique Entries'
                entryType='Heterogenous'
                riskColor={colors.midGreen}
                riskLevel='Low Risk'
                arrowIcon='arrowrightdown'
            />
            <TableItem
                name='Jenny Wilson'
                state='Lagos state'
                address='8080 Railroad St.'
                statusColor={colors.tickYellow}
                statusBgColor={colors.lightYellow}
                status='5 issues found'
                entry='18 Unique Entries'
                entryType='Homogenous'
                riskColor={colors.midRed}
                riskLevel='High Risk'
                arrowIcon='arrowup'
            />
            <TableItem
                name='Darlene Robertson'
                state='Lagos state'
                address='8558 Green Rd.'
                statusColor={colors.tickYellow}
                statusBgColor={colors.lightYellow}
                status='2 issues found'
                entry='6 Unique Entries'
                entryType='Homogenous'
                riskColor={colors.midBlue}
                riskLevel='Mid Risk'
                arrowIcon='arrowright'
            />
            <TableItem
                name='Ralph Edwards'
                state='Lagos state'
                address='8558 Green Rd.'
                statusColor={colors.indigo}
                statusBgColor={colors.indigoBg}
                status='No issues'
                entry='14 Unique Entries'
                entryType='Homogenous'
                riskColor={colors.midGreen}
                riskLevel='Low Risk'
                arrowIcon='arrowrightdown'
            />
        </TableContainer>
    )
}

export default Table
