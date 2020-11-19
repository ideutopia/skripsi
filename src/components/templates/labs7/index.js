import React from 'react';
import {Code} from '../../atoms';
import {About, Overview, Output} from '../../molecules';
import {OutputLab7} from '../../../assets';
import '../labs.css';
import {lab7String} from '../../../data'
import {starter, task1Code, task2Code, full} from '../../../data/lab7/code.js';
const Lab7 = () =>{
    return(
        <div className="content-wrapper">
            <About title={lab7String.judul} date={lab7String.update} />
            <Overview title={lab7String.judul} lastUpdate={lab7String.update} desc = {lab7String.deskripsi} />
            <Code intruksi={lab7String.intruksi[0]} 
            code={starter} penjelasan={lab7String.penjelasan[0]}/>
            <Code intruksi={lab7String.intruksi[1]} code={task1Code} penjelasan={lab7String.penjelasan[1]}/>
            <Code intruksi={lab7String.intruksi[2]} code={task2Code} penjelasan={lab7String.penjelasan[2]}/>
            <Code intruksi={lab7String.intruksi[3]} code={full} penjelasan={lab7String.penjelasan[3]}/>
            <Output img={OutputLab7} />
        </div>
    )
}

export default Lab7;