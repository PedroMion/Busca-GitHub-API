import './Resultado.css';
import Div100vh from 'react-div-100vh'
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Resultado = () => {
    const location = useLocation();
    const historico = useNavigate();
    const listaResultado = location.state?.listaResultado;
    const valorLido = location.state?.valorLido;

    const retorno = () => {
        historico("/");
    }

    return(
        <div className="containerRes">
            <div className='headerRes'>
                <button className='buttonRes' onClick={retorno}>Voltar</button>
            </div>
            <div className="mainRes">
                <h1 className="titleRes">Lista de resultados para a busca {valorLido}:</h1>
                {listaResultado && listaResultado.map((repo) => (
                    <div key={repo.id} className='repoRes'>
                        <p className="repoTextRes"><strong>Nome do repositório:</strong> {repo.name}</p>
                        <p className="repoTextRes"><strong>Criador:</strong> {repo.owner.login}</p>
                        <p className="repoTextRes"><strong>Descrição: </strong>{repo.description}</p>
                        <p className="repoTextRes"><strong>Linguagem: </strong>{repo.language}</p>
                        <p className="repoTextRes"><strong>Número de Stars: </strong>{repo.stargazers_count}</p>
                        <p className="repoTextRes"><strong>Número de Forks: </strong>{repo.forks_count}</p>
                        <p className="repoTextRes"><strong>Última atualização: </strong>{repo.updated_at}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Resultado;