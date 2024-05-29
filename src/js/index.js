let bntNao = document.getElementById("nao");
let height = window.innerHeight - 150;
let width = window.innerWidth - 450;
let quantasVezes = 0
bntNao.addEventListener("mouseover", function() {
    bntNao.style.position = "absolute"
    bntNao.style.top = Math.random() * height + "px";
    bntNao.style.left = Math.random() * width + "px";
    quantasVezes += 1;
})
function redirecionar(){
    window.location.href = "src/sim/second.html";
}
