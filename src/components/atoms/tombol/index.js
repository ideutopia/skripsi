import React from 'react'

const Tombol = ({buttonName, ...rest}) => {
    return (
        <div>
            <button type="button" className="btn btn-outline-warning" {...rest}>{buttonName}</button>
        </div>
    )
}

export default Tombol;
