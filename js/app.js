
async function searchPolicies(){
let q=document.getElementById("search").value.toLowerCase()
let res=document.getElementById("results")
res.innerHTML=""
if(q.length<2){return}
let data=await fetch('data/policies.json').then(r=>r.json())
data.forEach(p=>{
if(p.title.toLowerCase().includes(q)){
let div=document.createElement("div")
div.innerHTML="<a href='"+p.url+"'>"+p.title+"</a>"
res.appendChild(div)
}
})
}

function toggleGroup(id){
let el=document.getElementById(id)
el.style.display = el.style.display==="none"?"block":"none"
}
