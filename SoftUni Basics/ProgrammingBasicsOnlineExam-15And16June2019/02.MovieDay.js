function movieDay(input) {
    let timeToShoot = Number(input[0]);
    let cines = Number(input[1]);
    let cineTime = Number(input[2]);

    let prep = timeToShoot * 0.15;
    let cineTimeAll = cines * cineTime;

    let sumTime = prep + cineTimeAll;
    let diff = Math.round(Math.abs(timeToShoot - sumTime));

    if (timeToShoot >= sumTime) {
        console.log(`You managed to finish the movie on time! You have ${diff} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${diff} minutes.`);
    }
}
movieDay(["120", "10", "11"]);
movieDay(["60", "15", "3"]);