const algoritma = {
  judul: "Algoritma",
  deskripsi: [
    "Algoritma adalah penyusunan atau langkah-langkah guna untuk menyelesaikan suatu persoalan atau permasalahan secara logis.",
    "Algoritma dibutuhkan untuk memerintah komputer mengambil langkah-langkah tertentu dalam menyelesaikan masalah",
  ],
  contoh: [
    "Ada 2 gelas kosong berukuran: 5 liter daan 3 liter",
    "Bagaimana cara kita mendapatkan air beukuran 4 liter?",
  ],
  cara: [
    "Masukkan air ke gelas 3 liter hingga penuh",
    "Masukkan air di gelas 3 liter ke gelas 5 liter, sehingga 2 liter kosong",
    "Masukkan air ke 3 liter hingga penuh",
    "Tuangkah air 3 liter ke sisa 2 liter berarti sisa 1 liter digelas 3 liter",
    "Buang seluruh air digelas 5 liter tadi",
    "Tuangkan air 1 liter yang ada di gelas 3 liter tadi ke gelas 5 liter",
    "Masukkan air ke 3 liter hingga penuh",
    "Tuangkan 3 liter ke gelas 5 liter yang sudah ada 1 liter tadi, hingga kita dapat 4 liter",
  ],
  latihan: [
    "Buatlah algoritma untuk mengirim email dengan alamat email tujuan yang sudah diketahui!",
    "Buatlah algoritma untuk meminjam buku diperpustakaan!",
    "Buatlah algoritma untuk membeli buku di toko buku!",
  ],
};

const flowChart = {
  judul: "Flowcahart",
  deskripsi:
    "Flowchart adalah suatu diagram yang menggambarkan susunan logika suatu program dalam gambar atau bagan.Gambaran tersebut dinyatakan dengan symbol",
  nama: [
    "Proses/processing",
    "Input/Output",
    "Terminal",
    "Decision(Keputusan)",
    "Subroutine(Proses Terdefinisi)",
    "Preparation(Persiapan)",
    "Connector(Penghubung)",
    "Connector (Penghubung)",
    "Flowline (Garis alir)",
  ],
  arti: [
    "Simbol yang menunjukkan pengolahan yang dilakukan oleh komputer.",
    "Data yang akan dibaca dan dimasukkan ke dalam memori komputer dari suatu alat input.",
    "Berfungsi sebagai awal (berisi “Start”) dan akhir (berisi “End”) dari suatu proses alur.",
    "Berfungsi untuk memutuskan arah / percabangan yang diambil sesuai dengan kondisi yang dipenuhi, yaitu (Benar / Salah).",
    "Digunakan untuk menjalankan proses sub bagian (sub program) atau prosedur",
    "Digunakan untuk memberi nilai awal suatu besaran.",
    "Untuk menghubungkan diagram alur yang terputus tetapi masih pada halaman yang sama",
    "Untuk menghubungkan diagram alur yang terputus tetapi pada halaman yang berbeda",
    "Untuk menunjukkan bagian arah yang diinstruksikan.",
  ],
  contoh: {
    head: "DIAGRAM ALIR UNTUK PROGRAM KOMPUTER",
    list: [
      "Pada dasarnya suatu program komputer umumnya terdiri atas : ",
      "1.	Pembacaan / pemasukan data ke dalam komputer",
      "2.	Melakukan komputasi/perhitungan terhadap data tersebut",
      "3.	Mengeluarkan / mencetak/ menampilkan hasilnya.",
    ],
  },
  latihan: {
    satu: [
      "Buatlah flowcahart dari pseudocode berikut ini : ",
      "a. Masukkan nilai panjang dan lebar",
      "b.Hitung luas persegi panjang = panjang * lebar",
      "c.Cetak luas persegi panjang",
    ],
    dua: [
      "Buatlah flowchart dari pseudocode berikut ini:",
      "a.	Masukkan pilihan",
      "b.	Jika pilihan 1 = maka menu nasi goreng Jika pilihan 2 = maka menu mie goreng Jika pilihan 3 = maka menu bakso",
      "c. cetak menu",
    ],
  },
};

export default algoritma;
