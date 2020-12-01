const method = {
  judul: "Method",
  deskripsi: [
    "Java metode atau method adalah sebuah fungsi yang ada pada class. Class dapat memiliki atribut dan method. Setiap method memiliki tugas sendiri, tugas tersebut bisa berbentuk aktifitas atau proses.",
    "Jika diperhatikan dalam java selalu menemukan code “public static void main()” ini juga adalah salah satu method, namun sifatnya adalah method main/utama guna untuk menjalankan program.",
  ],
  noParameter: {
    judul: "Method Tanpa Parameter",
    deskripsi:
      "Method tanpa parameter ditandai dengan tidak adanya sintaks pada bagian kurung pada akhir nama method",
    code: `class Method1{
            int a = 10;
            //method
            void tampilTeks(){
                System.out.println("Hello.....");
            }
        
            public static void main(String[] args){
                //[nama kelas] [nama_variabel] = new [nama kelas]();	
        
                Method1 m = new Method1();
                m.tampilTeks();
                System.out.println(m.a);
            }
            //method
        }`,
  },
  parameter: {
    judul: "Method Dengan Parameter",
    deskripsi:
      "Parameter digunakan sebagai inisialiasi sebuah value yang akan diproses dalam method. Method berparameter ditandai dengan adanya sintaks  tipe data diikuti dengan nama variabel pada bagian kurung setelah nama method",
    code: `class MethodParameter{
            void mobil(String aktivitas, int kecepatan){
                System.out.println("Mobil " + aktivitas);
                if (kecepatan <= 60 ) {
                System.out.println("Mobil berjalan dengan kecepatan normal yaitu : " + kecepatan + " km/h");
                }else if (kecepatan > 60 ) {
                System.out.println("Mobil berjalan dengan kecepatan tinggi yaitu : " + kecepatan + " km/h");
                }
            }
        
            public static void main(String[] args){
                MethodParameter mp = new MethodParameter();
                mp.mobil("berjalan", 60);
            }
        }
        `,
  },
  return: {
    judul: "Return Pada Method",
    deskripsi:
      "Sintaks return digunakan apabila method yang kita deklarasikan perlu mengembalikan sebuah nilai dari proses yang telah dilakukan, untuk membuat method dengan return value kita perlu mendefiniskan tipe data sesuai return value sebelum nama method, Pada method non return value kita beri keterangan void.",
    code: `class MethodReturn{
            int result;	
            public static void main(String[] args){
                MethodReturn mr = new MethodReturn();
                
                mr.result = mr.max(10, 20);
                System.out.println(mr.result);
            }
            //[tipedata] nama_fungsi(){     return nama variable}
            int max(int numb1, int numb2){
                int hasil;
                if (numb1 > numb2) {
                    hasil = numb1;
                }else{
                    hasil = numb2;
                }
                return hasil;
            }
        
        }
        `,
  },
  tugas:
    "Buatlah sebuah program inputan yang dapat menghitung luas dan keliling persegi panjang, segitiga, dan lingkaran. manfaatkan penggunaan method atau fungsi!",
};

export default method;
