import React from 'react';
import {Code} from '../../atoms';
import {About, Overview, Output} from '../../molecules';
import {OutputLab7} from '../../../assets';
import '../labs.css';
import {dataString} from '../../../data/lab7/string.js'
import {starter, task1Code, task2Code, full} from '../../../data/lab7/code.js';
const Lab7 = () =>{
    return(
        <div className="content-wrapper">
            <About title={dataString.judul} date={dataString.update} />
            <Overview title={dataString.judul} lastUpdate={dataString.update} desc = {dataString.deskripsi} />
            <Code intruksi={dataString.intruksi[0]} 
            code={starter} penjelasan={dataString.penjelasan[0]}/>
            <Code intruksi={dataString.intruksi[1]} code={task1Code} penjelasan={dataString.penjelasan[1]}/>
            <Code intruksi={dataString.intruksi[2]} code={task2Code} penjelasan={dataString.penjelasan[2]}/>
            <Code intruksi={dataString.intruksi[3]} code={full} penjelasan={dataString.penjelasan[3]}/>
            <Output img={OutputLab7} />
        </div>
    )
}

export default Lab7;