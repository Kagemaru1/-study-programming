function trainingLab(input) {
    let width = Number(input[0]);
    let hight = Number(input[1]);

    let seatsHight = Math.floor((hight * 100 - 100) / 70);
    let seatsWidth = Math.floor((width * 100) / 120);
    let seats = seatsHight * seatsWidth - 3;

    console.log(seats);
}
trainingLab(["15", "8.9"]);
trainingLab(["8.4", "5.2"]);