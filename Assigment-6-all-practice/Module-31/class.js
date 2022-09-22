// syntactic suger
class Instactor {
    name;
    designation = 'web course instactor';
    team = 'web team';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start support section from ${time}`);
    };
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}

const amir = new Instactor('amir', 'mumbai');
console.log(amir);
amir.startSupportSession('9.00');
amir.createQuiz('60');

const solaiman = new Instactor('solaiman khan', 'dhaka');
console.log(solaiman);