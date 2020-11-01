import React from 'react'

const Tombol = ({buttonName}) => {
    return (
        <div>
            <button type="button" class="btn btn-outline-warning">{buttonName}</button>
        </div>
    )
}

export default Tombol;
