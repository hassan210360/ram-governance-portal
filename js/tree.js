
document.addEventListener("DOMContentLoaded",function(){
document.querySelectorAll(".tree li").forEach(function(node){
node.addEventListener("click",function(e){
this.classList.toggle("open");
e.stopPropagation();
});
});
});
