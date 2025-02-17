const setup = () => {
    let btnClick = document.getElementById("btnClick");
    btnClick.addEventListener("click", geklikt);
}
const geklikt = () => {
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = "Helloo";
}

window.addEventListener("load", setup);