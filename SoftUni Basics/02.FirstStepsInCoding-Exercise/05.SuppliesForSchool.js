function supplaisForSchool(input) {
    let pensils = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let price = (pensils * 5.8 + markers * 7.2 + cleaner * 1.2) * (1 - percentDiscount / 100);
    console.log(price);
}
supplaisForSchool(["2", "3", "4", "25"]);
supplaisForSchool(["4", "2", "5", "13"]);