import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, MainMateri, Footer } from "../../components/organism";
import {
  Algoritma,
  Array,
  Fungsi,
  Operator,
  Looping,
  SeleksiKondisi,
  TipeData,
  Variabel,
} from "../../materi";

const Materi = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/algoritma">
            <Algoritma />
          </Route>
          <Route path="/array">
            <Array />
          </Route>
          <Route path="/fungsi">
            <Fungsi />
          </Route>
          <Route path="/operator">
            <Operator />
          </Route>
          <Route path="/perulangan">
            <Looping />
          </Route>
          <Route path="/seleksi_kondisi">
            <SeleksiKondisi />
          </Route>
          <Route path="/tipe_data">
            <TipeData />
          </Route>
          <Route path="/variabel">
            <Variabel />
          </Route>
          <Route path="/">
            <MainMateri />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default Materi;
