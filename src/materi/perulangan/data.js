const looping = {
  judul: "PERULANGAN",
  deskripsi:
    "Dalam logika perulangan akan memberikan data secara berulang hingga data yang dibutuhkan tercapai",
  FOR: {
    konten: [
      "Format penulisan for yaitu:",
      `for ( [inisiasi]; [kondisi;
            [increment] ) {
                [pernyataan];
        }
    `,
      "Membuat bangun segitiga : ",
    ],
    code: `for (int x = 1; x <= 5 ; x++) { // mengulang nilai hingga membuat 5 baris data
        for (int y = 1; y <= x ; y++) { // mengulan nilai untuk memenuhi kondisi diatas
                System.out.print("*");// menampilkan bintang kesamping
            }
            System.out.println();//untuk membuat setiap barisnya
        }
        `,
  },
  while: {
    judul: "DO WHILE",
    konten: {
      WHILE: {
        judul: "WHILE",
        deskripsi:
          "Dalam while akan memerlukan pendeklarasian variabel terlebih dahulu, kemudian nilai tersebut akan di uji dengan syarat yang ada dalam kondisi while.",
        code: `int i = 0;
              while( i < 5){				// membuat syarat untuk perulangannya
                  System.out.println(“No. ” + i);	// menampilkan nilai
                  i++;				// increment
              }
              `,
      },
      DOWHILE: {
        judul: "DO WHILE",
        deskripsi:
          "Do akan menampilkan pernyataan terlebih dahulu, meskipun nilai tidak sesuai syarat perulangan pada while.",
        code: `int i = 0;
              do{					// menjalankan pernyataan terlebih dahulu
                  System.out.println(“No. ” + i); 
                  i++;
              } while( i < 5);				// menentukan nilai tersebut dengan syarat yang ada
              `,
      },
    },
  },
  BREAK: {
    judul: "BREAK DAN CONTINUE",
    deskripsi:
      "Berfungsi untuk membuat syarat agar perulangan berhenti ataupun melewati dari suatu nilai yang ditetapkan.",
    code: `for(int i = 0; i < 5; i++){
            if(i == 3){
                break; // menghentikan sampai index ke 3 || continue; melewati nilai index ke 3	
        }
        System.out.println(“No” + i);
        } 
        `,
  },
};
export default looping;
