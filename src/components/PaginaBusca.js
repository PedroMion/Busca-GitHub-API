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
        <Div100vh className="containerPB">
            <div className="mainPB">
                <p className="titlePB">Busca na API GitHub</p>
                <form className="formPB" onSubmit={busca}>
                    <div className="inputAreaPB">
                        <p className="textPB">Insira abaixo o termo a ser pesquisado:</p>
                        <input className="inputPB" placeholder="Pesquisa" id="objSearch" value={valorLido} onChange={(e) => setValorLido(e.target.value)} />
                    </div>
                    <div className="buttonAreaPB">
                        <button className="buttonPB" id="commandButton" action="" type="submit">Pesquisar</button>
                    </div>
                </form>
            </div>
        </Div100vh>
    );
}

export default PaginaBusca;