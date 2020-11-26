import React from "react";

const Jumbotron = ({ title, lead, desc }) => {
  return (
    <div className="jumbotron mt-2">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{lead}.</p>
      <hr className="my-4" />
      <p>{desc}</p>
    </div>
  );
};

export default Jumbotron;
