const lab5String = {
  judul: "Membuat Program Deret Fibonnaci",
  update: "10-11-2020",
  deskripsi:
    "Pada codelab ini anda akan membuat sebuah program yang akan menampilkan deret bilangan Fibonnaci sesuai yang disikan pengguna. Untuk membuat program ini anda akan menerapakan perulangan for",
  link: "/codelabs5",
  kategori: "Perulangan",
  intruksi: [
    "Untuk memulai silahkan buat class bernama fibonnaci dan masukkan kode permulaan sebagai berikut :",
    "Pada blok kode task 1 tambahkan kode berikut ",
    "Pada blok komentar task2 tambahkan kode berikut :",
    "Kode lengkap adalah sebagai berikut :",
  ],
  penjelasan: [
    "Pada kode permulaan diatas kita lakukan import utilitas Scanner dari package java lalu kita instansiasi instance dari util tersebut dengan nama input.",

    "Pada kode diatas anda mendeklarasikan sebuah variabel dengan nama i lalu anda kita mencetak intruksi agar pengguna memasukan range jumlah deret yang diiginkan, selanjutnya nilai tersebut disimpan divariabel range. Setelah itu anda mendeklarasikan 3 variabel yaitu f,f2 dan fib yang masing-masing memiliki tipe data long, ketiga variabel tersebut akan digunakan untuk melakukan operasi dan pertukaran nilai untuk membentuk deret bilangan.",

    "Pada kode diatas anda menentukan perulangan dengan kondisi apabila i bernilai 1 dan i kurang dari jumlah range yang dimasukkan pengguna maka nilai i akan dinaikan sebesar 1. Lalu akan dicetak nilai dari variabel f2 yaitu nilai ke-n dari deret fibonnaci. Lalu kita tentukan nilai dari variabel fib sesuai dengan rumus dari fibonnaci yaitu n + (n-1), selanjutnya nilai dari variabel f akan diubah menjadi sama dengan variabel f2 dan variabel f2 nilainya akan mengambil nilai dari fib yang merupakan hasil operasi untuk menentukan nilai ke-n",

    "Perhatikan secara seksama agar tidak terjadi eror pada aplikasi, terutama pada penggunaan huruf kapital serta penempatan titik koma.",
  ],
};

export default lab5String;
