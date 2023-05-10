import './Resultado.css';
import Div100vh from 'react-div-100vh'
import React from "react";
import { useLocation } from "react-router-dom";

const Resultado = () => {
    const location = useLocation();
    const listaResultado = location.state?.listaResultado;
    const valorLido = location.state?.valorLido;

    console.log(listaResultado);

    return(
        <Div100vh className="container">
            <div className="main">
            <h1 className="title">Lista de resultados para a busca {valorLido}:</h1>
            {listaResultado && listaResultado.map((repo) => (
                <div key={repo.id} className='repo'>
                    <p className="nomeRepo">{repo.name}</p>
                    <p className="criadorRepo">{repo.owner.login}</p>
                    <p className="descRepo">{repo.description}</p>
                    <p className="lingRepo">{repo.language}</p>
                    <p className="numStars">{repo.stargazers_count}</p>
                    <p className="numForks">{repo.forks_count}</p>
                    <p className="ultimaAtt">{repo.updated_at}</p>
                    <p>{repo.descricao}</p>
                </div>
            ))}
            </div>
        </Div100vh>
    );
}

export default Resultado;