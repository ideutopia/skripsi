const pagesString = {
  about: {
    judul: "About",
    lead: "Selamat Datang",
    deskripsi:
      "Codelabs dirancang untuk memberikan pengalaman praktik langsung kepada siswa agar dapat melakukan kegiatan praktik secara mandiri dimanapun dan kapanpun melalui kegiatan studi kasus pembuatan program. Media ini dibuat sebagai penunjang kegiatan belajar mengajar pada mata pelajaran Pemrograman Dasar, sesuai dengan namanya Codelabs hanya berisi langkah-langkah praktis dalam pembuatan program disertai dengan penjelasan kode, untuk materi yang berbentuk teori dan konsep tidak disertakan pada media ini dengan alasan rancangan perencanaan pembelajaran(RPP) dari guru yang harus fleksibel.",
    konten: [
      "Media ini menggunakan teknologi Progressive Web App yang memungkinkan aplikasi dapat dipasang pada perangkat dan memiliki aksesibilitas offline, karena berbasis web media ini dapat diinstall dalam lintas platform dan OS, Seperti di Android, IOS, Windows, Linux dan Chrome OS. media ini juga menerapkan responsive web design sehingga tampilan media akan dinamis mengikuti ukuran layar perangkat pengguna. Media ini menggunakan arsitektur Single Page Application sehingga permuatan konten dalam media dapat dimuat secara instan tanpa perlu melakukan pembaruan ulang.",

      "Untuk menggunakan media secara offline anda perlu melakukaninstalasi terlebih dahulu, langkah-langkah penginstallan dapat anda lihat pada halaman help. Pastikan anda menggunakan browser yang terbaru seperti Google Chrome atau Firefox.",
    ],
  },
  help: {
    judul: "Help",
    lead: "Halaman bantuan penggunaan",
    deskripsi: "Pelajari cara menggunakan media melalui intruksi dibawah",
    caraInstall: [
      "Untuk menginstall aplikasi pastikan anda menggunakan browser web versi terbaru, sangat direkomendasikan jika anda menggunakan Google Chrome, apabila anda mengakses melalui perangkat seluler setelah 30 detik mengakses web, maka akan muncul prompt 'Tambahkan ke layar utama(Add to homescreen)' . Apabila anda menggunakan perangkat desktop akan muncul prompt untuk menginstall aplikasi pada kanan searchbar browser anda.",
      "Setelah anda klik install, maka anda perlu menunggu beberapa saat selagi perangkat anda mengunduh dan mengkonfigurasi asset-asset yang diperlukan.",
      "Setelah selesai maka aplikasi akan dapat diakses melalui daftar aplikasi anda.",
    ],
    promptInstall: [
      "Prompt install tidak muncul disebabkan oleh beberapa hal sebagai berikut : ",
      "Anda menggunakan browser yang tidak mendukung PWA, meskipun PWA mendukung berbagai browser moderen, namun terkadang beberapa browser tidak menyediakan dukungan terhadap PWA dengan alasan menghemat ukuran aplikasi atau meringankan memori penggunaan aplikasi. Solusi dari permasalahan ini adalah anda dapar menggunakan peramban Google Chrome, Safari, Microsoft Edge yang masing-masing sudah terpasang secara default pada Smartphone atau PC.",
      "Ruang penyimpanan tidak cukup. Aplikasi ini hanya menggunakan total 2 MB ruang penyimpanan, sebelum memasang aplikasi ini pastikan ada ruang penyimpanan yang cukup di perangkat anda",
    ],
    tidakCukupRuang:
      "Kemungkinan terjadi konflik penggunaan cache pada memori browser anda, solusinya adalah anda perlu untuk membersihkan cache pada browser anda terlebih dahulu",
    uninstall:
      "Untuk perangkat seluler cara uninstall sama dengan aplikasi biasa, pada perangkat desktop anda dapat melakukan uninstall dengan mengklik menu options lalu pilih uninstall app",
  },
};

export default pagesString;
