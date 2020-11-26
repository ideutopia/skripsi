import React from "react";
import { Jumbotron, Card } from "../../components/molecules";
import { Footer, Header } from "../../components/organism";
const Help = () => {
  return (
    <div>
      <Header />
      <Jumbotron
        title="Help"
        lead="Com"
        desc="Pelajari cara menggunakan media melalui intruksi dibawah"
        className="jumbotron"
      />
      <div className="content-wrapper">
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Help;
