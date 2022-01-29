
const times = [60, 75, 79, 80, 55, 59];

let total = 0;
for(const time of times){
    total += time
}
let avgTimes = total/times.length 

console.log("La media del vector")
console.log(times)
console.log("es", avgTimes)