function add(first, second) {
    const total = first + second;
    return total;
}

const result = add(10, 20);
console.log(result);


function fullName(first, last = 'chowdhury') {
    const name = first + ' ' + last;
    return name;
}

const name = fullName('Aslam');
// console.log(name);

function myName(first, last = 'karmakar') {
    const name = first + ' ' + last;
    return name;
}

const results = myName('Simanto');
console.log(results);