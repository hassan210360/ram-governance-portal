
async function searchPolicies(){
let q=document.getElementById("search").value.toLowerCase();
let data=await fetch("data/policies.json");
let policies=await data.json();
let results=policies.filter(p=>p.text.includes(q));
let html="";
results.forEach(p=>{
html+=`<div><a href="${p.url}">${p.title}</a></div>`;
});
document.getElementById("results").innerHTML=html;
}
