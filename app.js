import promptSync from 'prompt-sync';
const prompt = promptSync();

let tem_celsios = parseFloat(prompt("Ingrese temperatura en celsius:"));

    
let rKelvin = (tem_celsios +273.15);
let rFahrenhit = (tem_celsios *1.8)+32

console.log(`Grados Kelvin: ${rKelvin}`);
console.log(`Grados Fahrenheit: ${rFahrenhit}`);

