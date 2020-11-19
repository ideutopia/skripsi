import React from 'react'
import {Code} from '../../atoms';
import {About, Overview, Output} from '../../molecules';
import {OutputLab6} from '../../../assets';
import '../labs.css';
import {lab6String} from '../../../data';
import {starter, task1Code, task2Code, task3Code, task4Code, full} from '../../../data/lab6/code.js';
const Lab6 = () => {
    return (
        <div className="content-wrapper">
            <About title={lab6String.judul} date={lab6String.update} />
            <Overview title={lab6String.judul} lastUpdate={lab6String.update} desc= {lab6String.deskripsi}/>
            <Code intruksi={lab6String.intruksi[0]} code={starter} penjelasan={lab6String.penjelasan[0]}/>
            <Code intruksi={lab6String.intruksi[1]} code={task1Code} penjelasan={lab6String.penjelasan[1]}/>
            <Code intruksi={lab6String.intruksi[2]} code={task2Code} penjelasan={lab6String.penjelasan[2]}/>
            <Code intruksi={lab6String.intruksi[3]} code={task3Code} penjelasan={lab6String.penjelasan[3]}/>
            <Code intruksi={lab6String.intruksi[4]} code={task4Code} penjelasan={lab6String.penjelasan[4]}/>
            <Code intruksi={lab6String.intruksi[5]} code={full} penjelasan={lab6String.penjelasan[5]}/>
            <Output img={OutputLab6} />
        </div>
    )
}
export default Lab6
