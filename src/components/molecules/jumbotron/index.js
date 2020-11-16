import React from 'react'
import {Tombol} from '../../atoms';

const Jumbotron = ({title, lead, desc}) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{lead}.</p>
            <hr className="my-4" />
            <p>{desc}</p>
            {/* <Tombol name={buttonName} /> */}
        </div>
        
    )
}

export default Jumbotron
