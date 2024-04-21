async function buscar(){
    console.log("Passei por aqui");

    const resposta = await fetch(`${process.env.API_URL}`);
    const respostaDadosAgenda = await resposta.json();

    console.log("Resposta: ", respostaDadosAgenda);

   const cards = document.getElementById("cards_games");
   
    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
           return "TESTE "
    });
}

console.log("antes de buscar")
buscar();
console.log("depois de buscar")
