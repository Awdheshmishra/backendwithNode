//array methods

let arr = [1,2,3,4,5]
console.log(arr)
function print(el){
    console.log(el)
}
arr.forEach(print)

//or

arr.forEach(function(el){
    console.log(el)
}) 

let num = [1,2,3,4]
let double = num.map((el)=>{
    return el * 2
})
console.log(double)
