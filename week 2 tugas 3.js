var tanggal =3; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 4; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1994; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var outTanggal;
var outBulan;
var outTahun;   

switch (bulan)
{
    case 1:
        outBulan='Januari';
        break;
        case 2:
        outBulan='Februari';
        break;
        case 3:
        outBulan='Maret';
        break;
        case 4:
        outBulan='April';
        break;
        case 5:
        outBulan='Mei';
        break;
        case 6:
        outBulan='Juni';
        break;
        case 7:
        outBulan='Juli';
        break;
        case 8:
        outBulan='Agustus';
        break;
        case 9:
        outBulan='September';
        break;
        case 10:
        outBulan='Oktober';
        break;
        case 11:
        outBulan='November';
        break;
        case 12:
        outBulan='Desember';
        break;
        default:
            outBulan=' bulan invalid '
}

console.log(tanggal+ ' '+outBulan+' '+tahun);

/* untuk memastikan input benar*/

if (tanggal<1 || tahun <0){console.log('Tanggal atau tahun terlalu kecil')
    
}
else if(tanggal >31 || tahun <0)

{
    console.log('tanggal atau tahun terlalu besar');}
    else{
        outTanggal=tanggal;
        outTahun=tahun;
        console.log(outTanggal+' '+outBulan+' '+outTahun);
    }