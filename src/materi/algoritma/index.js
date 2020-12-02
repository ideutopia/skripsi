import React from "react";
import algoritma from "./data.js";
import { MediaObject } from "../../components/atoms";
import "../materi.css";
import {
  Terminal,
  ConnectorDalam,
  ConnectorLuar,
  Decision,
  GarisAlir,
  InputOutput,
  Preparation,
  Proses,
  Soubroutine,
} from "../../assets";
const Algoritma = () => {
  return (
    <div className="content-wrapper">
      <div className="card mt-2">
        <div className="card-body">
          <h1 className="center">{algoritma.judul}</h1>
          <p>{algoritma.deskripsi[0]}</p>
          <p>{algoritma.deskripsi[1]}</p>
          <div>
            <div class="alert alert-secondary" role="alert">
              <h5>Contoh Algoritma</h5>
              <p>
                {algoritma.contoh[0]},{algoritma.contoh[1]}{" "}
              </p>
              <ul class="list-group">
                <li class="list-group-item list-group-item-dark">
                  {algoritma.cara[0]}
                </li>
                <li class="list-group-item list-group-item-dark">
                  {algoritma.cara[1]}
                </li>
                <li class="list-group-item list-group-item-dark">
                  {algoritma.cara[2]}
                </li>
                <li class="list-group-item list-group-item-dark">
                  {algoritma.cara[3]}
                </li>
                <li class="list-group-item list-group-item-dark">
                  {algoritma.cara[4]}
                </li>
                <li class="list-group-item list-group-item-dark">
                  {algoritma.cara[5]}
                </li>
                <li class="list-group-item list-group-item-dark">
                  {algoritma.cara[6]}
                </li>
                <li class="list-group-item list-group-item-dark">
                  {algoritma.cara[7]}
                </li>
              </ul>
            </div>
          </div>
          <div className="alert alert-dark" role="alert">
            <h5>Latihan</h5>
            <ul className="list-group">
              <li className="list-group-item list-group-item-secondary">
                {algoritma.latihan[0]}
              </li>
              <li className="list-group-item list-group-item-secondary">
                {algoritma.latihan[1]}
              </li>
              <li className="list-group-item list-group-item-secondary">
                {algoritma.latihan[2]}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Blok Flowchart */}
      <div className="card mt-2">
        <div className="card-body">
          <h1 className="center">{algoritma.flowChart.judul}</h1>
          <p>{algoritma.flowChart.deskripsi}</p>
          <div>
            <MediaObject
              title={algoritma.flowChart.nama[0]}
              img={Proses}
              desc={algoritma.flowChart.arti[0]}
            />
            <MediaObject
              title={algoritma.flowChart.nama[1]}
              img={InputOutput}
              desc={algoritma.flowChart.arti[1]}
            />
            <MediaObject
              title={algoritma.flowChart.nama[2]}
              img={Terminal}
              desc={algoritma.flowChart.arti[2]}
            />
            <MediaObject
              title={algoritma.flowChart.nama[3]}
              img={Decision}
              desc={algoritma.flowChart.arti[3]}
            />
            <MediaObject
              title={algoritma.flowChart.nama[4]}
              img={Soubroutine}
              desc={algoritma.flowChart.arti[4]}
            />
            <MediaObject
              title={algoritma.flowChart.nama[5]}
              img={Preparation}
              desc={algoritma.flowChart.arti[5]}
            />
            <MediaObject
              title={algoritma.flowChart.nama[6]}
              img={ConnectorDalam}
              desc={algoritma.flowChart.arti[6]}
            />
            <MediaObject
              title={algoritma.flowChart.nama[7]}
              img={ConnectorLuar}
              desc={algoritma.flowChart.arti[7]}
            />
            <MediaObject
              title={algoritma.flowChart.nama[8]}
              img={GarisAlir}
              desc={algoritma.flowChart.arti[8]}
            />
          </div>
          <h6 className="alert alert-info mt-2">
            {algoritma.flowChart.contoh.head}
          </h6>
          <ul className="list-group">
            <li className="list-group-item">
              {algoritma.flowChart.contoh.list[0]}
            </li>
            <li className="list-group-item">
              {algoritma.flowChart.contoh.list[1]}
            </li>
            <li className="list-group-item">
              {algoritma.flowChart.contoh.list[2]}
            </li>
            <li className="list-group-item">
              {algoritma.flowChart.contoh.list[3]}
            </li>
          </ul>
          <div className="card mt-2">
            <div className="card-body">
              <h6 className="alert alert-info">Latihan</h6>
              <ul className="list-group">
                <li className="list-group-item">
                  <b>{algoritma.flowChart.latihan.satu[0]}</b>
                </li>
                <li className="list-group-item">
                  {algoritma.flowChart.latihan.satu[1]}
                </li>
                <li className="list-group-item">
                  {algoritma.flowChart.latihan.satu[2]}
                </li>
                <li className="list-group-item">
                  {algoritma.flowChart.latihan.satu[3]}
                </li>
              </ul>
              <ul className="list-group mt-2">
                <li className="list-group-item">
                  <b>{algoritma.flowChart.latihan.dua[0]}</b>
                </li>
                <li className="list-group-item">
                  {algoritma.flowChart.latihan.dua[1]}
                </li>
                <li className="list-group-item">
                  {algoritma.flowChart.latihan.dua[2]}
                </li>
                <li className="list-group-item">
                  {algoritma.flowChart.latihan.dua[3]}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algoritma;
