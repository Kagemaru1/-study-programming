function sleepyTomCat(input) {
    let restDays = Number(input[0]);
    let playTime = (365 - restDays) * 63 + restDays * 127;

    if (playTime > 30000) {
        console.log("Tom will run away");
        console.log(`${Math.floor((playTime - 30000) / 60)} hours and ${(playTime - 30000) % 60} minutes more for play`);
    }
    else {
        console.log("Tom sleeps well");
        console.log(`${Math.floor((30000 - playTime) / 60)} hours and ${(30000 - playTime) % 60} minutes less for play`);
    }
}
sleepyTomCat(["20"]);
sleepyTomCat(["113"]);