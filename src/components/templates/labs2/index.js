import React from "react";
import { Code } from "../../atoms";
import { About, Overview, Output } from "../../molecules";
import {
  OutputOperatorAritmatika,
  OutputOperatorLogika,
  OutputOperatorPenugasan,
  OutputOperatorPerbandingan,
} from "../../../assets";
import "../labs.css";
import { lab2String } from "../../../data";
import {
  task1Code,
  task2Code,
  task3Code,
  task4Code,
} from "../../../data/lab2/code.js";
const Lab2 = () => {
  return (
    <div className="content-wrapper">
      <About title={lab2String.judul} date={lab2String.update} />
      <Overview
        title={lab2String.judul}
        lastUpdate={lab2String.update}
        desc={lab2String.deskripsi}
      />
      <Code
        intruksi={lab2String.intruksi[0]}
        code={task1Code}
        penjelasan={lab2String.penjelasan[0]}
      />
      <Code
        intruksi={lab2String.intruksi[1]}
        code={task2Code}
        penjelasan={lab2String.penjelasan[1]}
      />
      <Code
        intruksi={lab2String.intruksi[2]}
        code={task3Code}
        penjelasan={lab2String.penjelasan[2]}
      />
      <Code
        intruksi={lab2String.intruksi[3]}
        code={task4Code}
        penjelasan={lab2String.penjelasan[3]}
      />
      <Output img={OutputOperatorAritmatika} />
      <Output img={OutputOperatorLogika} />
      <Output img={OutputOperatorPenugasan} />
      <Output img={OutputOperatorPerbandingan} />
    </div>
  );
};

export default Lab2;
