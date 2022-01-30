
const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 30, premium: false},
    {username: 'sergio58', age: 30, premium: true},
];

const nonPremiumUsers = [];
for(const user of users){
    if(user.premium){
        console.log(`${user.username} es usuario premium`);
    } else {
        nonPremiumUsers.push(user);
    }
}

console.log("Listado de usarios no premium");
console.log(nonPremiumUsers);
