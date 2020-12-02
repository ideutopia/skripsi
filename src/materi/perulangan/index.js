import React from "react";
import looping from "./data.js";
import "../materi.css";
const Looping = () => {
  return (
    <div className="content-wrapper">
      <div className="card mt-2">
        <div className="card-body">
          <h1>{looping.judul}</h1>
          <p>{looping.deskripsi}</p>
          <div className="card">
            <h6 className="alert alert-info">Perulangan FOR</h6>
            <div className="card-body">
              <p>{looping.FOR.konten[0]}</p>
              <pre>{looping.FOR.konten[1]}</pre>
              <p>{looping.FOR.konten[2]}</p>
              <pre>{looping.FOR.code}</pre>
            </div>
          </div>
          <div className="card mt-2">
            <h6 className="alert alert-info">
              Perulangan {looping.while.judul}
            </h6>
            <div className="card-body">
              <div className="card mt-2">
                <h6 className="alert alert-info">
                  Perulangan {looping.while.konten.WHILE.judul}
                </h6>
                <div className="card-body">
                  <p>{looping.while.konten.WHILE.deskripsi}</p>
                  <pre>{looping.while.konten.WHILE.code}</pre>
                </div>
              </div>
              <div className="card mt-2">
                <h6 className="alert alert-info">
                  Perulangan {looping.while.konten.DOWHILE.judul}
                </h6>
                <div className="card-body">
                  <p>{looping.while.konten.DOWHILE.deskripsi}</p>
                  <pre>{looping.while.konten.DOWHILE.code}</pre>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-2">
            <h6 className="alert alert-info">{looping.BREAK.judul}</h6>
            <div className="card-body">
              <p>{looping.BREAK.deskripsi}</p>
              <pre>{looping.BREAK.code}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Looping;
