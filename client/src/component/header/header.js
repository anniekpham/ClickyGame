import React from 'react'

const Header = ({score, topscore}) => {
    return (
        <div>
            <span>Score: {score} </span>
            <span>Topscore: {topscore}</span>
        </div>
    )
}

export default Header