async function searchPolicies() {

    let q = document.getElementById("search").value.trim().toLowerCase();

    let data = await fetch("data/search_index.json");
    let index = await data.json();

    let results = index.filter(d =>
        (d.text && d.text.toLowerCase().includes(q)) ||
        (d.title && d.title.toLowerCase().includes(q)) ||
        (d.tags && d.tags.join(" ").toLowerCase().includes(q))
    );

    let html = "";

    if (results.length === 0) {
        html = "<p>No results found</p>";
    }

    results.forEach(d => {

        html += `
<div class="result">

<h3>${d.title}</h3>

<a href="${d.url}">Open Policy Page</a><br>

<a href="${d.pdf}" target="_blank">📄 PDF</a><br>

<a href="${d.word}" target="_blank">📝 Word</a>

</div>
`

    })

    document.getElementById("results").innerHTML = html;

}