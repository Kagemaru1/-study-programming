function mountainRun(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let metreForSec = Number(input[2]);

    let slowdown = Math.floor(distance / 50) * 30;
    let time = distance * metreForSec + slowdown;

    if (time < record) {
        console.log(`Yes! The new record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(time - record).toFixed(2)} seconds slower.`);
    }
}
// mountainRun(["10164", "1400", "25"]);
// mountainRun(["5554.36", "1340", "3.23"]);
mountainRun(["1377", "389", "3"]);