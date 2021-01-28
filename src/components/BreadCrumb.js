import React from 'react'
import { BreadCrumbContainer } from "../styles/BreadCrumbStyles"

const BreadCrumb = () => {
    return (
        <BreadCrumbContainer>
            <span>
                Division
            </span>
            <img src='/assets/angleright.svg' alt='angle right' />
            <span>
                Module
            </span>
        </BreadCrumbContainer>
    )
}

export default BreadCrumb
