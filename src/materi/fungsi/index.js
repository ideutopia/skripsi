import React from "react";
import method from "./data.js";
import "../materi.css";
const Fungsi = () => {
  return (
    <div className="content-wrapper">
      <div className="card">
        <div className="card-body">
          <h1>{method.judul}</h1>
          <p>{method.deskripsi[0]}</p>
          <p>{method.deskripsi[1]}</p>
          <div className="card">
            <h6 className="alert alert-info">{method.noParameter.judul}</h6>
            <div className="card-body">
              <p>{method.noParameter.deskripsi}</p>
              <pre>{method.noParameter.code}</pre>
            </div>
          </div>
          <div className="card mt-2">
            <h6 className="alert alert-info">{method.parameter.judul}</h6>
            <div className="card-body">
              <p>{method.parameter.deskripsi}</p>
              <pre>{method.parameter.code}</pre>
            </div>
          </div>
          <div className="card mt-2">
            <h6 className="alert alert-info">{method.return.judul}</h6>
            <div className="card-body">
              <p>{method.return.deskripsi}</p>
              <pre>{method.return.code}</pre>
            </div>
          </div>
          <h6 className="alert alert-info mt-2">Latihan</h6>
          <p>{method.tugas}</p>
        </div>
      </div>
    </div>
  );
};

export default Fungsi;
