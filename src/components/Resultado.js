import './Resultado.css';
import { format } from 'date-fns';
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MAX_PAG = 10;

const Resultado = () => {
    const [mensagem, setMensagem] = useState("Lista de resultados para a busca");
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [listaAtual, setListaAtual] = useState([]);
    const [botoesPag, setBotoesPag] = useState([]);
    const location = useLocation();
    const historico = useNavigate();
    const listaResultado = location.state?.listaResultado;
    const valorLido = location.state?.valorLido;

    const retorno = () => {
        historico("/");
    }

    useEffect(() => {
        async function inicializarLista(){
            if(!(listaResultado === [] || listaResultado === undefined || valorLido === "")) {
                const temp = await listaResultado.slice((paginaAtual-1)*10, (paginaAtual*10));
                setListaAtual(temp);
                const totalPages = Math.ceil(listaResultado.length / MAX_PAG);
                const botoes = [];
                for (let i = 1; i <= totalPages; i++) {
                    botoes.push(
                        <button key={i} className="buttonPaginationRes" onClick={() => setPaginaAtual(i)}>
                        {i}
                    </button>
                    );
                }
                setBotoesPag(botoes);
            }
        }

        inicializarLista();
    }, [listaResultado, valorLido]);

    useEffect(() => {
        async function setaLista() {
            if(!(listaResultado === [] || listaResultado === undefined || valorLido === "")){
                const temp = await listaResultado.slice((paginaAtual-1)*10, (paginaAtual*10));
                setListaAtual(temp);
            }
        }

        setaLista();
    }, [paginaAtual, listaResultado, valorLido]);

    useEffect(() => {
        if(listaResultado === [] || listaResultado === undefined || valorLido === "") {
        setMensagem("Desculpe, não foi possível encontrar.");
        }
    }, [mensagem, listaResultado, valorLido]);

    return(
        <div className="containerRes">
            <div className='headerRes'>
                <button className='buttonRes' onClick={retorno}>Voltar</button>
            </div>
            <div className="mainRes">
                <h1 className="titleRes">{mensagem} {valorLido}</h1>
                {listaAtual && listaAtual.map((repo) => (
                    <div key={repo.id} className='repoRes'>
                        <p className="repoTextRes"><strong>Nome do repositório:</strong> {repo.name}</p>
                        <p className="repoTextRes"><strong>Criador:</strong> {repo.owner.login}</p>
                        <p className="repoTextRes"><strong>Descrição: </strong>{repo.description}</p>
                        <p className="repoTextRes"><strong>Linguagem: </strong>{repo.language}</p>
                        <p className="repoTextRes"><strong>Número de Stars: </strong>{repo.stargazers_count}</p>
                        <p className="repoTextRes"><strong>Número de Forks: </strong>{repo.forks_count}</p>
                        <p className="repoTextRes"><strong>Última atualização: </strong>{format(new Date(repo.updated_at), 'dd/MM/yyyy HH:mm')}</p>
                    </div>
                ))}
                <div className="paginationRes">
                    {botoesPag}
                </div>
            </div>
        </div>
    );
}

export default Resultado;