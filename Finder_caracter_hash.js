const numHash = "5EE4D542B88A2C6D3FC69A78777BD6D26255CDB55D3F3F7E8B73EB358C539518";
let numQuantCaract = numHash.match(/7/gi);
console.log(numQuantCaract.length);



if (numQuantCaract.length >= 3) {
    console.log("Função possui mais que 3 caracteres")
} else if (numQuantCaract.length < 10) {
    console.log("Função possui menos de 10 caracteres")
}