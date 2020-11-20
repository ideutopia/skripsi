const full = `package Codelab;
import java.util.Scanner;
public class bangun {
	static Scanner input = new Scanner(System.in);
	public static void main(String[] args) {
		System.out.println("Selamat datang");
		System.out.println("1. Menghitung Luas");
		System.out.println("2. Menghitung Keliling");
		System.out.print("Masukkan pilihan anda : ");
		int pilihan = input.nextInt();
		if(pilihan == 1) {
			MenghitungLuas();
		}else if(pilihan == 2) {
			MenghitungKeliling();
		}else {
			System.out.println("Menu tidak tersedia");
		}
		
	}
	public static double luasSegitiga(double alas, double tinggi) {
		return 0.5 * alas * tinggi;
	}
	public static double luasPersegiPanjang(double panjang, double lebar) {
		return panjang * lebar;
	}
	public static double luasPersegi(double sisi) {
		return  sisi * sisi;
	}
	public static double luasLingkaran(double radius) {
		return Math.PI * radius*radius;
	}
	
	//Blok Keliling
	
	public static double kelilingSegitiga(double sisi1, double sisi2, double sisi3) {
		return sisi1 + sisi2 + sisi3;
	}
	
	public static double kelilingPersegi(double sisi) {
		return 4 * sisi;
	}
	public static double kelilingPersegiPanjang(double panjang, double lebar) {
		return 2* (panjang+lebar);
	}
	public static double kelilingLingkaran(double radius) {
		return 2 * Math.PI * radius;
	}
	
	public static void MenghitungLuas() {
		System.out.println("====Selamat datang====");
		System.out.println("Menu : ");
		System.out.println("1. Segitiga");
		System.out.println("2. Persegi");
		System.out.println("3. Persegi Panjang");
		System.out.println("4. Lingkaran");
		System.out.print("Silahkan pilih bangun yang ingin anda hitung luasnya : ");
		int pilihan = input.nextInt();
		switch(pilihan) {
		case 1:
			System.out.println("Menghitung luas segitiga");
			System.out.print("Masukkan alas : ");
			double alas = input.nextDouble();
			System.out.print("Masukkan tinggi : ");
			double tinggi = input.nextDouble();
			System.out.println("Luas segitiga adalah : " + luasSegitiga(alas, tinggi)); 
			break;
		case 2:
			System.out.println("Menghitung luas persegi");
			System.out.print("Masukkan sisi : ");
			double sisi = input.nextDouble();
			System.out.println("Luas persegi adalah : "+ luasPersegi(sisi));
			break;
		case 3:
			System.out.println("Menghitung luas persegi panjang");
			System.out.print("Masukkan panjang : ");
			double panjang = input.nextDouble();
			System.out.print("Masukkan lebar : ");
			double lebar = input.nextDouble();
			System.out.println("Luas segitiga adalah : " + luasPersegiPanjang(panjang, lebar));
			break;
		case 4:
			System.out.println("Menghitung luas lingkaran");
			System.out.print("Masukkan jari-jari : ");
			double radius = input.nextDouble();
			System.out.println("Luas lingkaran adalah : "+ luasLingkaran(radius));
			break;
		default:
			System.out.println("Maaf pilihan yang anda masukkan tidak valid");
			break;
		}
	}
	public static void MenghitungKeliling() {
		System.out.println("====Selamat datang====");
		System.out.println("Silahkan pilih bangun yang ingin anda hitung kelilingnya");
		System.out.println("1. Segitiga");
		System.out.println("2. Persegi");
		System.out.println("3. Persegi Panjang");
		System.out.println("4. Lingkaran");
		System.out.print("Silahkan pilih bangun yang ingin anda hitung luasnya : ");
		int pilihan = input.nextInt();
		switch(pilihan) {
		case 1:
			System.out.println("Menghitung keliling segitiga");
			System.out.print("Masukkan sisi 1 : ");
			double sisi1 = input.nextDouble();
			System.out.print("Masukkan sisi 2 : ");
			double sisi2 = input.nextDouble();
			System.out.print("Masukkan sisi 3 : ");
			double sisi3 = input.nextDouble();
			System.out.println("Keliling segitiga adalah : "+ kelilingSegitiga(sisi1, sisi2, sisi3));
			break;
		case 2:
			System.out.println("Menghitung keliling persegi");
			System.out.print("Masukkan sisi  : ");
			double sisi = input.nextDouble();
			System.out.println("Keliling dari persegi adalah " + kelilingPersegi(sisi));
			break;
		case 3:
			System.out.println("Menghitung keliling persegi panjang");
			System.out.print("Masukkan panjang  : ");
			double panjang = input.nextDouble();
			System.out.print("Masukkan lebar  : ");
			double lebar = input.nextDouble();
			System.out.println("Keliling dari persegi panjang adalah "+kelilingPersegiPanjang(panjang, lebar));
			break;
		case 4:
			System.out.println("Menghitung keliling lingkaran");
			System.out.print("Masukkan jari-jari  : ");
			double radius = input.nextDouble();
			System.out.println("Keliling dari persegi panjang adalah "+kelilingLingkaran(radius));
			break;
		default:
			break;
		}
	}
}
`;

