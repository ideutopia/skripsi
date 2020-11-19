const full = `package Codelab;
import java.util.Scanner;
public class fibonnaci {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		int i;
		System.out.print("Masukkan range bilangan fibonnaci");
		int range = input.nextInt();
		long f= 1;
		long f2 = 1;
		long fib =1;
		for (i=1; i<=range; i++) {
			System.out.print(f2 + ", ");
			fib = f+f2;
			f = f2;
			f2= fib;
		}

	}

}
`;
const starter = `package Codelab;
import java.util.Scanner;
public class fibonnaci {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
        //task1
        //akhir task1
        //task2
        //akhirtask2

	}

}
`;

const task1Code = `int i;
System.out.print("Masukkan range bilangan fibonnaci");
int range = input.nextInt();
long f= 1;
long f2 = 1;
long fib =1;`;

const task2Code = `for (i=1; i<=range; i++) {
    System.out.print(f2 + ", ");
    fib = f+f2;
    f = f2;
    f2= fib;
}`

export {starter, full, task1Code, task2Code};