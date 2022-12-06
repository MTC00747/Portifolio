const titulo = document.querySelector('#Text'); //Seleciona o Elemento do html 
const texto = "Me chamo Matheus Cavalcanti, sou Desenvolverdor Full-Stack, esse é meu portifólio..."; //Texto A Ser digitado Letra pro letra
const interval = 40; //Intervalo de digitação da letra
//Váriaveis necessárias 

//Função para digitar //Seleciona as Const 
function ShowText(titulo, texto, interval){
    const Char = texto.split("").reverse();//.Split divide os caraceteres, .reverse reverte o Char  char é igual ao texto

    //Cons taype Age como digitador 
    const type = setInterval(() => {
       //Interval dispara os caractereces Se acabar os caracteres A Estrutura de condição if para o disparo
        if (!Char.length) {
            return clearInterval(type);
        }
        const next = Char.pop();  /// Método pop remove o ultimo elemento do array
        titulo.innerHTML += next; // No Titulo, o documento selecionado, joga a letra na tela
    }, interval); //setInterva chama Interval por último


}

ShowText(titulo, texto, interval); //Chama a função com esses parametros;


/*acordeão */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  })}