import React from 'react'
import './Tag.css';

const Tag = ({name}) => {
    return (
        <div className="Tag">
            <span className="badge badge-pill badge-success">{name}</span>
        </div>
    
    )
}

export default Tag;
