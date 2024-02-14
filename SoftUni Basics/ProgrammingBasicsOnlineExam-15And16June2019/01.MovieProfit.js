function movieProfit(input) {
    let movie = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percent = Number(input[4]);

    let money = days * tickets * ticketPrice * (1 - percent / 100);
    console.log(`The profit from the movie ${movie} is ${money.toFixed(2)} lv.`);
}
movieProfit(["The Programmer", "20", "500", "7.50", "7"]);
movieProfit(["Python Basics", "40", "34785", "10.45", "14"]);
movieProfit(["The Jungle", "22", "20500", "9.37", "30"]);