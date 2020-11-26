import React from "react";
import { Jumbotron, Modals } from "../../components/molecules";
import { Header, Footer } from "../../components/organism";
// import { Tombol } from "../../components/atoms";
// import "./about.css";
import "../App.css";

const About = () => {
  return (
    <div>
      <Header />
      <Jumbotron
        title="About"
        lead="Selamat Datang"
        desc="Codelabs dirancang untuk memberikan pengalaman praktik langsung kepada siswa agar dapat melakukan kegiatan praktik secara mandiri dimanapun dan kapanpun melalui kegiatan studi kasus pembuatan program. Media ini dibuat sebagai penunjang kegiatan belajar mengajar pada mata pelajaran Pemrograman Dasar, sesuai dengan namanya Codelabs hanya berisi langkah-langkah praktis dalam pembuatan program disertai dengan penjelasan kode, untuk materi yang berbentuk teori dan konsep tidak disertakan pada media ini dengan alasan rancangan perencanaan pembelajaran(RPP) dari guru yang harus fleksibel."
      />
      <div className="content-wrapper">
        <div className="card bg-dark text-white">
          <div className="card-body">
            <p>
              Media ini menggunakan teknologi Progressive Web App yang
              memungkinkan aplikasi dapat dipasang pada perangkat dan memiliki
              aksesibilitas offline, karena berbasis web media ini dapat
              diinstall dalam lintas platform dan OS, Seperti di Android, IOS,
              Windows, Linux dan Chrome OS. media ini juga menerapkan responsive
              web design sehingga tampilan media akan dinamis mengikuti ukuran
              layar perangkat pengguna. Media ini menggunakan arsitektur Single
              Page Application sehingga permuatan konten dalam media dapat
              dimuat secara instan tanpa perlu melakukan pembaruan ulang.
            </p>
            <p>
              Untuk menggunakan media secara offline anda perlu melakukan
              instalasi terlebih dahulu, langkah-langkah penginstallan dapat
              anda lihat pada halaman help. Pastikan anda menggunakan browser
              yang terbaru seperti Google Chrome atau Firefox.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-secondary mt-2"
          data-toggle="modal"
          data-target="#modalContact"
        >
          Kontak
        </button>
        <Modals />
      </div>

      <Footer />
    </div>
  );
};

export default About;
