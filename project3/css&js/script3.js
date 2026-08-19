/* for(let i=0; i<=3; i=i+2){
    console.log(i)
}

for(let i=0; i<=3; i++){
    console.log(i)
} */

    //print all odd nu,ber i to 15

/* for(let i=0;i<=15;i++){
    if(i%2!=0){
        console.log("odd: "+i)
    }
    // console.log("even")
} */

   /*  for(let i=0;i<=15;i++){
    if(i%2==0){
        console.log("even: "+i)
    }
    
} */

    //table 
    // let n = 10;
    // // let n = prompt("enter your number that you want to make pahada or table")
    //  for(let i=n;i<=n*10;i=i+n){
    //     console.log(i)
    //     }

    /* let i=-5 ;
    while(i<=5){
        console.log(i)
        i++;
    } */

        //favourite movie 
 /*  const favmovie = "avatar";
  let guess = prompt("guess myfavmovie")
  while ((guess != favmovie) && (guess != "quit")){
    guess = prompt("wrong guess!  please try again!!!")
  }

  if(guess == favmovie){
    console.log("congrats")
  } */

// break
    /* let i =1;
    while(i<=5){
        if(i==3){
            break;
        }
        console.log(i)
        i++
    }
    console.log("we used break at 3") */
      
    //array looops
   /*  let n = [1,2,3,"banana", "kela", "angoor"]
    n.push("aam")
    for(let i =0; i<n.length;i++){
        console.log(i,n[i])
    }

    //reverse
    for(let i=n.length-1;i>=0;i--){
        console.log(i,n[i])
    } */

    //for of loops

/*     let fruits = ["banana", "leechi", "mango", "apple"]
    for(fruit of fruits){
        console.log(fruit)
    } */


    // object is used to store key value pairs and complex entities
    let student = {
        name: "shradha",
        age:12,
        village:" hariyana",
        colors: ["pink","red",2]
    }
    console.log(student)

    const thread = {
        username: "awdheshmishra9",
        content:"video",
        likes:50,
        reposts:23,
        tags:"#karan #awdhesh"
    }
    console.log(thread)

    //getting values of objects
    console.log(student.colors)
    console.log(thread["username"])

    //add update the value
    console.log(student.age)
    student.age = 18
    console.log(student.age)
    console.log(thread.likes=500,thread.reposts=230)
    console.log(student)
    console.log(thread)
    student.gender = "male"//adding
    console.log(student)
    console.log(delete student.age)

    //array of objects

    const classinfo = [
        {
        name:"karan",
        grade:"A+",
        city:"lucknow"
        },
         {
        name:"Awdhesh",
        grade:"A++",
        city:"gkp"
        },
         {
        name:"Mishra",
        grade:"A+++",
        city:"baliya"
        }
    ]
    console.log(classinfo)

    //math objects

    let n = 5.09
    let m = 3
    console.log(Math.PI)
    console.log(Math.cos(m))
    console.log(Math.floor(n))
    console.log(Math.SQRT2)
    console.log(Math.pow(n,m))
    console.log(Math.LOG2E)
    console.log(Math.random())
    console.log(Math.round(n))
    console.log(Math.max(m,n))

    console.log(Math.random()*100)+1
    console.log(Math.random()*100)+2
    console.log(Math.random()*100)+3
    console.log(Math.random()*100)+4
    console.log(Math.random()*100)+1
    





