import React from "react";
import variabel from "./data.js";
import "../materi.css";
const Variabel = () => {
  return (
    <div className="content-wrapper">
      <div className="card">
        <div className="card-body">
          <h1>{variabel.judul}</h1>
          <p>{variabel.deskripsi}</p>
          <div className="card">
            <h6 className="alert alert-info">{variabel.header[0]}</h6>
            <div className="card-body">
              <p>{variabel.konten[0]}</p>
              <p>{variabel.konten[1]}</p>
              <p>Perhatikan kode berikut : </p>
              <pre>{variabel.code[0]}</pre>
            </div>
          </div>
          <div className="card">
            <h6 className="alert alert-info">{variabel.header[1]}</h6>
            <div className="card-body">
              <p>{variabel.konten[2]}</p>
              <p>{variabel.konten[3]}</p>
              <p>Perhatikan kode berikut : </p>
              <pre>{variabel.code[1]}</pre>
              <p>{variabel.konten[4]}</p>
            </div>
          </div>
          <div className="card">
            <h6 className="alert alert-info">{variabel.header[2]}</h6>
            <div className="card-body">
              <p>{variabel.konten[5]}</p>
              <p>Perhatikan kode berikut : </p>
              <pre>{variabel.code[2]}</pre>
            </div>
          </div>
          <div className="card">
            <h6 className="alert alert-info">Latihan</h6>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">{variabel.tugas[0]}</li>
                <li className="list-group-item">{variabel.tugas[1]}</li>
                <li className="list-group-item">{variabel.tugas[2]}</li>
                <li className="list-group-item">{variabel.tugas[3]}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variabel;
