function worldSwimmingRecord(input) {
    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secToSwim1Meter = Number(input[2]);

    let ivansTime = distanceInMeters * secToSwim1Meter;
    let delay = Math.floor(distanceInMeters / 15) * 12.5;
    ivansTime = ivansTime + delay;

    let diff = Math.abs(recordInSec - ivansTime);

    if (ivansTime < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);