const starter = `
import java.util.Scanner;
public class bangun {
	static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        //task1
        //akhir task1
    }
    //task2
    //akhir task2
    //task3
    //akhir task3
    //task4
    //akhir task4
    //task 5
    //akhir task5
}`;

const task1Code = `System.out.println("Selamat datang");
System.out.println("1. Menghitung Luas");
System.out.println("2. Menghitung Keliling");
System.out.print("Masukkan pilihan anda : ");
int pilihan = input.nextInt();
if(pilihan == 1) {
    MenghitungLuas();
}else if(pilihan == 2) {
    MenghitungKeliling();
}else {
    System.out.println("Menu tidak tersedia");
}`

const task2Code = `public static double luasSegitiga(double alas, double tinggi) {
    return 0.5 * alas * tinggi;
}
public static double luasPersegiPanjang(double panjang, double lebar) {
    return panjang * lebar;
}
public static double luasPersegi(double sisi) {
    return  sisi * sisi;
}
public static double luasLingkaran(double radius) {
    return Math.PI * radius*radius;
}`;

const task3Code = `public static double kelilingSegitiga(double sisi1, double sisi2, double sisi3) {
    return sisi1 + sisi2 + sisi3;
}

public static double kelilingPersegi(double sisi) {
    return 4 * sisi;
}
public static double kelilingPersegiPanjang(double panjang, double lebar) {
    return 2* (panjang+lebar);
}
public static double kelilingLingkaran(double radius) {
    return 2 * Math.PI * radius;
}`

const task4Code = `public static void MenghitungLuas() {
    System.out.println("====Selamat datang====");
    System.out.println("Menu : ");
    System.out.println("1. Segitiga");
    System.out.println("2. Persegi");
    System.out.println("3. Persegi Panjang");
    System.out.println("4. Lingkaran");
    System.out.print("Silahkan pilih bangun yang ingin anda hitung luasnya : ");
    int pilihan = input.nextInt();
    switch(pilihan) {
    case 1:
        System.out.println("Menghitung luas segitiga");
        System.out.print("Masukkan alas : ");
        double alas = input.nextDouble();
        System.out.print("Masukkan tinggi : ");
        double tinggi = input.nextDouble();
        System.out.println("Luas segitiga adalah : " + luasSegitiga(alas, tinggi)); 
        break;
    case 2:
        System.out.println("Menghitung luas persegi");
        System.out.print("Masukkan sisi : ");
        double sisi = input.nextDouble();
        System.out.println("Luas persegi adalah : "+ luasPersegi(sisi));
        break;
    case 3:
        System.out.println("Menghitung luas persegi panjang");
        System.out.print("Masukkan panjang : ");
        double panjang = input.nextDouble();
        System.out.print("Masukkan lebar : ");
        double lebar = input.nextDouble();
        System.out.println("Luas segitiga adalah : " + luasPersegiPanjang(panjang, lebar));
        break;
    case 4:
        System.out.println("Menghitung luas lingkaran");
        System.out.print("Masukkan jari-jari : ");
        double radius = input.nextDouble();
        System.out.println("Luas lingkaran adalah : "+ luasLingkaran(radius));
        break;
    default:
        System.out.println("Maaf pilihan yang anda masukkan tidak valid");
        break;
    }
}`

const task5Code = `public static void MenghitungKeliling() {
    System.out.println("====Selamat datang====");
    System.out.println("Silahkan pilih bangun yang ingin anda hitung kelilingnya");
    System.out.println("1. Segitiga");
    System.out.println("2. Persegi");
    System.out.println("3. Persegi Panjang");
    System.out.println("4. Lingkaran");
    System.out.print("Silahkan pilih bangun yang ingin anda hitung luasnya : ");
    int pilihan = input.nextInt();
    switch(pilihan) {
    case 1:
        System.out.println("Menghitung keliling segitiga");
        System.out.print("Masukkan sisi 1 : ");
        double sisi1 = input.nextDouble();
        System.out.print("Masukkan sisi 2 : ");
        double sisi2 = input.nextDouble();
        System.out.print("Masukkan sisi 3 : ");
        double sisi3 = input.nextDouble();
        System.out.println("Keliling segitiga adalah : "+ kelilingSegitiga(sisi1, sisi2, sisi3));
        break;
    case 2:
        System.out.println("Menghitung keliling persegi");
        System.out.print("Masukkan sisi  : ");
        double sisi = input.nextDouble();
        System.out.println("Keliling dari persegi adalah " + kelilingPersegi(sisi));
        break;
    case 3:
        System.out.println("Menghitung keliling persegi panjang");
        System.out.print("Masukkan panjang  : ");
        double panjang = input.nextDouble();
        System.out.print("Masukkan lebar  : ");
        double lebar = input.nextDouble();
        System.out.println("Keliling dari persegi panjang adalah "+kelilingPersegiPanjang(panjang, lebar));
        break;
    case 4:
        System.out.println("Menghitung keliling lingkaran");
        System.out.print("Masukkan jari-jari  : ");
        double radius = input.nextDouble();
        System.out.println("Keliling dari persegi panjang adalah "+kelilingLingkaran(radius));
        break;
    default:
        break;
    }
}`;

export {starter, full, task1Code, task2Code, task3Code, task4Code, task5Code};