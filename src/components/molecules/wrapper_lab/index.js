import React from "react";
import MiniCard from "../mini_card";
import { Gap } from "../../atoms";
// import { useHistory } from 'react-router-dom';
import * as dataString from "../../../data";

const Wrapper = () => {
  return (
    <div className="Wrapper">
      <div className="row">
        <div className="col-sm-6">
          <MiniCard
            title={dataString.lab1String.judul}
            desc={dataString.lab1String.deskripsi}
            link={dataString.lab1String.link}
            kategori={dataString.lab1String.kategori}
          />
          <Gap height={20} width={20} />
        </div>
        <div className="col-sm-6">
          <MiniCard
            title={dataString.lab2String.judul}
            desc={dataString.lab2String.deskripsi}
            link={dataString.lab2String.link}
            kategori={dataString.lab2String.kategori}
          />
          <Gap height={20} width={20} />
        </div>
        <div className="col-sm-6">
          <MiniCard
            title={dataString.lab4String.judul}
            desc={dataString.lab4String.deskripsi}
            link={dataString.lab4String.link}
            kategori={dataString.lab4String.kategori}
          />
          <Gap height={20} width={20} />
        </div>
        <div className="col-sm-6">
          <MiniCard
            title={dataString.lab5String.judul}
            desc={dataString.lab5String.deskripsi}
            link={dataString.lab5String.link}
            kategori={dataString.lab5String.kategori}
          />
          <Gap height={20} width={20} />
        </div>
        <div className="col-sm-6">
          <MiniCard
            title={dataString.lab6String.judul}
            desc={dataString.lab6String.deskripsi}
            link={dataString.lab6String.link}
            kategori={dataString.lab6String.kategori}
          />
          <Gap height={20} width={20} />
        </div>
        <div className="col-sm-6">
          <MiniCard
            title={dataString.lab7String.judul}
            desc={dataString.lab7String.deskripsi}
            link={dataString.lab7String.link}
            kategori={dataString.lab7String.kategori}
          />
          <Gap height={20} width={20} />
        </div>
        <div className="col-sm-6">
          <MiniCard
            title={dataString.lab8String.judul}
            desc={dataString.lab8String.deskripsi}
            link={dataString.lab8String.link}
            kategori={dataString.lab8String.kategori}
          />
          <Gap height={20} width={20} />
        </div>
        <div className="col-sm-6">
          <MiniCard
            title={dataString.lab9String.judul}
            desc={dataString.lab9String.deskripsi}
            link={dataString.lab9String.link}
            kategori={dataString.lab9String.kategori}
          />
          <Gap height={20} width={20} />
        </div>
        <div className="col-sm-6">
          <MiniCard
            title={dataString.lab10String.judul}
            desc={dataString.lab10String.deskripsi}
            link={dataString.lab10String.link}
            kategori={dataString.lab10String.kategori}
          />
          <Gap height={20} width={20} />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
