function circleAreaAndPerimeter(input) {
    let r = Number(input[0]);

    let area = Math.PI * r ** 2;
    let perimeter = 2 * Math.PI * r;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
circleAreaAndPerimeter(["3"]);
circleAreaAndPerimeter(["4.5"]);