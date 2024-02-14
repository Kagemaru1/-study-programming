function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let higth = Number(input[2]);
    let percentTakenVolume = Number(input[3]);

    let tankVolume =
        (length * width * higth * (1 - percentTakenVolume / 100)) / 1000;
    console.log(tankVolume);
}
fishTank(["85", "75", "47", "17"]);
fishTank(["105", "77", "89", "18.5"]);
