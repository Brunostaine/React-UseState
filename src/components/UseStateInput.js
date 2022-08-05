import React, { useState } from "react";

const UseStateInput = () => {
    const [age, setAge] = useState();

    const changeSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    };

    return (
        <div>
            <h2>UseState com Inputs</h2>
            <p>Digite a sua idade para ver na tela</p>
            <form onSubmit={changeSubmit}>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            {/* Se tiver algum valor escreva na tela */}
            {age && <p>Você tem {age} anos</p>}
        </div>
    );
};

export default UseStateInput;
