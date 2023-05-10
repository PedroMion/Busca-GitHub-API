async function requestAPI(query) {
    if(query == "") {
        return [];
    }

    const resposta = await fetch(`https://api.github.com/search/repositories?q=${query}`);
    const dados = await resposta.json();
    
    const dadosOrdenados = dados.items.sort((a, b) => b.stargazers_count - a.stargazers_count);

    return dadosOrdenados;
}

export {requestAPI}