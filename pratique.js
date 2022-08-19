//Este arquivo é PARA PRATICAR TUDO AQUI, desde exercícios, revisões, etc//

/*
                              Regras: 
    -Sempre 'esvazie' o editor;
    -Copie e cole tudo que se faz aqui para o arquivo 'Introdução ao Java Script;
    -Faça tudo quanto é tipo de exercícios aqui;
    -Faça revisões em geral aqui;
    -Coloque títulos e subtitulos em tudo. Coloque também referências linkadas para posterior consulta;
    -Procure sempre salvar para não perder os exercícios e (ou) revisões;
    -Novas regras podem ser acrescentadas conforme necessidade;
    -Regras podem ser alteradas conforme necessidade;

*/


//Exercícios de revisão de Manipulação de Strings;  Faça exercícios consultando os vários materiais (apostila, vídeo, internet, curso, youtube)


//Incremento e decremento utilizado em várias operações matemáticas (Adição, subtração, multiplicação, divisão, resto divisão)

/*Primeiro, temos que declarar uma variável (não uma constante, pois esta não 
pode alterar o seu valor durante execução de programa).

*/

const numHash = "5EE4D542B88A2C6D3FC69A78777BD6D26255CDB55D3F3F7E8B73EB358C539518";
let numQuantCaract = numHash.match(/[oa]/gi);
console.log(numQuantCaract.length);