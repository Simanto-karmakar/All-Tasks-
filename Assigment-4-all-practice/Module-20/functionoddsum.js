function getSumOfArrey(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const Index = i;
        const element = numbers[Index];
        sum = sum + element;
        console.log(Index, element, sum);
    }
    return sum;

}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumOfArrey(myNumbers);