const full = `
import java.util.Scanner;
public class belanja {
	public static void main(String[] args) {
		boolean running = true;
		int counter = 0;
		String jawaban;
		Scanner input = new Scanner(System.in);
		while(running) {
			System.out.println("Total item dikeranjang anda : "+counter);
			System.out.println("Apakah anda ingin menambah belanjaan? : ");
			System.out.print("Y/T? ");
			jawaban = input.nextLine();
			if(jawaban.equalsIgnoreCase("t")) {
				running = false;
			}
			counter ++;
		}
		System.out.println("Dikeranjang anda terdapat "+counter+ " item");
	}
}
`;

const starter = `
import java.util.Scanner;
public class belanja {
	public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        /task1
        /task2
        //akhir task2
		//akhir taks1
	}
}
`;

const task1Code = `boolean running = true;
int counter = 0;
String jawaban;
//task2
//akhir task2
System.out.println("Dikeranjang anda terdapat "+counter+ " item");`;

const task2Code = `while(running) {
    System.out.println("Total item dikeranjang anda : "+counter);
    System.out.println("Apakah anda ingin menambah belanjaan? : ");
    System.out.print("Y/T? ");
    jawaban = input.nextLine();
    if(jawaban.equalsIgnoreCase("t")) {
        running = false;
    }
    counter ++;
}`;

export {starter, full, task1Code, task2Code};

