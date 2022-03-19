import React from 'react';
import s from '../App.module.css';
import {Button} from './Button';

type MonitorType = {
    counter: number
}

export const Settings = (props: MonitorType) => {
    return (
        <div className={s.monitor}>
            <input type={'number'}/>
            <Button name="Set" callback={onclickSetHandler} disable={disableSet}/>
        </div>
    );
};