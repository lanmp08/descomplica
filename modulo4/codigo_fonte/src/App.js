import React, { useState } from 'react';
import './styles.css';

const App = () => {
    const [mensagem, setMensagem] = useState('');

    const handleClick = () => {
        setMensagem('Botão clicado!');
    };

    return (
        <div className="container">
            <h1>Bem-vindo ao Meu Projeto</h1>
            <button className="btn" onClick={handleClick}>Clique Aqui</button>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
};

export default App;