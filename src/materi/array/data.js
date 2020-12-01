const array = {
  judul: "ARRAY",
  deskripsi:
    "Tempat penyimpanan beberapa nilai tapi hanya ada di dalam satu tipe data, dan menyimpan beberapa nilai tersebut hanya dengan satu variabel saja. Untuk membedakan variablenya yaitu dengan memberikan indeks di setiap nialinya.",
  array1D: {
    judul: "Array 1 Dimensi",
    deskripsi:
      "Alokasi memori statis yaitu mengalokasikan memori untuk tipe data yang sama secara berurutan.",
    code: `int[] data;

        data = new int[3]; 		
        data[0] = 10; data[1] = 20; data[2] = 30;	// cara mendeklarasikan array model 1
        
        int[] data2 = {100,200,300,400};		// cara mendeklarasikan array model 2
            
        System.out.println(data[2]);
                
        for (int i = 0; i < 4 ;i++ ) {
            System.out.println(data2[i]);
        }
        `,
    tugas: [
      "Buatlah program dengan menggunakan array yang dapat menampilkan daftar nilai, total nilai, nilai maximum, nilai minimum dan rata-rata.",
      "Buatlah program inputan untuk data kota yang pernah dikunjungi menggunakan array 1 dimensi!",
    ],
  },
  array2D: {
    judul: "Array 2 Dimensi",
    deskripsi:
      "Pada array dua dimensi kita dapat menambahkan nilai yang sifatnya seperti matriks (baris dan kolom)",
    code: `int[][] nilai;

    nilai = new int[3][3];
    
    nilai[0][0] = 68;
    nilai[1][1] = 82;
    nilai[2][2] = 84;
    
    System.out.println(nilai[0][0]);
    System.out.println(nilai[1][1]);
    System.out.println(nilai[2][2]);
    `,
  },
  tugas:
    "Buatlah program dengan menginputkan nilai angka pada array 2 dimensi, dengan syarat terdapat 2 data array yang mana seperti 2 matriks, yang nantinya harus dikurangkan nilainya.",
};
export default array;
