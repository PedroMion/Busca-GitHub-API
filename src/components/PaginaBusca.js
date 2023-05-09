import './PaginaBusca.css';
import { requestAPI } from '../application/buscaAPI';
import React, { useState } from "react";
import Div100vh from 'react-div-100vh'

const PaginaBusca = () => {
    const [valorLido, setValorLista] = useState("");
    const [listaResultado, setListaResultado] = useState([]);

    async function busca(e) {
        e.preventDefault();

        const dados = await requestAPI(valorLido);
        setListaResultado(dados);

        console.log(dados);

    }

    return (
        <Div100vh className="container">
            <div className="main">
                <p className="title">Busca na API GitHub</p>
                <form className="form" onSubmit={busca}>
                    <div className="inputArea">
                        <p className="text">Insira abaixo o termo a ser pesquisado:</p>
                        <input className="input" placeholder="Pesquisa" id="objSearch" value={valorLido} onChange={(e) => setValorLista(e.target.value)} />
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