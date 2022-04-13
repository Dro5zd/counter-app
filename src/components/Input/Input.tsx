import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@mui/material';
import s from '../Input/Input.module.css'

type InputType = {
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    name: string
    value: number
    disable: boolean
}

export const Input = (props: InputType) => {
    const [modeChange, SetModeChange] = useState(true)

    const editMode = () => {
        SetModeChange(false)
    }
    const viewChange = () => {
        SetModeChange(true)
    }

    return (
        <div className={s.Input}>
            <h1>{props.name}</h1>
            {modeChange
                ? <span className={s.numbers} onClick={editMode}>{props.value}</span>
                : <TextField id="outlined-basic"
                             error={props.disable}
                             size={'small'}
                             variant="outlined"
                             onChange={props.callback}
                             type="number"
                             value={props.value}
                             autoFocus
                             onBlur={viewChange}
                />}
        </div>
    );
};