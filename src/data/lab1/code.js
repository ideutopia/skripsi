const starter = `//task 1
//Akhir task 1
public class biodata {
\tpublic static void main(String[] args) {
\t// TODO Auto-generated method stub
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
export {task2Code, task3Code, starter, task1Code};