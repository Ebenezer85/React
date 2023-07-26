import React from 'react'

const Buttons = ({children, bgcolor='blue', color='white', clickHandler}) => {
    const btnStyle = {
        backgroundColor : bgcolor,
        color : color,
        padding : '10px 20px',
        border: 'none',
        borderRadius : '5px',
        cursor: 'pointer',
        margin : '5px'

    }
    return (
        <button style={btnStyle} onClick={clickHandler}>{children}</button>
    
    )
}

export default Buttons
