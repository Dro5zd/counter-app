import React, {useState} from 'react';
import s from '../App.module.css';
import {Button} from './Button';

export type MonitorPropsType = {
    counter: any
    onclickPlusHandler: () => void
    onclickResetHandler: () => void
    disableInc: boolean
    disableReset: boolean
    disableSet: boolean
    onclickSetHandler: () => void
    editMode: boolean
}

export const Monitor = (props: MonitorPropsType) => {

    const changeValue = () => {
        if (props.disableSet){
            return <span>Error</span>
        } else if (props.editMode) {
            return <span>press set</span>
        } return props.counter
        }

    return (
        <div className={s.monitor}>
            <div className={s.display}>
                <h1 className={props.counter == localStorage.maxValue ? s.red : s.number}>
                    {/*{changeValue}*/}

                    {props.disableSet ? <span>Error</span> :props.counter}
                    {props.editMode ? <span>press set</span>: props.counter}

                </h1>
            </div>
            <div className={s.bottomsBlock}>
                <Button name="+" callback={props.onclickPlusHandler} disable={props.disableInc}/>
                <Button name="Reset" callback={props.onclickResetHandler} disable={props.disableReset}/>
            </div>

        </div>
    );
};