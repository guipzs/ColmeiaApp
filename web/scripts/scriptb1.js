function postarAvaliacao() {
        // 1. Pega a estrela marcada
        const estrelaSelecionada = document.querySelector('input[name="estrela"]:checked');
        const comentario = document.getElementById('texto-comentario').value;

        if (!estrelaSelecionada || comentario.trim() === "") {
            alert("Por favor, selecione as estrelas e escreva um comentário!");
            return;
        }

        const valorEstrela = estrelaSelecionada.value;

        // 2. Cria o elemento da avaliação (a nova div)
        const container = document.getElementById('lista-avaliacoes');
        const novaDiv = document.createElement('div');
        novaDiv.classList.add('card-avaliacao');

        // 3. Monta o conteúdo
        novaDiv.innerHTML = `
            <strong>Nota: ${"★".repeat(valorEstrela)}${"☆".repeat(5 - valorEstrela)}</strong>
            <p>${comentario}</p>
            <small>Postado agora</small>
        `;

        // 4. Adiciona no topo da lista e limpa os campos
        container.prepend(novaDiv);
        document.getElementById('texto-comentario').value = "";
        estrelaSelecionada.checked = false;
    }