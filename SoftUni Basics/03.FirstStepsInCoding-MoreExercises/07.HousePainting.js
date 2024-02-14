function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let greenPaint = (((x * x) * 2) - (1.2 * 2) + ((x * y) * 2) - (1.5 * 1.5 * 2)) / 3.4;
    console.log(greenPaint.toFixed(2));

    let redPaint = ((x * y * 2) + (x * h)) / 4.3;
    console.log(redPaint.toFixed(2));
}
housePainting(["6", "10", "5.2"]);
housePainting(["10.25", "15.45", "8.88"]);
