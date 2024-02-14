function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    
    let price = (chickenMenu * 10.35 + fishMenu * 12.4 + veganMenu * 8.15) * 1.2 + 2.5;
    console.log(price);
}
foodDelivery(["2", "4", "3"]);
foodDelivery(["9", "2", "6"]);