function playDino(button) {
                    let audio = document.getElementById("dinoSom");

                    audio.play(); // Toca o som

                    button.classList.add("shake"); // Adiciona a animação no botão clicado

                    setTimeout(() => {
                                        button.classList.remove("shake"); // Remove a animação após 0.5s
                    }, 500);
}
