async function cadastrarAgenda() {
    console.log("Passei por aqui");
    const nomeDigitado = document.getElementById("nome_jogo").value;
    const dataDigitada = document.getElementById("data_jogo").value;
    const descricaoDigitada = document.getElementById("descricao").value;
    const gamersDigitados = document.getElementById("gamers").value;
    const urlImgDigitada = document.getElementById("url_imagem").value;
    const urlLiveDigitada = document.getElementById("url_live").value;

    const dadosAgenda = {
        "nome": nomeDigitado,
        "dataJogo": dataDigitada,
        "descricao": descricaoDigitada,
        "gamers": gamersDigitados.split(','),
        "urlAssistir": urlLiveDigitada,
        "urlImagem": urlImgDigitada,
    }

    const respostaCadastro = await fetch("https://660f44b2356b87a55c510de7.mockapi.io/agendas", {
        method: "POST",
        body: JSON.stringify(dadosAgenda),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });

    if (respostaCadastro.status == 201) {
        window.location.href = "agenda.html";
    } else {
        alert("Ocorreu um erro ao cadastrar")
    }
}