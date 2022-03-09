import React, {useState} from 'react';
import s from './App.module.css';
import {Button} from './components/Button';
import {Monitor} from './components/Monitor';

function App() {

    let [counter, setCounter] = useState(0)

    let onclickPlusHandler = () => {
        setCounter(counter + 1)
    }

    let onclickResetHandler = () => {
        setCounter(0)
    }

    return (
        <div className={s.App}>
            <Monitor counter={counter}/>
            <div className={s.flexStyle}>
                <Button name="+" callback={onclickPlusHandler} counter={counter===5}/>
                <Button name="Reset" callback={onclickResetHandler} counter={counter===0}/>
            </div>


        </div>
    );
}

export default App;
