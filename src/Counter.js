import React, { useState } from 'react';

function Counter(){
    const [counter, setCount] = useState(0);
    function count_plus() {
        setCount(counter+1);
    }
    return (
        <div>
        <h1>ZADANIE 2</h1>
        <h4>Stwórz komponent React o nazwie Counter, który zawiera przycisk, który po kliknięciu zwiększa licznik.</h4>
        <h2>Counter : <input type="button" value={counter} onClick={count_plus}></input></h2>
        </div>
    );
}

export default Counter;