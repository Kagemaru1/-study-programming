function footballResults(input) {
    let game1 = input[0];
    let game2 = input[1];
    let game3 = input[2];

    let won = 0;
    let lost = 0;
    let draw = 0;

    if (Number(game1[0]) > Number(game1[2])) {
        won += 1;
    } else if (Number(game1[0]) < Number(game1[2])) {
        lost += 1;
    } else {
        draw += 1;
    }
    if (Number(game2[0]) > Number(game2[2])) {
        won += 1;
    } else if (Number(game2[0]) < Number(game2[2])) {
        lost += 1;
    } else {
        draw += 1;
    }
    if (Number(game3[0]) > Number(game3[2])) {
        won += 1;
    } else if (Number(game3[0]) < Number(game3[2])) {
        lost += 1;
    } else {
        draw += 1;
    }
    console.log(`Team won ${won} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${draw}`);
}
footballResults(["3:1",
    "0:2",
    "0:0"]);
footballResults(["4:2",
    "0:3",
    "1:0"]);
footballResults(["0:2",
    "0:1",
    "3:3"]);