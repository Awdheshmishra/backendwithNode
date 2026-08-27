//this keyword

const student = {
    name:"awdhesh",
    age:23,
    eng:30,
    math:50,
    phy:40,
    getAvg(){
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(avg)
    }
}
student.getAvg()

//try catch

console.log("hello")
console.log("hello2")
r=30
try{
    console.log(r)
    console.log(w)
    console.log(t)
} catch{
    console.log("caught an error.. a is not defined")
    console.log("caught an error.. t is not defined")
}
console.log("hello3")
console.log("hello4")
//settimeout
/* console.log("hi there")
setTimeout(() => {
    console.log("4 second rukne ke baad")
}, 4000);

console.log("lo bhaiya")
 */
//set intervel

/* console.log("set intervel")
setInterval(() => {
    console.log("hello")
}, 2000); */
// console.log(id1)

// clearInterval(id1)


const students = {
    name:"awdhesh",
    marks:95,
    name:"awdh",
    marks:9,
    prop: this,
}
console.log(students.prop)
