let msg = "    hello ";
console.log(msg.trim())
console.log(msg.toUpperCase())
console.log(msg.toLocaleLowerCase())

console.log(msg.trim().toUpperCase())  //method chaning

let msg2 = "ilovecoding"
console.log(msg2.indexOf("love"))
console.log(msg2.indexOf("Love"))
console.log(msg2.indexOf("o"))



let n = ["banana", "abaca", "mango",2,4.3,true]
console.log(n.length)
console.log(n[2])
n[10] = "papaya"
console.log(n)
n[1] = "kela"
console.log(n)


let cars = ["xuv", "bmw", "audi", "totyota"]
console.log(cars)
cars.push("maruti")//adding in last
console.log(cars)
cars.pop();
console.log(cars)//deleting in last

cars.unshift("maruti")//adding in start
console.log(cars)
cars.shift()//removing at start
console.log(cars)
