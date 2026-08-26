function hell0(){
    for(let i=0;i<=5;i++)
    console.log("help",i)
}
hell0()


function rollDice(){
    let rand = Math.floor(Math.random()*6)+1;
    console.log(rand)
}
rollDice();


function printname(name){
    console.log(name)
}
printname("karan")

function sum(a,b,c){
    console.log(a+b+c)
    // console(b-c+a)
    
}
sum(3,4,5)
// sum(2,4)


function isadult(age){
    // age = 14;
    if(age>=18){
        return "adult"
    }
    else{
        return "not adult"
    }

    // console.log("bye bye")
}
console.log(isadult(14)); // "not adult"
console.log(isadult(20)); // "adult"


function getSum(n){
    let sum =0;

    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}
// n =23
let p= (getSum(34))
console.log(p)

let str = ["hi   ","heelo",4,"jii"]
function concat (str){
    let rslt = " "
    for(let i=0; i<str.length;i++){
        rslt += str[i];
    }
    return rslt;
}
console.log(str)
console.log(concat (str))

//function expression

const sum4 = function(a,b){
    return a +b;

}
console.log(sum4(3,4))


function multiplegreet(func, count){
    for(let i=1;i <=count;i++){
        func()
    }
}

let greet = function(){
    console.log("hello")
}
multiplegreet(greet,100)

