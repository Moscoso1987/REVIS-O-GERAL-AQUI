const numHash = "EFDA2F169068EC3F1DD3DF0FBDD4832B5FBB28D69045F88D83CE34C562C2CB35";
let numQuantCaract = numHash.match(/7/gi);
console.log(numQuantCaract.length);



if (numQuantCaract.length >= 3) {
    console.log("Função possui mais que 3 caracteres")
} else if (numQuantCaract.length < 10) {
    console.log("Função possui menos de 10 caracteres")
}
