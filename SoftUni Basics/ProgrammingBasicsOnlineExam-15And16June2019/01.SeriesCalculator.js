function seriesCalculator(input) {
    let series = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let epLength = Number(input[3]);

    let time = Math.floor(seasons * epLength * 1.2 * episodes + (seasons * 10));
    console.log(`Total time needed to watch the ${series} series is ${time} minutes.`);
}
seriesCalculator(["Lucifer", "3", "18", "55"]);
seriesCalculator(["Game of Thrones", "7", "10", "50"]);
seriesCalculator(["Riverdale", "3", "21", "45"]);