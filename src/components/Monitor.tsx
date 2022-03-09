import React from 'react';
import s from '../App.module.css';

type MonitorType = {
    counter: number
}

export const Monitor = (props: MonitorType) => {
    return (
        <div className={s.monitor}>
            <h1 className={props.counter===5 ? s.red : s.number}>{props.counter}</h1>
        </div>
    );
};