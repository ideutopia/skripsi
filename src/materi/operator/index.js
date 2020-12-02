import React from "react";
import operator from "./data.js";
import "../materi.css";
const Operator = () => {
  return (
    <div className="content-wrapper">
      <div className="card">
        <div className="card-body">
          <h1>{operator.judul}</h1>
          <p>{operator.deskripsi}</p>
          <div className="card">
            <h6 className="alert alert-info">
              {operator.head.aritmatika.judul}
            </h6>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <b>{operator.head.aritmatika.head[0]}</b>
                </li>
                <li className="list-group-item">
                  {operator.head.aritmatika.konten.operatorMatematika[0]}
                </li>
                <li className="list-group-item">
                  {operator.head.aritmatika.konten.operatorMatematika[1]}
                </li>
                <li className="list-group-item">
                  {operator.head.aritmatika.konten.operatorMatematika[2]}
                </li>
                <li className="list-group-item">
                  {operator.head.aritmatika.konten.operatorMatematika[3]}
                </li>
                <li className="list-group-item">
                  {operator.head.aritmatika.konten.operatorMatematika[4]}
                </li>
              </ul>
              <div className="card mt-2 mb-2">
                <p className="alert alert-info">Contoh Penggunaan : </p>
                <pre>{operator.head.aritmatika.code.operatorMatematika}</pre>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <b>{operator.head.aritmatika.head[1]}</b>
                </li>
                <li className="list-group-item">
                  {operator.head.aritmatika.konten.operatorRelasi[0]}
                </li>
                <li className="list-group-item">
                  {operator.head.aritmatika.konten.operatorRelasi[1]}
                </li>
                <li className="list-group-item">
                  {operator.head.aritmatika.konten.operatorRelasi[2]}
                </li>
                <li className="list-group-item">
                  {operator.head.aritmatika.konten.operatorRelasi[3]}
                </li>
              </ul>
              <div className="card mt-2 mb-2">
                <p className="alert alert-info">Contoh Penggunaan : </p>
                <pre>{operator.head.aritmatika.code.operatorRelasi}</pre>
              </div>

              <ul className="list-group">
                <li className="list-group-item">
                  <b>{operator.head.aritmatika.head[2]}</b>
                </li>
                <li className="list-group-item">
                  {operator.head.aritmatika.konten.operatorPersamaan[0]}
                </li>
                <li className="list-group-item">
                  {operator.head.aritmatika.konten.operatorPersamaan[1]}
                </li>
              </ul>
              <div className="card mb-2 mt-2">
                <p className="alert alert-info">Contoh Penggunaan : </p>
                <pre>{operator.head.aritmatika.code.operatorPersamaan}</pre>
              </div>
            </div>
          </div>
          <div className="card">
            <h6 className="alert alert-info">
              {operator.head.booleanOperator.judul}
            </h6>
            <div className="card-body">
              <div className="card">
                <h6 className="alert alert-info">
                  {operator.head.booleanOperator.konten.AND.judul}
                </h6>
                <div className="card-body">
                  <p>{operator.head.booleanOperator.konten.AND.konten[0]}</p>
                  <p>{operator.head.booleanOperator.konten.AND.konten[1]}</p>
                  <pre>{operator.head.booleanOperator.konten.AND.code}</pre>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <h6 className="alert alert-info">
                  {operator.head.booleanOperator.konten.OR.judul}
                </h6>
                <div className="card-body">
                  <p>{operator.head.booleanOperator.konten.OR.konten[0]}</p>
                  <p>{operator.head.booleanOperator.konten.OR.konten[1]}</p>
                  <pre>{operator.head.booleanOperator.konten.AND.code}</pre>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <h6 className="alert alert-info">
                  {operator.head.booleanOperator.konten.NOT.judul}
                </h6>
                <div className="card-body">
                  <p>{operator.head.booleanOperator.konten.NOT.konten[0]}</p>

                  <pre>{operator.head.booleanOperator.konten.NOT.code}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h1>{operator.head.scanner.judul}</h1>
          <p>{operator.head.scanner.konten}</p>
          <pre>{operator.head.scanner.code}</pre>
          <h6 className="alert alert-info">Latihan</h6>
          <p>{operator.head.scanner.tugas}</p>
        </div>
      </div>
    </div>
  );
};

export default Operator;
