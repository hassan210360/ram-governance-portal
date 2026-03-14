async function filterForms(){

let q=document.getElementById("filter").value.toLowerCase();

let response=await fetch("forms.json");

let forms=await response.json();

let results=forms.filter(f =>
f.name.toLowerCase().includes(q)
);

let html="";

results.forEach(f=>{

html+=`
<div>

<h3>${f.name}</h3>

<p>${f.description}</p>

<a href="${f.file}">
Download
</a>

</div>
`;

});

document.getElementById("forms").innerHTML=html;

}