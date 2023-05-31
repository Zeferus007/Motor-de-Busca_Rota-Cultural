// Obtém a referência do elemento com id "card2"
var card2 = document.getElementById("card2");

// Adiciona um evento de clique ao card2
  card2.addEventListener("click", function() {
    // Redireciona o usuário para o link desejado
    window.open("https://catracalivre.com.br/agenda/festa-junina-vegana-liberdade-sp/");
});

// Obtém a referência do elemento com id "card2"
var card2 = document.getElementById("card3");

// Adiciona um evento de clique ao card2
    card2.addEventListener("click", function() {
      // Redireciona o usuário para o link desejado
    window.open("https://catracalivre.com.br/agenda/arraia-de-moema-sp/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card4");

    // Adiciona um evento de clique ao card2
    card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
          window.open("https://catracalivre.com.br/agenda/parada-do-orgulho-lgbt-av-paulista/");
});

// Obtém a referência do elemento com id "card2"
var card2 = document.getElementById("card5");

// Adiciona um evento de clique ao card2
    card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
    window.open("https://catracalivre.com.br/agenda/teatro-em-sp/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card6");

    // Adiciona um evento de clique ao card2
    card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
        window.open("https://catracalivre.com.br/agenda/exposicao-tina-turner-uma-viagem-para-o-futuro-mis-sp/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card7");

    // Adiciona um evento de clique ao card2
        card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
        window.open("https://catracalivre.com.br/agenda/cine-na-praca-filmes-gratuitos-parque-do-povo-sp/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card8");

    // Adiciona um evento de clique ao card2
        card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
        window.open("https://catracalivre.com.br/agenda/festival-de-sopas-ceagesp-jantar/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card9");

    // Adiciona um evento de clique ao card2
        card2.addEventListener("click", function() {
          // Redireciona o usuário para o link desejado
        window.open("https://catracalivre.com.br/agenda/exposicao-dreamworks-animation-shopping-cidade-sao-paulo/");
});

// Obtém a referência do elemento com id "card2"
    var card2 = document.getElementById("card10");

    // Adiciona um evento de clique ao card2
        card2.addEventListener("click", function() {
        // Redireciona o usuário para o link desejado
        window.open("https://catracalivre.com.br/agenda/masp-exposicoes-indigenas-carmezia-emiliano-mahku-miracoes/");
});


// Selecionar os elementos <select> e <button> pelo ID
const selectElement = document.getElementById('cidades');
const buscarButton = document.getElementById('buscar-btn');

