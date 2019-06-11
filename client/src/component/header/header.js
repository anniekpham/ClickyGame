import React from 'react'

const Header = ({score, topscore, header}) => {
    return (
        <div className="nav">
            <h1>Experiment Game</h1>
            <h3>{header}</h3>
            <span className="score">Score: {score}</span>
            <span className="score">Topscore: {topscore}</span>
        </div>
    )
}

export default Header