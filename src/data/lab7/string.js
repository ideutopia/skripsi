const lab7String = {
    judul : "Membuat Program Keranjang Belanja dengan While",
    update : "10-11-2020",
    deskripsi : "Pada codelab ini anda akan membuat sebuah program yang akan menampilkan sebuah piramida dengan ukuran sesuai yang disikan pengguna. Untuk membuat program ini anda akan menerapakan perulangan while, berbeda dengan perulangan for perulangan while dideklarasikan apabila kita ingin melakukan perulangan namun kita tidak menentukan secara eksplisit akhir dari perulangan itu.",
    link : '/codelabs7',
    intruksi : [
        "Untuk memulai silahkan buat class bernama belanja dan masukkan kode permulaan sebagai berikut :",
        "Pada blok kode task 1 tambahkan kode berikut ",
        "Pada blok komentar task2 tambahkan kode berikut :",
        "Kode lengkap adalah sebagai berikut :"
    ],
    penjelasan : [
        "Pada kode permulaan diatas kita lakukan import utilitas Scanner dari package java lalu kita instansiasi instance dari util tersebut dengan nama input",

        "Pada kode diatas kita deklarasikan sebuah variabel running dengan tipe data boolean yang akan digunakan sebagai patokan dari kondisi perulangan, nilai default dari variabel tersebut kita isikan dengan true. Lalu kita deklrasikan variabel counter dengan tipe data integer yang berguna sebagai penyimpan nilai dari data yang kita tambahkan. Lalu kita deklarasikan juga variabel jawaban dengan tipe data string yang akan digunakan untuk menyimpan jawaban dari user. Terakhir kita cetak nilai counter dengan keterangan.",

        "Pada kode diatas kita deklarasikan perulangan while dengan kondisi apabila running bernilai true maka loop akan terus dijalankan, Lalu kita mencetak Total item yang saat ini ada pada keranjang yaitu dengan memanggil nilai variabel counter. Lalu kita cetak pertanyaan apakah pengguna ingin menambahkan lagi item pada keranjang, jawaban dari pengguna akan disimpan pada variabel jawaban. Lalu kita lakukan seleksi kondisi apakah pengguna memasukkan huruf T, jika iya maka variabel running akan dievaluasi menjadi false dan looping akan dihentikan, namun apabila tidak maka nilai variabel counter ditambahkan 1 dan looping akan tetap berjalan",

        "Agar tidak terjadi eror, Perhatikan dengan seksama penggunaan huruf besar kecil, penempatan kurung kurawal, titik koma dll."
    ]

}

export default lab7String;