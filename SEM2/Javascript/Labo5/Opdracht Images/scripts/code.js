    const setup = () => {
        let img=document.getElementById('imgPhoto');
        img.addEventListener('mouseover', muisover);
        img.addEventListener('mouseout', muisuit);

}
const muisover = () => {
    let img=document.getElementById('imgPhoto');
    let txtText=document.getElementById('txtText');

    img.src="./images/cat.jpg"
    txtText.innerHTML="Muis gaat er over";

}
    const muisuit = () => {
        let img=document.getElementById('imgPhoto');
        let txtText=document.getElementById('txtText');

        img.src="./images/payload.jpg"
        txtText.innerHTML="Muis is er uit";

    }
window.addEventListener("load", setup);