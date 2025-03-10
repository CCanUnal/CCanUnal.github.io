const setup = () => {
    let temperatuur = prompt("Wat is de temperatuur? (in Celsius)");
    let farenheit = parseInt(temperatuur)*9/5+32;

    let lblCelcius = document.getElementById("celcius");
    let lblFahrenheit = document.getElementById("fah");

    console.log(farenheit);
    alert(farenheit);

    lblCelcius.innerText = "Celcius: "+temperatuur;
    lblFahrenheit.innerText = "Fahrenheit: "+farenheit;


}
window.addEventListener("load", setup);