const lab8String = {
    judul : "Membuat Program Penghitung Luas dan Keliling Bangun Datar.",
    update : "10-11-2020",
    deskripsi : "Pada codelab kali ini anda akan membuat sebuah program yang akan menghitung luas dan keliling sebuah bangun datar. Pada program ini anda akan menerapkan seleksi kondisi dan methode dengan nilai balik dan tanpa nilai baik (void)",
    link : '/codelabs7',
    intruksi : [
        "Untuk memulai silahkan buat class bernama penghitung dan masukkan kode permulaan sebagai berikut :",
        "Pada blok kode task 1 tambahkan kode berikut (abaikan eror pada baris pemanggilan methode MenghtiungLuas(), MenghitungKeliling(), kita akan deklrasikan method tersebut)",
        "Pada blok komentar task2 tambahkan kode berikut :",
        "Pada blok komentar task3 tambahkan kode berikut :",
        "Pada blok komentar task4 tambahkan kode berikut :",
        "Pada blok komentar task5 tambahkan kode berikut :",
        "Kode lengkap adalah sebagai berikut :"
    ],
    penjelasan : [
        "Pada kode diatas pertama kita melakukan import terhadap fungsi Scanner pada class util di package java. Lalu kita definiskan instance Scanner dengan nama input, lalu terakhir kita buat methode main.",

        "Pada kode diatas pertama kita mencetak string dengan tujuan sebagai navigasi bagi pengguna untuk memilih menu, lalu kita deklarasikan variabel input yang berguna untuk menyimpan masukkan dari pengguna. Selanjutnya kita buat seleksi kondisi if dengan kondisi apabila pengguna memasukkan 1 maka methode MenghitungLuas() akan dipanggil, apabila user memasukkan 2 maka methode MenghitungKeliling() akan dipanggil.",

        "Pada kode diatas kita buat empat methode yang masing-masing bertipe double dan memiliki parameter yang berbeda-beda menyesuiakan dengan properti dimasing-masing bangun yang ada, selanjutnya kita perlu mereturn nilai dengan rumus perhitungan masing-masing tersebut",

        "Pada kode diatas kita buat empat methode yang masing-masing bertipe double dan memiliki parameter yang berbeda-beda menyesuiakan dengan properti dimasing-masing bangun yang ada, selanjutnya kita perlu mereturn nilai dengan rumus perhitungan masing-masing tersebut",

        "Pada kode diatas kita membuat methode dengan tipe void, yang berarti methode tersebut tidak mengembalikan nilai. Kita cetak keterangan menu untuk mempermudah pengguna menggunakan program, lalu kita simpan input user kedalam variabel bernama pilihan. Setelah itu kita buat seleksi kondisi switch, dengan kondisi, apabila pengguna memasukkan 1 maka program akan menampilkan perintah untuk memasukkan sisi alas dan tinggi, lalu kita masukkan masukkan user kedalam variabel alas dan tinggi, setelah itu kita cetak keterangan hasil luas segitiga dan memanggil methode luasSegitiga dengan parameter alas dan tinggi, apabila pengguna memasukkan 2 maka program akan menampilkan perintah untuk memasukkan sisi persegi, lalu kita simpan masukkan user kedalam variabel sisi, setelah itu kita cetak keterangan hasil luas persegi dan memanggil methode luasPersegi dengan parameter sisi, apabila pengguna memasukkan 3 maka program akan menampilkan perintah untuk memasukkan panjang dan lebar persegi panjang, lalu kita simpan masukkan user kedalam variabel panjang dan lebar, setelah itu kita cetak keterangan hasil luas persegi panjang dan memanggil methode luasPersegiPanjang dengan parameter panjang dan lebar, apabila pengguna memasukkan 4 maka program akan menampilkan perintah untuk memasukkan jari-jari lingkaran, lalu kita masukkan masukkan user kedalam variabel radius, setelah itu kita cetak keterangan hasil luas lingkaran dan memanggil methode luasLingkaran dengan parameter radius. Apabila user memasukkan diluar pilihan maka system akan mencetak keterangan pilihan tidak valid.",

        "Pada kode diatas kita membuat methode dengan tipe void, yang berarti methode tersebut tidak mengembalikan nilai. Kita cetak keterangan menu untuk mempermudah pengguna menggunakan program, lalu kita simpan input user kedalam variabel bernama pilihan. Setelah itu kita buat seleksi kondisi switch, dengan kondisi, apabila pengguna memasukkan 1 maka program akan menampilkan perintah untuk memasukkan sisi1 sisi2 dan sisi3, lalu kita masukkan masukkan user kedalam variabel sisi1, sisi2 dan sisi3, setelah itu kita cetak keterangan hasil keliling segitiga dan memanggil methode kelilingSegitiga dengan parameter sisi1, sisi2 dan sisi3, apabila pengguna memasukkan 2 maka program akan menampilkan perintah untuk memasukkan sisi persegi, lalu kita simpan masukkan user kedalam variabel sisi, setelah itu kita cetak keterangan hasil luas persegi dan memanggil methode kelilingPersegi dengan parameter sisi, apabila pengguna memasukkan 3 maka program akan menampilkan perintah untuk memasukkan panjang dan lebar persegi panjang, lalu kita simpan masukkan user kedalam variabel panjang dan lebar, setelah itu kita cetak keterangan hasil luas persegi panjang dan memanggil methode kelilingPersegiPanjang dengan parameter panjang dan lebar, apabila pengguna memasukkan 4 maka program akan menampilkan perintah untuk memasukkan jari-jari lingkaran, lalu kita masukkan masukkan user kedalam variabel radius, setelah itu kita cetak keterangan hasil luas lingkaran dan memanggil methode kelilingLingkaran dengan parameter radius. Apabila user memasukkan diluar pilihan maka system akan mencetak keterangan pilihan tidak valid.",
    ]
}

export default lab8String;