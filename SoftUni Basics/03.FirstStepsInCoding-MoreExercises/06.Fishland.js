function fishLand(input) {
    let skumriqPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let kgPalamud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgShellfish = Number(input[4]);

    let palamudPrice = skumriqPrice * 1.6;
    let safridPrice = cacaPrice * 1.8;

    let priceTag = kgPalamud * palamudPrice + kgSafrid * safridPrice + kgShellfish * 7.5;
    console.log(priceTag.toFixed(2)); 
}
fishLand(["6.90", "4.20", "1.5", "2.5", "1"]);
fishLand(["5.55", "3.57", "4.3", "3.6", "7"]);