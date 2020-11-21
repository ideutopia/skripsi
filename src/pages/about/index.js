import React from "react";
import { Jumbotron } from "../../components/molecules";
import { Header, Footer } from "../../components/organism";
import { Tombol } from "../../components/atoms";

const About = () => {
  return (
    <div>
      <Header />
      <Jumbotron
        title="About"
        lead="Halaman ini adalah halaman about"
        desc="Web ini dikembangkan untuk skripsi Muhammad Taftiyan Ilham Akbar"
      />
      <Tombol buttonName="Contact" />

      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              The Quick Brown Fox Jumps Over tHE lazy dog
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
