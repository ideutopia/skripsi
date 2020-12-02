import React from "react";
import array from "./data.js";
import "../materi.css";
const Array = () => {
  return (
    <div className="content-wrapper">
      <div className="card mt-2">
        <div className="card-body">
          <h1>{array.judul}</h1>
          <p>{array.deskripsi}</p>
          <div className="card">
            <div className="card-body">
              <h6 className="alert alert-info">{array.array1D.judul}</h6>
              <p>{array.array1D.deskripsi}</p>
              <pre>{array.array1D.code}</pre>
              <h6 className="alert alert-info">Latihan</h6>
              <ul className="list-group">
                <li className="list-group-item">{array.array1D.tugas[0]}</li>
                <li className="list-group-item">{array.array1D.tugas[0]}</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6 className="alert alert-info">{array.array2D.judul}</h6>
              <p>{array.array2D.deskripsi}</p>
              <pre>{array.array2D.code}</pre>
              <h6 className="alert alert-info">Latihan</h6>
              <ul className="list-group">
                <li className="list-group-item">{array.array1D.tugas[0]}</li>
                <li className="list-group-item">{array.array1D.tugas[0]}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Array;
