// Obtém a referência do elemento com id "card2"
var card2 = document.getElementById("card2");

// Adiciona um evento de clique ao card2
  card2.addEventListener("click", function() {
    // Redireciona o usuário para o link desejado
    window.open("https://catracalivre.com.br/agenda/roteiro-de-festas-juninas-e-arraias-em-sao-paulo/");
});

// Obtém a referência do elemento com id "card2"
var card2 = document.getElementById("card3");

// Adiciona um evento de clique ao card2
    card2.addEventListener("click", function() {
      // Redireciona o usuário para o link desejado
    window.open("https://catracalivre.com.br/agenda/sao-joao-de-nois-tudim-ctn-sp/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card4");

    // Adiciona um evento de clique ao card2
    card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
          window.open("https://catracalivre.com.br/agenda/teatro-em-sp/");
});

// Obtém a referência do elemento com id "card2"
var card2 = document.getElementById("card5");

// Adiciona um evento de clique ao card2
    card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
    window.open("https://catracalivre.com.br/agenda/exposicao-tina-turner-uma-viagem-para-o-futuro-mis-sp/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card6");

    // Adiciona um evento de clique ao card2
    card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
        window.open("https://catracalivre.com.br/agenda/festival-de-sopas-ceagesp-jantar/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card7");

    // Adiciona um evento de clique ao card2
        card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
        window.open("https://catracalivre.com.br/agenda/brasil-jazz-sinfonica-encontros-historicos-sala-sao-paulo/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card8");

    // Adiciona um evento de clique ao card2
        card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
        window.open("https://catracalivre.com.br/agenda/festa-boogie-wonderland-sp/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card9");

    // Adiciona um evento de clique ao card2
        card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
        window.open("https://catracalivre.com.br/agenda/exposicoes-em-sao-paulo-sp/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card10");

    // Adiciona um evento de clique ao card2
        card2.addEventListener("click", function() {
        // Redireciona o usuário para o link desejado
        window.open("https://catracalivre.com.br/agenda/festa-junina-vegana-liberdade-sp/");
});


function searchGoogle(query) {
  const excludedKeywords = /doença...|doença|morte|morte...|acidente|acidente...|possível|possível...|empregos|empregos...|supermercado|supermercado...|notícias|notícias...|R7|R7...|globo|globo...|lance.net|lance.net...|horóscopo|horóscopo...|google|google...|wikipedia|wikipedia...|stack Overflow|stack Overflow...|tecnologia|tecnologia...|futebol|futebol...|moda|moda...|pet|pet...|bing|bing...|shooping|shooping...|convênio|convênio...|moto|moto...|carro|carro...|bicicleta|bicicleta...|aluguel|aluguel...|venda|venda...|super|super...|mercado|mercado livre...|olx...|shein...|imposto...|contador|contador...|farmácia|farmácia...|forum|forum...|comprar|comprar...|barbeiro|barbeiro...|barbearia|barbearia...|loja|loja...|previsão|previsão...|calculo|calculo...|chatgpt|chatgpt...|fatec|fatec ...|faculdade|faculdade ...|shopping|shopping ...|rotas|rotas ...|loterias|loteria ...|inscrições|incrições ...|resultado|resultado ...|consurso|consurso ...|professor|professor .../i;

  if (excludedKeywords.test(query)) {
    const errorMessage = 'Nenhum resultado encontrado.';
    const errorWindow = window.open();
    errorWindow.document.write(`<h1>${errorMessage}</h1>`);
    errorWindow.document.close();
  } else {
    const searchQuery = encodeURIComponent(query);
    const url = `https://www.google.com/search?q=${searchQuery}`;
    const searchWindow = window.open(url, '_blank');
    searchWindow.focus();
  }
}

function performSearch() {
  const searchInput = document.getElementById('search');
  const query = searchInput.value;
  searchGoogle(query);
}





        