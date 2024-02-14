function changeBureau(input) {
    let bitcoin = Number(input[0]);
    let yuan = Number(input[1]);
    let commission = Number(input[2]);

    let bitcoinToLev = bitcoin * 1168;
    let yuanToDollar = yuan * 0.15;
    let usdToLev = yuanToDollar * 1.76;
    let euro = ((bitcoinToLev + usdToLev) / 1.95) * (1 - commission / 100);

    console.log(euro.toFixed(2));
}
changeBureau(["1", "5", "5"]);
changeBureau(["20", "5678", "2.4"]);