const operator = {
  judul: "Operator",
  deskripsi:
    "Operator digunakan untuk melakukan manipulasi nilai pada Java, operator di Java terdiri dari operator matematika, operator relasi dan operator persamaan",
  head: {
    aritmatika: {
      judul: "ARITMATIKA",
      head: [
        "OPERATOR MATEMATIKA",
        "OPERATOR RELASI",
        "PERSAMAAN OPERATOR",
        "TUGAS",
      ],
      konten: {
        operatorMatematika: [
          "+	= untuk menjumlahkan nilai dalam sebuah pernyataan",
          "- 	= untuk mengurangi nilai dalam sebuah pernyataan",
          "*	= untuk mengalikan nilai dalam sebuah pernyataan",
          "/	= untuk membagi nilai dalam sebuah pernyataan",
          "% 	= sisa pembagian.",
        ],
        operatorRelasi: [
          "<	= kurang dari",
          "<=	= kurang dari sama dengan",
          "> = lebih besar dari",
          ">=	= lebih dari sama dengan",
        ],
        operatorPersamaan: ["==		sama dengan", "!=		tidak sama dengan"],
        tugas:
          "1.	Buatlah program yang dapat menghitung luas dan keliling bangun datar persegi, persegi panjang, dan segitiga! (3 class)",
      },
      code: {
        operatorMatematika: `public Aritmatika{
                    public static void main(String[] args){
                        int penjumlahan = 4 + 7;
                        int perkalian = 4 * 3;
                        int mod = 28 % 5; //modulus
                        System.out.println(perkalian); 	//menampilkan nilai 12
                        System.out.println(mod); 		//menampilkan nilai 3
                    }
                }
                `,
        operatorRelasi: `public RelasiOperator{
                    public static void main(String[] args){
                        System.out.println( 5 < 7 ); 		//menampilkan nilai true
                        System.out.println( 7 <= 5 ); 		//menampilkan nilai false
                        System.out.println( 7 >  9 ); 		//menampilkan nilai false
                        System.out.println( 6 >= 6 );		//menampilkan nilai true
                    }
                }
                `,
        operatorPersamaan: `int angka1 = 2;
                int angka2 = 7;
                System.out.println(angka1 == angka2);  // hasilnya adalah false
                System.out.println(angka1 != angka2);  // hasilnya adalah true
                `,
      },
    },
    scanner: {
      judul: "INPUT / SCANNER",
      konten:
        "Scanner yaitu mengambil nilai yang diinputkan oleh user yang mana dapat dapat ditampilkan ataupun diproses dalam program.",
      code: `import java.util.Scanner;
        class Scanner{
            public static void main(){
                Scanner scan = new Scanner(System.in);
                System.out.println(“Masukkan nama:”);
                String nama =  scan.nextLine();
                System.out.println(“Masukkan umur:”);
                int umur = scan.nextInt();
                System.out.println(“Nama Anda: ” + nama + “, Umur Anda : ” + umur + “ tahun”);
            }
        }
        `,
      tugas:
        "1.	Buatlah program menghitung volume bangun ruang kubus, balok, dan tabung dengan memanfaatkan input Scanner! (3 class)",
    },
    booleanOperator: {
      judul: "BOOLEAN OPERATOR",
      konten: {
        AND: {
          judul: "&& - AND - DAN",
          konten: [
            "1.	Dalam bahasan pemrograman java untuk menghubungkan 2 pernyataan atau lebih menggunakan “dan” yaitu dengan “&&”.",
            "Operator && hanya akan menampilkan benar (true) jika pernyataanya tersebut bernilai benar",
          ],
          code: `System.out.println(true && true); 	// cetak true
            System.out.println(false && false);	// cetak false
            System.out.println(false && true); 	// cetak false
            System.out.println(true && false); 	// cetak false
            System.out.println( 4 > 2  && 5 > 4 );
            `,
        },
        OR: {
          judul: "|| - OR - ATAU",
          konten: [
            "Dalam bahasan pemrograman java untuk menghubungkan 2 statement menggunakan “atau” yaitu dengan “||”.",
            "Operator || hanya akan menampilkan benar (true) jika salah satu pernyataannya ada yang bernilai benar.",
          ],
          code: `System.out.println(false || false); // prints false
            System.out.println(false || true); // prints true
            System.out.println(true || false); // prints true
            System.out.println(true || true); // prints true
            System.out.println(10 < 20 || 30 > 40);
            `,
        },
        NOT: {
          judul: "! - NOT - BUKAN/TIDAK",
          konten:
            "1.	Operator ! akan menampilkan nilai sebaliknya dari true menjadi false dan false menjadi true",
          code: `System.out.println(!false);
                System.out.println( !(5>=1) );
                `,
        },
      },
    },
  },
};

export default operator;
