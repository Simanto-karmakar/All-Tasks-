function getOddNumbersOfAnArray(numbers) {
    const oddnumbers = [];
    for (i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            console.log(index, element);
            oddnumbers.push(element);
        }
    }
    return oddnumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddnumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddnumbers);
// getSumOfAnArray(oddnumbers);
// module 20-6 rechack