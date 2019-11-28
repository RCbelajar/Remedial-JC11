function population (p0, percent, imigran, targetPopulasi){
    var hasil = 0;

    while (p0 < targetPopulasi){

        p0 += p0 * percent / 100 + imigran;
        hasil++;
    }

    return 'Waktu yang dibutuhkan adalah ' + hasil +' tahun'
}
console.log( population(1000, 2, 50, 1200) )