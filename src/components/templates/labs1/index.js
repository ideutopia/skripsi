import React from 'react'
import {Code} from '../../atoms';
import {About, Overview} from '../../molecules';
import {OutputLab1} from '../../../assets';
import '../labs.css';
import {data, codeFull} from '../../../data/codelabs1';
import {starter, task2Code, task3Code, task1Code} from '../../../data/lab1/code.js'; 
const Lab1 = () => {
    return (
        <div className="content-wrapper">
           {/* <TinyCard title={data.overview.title} lastUpdate="07-10-2020" desc ={data.overview.desc}/>
           <TinyCard title={data.preview.title} desc ={data.preview.desc} />
           <TinyCard title={data.perintahPrint.title} desc ={data.perintahPrint.desc} code={data.perintahPrint.code} /> */}
           <About title={data.about.title} date= {data.about.update} />
           <Overview  title={data.overview.title} lastUpdate="07-10-2020" desc={data.overview.desc}/>
            <Code intruksi="Langkah pertama, buatlah sebuah class Java dengan nama biodata lalu isi kode awal sebagai berikut :" code={starter} penjelasan="Kode diatas apabila dijalankan tidak akan memunculkan apapun, akan kita tambahkan pada task selanjutnya, perhatikan tanda komentar task1, task2 dan task3 baris tersebut lah yang perlu diubah, jadi untuk baris diluar blok komentar biarkan default." />
            <Code intruksi="Pada komentar task 1 tambahkan kode berikut" code={task1Code} penjelasan="Kode diatas melakukan import fungsi Scanner dari package util di package java. Fungsi Scanner berguna untuk mendapat masukkan dari pengguna." />
            <Code intruksi="Selanjutnya pada blok komentar task 2 tambahkan kode berikut : " code={task2Code} penjelasan = "Pertama kita perlu mendekalarasikan instance dari Scanner dengan parameter System.in yang mana akan mengambil dan mengembalikan nilai yang sama seperti yang dimasukkan oleh pengguna dan kita simpan objek tersebut ke variabel bernama input agar nanti bisa kita gunakan secara berulang. Selanjutnya kita cetak beberapa intruksi agar pengguna dapat memasukkan identitasnya, isian identitas tersebut kita simpan nilainya pada variabel." />
            <Code intruksi="Terakhir pada blok komentar task3 tambahkan kode berikut : " code={task3Code} penjelasan ="Setelah nilai-nilai yang telah diinput oleh user tersimpan dimasing-masing variabel kita perlu mencetaknya ke layar, tentu kita perlu menambahkan beberapa keterangan sehingga tidak membuat pengguna menjadi bingung" />
            <Code intruksi="Kode lengkap adalah sebagai berikut : " code={codeFull} penjelasan="Perhatikan dengan saksama penggunaan huruf besar kecil titik koma dan lain-lain agar tidak terjadi eror." />
            <div className="card center">
                <div className="card-body">
                    <p>Tampilan kaluran dari baris program diatas adalah sebagai berikut : </p>
                    <img src={OutputLab1} alt="Output"/>
                </div>

            </div>  
        </div>
    )
}

export default Lab1
