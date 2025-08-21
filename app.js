// Array que armazena os amigos
  let amigos = [];

  function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação: campo vazio
    if (nome === "") {
      alert("Por favor, insira um nome.");
      return;
      }

    // Atualiza o array
    amigos.push(nome);

    // Atualiza a exibição da lista na tela
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
  }

  function atualizarLista() {
      const lista = document.getElementById("listaAmigos");
      lista.innerHTML = ""; // Limpa a lista anterior

      // Cria os <li> para cada amigo
      amigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
      });
    }


