function tickets(antrian) {
    var bayar = {
        25: 0,
        50: 0,
        100: 0};

    for (var i = 0; i < antrian.length; i++) {
        switch (antrian[i]) {
            case 25:
                bayar[25]++
                break;
            
            case 50:
                bayar[25]--
                bayar[50]++
                break;
            
            case 100:
                bayar[50] ? bayar[50]-- : bayar[25] -= 2
                bayar[25]--
                break;
        }
      
        if (bayar[25] < 0) {
        return 'NO';
        }
    }
    return 'YES'
}

console.log(tickets([25, 25, 50]))  //==> YES
// console.log(tickets([25, 100]))  //==> NO
// console.log(tickets([25, 25, 50, 50, 100]))  //==> NO