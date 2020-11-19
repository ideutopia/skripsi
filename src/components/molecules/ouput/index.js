import React from 'react'

const Output = ({img}) => {
    return (
        <div className="card center">
            <div className="card-body">
                <p>Tampilan keluaran dari program adalah sebagai berikut :</p>
                <img src={img} alt="Ouput"/>
            </div>
        </div>
    )
}

 export default Output
