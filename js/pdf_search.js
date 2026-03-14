async function searchPolicies(){

let q=document.getElementById("searchBox").value.toLowerCase();

let response=await fetch("pdf_index.json");

let docs=await response.json();

let results=docs.filter(d =>
d.text.toLowerCase().includes(q)
);

let html="";

results.forEach(d=>{

html+=`
<div class="result">

<h3>${d.title}</h3>

<p>${d.text.substring(0,200)}</p>

<a href="${d.file}" target="_blank">
Open Policy
</a>

</div>
`;

});

document.getElementById("results").innerHTML=html;

}