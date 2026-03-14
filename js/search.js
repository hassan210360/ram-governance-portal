async function searchPolicies(){

let q = document.getElementById("search").value.trim().toLowerCase();

let data = await fetch("data/policies.json");
let policies = await data.json();

let results = policies.filter(p =>
    (p.text && p.text.toLowerCase().includes(q)) ||
    (p.title && p.title.toLowerCase().includes(q)) ||
    (p.tags && p.tags.join(" ").toLowerCase().includes(q))
);

let html = "";

if(results.length === 0){
    html = "<p>No results found</p>";
}

results.forEach(p => {
    html += `
    <div class="result">
        <h3><a href="${p.url}">${p.title}</a></h3>
        <p>${p.text.substring(0,150)}...</p>
    </div>
    `;
});

document.getElementById("results").innerHTML = html;

}