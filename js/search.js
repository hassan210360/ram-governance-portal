async function searchPolicies(){
let q=document.getElementById("search").value.toLowerCase();
let data=await fetch("data/policies.json");
let policies=await data.json();
let results=policies.filter(p=>p.text.includes(q));
let html="";
(d.text && d.text.toLowerCase().includes(q)) ||
(d.title && d.title.toLowerCase().includes(q)) ||
(d.tags && d.tags.join(" ").toLowerCase().includes(q))

results.forEach(p=>{
html+=`<div><a href="${p.url}">${p.title}</a></div>`;
});
document.getElementById("results").innerHTML=html;
}
