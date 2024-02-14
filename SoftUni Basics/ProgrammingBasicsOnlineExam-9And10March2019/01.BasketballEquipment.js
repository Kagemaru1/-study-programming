function basketBallEquioment(input) {
    let taxCost = Number(input[0]);

    let snickers = taxCost * 0.6;
    let sportSuit = snickers * 0.8;
    let ball = sportSuit / 4;
    let acsesoaries = ball / 5;

    let sumCost = taxCost + snickers + sportSuit + ball + acsesoaries;
    console.log(sumCost.toFixed(2));
}
basketBallEquioment(["365"]);
basketBallEquioment(["550"]);