import React from "react";
import tipeData from "./data.js";
import "../materi.css";

const TipeData = () => {
  return (
    <div className="content-wrapper">
      <div className="card">
        <div className="card-body">
          <h1>{tipeData.judul}</h1>
          <p>{tipeData.deskripsi}</p>
          <div className="card mt-2">
            <h6 className="alert alert-info">{tipeData.header[0]}</h6>
            <div className="card-body">
              <p>{tipeData.konten[0]}</p>
              <p>{tipeData.konten[1]}</p>
            </div>
          </div>
          <div className="card mt-2">
            <h6 className="alert alert-info">{tipeData.header[1]}</h6>
            <div className="card-body">
              <p>{tipeData.konten[2]}</p>
            </div>
          </div>
          <div className="card mt-2">
            <h6 className="alert alert-info">{tipeData.header[2]}</h6>
            <div className="card-body">
              <pre>{tipeData.code[0]}</pre>
            </div>
          </div>
          <div className="card mt-2">
            <h6 className="alert alert-info">{tipeData.header[3]}</h6>
            <div className="card-body">
              <div className="card">
                <h6 className="alert alert-secondary">
                  {tipeData.subHeading[0]}
                </h6>
                <div className="card-body">
                  <p>{tipeData.konten[3]}</p>
                  <pre>{tipeData.code[1]}</pre>
                </div>
              </div>
              <div className="card mt-2">
                <h6 className="alert alert-secondary">
                  {tipeData.subHeading[1]}
                </h6>
                <div className="card-body">
                  <p>{tipeData.konten[4]}</p>
                  <pre>{tipeData.code[2]}</pre>
                </div>
              </div>
              <div className="card mt-2">
                <h6 className="alert alert-secondary">
                  {tipeData.subHeading[2]}
                </h6>
                <div className="card-body">
                  <p>{tipeData.konten[4]}</p>
                  <pre>{tipeData.code[3]}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipeData;
