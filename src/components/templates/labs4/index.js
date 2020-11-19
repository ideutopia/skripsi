import React from 'react'
import {Code} from '../../atoms';
import {About, Overview, Output} from '../../molecules';
import {OutputLab4} from '../../../assets';
import '../labs.css';
import {dataString} from '../../../data/lab4/string.js'
import {starter, task1, task2, task3, task4, task5, full} from '../../../data/lab4/code.js'; 
const Lab4 = () => {
    return (
        <div className="content-wrapper">
           <About title={dataString.judul} date= {dataString.update} />
           <Overview  title={dataString.judul} lastUpdate={dataString.update} desc={dataString.deskripsi}/>
            <Code intruksi={dataString.intruksi[0]} code={starter} penjelasan={dataString.penjelasan[0]} />
            <Code intruksi={dataString.intruksi[1]} code={task1} penjelasan= {dataString.penjelasan[1]} />
            <Code intruksi={dataString.intruksi[2]} code={task2} penjelasan = {dataString.penjelasan[2]} />
            <Code intruksi={dataString.intruksi[3]} code={task3} penjelasan ={dataString.penjelasan[3]} />
            <Code intruksi={dataString.intruksi[4]} code={task4} penjelasan ={dataString.penjelasan[4]} />
            <Code intruksi={dataString.intruksi[5]} code={task5} penjelasan ={dataString.penjelasan[5]} />
            <Code intruksi={dataString.intruksi[6]} code={full} penjelasan={dataString.penjelasan[6]} />
            <Output img={OutputLab4} />
        </div>
    )
}

export default Lab4
