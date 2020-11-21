import React from "react";
import { Code } from "../../atoms";
import { About, Overview, Output } from "../../molecules";
import { OutputLab10 } from "../../../assets";
import "../labs.css";
import { lab10String } from "../../../data";
import {
  starter,
  task1Code,
  task2Code,
  full,
} from "../../../data/lab10/code.js";
const Lab10 = () => {
  return (
    <div className="content-wrapper">
      <About title={lab10String.judul} date={lab10String.update} />
      <Overview
        title={lab10String.judul}
        lastUpdate={lab10String.update}
        desc={lab10String.deskripsi}
      />
      <Code
        intruksi={lab10String.intruksi[0]}
        code={starter}
        penjelasan={lab10String.penjelasan[0]}
      />
      <Code
        intruksi={lab10String.intruksi[1]}
        code={task1Code}
        penjelasan={lab10String.penjelasan[1]}
      />
      <Code
        intruksi={lab10String.intruksi[2]}
        code={task2Code}
        penjelasan={lab10String.penjelasan[2]}
      />
      <Code
        intruksi={lab10String.intruksi[3]}
        code={full}
        penjelasan={lab10String.penjelasan[3]}
      />
      <Output img={OutputLab10} />
    </div>
  );
};

export default Lab10;
