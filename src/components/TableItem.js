import React from 'react'
import { TableItemContainer, StatusColumn, RiskColumn } from '../styles/TableStyles'


const TableItem = ({ name, state, address, statusColor, statusBgColor, status, entry, riskColor, entryType, riskLevel, arrowIcon }) => {
    return (
        <TableItemContainer>
            <div className='lefticon'>
                <img src='/assets/check.svg' alt='checkbox icon' />
                <img src='/assets/checkdown.svg' alt='checkdown icon' />
            </div>
            <div className='name'>{name}</div>
            <div className='location'>
                <p>{state}</p>
                <p>{address}</p>
            </div>
            <StatusColumn color={statusColor} bgColor={statusBgColor}>
                <span>{status}</span>
            </StatusColumn>
            <div className="entries">
                <p>
                    <img src="/assets/smalldotblue.svg" alt="small dot blue icon" />
                    <span>{entry}</span>
                </p>
                <p>{entryType}</p>
            </div>
            <RiskColumn color={riskColor}>
                <img src={`/assets/${arrowIcon}.svg`} alt={`${arrowIcon} icon`} />
                <span>{riskLevel}</span>
            </RiskColumn>
            <img className='threedots' src="/assets/threedots.svg" alt="three dots" />

        </TableItemContainer>
    )
}

export default TableItem
