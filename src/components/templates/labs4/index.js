import React from 'react'
import {Code} from '../../atoms';
import {About, Overview, Output} from '../../molecules';
import {OutputLab4} from '../../../assets';
import '../labs.css';
import {lab4String} from '../../../data'
import {starter, task1, task2, task3, task4, task5, full} from '../../../data/lab4/code.js'; 
const Lab4 = () => {
    return (
        <div className="content-wrapper">
           <About title={lab4String.judul} date= {lab4String.update} />
           <Overview  title={lab4String.judul} lastUpdate={lab4String.update} desc={lab4String.deskripsi}/>
            <Code intruksi={lab4String.intruksi[0]} code={starter} penjelasan={lab4String.penjelasan[0]} />
            <Code intruksi={lab4String.intruksi[1]} code={task1} penjelasan= {lab4String.penjelasan[1]} />
            <Code intruksi={lab4String.intruksi[2]} code={task2} penjelasan = {lab4String.penjelasan[2]} />
            <Code intruksi={lab4String.intruksi[3]} code={task3} penjelasan ={lab4String.penjelasan[3]} />
            <Code intruksi={lab4String.intruksi[4]} code={task4} penjelasan ={lab4String.penjelasan[4]} />
            <Code intruksi={lab4String.intruksi[5]} code={task5} penjelasan ={lab4String.penjelasan[5]} />
            <Code intruksi={lab4String.intruksi[6]} code={full} penjelasan={lab4String.penjelasan[6]} />
            <Output img={OutputLab4} />
        </div>
    )
}

export default Lab4
