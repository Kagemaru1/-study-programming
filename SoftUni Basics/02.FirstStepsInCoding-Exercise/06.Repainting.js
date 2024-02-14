function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let reducer = Number(input[2]);
    let hours = Number(input[3]);

    let price = (nylon + 2) * 1.5 + paint * 14.5 * 1.1 + reducer * 5 + 0.4;
    let workersPay = price * 0.3 * hours;
    console.log(price + workersPay);
}
repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"]);
