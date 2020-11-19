const starter = `//task 1
//Akhir task 1
public class biodata {
\tpublic static void main(String[] args) {
\t
\t//Task 2
\t//Akhir Task 2
\t//Task3
\t//Akhir task3
\t}
}`;

const task1Code = `import java.util.Scanner;`;

const task2Code = `\tScanner input = new Scanner(System.in);
\tSystem.out.println("===Selamat Datang===");
\tSystem.out.println("Untuk memulai silahkan isi beberapa form berikut : ");
\tSystem.out.print("Nama Anda : ");
\tString nama = input.nextLine();
\tSystem.out.print("Jenis Kelamin : ");
\tString kelamin = input.nextLine();
\tSystem.out.print("Tempat Tanggal Lahir : ");
\tString TTL = input.nextLine();
\tSystem.out.print("Alamat : ");
\tString alamat = input.nextLine();
\tSystem.out.print("Umur : ");
\tString umur = input.nextLine();
\tSystem.out.print("Hobi : ");
\tString hobi = input.nextLine();
\tSystem.out.println("===");
\tSystem.out.println("OK");
\tSystem.out.println("Memproses...");`
const task3Code = `\tSystem.out.println("===BIODATA===");
\tSystem.out.println("Nama : "+nama);
\tSystem.out.println("Jenis Kelamin : "+kelamin);
\tSystem.out.println("TTL : "+TTL);
\tSystem.out.println("Alamat : "+alamat);
\tSystem.out.println("Umur : "+umur);
\tSystem.out.println("Hobi : "+hobi);`

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

export {task2Code, task3Code, starter, task1Code, codeFull};