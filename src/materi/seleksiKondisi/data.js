const seleksiKondisi = {
  judul: "Seleksi Kondisi",
  deskripsi:
    "Seleksi Kondisi atau biasa disebut percabangan sangat berguna dalam program, karena dengan ini kita bisa menentuka bagaimana flow dari program",
  if: {
    judul: "IF, ELSE, NESTED ELSE IF (KONDISI)",
    konten:
      "Sebuah pernyataan yang dapat dipakai muntuk mengambil keputusan berdasarkan suatu kondisi.",
    code: [
      `if (1 > 0) {
                System.out.println("Benar.");
            }
            `,
      `if (1 > 0) {
                System.out.println("Benar.");
            }else{
                System.out.println(“Salah”);
            }
            `,
      `int menu = 3;
            if (menu == 1) {
                System.out.println("Anda memilih nasi goreng");
            }else if (menu == 2) {
                System.out.println("Anda memilih mie goreng");			
            }else{
                System.out.println("Pilihan Anda tidak tersedia");			
            }
            `,
    ],
    tugas:
      "1.	Buatlah  program  untuk  mengetahui  apakah  bilangan  tersebut  ganjil  atau  genap, dengan piranti data inputan (Scanner)!",
  },
  switch: {
    judul: "SWITCH CASE",
    konten:
      "untuk menangani pengambilan keputusan yang melibatkan sejumlah atau banyak alternatif.",
    code: `class Switch{
            public static void main(String[] args){
                byte menu = 2;
                switch (menu) {
                    case 1:
                        System.out.println("Anda memesan bakso");
                    break;
                    case 2:
                        System.out.println("Anda memesan soto");
                    break;
                    case 3:
                        System.out.println("Anda memesan es jeruk");
                    break;
                    default:
                        System.out.println("Tidak ada di daftar menu"); 	
                 } 
            }
        }
        `,
    tugas: {
      desc: "Buatlah program dalam bentuk menu yang mampu menghitung :",
      list: [
        "Luas dan Keliling Persegi Panjang",
        "Luas dan Keliling Segitiga",
        "Luas dan Keliling Lingkaran",
      ],
    },
  },
};

export default seleksiKondisi;
