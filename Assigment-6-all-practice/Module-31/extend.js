class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    privideFeedback() {
        console.log(`${this.name} thank you for your feedback.`)
    }
}

class Instactor extends TeamMember {
    designation = 'web course instactor';
    team = 'web team';
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start support section from ${time}`);
    };
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}

class Developer extends TeamMember {
    designation = 'web course instactor';
    team = 'web team';
    tach;
    constructor(name, location, tach) {
        super(name, location);
        this.tach = tach;
    }
    startSupportSession(time) {
        console.log(`start support section from ${time}`);
    };
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}

class JobPlacement extends TeamMember {
    designation = 'web course instactor';
    team = 'web team';
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    startSupportSession(time) {
        console.log(`start support section from ${time}`);
    };
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}

const alia = new Developer('alia bhatt', 'dhaka', 'recet');
console.log(alia);
alia.privideFeedback();

const bipasha = new JobPlacement('bipasha basu', 'kolkhata', 'india');
console.log(bipasha);