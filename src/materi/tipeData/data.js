const tipeData = {
  judul: "Tipe Data",
  deskripsi:
    "Dalam Java terdapat berbagai macam tipe data yang dapat kita gunakan untuk pengolahan dan manipulasi data dalam program kita",
  header: [
    "PENGENALAN SINGKAT TENTANG JAVA",
    "INSTALASI NOTEPAD++ DAN JDK (JAVA DEVELOPMENT KIT)",
    "MENAMPILKAN TEKS HELLO WORLD",
    "TIPE DATA",
  ],
  subHeading: ["INT", "BOOLEAN", "CHAR"],
  konten: [
    "Java adalah Bahasa pemrograman yang dirancang untuk membangun aplikasi yang aman dan canggih. Kelebihan java yaitu multiplatform, yakni dapat dijalankan di beberapa system operasi seperti: Windows, Linux, dan Mac Os. Serta hasil implementasinya dapat diterapkan pada aplikasi Desktop, Website, dan Mobile.",
    "Dalam pembelajaran pemrograman dasar ini akan mempelajari mengenai: tipe data, variabel, operator matematika, logika kondisi (if else), switch case, perulangan for, perulangan while do, dan array.",
    "Hal-hal yang perlu disiapkan sebelum masuk ke pembahasan lebih, didalam bahasa pemgrograman java membutuhkan aplikasi pendukung yaitu instalasi Notepadd++ sebagai editor, JDK (Java Development Kit) dan berserta dengan konfigurasinya.",
    "Integer adalah tipe data yang mencangkup nilai postif dan negatif termasuk angka 0 yakni -2,147,483,648 and 2,147,483,647.",
    "Boolean adalah tipe data yang hanya dapat memasang nilai benar atau salah (true or false).",
    "Tipe data ini hanya dapat mengeluarkan nilai huruf tunggal.",
  ],
  code: [
    `public class Hello {
	public static void main(String[] args) {
		System.out.println("Hello world…");
	}
}
`,
    `public class Integer {
	public static void main(String[] args) {
		System.out.println(7);
	}
}
`,
    `public class Boolean {
	public static void main(String[] args) {
		System.out.println(true);
	}
}
`,
    `public class Char {
	public static void main(String[] args) {
		System.out.println(‘A’);
	}
}
`,
  ],
};
export default tipeData;
