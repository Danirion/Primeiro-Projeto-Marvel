/* 
OBJETIVO 1 - QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM TEMOS QUE:

-colocar a classe selecionado no personagem que passamos o mouse em cima 
para adicionar a animação nele.

-retirar a classe selecionado do persnoagem que está selecionado

OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

-alterar a imagem do Jogador 1
-alterar o nome do Jogador 1

*/
/*
OBJETIVO 1 - QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM TEMOS QUE:

-colocar a classe selecionado no personagem que passamos o mouse em cima 
para adicionar a animação nele.

-retirar a classe selecionado do persnoagem que está selecionado */

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;
        if (idSelecionado==='ultron') return;
        /*
    OBJETIVO 1 - QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM TEMOS QUE:
    
    -colocar a classe selecionado no personagem que passamos o mouse em cima 
    para adicionar a animação nele.
    
    -retirar a classe selecionado do persnoagem que está selecionado */

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        /*
OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem
-alterar a imagem do Jogador 1
-alterar o nome do Jogador 1

*/



const imagemJogador1 = document.getElementById('personagem-jogador-1');
imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

const nomeJogador1 = document.getElementById('nome-jogador1');
const nomeSelecionado = personagem.getAttribute('data-name');

nomeJogador1.innerHTML = nomeSelecionado;
    })
})





