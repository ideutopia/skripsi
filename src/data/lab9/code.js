const full = `
import java.util.Scanner;
public class array1D {
	public static void main(String[] args) {
		String[] kelompok = new String[5];
		Scanner input = new Scanner(System.in);
		//mengisi data Array
		for (int i=0; i < kelompok.length; i++) {
			System.out.print("Anggota kelompok ke-" +(i+1)+": ");
			kelompok[i] = input.nextLine();
		}
		System.out.println("--------------------------");
		//tampilkan isi array
		System.out.println("Anggota kelompok anda");
		for(String k : kelompok) {
			System.out.println("   "+ k);
		}
	}
}`;

const starter = `
import java.util.Scanner;
public class array1D {
	public static void main(String[] args) {
		String[] kelompok = new String[5];
		Scanner input = new Scanner(System.in);
		//task1
		//akhir task1
		System.out.println("--------------------------");
		//task2
        //akhir task2
	}
}
`;

const task1Code = `for (int i=0; i < kelompok.length; i++) {
    System.out.print("Anggota kelompok ke-" +(i+1)+": ");
    kelompok[i] = input.nextLine();
}`;

const task2Code = `System.out.println("Anggota kelompok anda");
for(String k : kelompok) {
    System.out.println("   "+ k);
}`;

export { full, starter, task1Code, task2Code };
