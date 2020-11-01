import React from 'react'
import {Tombol} from '../../atoms';
const MiniCard = ({title, desc}) => {
    return (
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{desc}</p>
                        <Tombol buttonName="Go to Lab" />
                    </div>
                </div>  
    )
}

export default MiniCard
