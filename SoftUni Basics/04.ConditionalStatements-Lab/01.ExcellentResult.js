function excellentResult(input) {
    let result = Number(input[0]);

    if (result >= 5.5) {
        console.log("Excellent!");
    }
}
excellentResult(["6"]);
excellentResult(["5"]);
excellentResult(["5.50"]);
excellentResult(["5.49"]);