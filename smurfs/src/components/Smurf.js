import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Smurf = props => {
    return (
        <div>
            <h2>{props.smurf.name}</h2>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <Link to={`/edit/${props.smurf.id}`}><button>Edit</button></Link>
        </div>
    )    
}

export default Smurf