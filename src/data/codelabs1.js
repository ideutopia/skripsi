const data = {
    about : {
        title : "Membuat Program Biodata",
        update : "07-10-2020"
    },
    overview : {
        title : "Ringkasan",
        desc : "Bahasan pada lab ini akan meliputi beberapa pokok bahasan yang meliputi penggunann perintah untuk mencetak string pada Java, penggunaan Scanner untuk memasukkan data pengguna"
    },
    perintahPrint : {
        title : "Syntax Print",
        desc : "Perintah Print digunakan untuk menampilkan sebuah nilai dari String atau variabel, atau gabungan dari keduanya. Contoh penggunaan String adalah sebagai berikut",
        code : "System out println('String')System out println('Nama Anda')"
    },
    code : [
        "System Out Println;",
        "System Out Print;",
        "import java.util.Scanner;",
    ]

}

const codeFull = `package Codelab;
import java.util.Scanner;
public class biodata {
	\tpublic static void main(String[] args) {
		\t// TODO Auto-generated method stub
		\tScanner input = new Scanner(System.in);
        \t\tSystem.out.println("===Selamat Datang===");
        \t\tSystem.out.println("Untuk memulai silahkan isi beberapa form berikut : ");
        \t\tSystem.out.print("Nama Anda : ");
        \t\tString nama = input.nextLine();
        \t\tSystem.out.println("Jenis Kelamin : ");
        \t\tString kelamin = input.nextLine();
        \t\tSystem.out.print("Tempat Tanggal Lahir : ");
        \t\tString TTL = input.nextLine();
        \t\tSystem.out.print("Alamat : ");
        \t\tString alamat = input.nextLine();
        \t\tSystem.out.print("Umur : ");
        \t\tString umur = input.nextLine();
        \t\tSystem.out.print("Hobi : ");
        \t\tString hobi = input.nextLine();
        \t\tSystem.out.println("===");
        \t\tSystem.out.println("OK");
        \t\tSystem.out.println("Memproses...");
        \t\tSystem.out.println("===BIODATA===");
        \t\tSystem.out.println("Nama : "+nama);
        \t\tSystem.out.println("Jenis Kelamin : "+kelamin);
        \t\tSystem.out.println("TTL : "+TTL);
        \t\tSystem.out.println("Alamat : "+alamat);
        \t\tSystem.out.println("Umur : "+umur);
        \t\tSystem.out.println("Hobi : "+hobi);
    \t}
}`

export {data, codeFull};