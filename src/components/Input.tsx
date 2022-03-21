import React, {ChangeEvent} from 'react';
import {TextField} from '@mui/material';
import s from '../App.module.css'

type InputType ={
    callback: (e: ChangeEvent<HTMLInputElement>)=> void
    name: string
    value: number
    disable: boolean
}

export const Input = (props: InputType) => {
    return (
        <div className={s.Input}>
            <h1>{props.name}</h1>
            {/*<input onChange={props.callback} type='number' value={props.value} />*/}
            <TextField id="outlined-basic"
                       error={props.disable}
                       size={'small'}
                       variant="outlined"
                       onChange={props.callback}
                       type='number'
                       value={props.value}/>
        </div>
    );
};