import React from 'react'
import {Greeting, Tombol} from '../../atoms'

const Card = ({name, desc}) => {
    return (
        <div>
            <div class="card mb-3 mt-2">
                <div class="card-body">
                    <Greeting />
                    <h2>{name}</h2>
                    <p class="card-text">{desc}</p>
                    <Tombol buttonName = "Lab"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;
