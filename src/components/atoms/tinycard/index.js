import React from 'react'
import Code from '../codeblock';

const TinyCard = ({title, lastUpdate, desc, code}) => {
    return (

            <div className="card border-primary mt-3 mb-2">
                <div className="card-body">
                    <h5 className="card-title"><i className="material-icons">face</i>{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{lastUpdate}</h6>
                    <p className="card-text">{desc}</p>
                    <Code code={code} />
                </div>
        </div>
    )
}

export default TinyCard
