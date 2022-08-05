import React, { useState } from 'react';

const UseState = () => {
    let userName = "João";

    const [name, setName] = useState("Matheus");

    const changeNames = () => {
        userName = "João Souza";

        setName("Matheus Batisti");

        console.log(name);
        console.log(userName);
    };

    return (
        <div className="teste">
            <h1>UseState</h1>
            <p>Variável: {userName}</p>
            <p>UseState: {name}</p>
            <button onClick={changeNames}>Mudar nome</button>
        </div>
    );
};

export default UseState;
