import React from 'react';
import s from '../App.module.css';
import {Button} from './Button';

export type MonitorPropsType = {
    counter: number
    onclickPlusHandler: () => void
    onclickResetHandler: () => void
    // onclickSetHandler: () => void
    disableInc: boolean
    disableReset: boolean
    disableSet: boolean
    editMode: boolean
}

export const Monitor = (props: MonitorPropsType) => {

    const changeValue = () => {
        if (props.disableSet) {
            return <span>Error</span>
        } else if (props.editMode) {
            return <span>press set</span>
        }
        return props.counter
    }

    return (
        <div className={s.monitor}>
            <div className={s.display}>
                <h1 className={props.counter == localStorage.maxValue ? s.red : s.number}>
                    {changeValue()}
                </h1>
            </div>
            <div className={s.bottomsBlock}>
                <Button name="+" callback={props.onclickPlusHandler} disable={props.disableInc}/>
                <Button name="Reset" callback={props.onclickResetHandler} disable={props.disableReset}/>
            </div>

        </div>
    );
};