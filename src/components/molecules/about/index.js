import React from 'react'
import {Icon} from '../../atoms';

const About = ({title,date}) => {
    return (
        <div className="card mt-2">
            <div className="card-body">
                <h3 className="card-title">
                    <Icon icon="article"/>
                     {title}
                </h3>
                <h5 className="card-subtitle mb-2"> 
                {/* <Icon icon ="calendar today"/> */}
                Update Terakhir : {date}
                </h5>
            </div>
        </div>
    )
}

export default About
