import React, {useState} from 'react';
import s from './App.module.css';
import {Button} from './components/Button';
import {Monitor} from './components/Monitor';

export function App() {

    const [counter, setCounter] = useState(0)

    const onclickPlusHandler = () => {
        setCounter(counter + 1)
    }

    const onclickResetHandler = () => {
        setCounter(0)
    }

    const disableInc = counter === 5
    const disableReset = counter === 0

    return (
        <div className={s.App}>
            <Monitor counter={counter}/>
            <div className={s.flexStyle}>
                <Button name="+" callback={onclickPlusHandler} disable={disableInc}/>
                <Button name="Reset" callback={onclickResetHandler} disable={disableReset}/>
            </div>


        </div>
    );
}
