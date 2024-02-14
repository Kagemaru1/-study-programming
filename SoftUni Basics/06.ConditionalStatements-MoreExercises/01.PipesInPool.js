function pipesInPool(input) {
    let poolVolumeInLitre = Number(input[0]);
    let pipe1 = Number(input[1]);
    let pipe2 = Number(input[2]);
    let workerAbsence = Number(input[3]);

    let debit = (pipe1 + pipe2) * workerAbsence;
    let pipe1Percent = ((pipe1 * workerAbsence) / debit) * 100;
    let pipe2Percent = ((pipe2 * workerAbsence) / debit) * 100;
    if (poolVolumeInLitre < debit) {
        console.log(`For ${workerAbsence.toFixed(2)} hours the pool overflows with ${(debit - poolVolumeInLitre).toFixed(2)} liters.`);
    } else {
        console.log(`The pool is ${((debit / poolVolumeInLitre) * 100).toFixed(2)}% full. Pipe 1: ${pipe1Percent.toFixed(2)}%. Pipe 2: ${pipe2Percent.toFixed(2)}%.`);
    }
}
pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);