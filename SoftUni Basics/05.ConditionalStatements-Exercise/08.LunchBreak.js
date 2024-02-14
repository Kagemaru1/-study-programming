function lunchBreak(input) {
    let series = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let eatTime = breakLength / 8;
    let restTime = breakLength / 4;
    let sumTime = episodeLength + eatTime + restTime;

    if (sumTime <= breakLength) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(breakLength - sumTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(sumTime - breakLength)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);