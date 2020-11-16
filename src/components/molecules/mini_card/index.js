import React from 'react'
import {Tombol, Gap} from '../../atoms';
import TagWrapper from '../tag_wrapper';
import {useHistory} from 'react-router-dom';
const MiniCard = ({title, desc, link}) => {
    const history = useHistory();
    return (
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <TagWrapper tag1="Variabel" tag2="Operator" tag3="Logic" tag4="Operasi"/>
                        <Gap height={5}/>
                        <Tombol buttonName="Start" onClick={()=> history.push(link)} />
                    </div>
                </div>  
    )
}

export default MiniCard
