import React from 'react'
import Buttons from './Buttons'

const Introductions = ({username, tech}) => {
    
    return (
    <div>
        <h2>Introduction</h2>
        <p>{username} is a student of {tech}</p>
        <div>
            <Buttons></Buttons>
        </div>
    </div>
    )
}

export default Introductions
