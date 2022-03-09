import React from 'react';
import s from './Button.module.css'


type ButtonType ={
    name: string
    callback: ()=> void
    counter: boolean
}

export const Button = (props: ButtonType) => {
    return (
        <div>
            <button className={s.button} onClick={props.callback} disabled={props.counter}>{props.name}</button>
        </div>
    );
};