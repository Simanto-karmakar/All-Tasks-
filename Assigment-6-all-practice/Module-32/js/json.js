const user = { Id: 1, name: 'gorib amir', job: 'actor' };

const stringfied = JSON.stringify(user);
// console.log(user);
// console.log(stringfied);

/* 
{ Id: 1, name: 'gorib amir', job: 'actor' }
{"Id":1,"name":"gorib amir","job":"actor"}
*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'khocukhat er pase',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'micbook', 'monitor', 'monitor'],
    revenue: 450000,
    isOpen: true,
    isNew: false
};

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

// console.log(shop);
