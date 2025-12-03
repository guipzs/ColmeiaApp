const botoes = document.querySelectorAll('.meuBotao');


botoes.forEach(botao => {
    botao.addEventListener('click', function() {
    
        const destino = this.getAttribute('data-destino');

       
        if (destino) {
            window.location.href = destino;
            console.log("Redirecionando para:", destino);
        }
    });
});
