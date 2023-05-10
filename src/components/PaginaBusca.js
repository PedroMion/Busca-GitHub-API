import { useNavigate } from 'react-router-dom';
import './PaginaBusca.css';
import Div100vh from 'react-div-100vh'
import { requestAPI } from '../application/buscaAPI';
import React, { useState } from "react";

const PaginaBusca = () => {
    const [valorLido, setValorLido] = useState("");
    const historico = useNavigate();

    async function busca(e) {
        e.preventDefault();

        const dados = await requestAPI(valorLido);

        console.log(dados);

        historico("/resultado", { state: { listaResultado: dados, valorLido: valorLido } });

    }

    return (
        <Div100vh className="container">
            <div className="main">
                <p className="title">Busca na API GitHub</p>
                <form className="form" onSubmit={busca}>
                    <div className="inputArea">
                        <p className="text">Insira abaixo o termo a ser pesquisado:</p>
                        <input className="input" placeholder="Pesquisa" id="objSearch" value={valorLido} onChange={(e) => setValorLido(e.target.value)} />
                    </div>
                    <div className="buttonArea">
                        <button className="button" id="commandButton" action="" type="submit">Pesquisar</button>
                    </div>
                </form>
            </div>
        </Div100vh>
    );
}

export default PaginaBusca;