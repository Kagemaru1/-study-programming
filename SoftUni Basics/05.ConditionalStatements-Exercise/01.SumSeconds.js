function sumSeconds(input) {
    let player1 = Number(input[0]);
    let player2 = Number(input[1]);
    let player3 = Number(input[2]);

    let sum = player1 + player2 + player3;
    let minutes = Math.trunc(sum / 60);
    let seconds = sum % 60;

    if (seconds > 9) {
        console.log(`${minutes}:${seconds}`);
    } else {
        console.log(`${minutes}:0${seconds}`);
    }
}
sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);