function vacationBookList(input) {
    let pagesPerBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let hoursPerDay = pagesPerBook / pagesPerHour / daysToRead;
    
    console.log(hoursPerDay);
}
vacationBookList(["212", "20", "2"]);
vacationBookList(["432", "15", "4"]);