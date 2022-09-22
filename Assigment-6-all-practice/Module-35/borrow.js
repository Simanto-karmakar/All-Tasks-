const kodomAli = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculas', 'algebra', 'geometry'],
    exam: function () {
        return this.name + ' is participent in the exam.'
    },
    improvement: function (subject) {
        this.exam();
        return `${this.name} is taken improvement exam in ${subject}`
    },
    treatDay: function (amount, trips) {
        this.money = this.money - amount - trips;
        return this.money;
    }
}

const result = kodomAli.exam();
// console.log(resul

const badamAli = {
    name: 'kahca badam',
    money: 8000
}

const result2 = kodomAli.exam.call(badamAli);
// console.log(result2);

const badamMoey = kodomAli.treatDay.call(badamAli, 600, 50);
// console.log(badamMoey);

const badamMoney2 = kodomAli.treatDay.apply(badamAli, [1000, 100]);
// console.log(badamMoney2);

const badamAliTreat = kodomAli.treatDay.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);