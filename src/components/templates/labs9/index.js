import React from "react";
import { Code } from "../../atoms";
import { About, Overview, Output } from "../../molecules";
import { OutputLab9 } from "../../../assets";
import "../labs.css";
import { lab9String } from "../../../data";
import {
  starter,
  task1Code,
  task2Code,
  full,
} from "../../../data/lab9/code.js";
const Lab9 = () => {
  return (
    <div className="content-wrapper">
      <About title={lab9String.judul} date={lab9String.update} />
      <Overview
        title={lab9String.judul}
        lastUpdate={lab9String.update}
        desc={lab9String.deskripsi}
      />
      <Code
        intruksi={lab9String.intruksi[0]}
        code={starter}
        penjelasan={lab9String.penjelasan[0]}
      />
      <Code
        intruksi={lab9String.intruksi[1]}
        code={task1Code}
        penjelasan={lab9String.penjelasan[1]}
      />
      <Code
        intruksi={lab9String.intruksi[2]}
        code={task2Code}
        penjelasan={lab9String.penjelasan[2]}
      />
      <Code
        intruksi={lab9String.intruksi[3]}
        code={full}
        penjelasan={lab9String.penjelasan[3]}
      />
      <Output img={OutputLab9} />
    </div>
  );
};

export default Lab9;
