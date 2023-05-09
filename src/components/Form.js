import './Form.css';

const Form = () => {
    return (
        <div className="container">
            <div className="main">
                <p className="title">Busca na API GitHub</p>
                <form className="form">
                    <div className="inputArea">
                        <p className="text">Insira abaixo o termo a ser pesquisado:</p>
                        <input className="input" placeholder="Pesquisa" id="objSearch"></input>
                    </div>
                    <div className="buttonArea">
                        <button className="button" id="commandButton" action="" >Pesquisar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export {Form};