const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function requisicaoApi() {
  rl.question('Digite o ID do filme: ', (input) => {
    const idInformado = parseFloat(input);
	
const axios = require('axios');

const chaveApi = '6e49f129d415806abc7615d927f227f1';

const urlApi = 'https://api.themoviedb.org/3';

const idFilme = idInformado;

const url = `${urlApi}/movie/${idFilme}?api_key=${chaveApi}`;

axios.get(url)
  .then((resposta) => {
    const filme = resposta.data;
    
    console.log("Filme: "+ filme.original_title)
    console.log("Gênero: " + filme.genres[0].name)
    console.log("Data de lançamento: "+ filme.release_date)
    console.log("Sinopse: " + filme.overview)
    
  })
  .catch((error) => {
    console.error('Ocorreu um erro ao buscar os detalhes do filme:', error);
  });
	
  });

}

requisicaoApi();
