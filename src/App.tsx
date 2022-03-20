import React, {useState} from 'react';
import s from './App.module.css';
import {Monitor} from './components/Monitor';
import {Settings} from './components/Settings';

export function App() {

    const [counter, setCounter] = useState(+localStorage.minValue)

    const [minValue, setMinValue] = useState(localStorage.minValue ? localStorage.minValue : 0)

    const [maxValue, setMaxValue] = useState(localStorage.maxValue ? localStorage.maxValue : 0)

    const onclickSetHandler = () => {
        setCounter(+localStorage.minValue)
    }

    const onclickPlusHandler = () => {
        setCounter(counter + 1)
    }

    const onclickResetHandler = () => {
        setCounter(+localStorage.minValue)
    }

    const disableInc = counter == localStorage.maxValue
    const disableReset = counter == 0
    const disableSet = +localStorage.maxValue <= +localStorage.minValue || +localStorage.maxValue < 0 || +localStorage.minValue < 0


    return (
        <div className={s.App}>
            <Settings onclickSetHandler={onclickSetHandler} setMinValue={setMinValue} setMaxValue={setMaxValue}
                      maxValue={maxValue} minValue={minValue} disableSet={disableSet}/>
            <Monitor counter={counter} onclickPlusHandler={onclickPlusHandler} onclickResetHandler={onclickResetHandler}
                     disableInc={disableInc} disableReset={disableReset}/>
        </div>
    );
}
