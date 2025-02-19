function playDino(button) {
    let audio = document.getElementById("dinoSom");

    audio.play(); // Toca o som

    button.classList.add("shake"); // Adiciona a animação no botão clicado

    setTimeout(() => {
        button.classList.remove("shake"); // Remove a animação após 0.5s
    }, 500);
}
// buscando a imagem do dino la do html
const dino = document.querySelector('.dino');
const rock = document.querySelector('.rock');
const clound = document.querySelector('.clounds');


// buscando a classe que ativa a animação la no css
const jump = () => {
    dino.classList.add('jump');
// quando animação terminar ele removera a classe jump
    setTimeout( () => {
        dino.classList.remove('jump');
    }, 500)
}
//loop que verifica se perdemos o jogo
const loop = setInterval(()=>{
    const cloundPosition = clound.offsetLeft;
    const rockPosition = rock.offsetLeft;
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px','');

console.log(dinoPosition);

    if (rockPosition <= 150 && rockPosition > 0  && dinoPosition < 80){
        rock.style.animation = 'none';
        rock.style.left = `${rockPosition}px`;

        dino.style.animation = 'none';
        dino.style.bottom = `${dinoPosition}px`;

        clound.style.animation = 'none';
        clound.style.bottom = `${cloundPosition}px`;

        dino.src = './images/game/dinoDead.png';
        dino.style.width = '11%';
        dino.style.marginLeft = '50px';
        dino.style.marginBottom = '5px';

        clearInterval(loop);
    }
},10)

// o keydown diz que ele vai executar a função jump quando qualquer tecla for precionada
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') { // Verifica se foi a tecla "Seta para Cima"
        jump();
        event.preventDefault(); // Impede que a página role
    }
});