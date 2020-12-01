const variabel = {
  judul: "VARIABLE",
  deskripsi:
    "Varibel dapat dianalogikan sebagai sebagai sebuah kotak, dimana dalam kotak tersebut dapat kita taruh berbagai macam barang.",
  header: ["VARIABLE", "KONSTANTA", "KOMENTAR"],
  konten: [
    "Sebuah variable dapat digunakan untuk menyimpan nilai, yang mana nilai tersebut juga dapat diubah sesuai dengan nilai yang dibutuhkan.",
    "Penulisan variable yaitu : [tipe data] [variable] = [nilai];",
    "Konstanta adalah adalah sebuah variabel yang nilainya tetap dan tidak bisa dirubah lagi. Konstanta digunakan untuk menyimpan data yang tidak akan kita ubah.",
    "Penulisan konstanta yaitu : final [tipe data] [variable] = [nilai];",
    "(final int harga  pada kode ini membuat satu konstanta bernama harga yang mempunyai tipe data integer)",
    "Bertujuan untuk menonaktifkan barisan code agar tidak dijalankan atau juga untuk membantu programmer dalam membuat catatan di bagian-bagian code.",
  ],
  tugas: [
    "Sebutkan macam-macam bahasa pemrograman yang Anda ketaui!",
    "2.	Apa yang Anda ketahui tentang bahasa pemrograman Java!",
    "Apa yang dimaksud dengan variabel!",
    "Sebutkan tipe data pada bahasa java, beserta berikan contoh penulisan codenya!",
  ],
  code: [
    `public class Variable{
            public static void main(String[] args){
                int angka = 7;
                boolean cocok = true;
                char nilai = ‘A’;
                String hello = “Hello World”;
        
                System.out.println(hello);
            }
        }
        `,
    `final int harga = 2500;`,
    `public class Variable{
            public static void main(String[] args){
                // int angka = 7;
                /* boolean cocok = true;
                char nilai = ‘A’; */
                String hello = “Hello World”; 
        
                System.out.println(hello); 	// Untuk menampilkan nilai dari variabel hello
            }
        }
        `,
  ],
};

export default variabel;
