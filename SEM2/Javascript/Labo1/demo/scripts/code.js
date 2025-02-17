const setup = () => {
    let lblCursus = document.getElementById('lblCursus');
    lblCursus.addEventListener("click", change);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}
const change = () =>
{
 let lblCursus = document.getElementById('lblCursus');
 lblCursus.className = "cursus";


}
const show = () =>
{
    let txtName = document.getElementById("txtName");
    if (txtName.value !== "")
    {
        alert("jouw naam is " + txtName.value);
        console.log("jouw naam is " + txtName.value);

    } else {
        alert("Gelieve je naam in te vullen");
    }
}

window.addEventListener("load", setup);