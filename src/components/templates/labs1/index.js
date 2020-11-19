import React from 'react'
import {Code} from '../../atoms';
import {About,Output,Overview} from '../../molecules';
import {OutputLab1} from '../../../assets';
import '../labs.css';
import {lab1String} from '../../../data';
import {starter, task2Code, task3Code, task1Code, codeFull} from '../../../data/lab1/code.js'; 
const Lab1 = () => {
    return (
        <div className="content-wrapper">
           <About title={lab1String.judul} date= {lab1String.update} />
           <Overview  title={lab1String.judul} lastUpdate={lab1String.update} desc={lab1String.deskripsi}/>
            <Code intruksi={lab1String.intruksi[0]} code={starter} penjelasan={lab1String.penjelasan[0]} />
            <Code intruksi={lab1String.intruksi[1]} code={task1Code} penjelasan={lab1String.penjelasan[1]} />
            <Code intruksi={lab1String.intruksi[2]} code={task2Code} penjelasan = {lab1String.penjelasan[2]} />
            <Code intruksi={lab1String.intruksi[3]} code={task3Code} penjelasan = {lab1String.penjelasan[3]} />
            <Code intruksi={lab1String.intruksi[4]} code={codeFull} penjelasan={lab1String.intruksi[4]} />
    
            <Output img={OutputLab1} /> 
        </div>
    )
}

export default Lab1
