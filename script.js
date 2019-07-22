// // let NomeCapivara = "jurema";

// // let contador = 0;

// // while(contador<12){
// //     console.log(NomeCapivara);
// //     contador ++;
    
// // }
// for(let contador = 0; contador<4; contador ++){
//     console.log (contador);
//     console.log("jerry");

// }
//let listaChamada = ["Almeida Tim","Didi","Jubileu","Ronaldinho",
                    //"CanCAn","Lakida Bemoth","Minas e Manos"];
// for(let contador = 0;contador<listaChamada.length; contador++){
//     console.log(listaChamada[contador]);
// }
//for(let aluno of listaChamada){
    //console.log(aluno);
//}
let filmes = [
    {Nome:"Rei Leão", classificação:12, estilo:"animacao"},
    {Nome:"Vingadores", classificação:16, estilo:"acao"},
    {Nome:"KillBill", classificação:19, estilo:"sangue"},
    {Nome:"O iluminado", classificação:20, estilo:"perturbador"},
    {Nome:"Tropa de Elite", classificação:100, estilo:"acao e violencia"}
];
let SeuNome = prompt("Digite o seu nome");
let Idade = prompt("Digite sua idade");

for(let filme of filmes){

   if(Idade >= filme.classificação){
       alert(`Olá ${SeuNome} você pode assistir o ${filme.Nome}`);
   }
}
