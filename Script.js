const titulo = document.querySelector('#Text'); //Seleciona o Elemento do html 
const texto = "Me chamo Matheus Cavalcanti. sou Desenvolverdor Full-Stack e esse é meu portifólio..."; //Texto A Ser digitado Letra pro letra
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

const accordionTitles = document.querySelectorAll(".accordionTitle"); // Seleciona todos elementos da classe 

accordionTitles.forEach((accordionTitle) => { //Para cada elemento da classe acordeon title
  accordionTitle.addEventListener("click", () => { //Adicionando um evento de click
    if (accordionTitle.classList.contains("is-open")) { // Se na classe "accordionTitle" COnter "is-open" /**Primeiro Bloco */
      accordionTitle.classList.remove("is-open"); // Remove "is-opem"
    } else { //Se não tiver is-open
      const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("is-open"); //Faz parte do bloco else, Se for elSe Ele vai usar a estruta de cima para remover e usar essa para adicionar a classe.
      });
      accordionTitle.classList.add("is-open");
    }
  });
});

