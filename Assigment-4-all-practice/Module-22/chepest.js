const phones = [
    { name: 'samsung', camera: 20, rom: '64gb', price: 32000, color: 'black' },
    { name: 'pixel', camera: 32, rom: '64gb', price: 52000, color: 'black' },
    { name: 'nothing', camera: 16, rom: '64gb', price: 62000, color: 'black' },
    { name: 'xioami', camera: 24, rom: '128gb', price: 22000, color: 'black' },
    { name: 'vivo', camera: 16, rom: '64gb', price: 26000, color: 'black' },
    { name: 'oppo', camera: 10, rom: '64gb', price: 20000, color: 'black' },
    { name: 'walton', camera: 8, rom: '64gb', price: 28000, color: 'black' },
    { name: 'samphony', camera: 5, rom: '32gb', price: 35000, color: 'black' }
]

function chepestPhone(phones) {
    let chepest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < chepest.price) {
            chepest = phone;
        }
    }
    return chepest;
}

const mySelection = chepestPhone(phones);
console.log(mySelection);