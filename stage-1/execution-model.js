// Execution model - How Javascript Code Runs Step by step

// Single Threaded Application - JavaScript 
// User Click , Timer , API calls - This Execution Model makes Without Blocking The UI 

/* Example 1 :
Work flow of execution (For setTimeOut)
-> Call stack execute sys code 
-> setTimeOut send to Web API 
-> CallBack waits in TaskQueue 
-> After stack is Empty the eventLoop Push it back */

console.log("A")
setTimeout(()=>{
    console.log("B")
},0)
console.log("C")


// Exampl 2 :

// Wrong Belief Promises - setTimeOut has Same Priority
// Promises   - Micro Task Queue
// setTimeout - Macro Task Queue
// Micro run befor Macro

console.log("Start")

Promise.resolve().then(()=>{
    console.log("Promise")
})

setTimeout(()=>{
    console.log("timeout")
},0)

console.log("End")



// Example 3 :
function a(){
    console.log("A start")

    setTimeout(()=>{
        console.log("Timeout inside A")
    })

    Promise.resolve().then(()=>{
        console.log("Promises inside A")
    })

    console.log("A Ends")
}

a()

// Execution context created when we run code ( Creation -> Execute)
// it contain :
// -> Memory ( variable, Functions)
// -> scope info
// -> this binding

// 2 - Types Of EC (Executional Context)
// Global EC (GEC) - Created once 
// Functional EC (FEC) - Created Per Function

// 2 stages Of Working 
// Creation ( Prepare Enviroment, Allocate Memory)


// Why functions are usable Before Defination
// -> Because It stored during Creation Phase

greet() // It Works

function greet(){
    console.log("Greet Function Works")
}

/*
In execution phase -> New Context Created For Greet
 
Flow Of Execution 
-> Run JS code
-> Global Context Created 
-> Creation Phase
    - Variable - Undefined
    - Function - Stored
    - this     - Window
-> Execution Phase
    - Assign Value
    - Executes Code
-> Function Call
    -> New Execution Context Created
    -> Creation Phase (Params, vars, This)
    -> Execution
    -> Return
-> Execution context Poped from the stack
*/

// IMPORTANT - Every Function call -> New World

// What Happen When Javascript Dont Have Creation Phase When running a Code


/*
with/ Without creation Phase
console.log(test)  with : undefined , without : reference Error 
test =10
*/

// closure also not possiable function inside func

function outer(){
    console.log("Outer Function")
    return function  inner(){
        console.log("Inner Function")
    }
}

outer().inner

function makeCounter(){
    value =0
    return{
        inc : function(){
            count++
        },
        dec : function(){
            count--
        },
        value: function(){
            return value
        }
    }
}

const counter1 = makeCounter()
counter1.inc
counter1.inc
console.log(counter1.value)