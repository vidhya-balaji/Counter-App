import React, { useState } from 'react';
import './style.css'
function CounterApp()
{
    var [initialvalue, upgradeData] = useState(2);

    function increment() {
        upgradeData(++initialvalue);
    }
    function decrement() {
        upgradeData(--initialvalue);
    }
    function reset(){
        upgradeData(0);
    }
    return (<div id='container'>
        <span id='container-1'>
            <h1>Counter App</h1>
        <h2 id='data'>{initialvalue}</h2>
        <div className='counter'>
            <button onClick={increment}>Increment</button>
            <button onClick={reset} id='resetbutton'>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        </span>
    </div>
    )

}
export default CounterApp
