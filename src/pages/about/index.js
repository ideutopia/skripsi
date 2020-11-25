import React from "react";
import { Jumbotron, Modals } from "../../components/molecules";
import { Header, Footer } from "../../components/organism";
// import { Tombol } from "../../components/atoms";
import "./about.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <Jumbotron
          title="About"
          lead="Selamat Datang"
          desc="Codelabs dirancang untuk memberikan pengalaman praktik langsung kepada siswa agar dapat melakukan kegiatan praktik secara mandiri dimanapun dan kapanpun melalui kegiatan studi kasus pembuatan program."
        />
        <button
          type="button"
          className="btn btn-secondary"
          data-toggle="modal"
          data-target="#modalContact"
        >
          Contact
        </button>
        <Modals />
      </div>

      <Footer />
    </div>
  );
};

export default About;
