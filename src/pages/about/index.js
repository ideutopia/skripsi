import React from "react";
import { Jumbotron, Modals } from "../../components/molecules";
import { Header, Footer } from "../../components/organism";
import { pagesString } from "../../data";
import "../App.css";

const About = () => {
  return (
    <div>
      <Header />
      <Jumbotron
        title={pagesString.about.judul}
        lead={pagesString.about.lead}
        desc={pagesString.about.deskripsi}
      />
      <div className="content-wrapper">
        <div className="card bg-dark text-white">
          <div className="card-body">
            <p>{pagesString.about.konten[0]}</p>
            <p>{pagesString.about.konten[1]}</p>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-secondary mt-2"
          data-toggle="modal"
          data-target="#modalContact"
        >
          Kontak
        </button>
        <Modals />
      </div>

      <Footer />
    </div>
  );
};

export default About;
