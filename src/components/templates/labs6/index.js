import React from 'react'
import {Code} from '../../atoms';
import {About, Overview, Output} from '../../molecules';
import {OutputLab6} from '../../../assets';
import '../labs.css';
import {dataString} from '../../../data/lab6/string.js';
import {starter, task1Code, task2Code, task3Code, task4Code, full} from '../../../data/lab6/code.js';
const Lab6 = () => {
    return (
        <div className="content-wrapper">
            <About title={dataString.judul} date={dataString.update} />
            <Overview title={dataString.judul} lastUpdate={dataString.update} desc= {dataString.deskripsi}/>
            <Code intruksi={dataString.intruksi[0]} code={starter} penjelasan={dataString.penjelasan[0]}/>
            <Code intruksi={dataString.intruksi[1]} code={task1Code} penjelasan={dataString.penjelasan[1]}/>
            <Code intruksi={dataString.intruksi[2]} code={task2Code} penjelasan={dataString.penjelasan[2]}/>
            <Code intruksi={dataString.intruksi[3]} code={task3Code} penjelasan={dataString.penjelasan[3]}/>
            <Code intruksi={dataString.intruksi[4]} code={task4Code} penjelasan={dataString.penjelasan[4]}/>
            <Code intruksi={dataString.intruksi[5]} code={full} penjelasan={dataString.penjelasan[5]}/>
            <Output img={OutputLab6} />
        </div>
    )
}
export default Lab6
