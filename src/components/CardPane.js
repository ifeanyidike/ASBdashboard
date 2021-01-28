import React from 'react'
import { CardPaneContainer } from "../styles/CardPanelStyles"

const CardPane = ({ number, subcaption }) => {
    return (
        <CardPaneContainer>
            <div className="topcontent">
                <h6>{number}</h6>
                <div className="icon">
                    <div className="item">
                        <img src='/assets/Ellipse.svg' alt='ellipse icon' />
                        <img src='/assets/Vector.svg' alt='ellipse icon' />
                    </div>
                </div>
            </div>
            <span>{subcaption}</span>
        </CardPaneContainer>
    )
}

export default CardPane
