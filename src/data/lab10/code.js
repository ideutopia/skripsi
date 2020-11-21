const full = `import java.util.Scanner;
public class arrayMultiDimensi {
	public static void main(String[] args) {
		String [][] meja = new String[2][3];
		Scanner input = new Scanner(System.in);
		for(int baris =0; baris < meja.length; baris++) {
			for(int kolom= 0; kolom <meja[baris].length; kolom ++) {
				System.out.format("Siapa yang akan duduk di meja (%d,%d):" , baris+1,kolom+1);
					meja[baris][kolom] = input.nextLine();
			}
		}
		//Menampilkan isi Array
		System.out.println("--------------------------------------------");
		System.out.println("                 Posisi Duduk               ");
		System.out.println("--------------------------------------------");
		for(int baris = 0; baris < meja.length; baris++) {
			for (int kolom=0; kolom < meja[baris].length; kolom++) {
				System.out.format("|%s | \t", meja[baris][kolom]);
			}
			System.out.println("");
		}
		System.out.println("---------------------------------------------");
	}

}`;

const starter = `import java.util.Scanner;
public class arrayMultiDimensi {
	public static void main(String[] args) {
		String [][] meja = new String[2][3];
		Scanner input = new Scanner(System.in);
        //task1
        //akhir task1
		System.out.println("--------------------------------------------");
		System.out.println("                 Posisi Duduk               ");
		System.out.println("--------------------------------------------");
        //task2
        //akhir task2
	}
}`;

const task1Code = `for(int baris =0; baris < meja.length; baris++) {
    for(int kolom= 0; kolom <meja[baris].length; kolom ++) {
        System.out.format("Siapa yang akan duduk di meja (%d,%d):" , baris+1,kolom+1);
            meja[baris][kolom] = input.nextLine();
    }
}`;

const task2Code = `for(int baris = 0; baris < meja.length; baris++) {
    for (int kolom=0; kolom < meja[baris].length; kolom++) {
        System.out.format("|%s | \t", meja[baris][kolom]);
    }
    System.out.println("");
}
System.out.println("---------------------------------------------");`;

export { starter, full, task1Code, task2Code };
