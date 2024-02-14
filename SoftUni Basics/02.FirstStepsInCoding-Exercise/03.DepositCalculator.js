function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositLength = Number(input[1]);
    let anualPercent = Number(input[2]);

    let finaleSum = depositSum + depositLength * ((depositSum * (anualPercent / 100)) / 12);

    console.log(finaleSum);
}
depositCalculator(["200", "3", "5.7"]);
depositCalculator(["2350", "6", "7"]);