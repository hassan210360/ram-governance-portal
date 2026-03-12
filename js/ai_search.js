async function searchAI(){
let q=document.getElementById("query").value.toLowerCase()
let data=await fetch("data/knowledge_index.json")
let docs=await data.json()
let results = docs.documents.filter(d =>
(d.text && d.text.toLowerCase().includes(q)) ||
(d.title && d.title.toLowerCase().includes(q)) ||
(d.tags && d.tags.join(" ").toLowerCase().includes(q))
)
let html=""
    if(results.length===0){
        html="<p>No results found</p>"
        }
results.forEach(r=>{
    html+=`
        <div class="result">
        <h3>${r.title}</h3>
        <a href="${r.pdf}" target="_blank">📄 Open PDF</a>
        <br>
        <a href="${r.word}" target="_blank">📝 Word Version</a>
        <br>
    //    \' // // ***// ddd
        <a href="${r.word}" target="_blank">📄 Open WORD Version </a>
    </div>
`
})
document.getElementById("results").innerHTML=html
}