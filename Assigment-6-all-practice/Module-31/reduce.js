// map, forEach, find, filter, reduce;

const numbers = [1, 2, 3, 4, 5];
/* 
1:.reduce(accumulatorFunction, initial value)
2:accumulatorFunction use to perameter
3:const total=numbers.reduce( (previous,current) => previous + current , 0 );
*/

const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0);
console.log(total);
