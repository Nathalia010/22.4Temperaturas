import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log(`Grados Kelvin: ${rKelvin}`);
console.log(`Grados Fahrenheit: ${rFahrenhit}`);

document.getElementById("btn-calcular").addEventListener("click", () => {
    
    
    const inputElemento = document.getElementById("num-cel");
    const tem_celsius = parseFloat(inputElemento.value);
    //let tem_celsios = parseFloat(prompt("Ingrese temperatura en celsius:"));


    
    let rKelvin = tem_celsius + 273.15;
    let rFahrenheit = (tem_celsius * 1.8) + 32;

    console.log(`Grados Kelvin: ${rKelvin}`);
    console.log(`Grados Fahrenheit: ${rFahrenheit}`);

    
    const cajaResultado = document.getElementById("resultado");
    cajaResultado.innerHTML = `Kelvin: ${rKelvin}K <br> Fahrenheit: ${rFahrenheit}°F`;
});