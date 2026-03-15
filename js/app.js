
const pages=[
"01_governance","02_investment","03_leasing","04_facility_management",
"05_capex_projects","06_performance","07_risk_compliance","08_master_data",
"09_ai_knowledge_hub","10_management_administration","11_finance_accounting",
"12_treasury_cash","13_procurement_commercial","14_human_resources",
"15_it_data_governance","16_sales_marketing","17_tenant_service",
"18_legal_contracts","19_internal_control_audit","20_ethics_conduct",
"21_business_continuity"
]

function runSearch(){
let q=document.getElementById("search").value.toLowerCase()
let results=document.getElementById("results")
results.innerHTML=""
pages.forEach(p=>{
if(p.includes(q)){
let div=document.createElement("div")
div.innerHTML="<a href='documents/"+p+".html'>"+p.replaceAll("_"," ")+"</a>"
results.appendChild(div)
}
})
}
