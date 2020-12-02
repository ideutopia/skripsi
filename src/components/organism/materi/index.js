import React from "react";
import { List } from "../../../components/atoms";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import {
  algoritma,
  method,
  array,
  operator,
  looping,
  seleksiKondisi,
  tipeData,
  variabel,
} from "../../../materi/data.js";
const MainMateri = () => {
  return (
    <div class="list-group">
      <List
        judul={algoritma.judul}
        deskripsi={algoritma.deskripsi[0]}
        link="/algoritma"
      />
      <List judul={array.judul} deskripsi={array.deskripsi} link="/array" />
      <List
        judul={method.judul}
        deskripsi={method.deskripsi[0]}
        link="/fungsi"
      />
      <List
        judul={operator.judul}
        deskripsi={operator.deskripsi}
        link="/operator"
      />
      <List
        judul={looping.judul}
        deskripsi={looping.deskripsi}
        link="/looping"
      />
      <List
        judul={seleksiKondisi.judul}
        deskripsi={seleksiKondisi.deskripsi}
        link="/seleksi_kondisi"
      />
      <List
        judul={tipeData.judul}
        deskripsi={tipeData.deskripsi}
        link="/tipe_data"
      />
      <List
        judul={variabel.judul}
        deskripsi={variabel.deskripsi}
        link="/variabel"
      />
    </div>
  );
};

export default MainMateri;
