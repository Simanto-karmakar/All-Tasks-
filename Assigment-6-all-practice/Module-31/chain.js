const users = [{ name: 'abul', id: 1, job: 'doctor' }];

// console.log(users[0].id);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'abul', job: 'leader' }
    ]
}

const result = data.data[1].name
// console.log(result);

const user = {
    id: 5000,
    name: 'Thomas shelby',
    address: {
        street: {
            first: '30/a khochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantotment',
        city: 'dhaka'
    }
}

const userDetail = user.address.street.second;
console.log(userDetail);