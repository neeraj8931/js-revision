console.log("counter js called");

let number=0;

const increase=( )=>{
    let numberSpan = document.getElementById("number");
    console.log("increase clicked");
    number++;
    numberSpan.innerText=number;
    
}

const decrease=()=>{
    let numberSpan = document.getElementById("number");
    console.log("decrease clicked");
    number--;
    numberSpan.innerText=number;
}

const reset = ()=>{
    let numberSpan = document.getElementById("number");
    console.log("reset clicked");
    number=0;
    numberSpan.innerText=number;
}