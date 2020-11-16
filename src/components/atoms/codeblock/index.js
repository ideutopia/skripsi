import React from 'react'
import './codeblok.css';

const Code = ({code, intruksi, penjelasan}) => {
    return (
        <div className="card mt-2 mb-2">
                <div className="card-body">
                    <h5>Intruksi :</h5>
                    <p>{intruksi}</p>
                <pre className="code">
                    <code>
                        {code}
                    </code>
                </pre>
                <h5>Penjelasan Kode :</h5>
                <p>{penjelasan}</p>
                </div>
            </div>
    )
}

export default Code
