// const first = { a: 2, };
// const second = { a: 2 };
// const third = second;
// if (third === second) {
//     console.log('they are same')
// }
// else {
//     console.log('deffirent')
// }

const first = { a: 2, b: 2, d: 5 };
const second = { a: 2, c: 5, b: 2 };
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

// if (firstString === secondString) {
//     console.log('same')
// }
// else {
//     console.log('diffarent')
// }

function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondkeys = Object.keys(second);
    if (firstKeys.length === secondkeys.length) {
        for (const key of firstKeys) {
            if (first[key] !== second[key]) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

const issame = compareObject(first, second)
console.log(issame);