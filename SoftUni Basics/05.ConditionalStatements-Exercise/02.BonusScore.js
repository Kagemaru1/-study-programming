function bonusScore(input) {
    let score = Number(input[0]);

    let bonusScore = 0;

    if (score <= 100) {
        bonusScore += 5;
    } else if (score > 100 && score <= 1000) {
        bonusScore += score * 0.2;
    } else {
        bonusScore += score * 0.1;
    }

    if (score % 2 === 0) {
        bonusScore += 1;
    }

    if (score % 10 === 5) {
        bonusScore += 2;
    }

    console.log(bonusScore);
    console.log(score + bonusScore);
}
bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);