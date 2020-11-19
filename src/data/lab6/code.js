const full = `import java.util.Scanner;
public class segitigaBintang {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Masukkan maksimal jumlah bintang ");
		int range = input.nextInt();
		int a,b,c,d;
		for (a=1; a<=range; a++) {
			//loop luar
			for(b = range-1; b>=a; b--) {
				System.out.print(" ");
				//spasi samping
			}
			for(c =1;c<=a; c++) {
				//inner loop
				System.out.print("*");
				//Menampilkan bintang dari kiri ke kanan
			}
			for (d =1; d<= a-1; d++) {
				//inner loop 3
				System.out.print("*");
				//Menampilkan bintang dari kiri kekanan
			}
			System.out.println("");
		}

	}

}
`;
const starter = `import java.util.Scanner;
public class segitigaBintang {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.print("Masukkan maksimal jumlah bintang ");
		int range = input.nextInt();
        int a,b,c,d;
        //task1
        //akhir task1
	}
}
`
const task1Code = `
		for (a=1; a<=range; a++) {
            //task2
            //akhir task2
            //task3
            //akhir task3
            //task4
            //akhir task4
			System.out.println("");
        }`
const task2Code = `
			for(b = range-1; b>=a; b--) {
				System.out.print(" ");
				//spasi samping
            }`;
const task3Code = `for(c =1;c<=a; c++) {
    //inner loop
    System.out.print("*");
    //Menampilkan bintang dari kiri ke kanan
}`;

const task4Code = `for (d =1; d<= a-1; d++) {
    //inner loop 3
    System.out.print("*");
    //Menampilkan bintang dari kiri kekanan
}`;

export {starter, full, task1Code, task2Code, task3Code, task4Code}