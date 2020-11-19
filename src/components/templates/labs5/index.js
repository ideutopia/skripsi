import React from 'react'
import {Code} from '../../atoms';
import {About, Output, Overview} from '../../molecules';
import '../labs.css';
import {lab5String} from '../../../data';
import {starter, task1Code, task2Code, full} from '../../../data/lab5/code.js';
import {OutputLab5} from '../../../assets';

const Lab5 = () => {
    return (
        <div className="content-wrapper">
            <About title={lab5String.judul} date={lab5String.update} />
            <Overview title={lab5String.judul} lastUpdate={lab5String.update} desc={lab5String.deskripsi} />
            <Code intruksi={lab5String.intruksi[0]} code={starter} penjelasan={lab5String.penjelasan[0]} />
            <Code intruksi={lab5String.intruksi[1]} code={task1Code} penjelasan={lab5String.penjelasan[1]} />
            <Code intruksi={lab5String.intruksi[2]} code={task2Code} penjelasan={lab5String.penjelasan[2]} />
            <Code intruksi={lab5String.intruksi[3]} code={full} penjelasan={lab5String.penjelasan[3]} />
            <Output img={OutputLab5} />
        </div>
    )
}

export default Lab5;
