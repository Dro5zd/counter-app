import React from 'react';
import s from './Button.module.css'


type ButtonType ={
    name: string
    callback: ()=> void
    disable: boolean
}

export const Button = (props: ButtonType) => {
    return (
        <div>
            <button className={s.button} onClick={props.callback} disabled={props.disable}>{props.name}</button>
        </div>
    );
};