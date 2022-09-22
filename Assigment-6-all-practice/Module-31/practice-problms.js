// practice problem-1 solve
const student = {
    name: 'fraddie',
    age: 26
}

const result = student.age;
// console.log(result);

// practice-problem-2 
let data = {
    location: [
        {
            latitute: '34.5,38.6',
            longtitute: '98.5,58.7',
            city: 'hyderabad',
            country: 'india'
        }
    ]
};

const result2 = data.location[0].city;
// console.log(result2);

// practice-problem-3
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

const result3 = user.email;
// console.log(result3);
const result4 = user.address;
// console.log(result4);
const result5 = user.address.city;
// console.log(result5);
const result6 = user.address.geo.lat;
// console.log(result6);
const result7 = user.company.name;
// console.log(result7);


const product = {
    name: 'Laptop',
    model: 'Yoga 3',
    price: 49000,
    dusk: '512SSD'
}
const { price } = product;
console.log(price);    