// Função para redirecionar para o link correspondente à opção selecionada
function redirectBasedOnSelection() {
  // Obter o valor da opção selecionada
  const selectedOption = selectElement.value;

  // Definir as URLs correspondentes a cada opção
  const urlMapping = {
    Shows: 'https://www.google.com/search?q=shows+2023&sxsrf=APwXEddhuGsX7l0tqibIE6WP2edbc93CYA%3A1685505307173&ei=G8V2ZKWdCsHW1sQP8ZusoAY&ved=0ahUKEwjllufI1J7_AhVBq5UCHfENC2QQ4dUDCBA&uact=5&oq=shows+2023&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BwgjEIoFECc6BAgjECc6EwguEIoFELEDEIMBEMcBENEDEEM6BwgAEIoFEEM6DQgAEIoFELEDEIMBEEM6CwguEIMBELEDEIAEOhEILhCABBCxAxCDARDHARDRAzoWCC4QigUQsQMQgwEQxwEQ0QMQ1AIQQzoOCC4QgAQQsQMQxwEQrwE6CAguELEDEIAEOg0ILhCKBRDHARCvARBDOgoIABCKBRCxAxBDOhAILhCKBRCxAxDHARCvARBDOhMILhCKBRCxAxCDARDHARCvARBDOggIABCABBDJAzoICAAQigUQkgM6CgguEIAEELEDEAo6CAgAEIAEEJIDOggIABCKBRCxAzoLCAAQgAQQsQMQgwFKBAhBGABQ0QxYlyZgjS9oA3ABeACAAZwBiAGCCpIBBDAuMTCYAQCgAQHAAQHIAQM&sclient=gws-wiz-serp',
    Cinema: 'https://www.google.com/search?q=cinema+2023&sxsrf=APwXEdflUfuzI4djPvP9QRn1YK_UFH4EsQ%3A1685505385982&ei=acV2ZMjKO9Xm1sQPs-6g-Ac&ved=0ahUKEwiIo7Hu1J7_AhVVs5UCHTM3CH8Q4dUDCBA&uact=5&oq=cinema+2023&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEIoFECc6BAgjECc6BwgAEIoFEEM6BwguEIoFEEM6CwguEIAEEMcBENEDOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6EwguEIoFELEDEIMBEMcBENEDEEM6EQguEIMBEMcBELEDENEDEIAEOg0ILhCKBRDHARCvARBDOhAILhCKBRDHARDRAxDUAhBDOgoIABCKBRCxAxBDOgsILhCABBDHARCvAToLCAAQigUQsQMQgwE6DQguEIoFEMcBENEDEEM6FgguEIoFELEDEIMBEMcBENEDENQCEEM6CggAEIoFEMkDEEM6CAgAEIoFEJIDOhEILhCABBCxAxCDARDHARCvAUoECEEYAFAAWIgpYJsyaABwAXgAgAGmAYgBoQuSAQQwLjExmAEAoAEBwAEB&sclient=gws-wiz-serp',
    'Espetáculos': 'https://www.google.com/search?sxsrf=APwXEdfbEsuAsP4Jlze2hhaHIG8HgxlmNg:1685505508381&q=espet%C3%A1culos+2023&sa=X&ved=2ahUKEwjE99-o1Z7_AhW2pZUCHSLRBZAQ7xYoAHoECAYQAQ&cshid=1685505653731749&biw=1366&bih=657&dpr=1',
    'Exposição': 'https://www.google.com/search?q=exposi%C3%A7%C3%B5es+2023&biw=1366&bih=657&sxsrf=APwXEdfbEsuAsP4Jlze2hhaHIG8HgxlmNg%3A1685505508381&ei=5MV2ZMT1FrbL1sQPoqKXgAk&ved=0ahUKEwjE99-o1Z7_AhW2pZUCHSLRBZAQ4dUDCBA&uact=5&oq=exposi%C3%A7%C3%B5es+2023&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQBxAeMgUIABCABDIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB46CAgAEAcQHhATOggIABCABBCxAzoNCAAQDRCABBCxAxCxAzoHCAAQDRCABDoNCAAQDRCABBCxAxCDAUoECEEYAFAAWNgPYK0ZaABwAXgAgAGYAYgBswmSAQQwLjEwmAEAoAEBwAEB&sclient=gws-wiz-serp',
    Gastronomia: 'https://www.google.com/search?q=melhor+da+gastronomia&biw=1366&bih=657&sxsrf=APwXEddAhlhuxOKip1UwL3XwOXolz7ILSg%3A1685505558651&ei=FsZ2ZP6vJ9Df1sQPuLWm8Ak&ved=0ahUKEwj-ktzA1Z7_AhXQr5UCHbiaCZ4Q4dUDCBA&uact=5&oq=melhor+da+gastronomia&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIICAAQFhAeEA8yCAgAEBYQHhAPMggIABAWEB4QDzIGCAAQFhAeMgYIABAWEB4yCAgAEBYQHhAPOgYIABAHEB46BwgAEA0QgAQ6CAgAEAUQBxAeOggIABAIEAcQHjoFCAAQogQ6CgghEKABEMMEEAo6CAghEKABEMMEOgcIIxCwAhAnOgYIABAeEA06CAgAEB4QDRAPOgoIABAFEB4QDRAPSgQIQRgAUABYtEBghkdoAHABeACAAYgBiAGzGJIBBDAuMjaYAQCgAQHAAQE&sclient=gws-wiz-serp',
    Arte: 'https://www.google.com/search?q=arte+2023&sxsrf=APwXEddhuGsX7l0tqibIE6WP2edbc93CYA%3A1685505307173&ei=G8V2ZKWdCsHW1sQP8ZusoAY&ved=0ahUKEwjllufI1J7_AhVBq5UCHfENC2QQ4dUDCBA&uact=5&oq=arte+2023&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoHCCMQigUQJzoECCMQJzoRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIoFELEDEIMBOgsIABCABBCxAxCDAToUCC4QigUQsQMQgwEQxwEQ0QMQ1AI6BwgAEIoFEEM6EQguEIAEELEDEIMBEMcBEK8BOg0IABCKBRCxAxCDARBDOgsILhCABBDHARDRAzoLCAAQgAQQsQMQyQM6CAgAEIAEEJIDOg4ILhCvARDHARCxAxCABDoICAAQgAQQsQM6CwguEIAEEMcBEK8BOhQILhCDARCvARDHARDUAhCxAxCABDoHCCMQ6gIQJzoVCAAQAxCPARDqAhC0AhCMAxDlAhgBOhUILhADEI8BEOoCELQCEIwDEOUCGAE6BwguEIoFEEM6FgguEIoFELEDEIMBEMcBENEDENQCEEM6EwguEIoFELEDEIMBEMcBENEDEEM6DgguEIAEELEDEMcBENEDOg0ILhCKBRDHARCvARBDOggILhCABBCxAzoNCC4QigUQsQMQ1AIQQzobCC4QigUQxwEQrwEQQxCXBRDcBBDeBBDgBBgCOgsILhCABBCxAxCDAToNCC4QrwEQxwEQigUQQzoFCC4QgAQ6CQgAEIoFEAoQQzoLCC4Q1AIQsQMQgAQ6DgguEIAEELEDEIMBENQCOhkILhCABBDHARCvARCXBRDcBBDeBBDgBBgCSgQIQRgAUABYj0ZguVNoCXABeACAAbEBiAHPEpIBBDAuMTiYAQCgAQGwARTAAQHaAQYIARABGAvaAQYIAhABGBQ&sclient=gws-wiz-serp'
  };

  // Verificar se a opção selecionada existe no mapeamento de URLs e redirecionar para o link correspondente
  if (selectedOption in urlMapping) {
    const url = urlMapping[selectedOption];
    window.open(url, '_blank');
  }
}

// Adicionar um ouvinte de evento para chamar a função de redirecionamento quando o botão for clicado
buscarButton.addEventListener('click', redirectBasedOnSelection);



        