const starter = 
`import java.util.Scanner;
public class konverterSuhu {
	public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        //task1
        //akhir task1
        //task2
        //akhirtask2

}`

const task1 = 
`double celcius, fahrenheit, kelvin,reamur;
System.out.println("Silahkan pilih menu berikut");
System.out.println("1. Celcius ke Fahrenheit");
System.out.println("2. Celcius ke Kelvin");
System.out.println("3. Celcius ke Reamur");
System.out.print("Pilihan anda : ");
int pilihan = input.nextInt();`

const task2 = 
`switch(pilihan) {
    case 1:
        //task3
        //akhir task3
        break;
    case 2 :
        //task4
        //akhir task4
        break;
    case 3 :
        //task5
        //akhir task5
        break;
    default :
        System.out.println("Maaf input tidak tersedia");
        break;
}`

const task3 = 
`System.out.print("Masukkan suhu Celcius : ");
celcius = input.nextDouble();
fahrenheit = celcius * 9/5 + 32;
System.out.println("Suhu dalam skala Fahrenheit adalah : "+fahrenheit);`

const task4 =  `System.out.print("Masukkan suhu Celcius");
celcius = input.nextDouble();
kelvin = celcius + 273;
System.out.println("Suhu dalam skala Kelvin adalah : "+kelvin);`

const task5 = `System.out.print("Masukkan suhu Celcius : ");
celcius = input.nextDouble();
reamur = celcius * 4/5;
System.out.println("Suhu dalam skala Kelvin adalah : "+reamur);`

const full = 
`import java.util.Scanner;
public class konverterSuhu {
	public static void main(String[] args) {
        //task1
		double celcius, fahrenheit, kelvin,reamur;
		Scanner input = new Scanner(System.in);
		System.out.println("Silahkan pilih menu berikut");
		System.out.println("1. Celcius ke Fahrenheit");
		System.out.println("2. Celcius ke Kelvin");
		System.out.println("3. Celcius ke Reamur");
		System.out.print("Pilihan anda : ");
		int pilihan = input.nextInt();
        //akhir task1
        //task2
		switch(pilihan) {
		case 1:
			//task3
			System.out.print("Masukkan suhu Celcius : ");
			celcius = input.nextDouble();
			fahrenheit = celcius * 9/5 + 32;
            System.out.println("Suhu dalam skala Fahrenheit adalah : "+fahrenheit);
            //akhir task3
			break;
		case 2 :
			//task4
			System.out.print("Masukkan suhu Celcius");
			celcius = input.nextDouble();
			kelvin = celcius + 273;
            System.out.println("Suhu dalam skala Kelvin adalah : "+kelvin);
            //akhir task4
			break;
		case 3 :
			//task5
			System.out.print("Masukkan suhu Celcius : ");
			celcius = input.nextDouble();
			reamur = celcius * 4/5;
            System.out.println("Suhu dalam skala Kelvin adalah : "+reamur);
            //akhir task5
			break;
		default :
			System.out.println("Maaf input tidak tersedia");
			break;
        }
        //akhir task2
	}

}`

export {starter, task1, task2,task3, task4, task5, full}