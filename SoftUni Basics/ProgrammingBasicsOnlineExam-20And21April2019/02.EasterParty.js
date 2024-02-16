function easterParty(input) {
    let gusts = Number(input[0]);
    let pricePerPerson = Number(input[1]);
    let budget = Number(input[2]);

    if (gusts >= 10 && gusts <= 15) {
        pricePerPerson *= 0.85;
    } else if (gusts > 15 && gusts <= 20) {
        pricePerPerson *= 0.80;
    } else if (gusts > 20) {
        pricePerPerson *= 0.75;
    }

    let cost = budget * 0.1 + gusts * pricePerPerson;
    let diff = Math.abs(budget - cost);

    if (budget >= cost) {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`);
    }
}
easterParty(["18", "30", "450"]);
easterParty(["8", "25", "340"]);
easterParty(["24", "35", "550"]); 