import React from "react";
import { Greeting, Tombol } from "../../atoms";
import { useHistory } from "react-router-dom";
const Card = ({ name, desc }) => {
  const history = useHistory();
  return (
    <div>
      <div className="card mb-3 mt-2 bg-dark text-white">
        <div className="card-body">
          <Greeting />
          <h2>{name}</h2>
          <p className="card-text">{desc}</p>
          <Tombol buttonName="Lab" onClick={() => history.push("/codelabs1")} />
        </div>
      </div>
    </div>
  );
};

export default Card;
