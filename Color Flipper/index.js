console.log("flip color");
let colors=["red","green","blue","orange","pink","purple","grey","Crimson","purple","grey","Crimson"];
let preColor;
const changeBackground =()=>{
    console.log("change background color  function has been triggered");
    let index= Math.random()*10;
    index = Math.floor(index);
    console.log("random",index);
    const container = document.getElementById("container");
    const textBox= document.getElementById("text-container");
    textBox.innerHTML=`<span class="bg-black p-[10px] mb-10">Background color : ${colors[index]} </span>`
    container.style.backgroundColor = colors[index];

}

changeBackground();