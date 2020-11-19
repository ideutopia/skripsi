import React from 'react'
import {Code} from '../../atoms';
import {About, Output, Overview} from '../../molecules';
import '../labs.css';
import {dataString} from '../../../data/lab5/string';
import {starter, task1Code, task2Code, full} from '../../../data/lab5/code.js';
import {OutputLab5} from '../../../assets';

const Lab5 = () => {
    return (
        <div className="content-wrapper">
            <About title={dataString.judul} date={dataString.update} />
            <Overview title={dataString.judul} lastUpdate={dataString.update} desc={dataString.deskripsi} />
            <Code intruksi={dataString.intruksi[0]} code={starter} penjelasan={dataString.penjelasan[0]} />
            <Code intruksi={dataString.intruksi[1]} code={task1Code} penjelasan={dataString.penjelasan[1]} />
            <Code intruksi={dataString.intruksi[2]} code={task2Code} penjelasan={dataString.penjelasan[2]} />
            <Code intruksi={dataString.intruksi[3]} code={full} penjelasan={dataString.penjelasan[3]} />
            <Output img={OutputLab5} />
        </div>
    )
}

export default Lab5;
