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

function atualizarTextoServicos() {
        const total = document.querySelectorAll('.trabalhador').length;
        
        const elementoNumero = document.getElementById('quantidade');
        
        elementoNumero.textContent = total;
    }
    window.onload = atualizarTextoServicos;
