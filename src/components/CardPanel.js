import React from 'react'
import CardPane from "./CardPane"
import { CardPanelContainer } from "../styles/CardPanelStyles"

const CardPanel = () => {
    return (
        <CardPanelContainer>
            <CardPane number="31454" subcaption='Ongoing metric' />
            <CardPane number="2344" subcaption='Past metric' />
            <CardPane number="14224" subcaption='Missed metric' />
            <CardPane number="635" subcaption='Failed metric' />
            <CardPane number="11334" subcaption='Pending metric' />
        </CardPanelContainer>
    )
}

export default CardPanel
