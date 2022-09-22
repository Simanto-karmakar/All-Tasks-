const names = ['abul', 'babul', 'chubul', 'dubul', 'babul', 'mokbul', 'abul', 'chubul', 'tabul', 'babul', 'dubul', 'libul'];

const unique = [];
function removeDuplicate(names) {
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniquenames = removeDuplicate(names);
console.log(uniquenames);