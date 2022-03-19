import React, {ChangeEvent} from 'react';

type InputType ={
    callback: (e: ChangeEvent<HTMLInputElement>)=> void
    name: string
    value: number
}

export const Input = (props: InputType) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <input onChange={props.callback} type='number' value={props.value} />
        </div>
    );
};