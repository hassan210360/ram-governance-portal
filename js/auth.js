let attempts = 0
let maxAttempts = 5
function checkCode(){
let code = document.getElementById("code").value
if(code === "RAMPP01"){
sessionStorage.setItem("ram_access","true")
document.getElementById("authModal").style.display="none"
}
else{
attempts++
let err = document.getElementById("error")
err.innerHTML = "Incorrect passcode"
document.querySelector(".modal-box").classList.add("shake")
setTimeout(()=>{
document.querySelector(".modal-box").classList.remove("shake")
},400)
if(attempts >= maxAttempts){
err.innerHTML = "Portal locked. Refresh page."
document.getElementById("code").disabled = true
}
}
}
document.addEventListener("DOMContentLoaded",function(){
if(sessionStorage.getItem("ram_access") !== "true"){
document.getElementById("authModal").style.display="flex"
}
})
document.addEventListener("keydown",function(e){
if(e.key === "Enter"){
checkCode()
}
})