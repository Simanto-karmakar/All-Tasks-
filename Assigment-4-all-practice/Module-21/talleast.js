function maxInArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        console.log(element);
    }
}

const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log(tallest);