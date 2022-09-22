const student = {
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

const output = student.exam();
// console.log(output);
const retake = student.improvement('Algebra');
// console.log(retake);
const remaining = student.treatDay(900, 100);
// console.log(remaining);
const totalRemaining = student.treatDay(500, 50);
console.log(totalRemaining);