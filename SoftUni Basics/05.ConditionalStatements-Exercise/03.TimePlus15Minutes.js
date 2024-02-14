function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let minutesSum = hours * 60 + minutes + 15;
    let newHours = Math.floor(minutesSum / 60);
    let newMinutes = minutesSum % 60;

    if (newHours > 23) {
        newHours = 0;
    }
    if (newMinutes > 9) {
        console.log(`${newHours}:${newMinutes}`);
    } else {
        console.log(`${newHours}:0${newMinutes}`);
    }
}
timePlus15Minutes(["1", "46"]);
timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["11", "08"]);
timePlus15Minutes(["12", "49"]);