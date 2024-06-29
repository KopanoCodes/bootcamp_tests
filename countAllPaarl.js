function allPaarl(regNumbers) {
    const regNumberArray = regNumbers.split(', ');

    const paarlRegNumbers = [];

    for (let regNumber of regNumberArray) {
        if (regNumber.startsWith('CJ')) {
            paarlRegNumbers.push(regNumber);
        }
    }
    return paarlRegNumbers;
}
var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
var regNumbersForPaarl = allPaarl(regNumbers);