import React from 'react';
import s from '../App.module.css';
import {Button} from './Button';

export type MonitorPropsType = {
    counter: any
    onclickPlusHandler: ()=>void
    onclickResetHandler: ()=>void
    disableInc: boolean
    disableReset: boolean
}

export const Monitor = (props: MonitorPropsType) => {

    // const [counter, setCounter] = useState(+localStorage.minValue)
    //
    // const onclickPlusHandler = () => {
    //     setCounter(counter + 1)
    // }
    //
    // const onclickResetHandler = () => {
    //     setCounter(+localStorage.minValue)
    // }
    //
    // const disableInc = props.counter == localStorage.maxValue
    // const disableReset = counter === 0

    return (
        <div className={s.monitor}>
            <div className={s.display}>
                <h1 className={props.counter==localStorage.maxValue ? s.red : s.number}>{props.counter}</h1>
            </div>
            <div className={s.bottomsBlock}>
                <Button name="+" callback={props.onclickPlusHandler} disable={props.disableInc}/>
                <Button name="Reset" callback={props.onclickResetHandler} disable={props.disableReset}/>
            </div>

        </div>
    );
};