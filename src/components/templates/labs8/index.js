import React from "react";
import { Code } from "../../atoms";
import { About, Overview, Output } from "../../molecules";
import { OutputLab8 } from "../../../assets";
import "../labs.css";
import { lab8String } from "../../../data";
import {
  starter,
  task1Code,
  task2Code,
  task3Code,
  task4Code,
  task5Code,
  full,
} from "../../../data/lab8/code.js";

const Lab8 = () => {
  return (
    <div className="content-wrapper">
      <About title={lab8String.judul} date={lab8String.update} />
      <Overview
        title={lab8String.judul}
        lastUpdate={lab8String.judul}
        desc={lab8String.deskripsi}
      />
      <Code
        intruksi={lab8String.intruksi[0]}
        code={starter}
        penjelasan={lab8String.penjelasan[0]}
      />
      <Code
        intruksi={lab8String.intruksi[1]}
        code={task1Code}
        penjelasan={lab8String.penjelasan[1]}
      />
      <Code
        intruksi={lab8String.intruksi[2]}
        code={task2Code}
        penjelasan={lab8String.penjelasan[2]}
      />
      <Code
        intruksi={lab8String.intruksi[3]}
        code={task3Code}
        penjelasan={lab8String.penjelasan[3]}
      />
      <Code
        intruksi={lab8String.intruksi[4]}
        code={task4Code}
        penjelasan={lab8String.penjelasan[4]}
      />
      <Code
        intruksi={lab8String.intruksi[5]}
        code={task5Code}
        penjelasan={lab8String.penjelasan[5]}
      />
      <Code
        intruksi={lab8String.intruksi[6]}
        code={full}
        penjelasan={lab8String.penjelasan[6]}
      />
      <Output img={OutputLab8} />
    </div>
  );
};

export default Lab8;
