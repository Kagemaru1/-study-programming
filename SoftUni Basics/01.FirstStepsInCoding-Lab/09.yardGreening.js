function yardGreening(input) {
    let yard = Number(input[0]);
    let cost = yard * 7.61;
    let discount = cost * 0.18;
    let finaleCost = cost - discount;
    console.log(`The final price is: ${finaleCost} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"]);
yardGreening(["150"]);