//webapplication and website 


//Defining the variable with let keyword and const keyword 
let x=10
console.log(x) 

x=30
console.log(x)

//const u = 45 
//cosole.log(u)


//u=56


//---------------------------------------->


let a = 100
let b = 20 

//Arithmetic -
//+-/*%
console.log(56 % 5)
console.log(56 / 5)

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)



let h = 1000
let k = 500


console.log(h+k)
console.log(h-k)
console.log(h*k)
console.log(h/k)
console.log(h%k)

//DRI - don't repeat yourself 

//Function functionName(para, para2){
//   //statements
//}

//functionName(12,13) 


console.log('---------------------')

function calculator(x,y){
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
}

calculator(100,50)
console.log('-----------------')
calculator(1000,500)

//------------------------------   


//basic type of functioins 
//function without parameter and without return type

console.log('---------------')

function add(){
    console.log(7+8)
}
add()
add()

//function with parameter and without return type 

console.log('--------------')
function sub(x,y){
    console.log(x-y)
}

sub(20,5)
sub(200,5)

//function with parameter and with return type 
//100 show 100 given?

function mul(x,y){
    return(x*y)
}

let h = mul(100,2)
    console.log(h)
    console.log(h+200)
    console.log(h-200)

