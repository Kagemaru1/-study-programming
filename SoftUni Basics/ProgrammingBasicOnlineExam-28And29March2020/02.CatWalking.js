function catWalking(input) {
    let minutesOfWalk = Number(input[0]);
    let walks = Number(input[1]);
    let calorie = Number(input[2]);

    let burnedCalories = minutesOfWalk * walks * 5;

    if (calorie / 2 > burnedCalories) {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
    } else {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    }
}
catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
catWalking(["40", "2", "300"]);