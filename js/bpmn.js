async function loadProcess(){

let response=await fetch("process.json");

let data=await response.json();

let html="";

data.steps.forEach(step=>{

html+=`<div class="node">${step}</div>`;

});

document.getElementById("diagram").innerHTML=html;

}

loadProcess();