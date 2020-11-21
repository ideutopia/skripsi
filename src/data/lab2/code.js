const task1Code = `import java.util.Scanner;
public class operatorAritmatika {
	public static void main(String[] args) {
		int angka1;
		int angka2;
		Scanner input = new Scanner(System.in);
		System.out.print("Masukkan angka 1 : ");
		angka1 = input.nextInt();
		System.out.print("Masukkan angka 2 : ");
		angka2 = input.nextInt();
		System.out.println("Hasil Penjumlahan angka " +angka1 + " dengan " + angka2 + " adalah " + (angka1+angka2));
		System.out.println("Hasil Pengurangan angka " +angka1 + " dengan " + angka2 + " adalah " + (angka1-angka2));
		System.out.println("Hasil Perkalian angka " +angka1 + " dengan " + angka2 + " adalah " + (angka1*angka2));
		System.out.println("Hasil Pembagian angka " +angka1 + " dengan " + angka2 + " adalah " + (angka1/angka2));
		System.out.println("Hasil bagi/modulo angka " +angka1 + " dengan " + angka2 + " adalah " + (angka1%angka2));
	}
}`;
const task2Code = `import java.util.Scanner;
public class operatorPenugasan {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);
		System.out.print("Masukkan angka 1 : ");
		int angka1 = input.nextInt();
		System.out.print("Masukkan angka 2 : ");
		int angka2 = input.nextInt();
		System.out.println("Penugasan Penambahan");
		angka2 += angka1;
		System.out.println("Penambahan : " + angka2);
		System.out.println("Penugasan Pengurangan");
		angka2 -= angka1;
		System.out.println("Penambahan : " + angka2);
		System.out.println("Penugasan Perkalian");
		angka2 *= angka1;
		System.out.println("Perkalian : " + angka2);
		System.out.println("Penugasan Pembagian");
		angka2 /= angka1;
		System.out.println("Pembagian : " + angka2);
		System.out.println("Penugasan Sisa Bagi");
		angka2 %= angka1;
		System.out.println("Sisa bagi : " + angka2);
	}
}
`;
const task3Code = `
import java.util.Scanner;
public class operatorPembanding {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Masukkan nilai A : ");
		int nilaiA = input.nextInt();
		System.out.print("Masukkan nilai B : ");
		int nilaiB = input.nextInt();
		System.out.println("A lebih besar dari B : " + (nilaiA > nilaiB));
		System.out.println("A lebih kecil dari B : " + (nilaiA < nilaiB));
		System.out.println("A lebih kecil sama dengan B : " + (nilaiA <= nilaiB));
		System.out.println("A lebih besar sama dengan B : " + (nilaiA >= nilaiB));
		System.out.println("A sama dengan B : " + (nilaiA == nilaiB));
		System.out.println("A tidak sama dengan B : " + (nilaiA != nilaiB));
	}
}
`;
const task4Code = `public class operatorLogika {
	public static void main(String[] args) {
		boolean a = true;
		boolean b = false;
		boolean c = true;
		boolean d = false;
		//konjungsi 
		System.out.println("True && False = "+(a&&b));
		System.out.println("False && True = "+(b&&a));
		System.out.println("True && True = "+ (a&&c));
		System.out.println("False && False = "+ (b&&d));
		//disjungsi (atau)
		System.out.println("True || False = "+(a||b));
		System.out.println("False && True = "+(b||a));
		System.out.println("True && True = "+ (a||c));
		System.out.println("False && False = "+ (b||d));
		//negasi
		System.out.println("Negasi, !a " + !a);
		System.out.println("Negasi, !b " + !b);
		System.out.println("Negasi (True && True) = "+!(a&&c));
		System.out.println("Negasi (False && False) = "+ !(b||d));
		
	}
}
`;

export { task1Code, task2Code, task3Code, task4Code };
