import React from 'react'

const Overview = ({title, lastUpdate, desc}) => {
    return (
        <div className="card border-primary mt-3 mb-2">
        <div className="card-body">
            <h5 className="card-title"><i className="material-icons">face</i>{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{lastUpdate}</h6>
            <p className="card-text">{desc}</p>
         
        </div>
</div>
    )
}

export default Overview;
