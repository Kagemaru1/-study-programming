function skeleton(input) {
    let min = Number(input[0]);
    let sec = Number(input[1]);
    let length = Number(input[2]);
    let secPer100meters = Number(input[3]);

    let controlTime = min * 60 + sec
    let marinsTime = length / 100 * secPer100meters - (length / 120) * 2.5;

    let diff = Math.abs(controlTime - marinsTime);

    if (marinsTime <= controlTime) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${marinsTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
}
skeleton(["2", "12", "1200", "10"]);
skeleton(["1", "20", "1546", "12"]);