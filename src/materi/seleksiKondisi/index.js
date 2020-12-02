import React from "react";
import seleksiKondisi from "./data.js";
import "../materi.css";
const SeleksiKondisi = () => {
  return (
    <div className="content-wrapper">
      <div className="card">
        <div className="card-body">
          <h1>{seleksiKondisi.judul}</h1>
          <p>{seleksiKondisi.deskripsi}</p>
          <div className="card">
            <h6 className="alert alert-info">{seleksiKondisi.if.judul}</h6>
            <div className="card-body">
              <p>{seleksiKondisi.if.konten}</p>
              <p className="alert alert-primary">Contoh IF : </p>
              <pre>{seleksiKondisi.if.code[0]}</pre>
              <p className="alert alert-primary">Contoh IF ELSE: </p>
              <pre>{seleksiKondisi.if.code[1]}</pre>
              <p className="alert alert-primary">Contoh ELSE IF : </p>
              <pre>{seleksiKondisi.if.code[2]}</pre>
            </div>
            <h6 className="alert alert-primary mt-2">Latihan : </h6>
            <p>{seleksiKondisi.if.tugas}</p>
          </div>
          <div className="card mt-2">
            <h6 className="alert alert-info">{seleksiKondisi.switch.judul}</h6>
            <div className="card-body">
              <p>{seleksiKondisi.switch.konten}</p>
              <pre>{seleksiKondisi.switch.code}</pre>
              <h6 className="alert alert-info">Latihan</h6>
              <ul className="list-group">
                <li className="list-group-item">
                  {seleksiKondisi.switch.tugas.desc}
                </li>
                <li className="list-group-item">
                  {seleksiKondisi.switch.tugas.list[0]}
                </li>
                <li className="list-group-item">
                  {seleksiKondisi.switch.tugas.list[1]}
                </li>
                <li className="list-group-item">
                  {seleksiKondisi.switch.tugas.list[2]}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeleksiKondisi;
