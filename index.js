//1 : like button program

let con=document.querySelector("#container")
let love=document.querySelector("i")

con.addEventListener("dblclick",function(){
    love.style.transform="translate(-50%,-50%) scale(1)";
    love.style.opacity=0.8;

    setTimeout(function(){
        love.style.opacity=0;
    },1000);
     setTimeout(function(){
        love.style.transform="translate(-50%,-50%) scale(0)";
    },2000);
    
});


//2 : SetTimeOut: The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    // delay our code to execute
    // 2000(miliSecond) mins after 2 second

setTimeout(function(){
        console.log("hello1");  
},2000)
setTimeout(function(){
    console.log("hello2");
},5000)
