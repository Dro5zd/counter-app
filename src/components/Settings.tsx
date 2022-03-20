import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import s from '../App.module.css';
import {Button} from './Button';
import {Input} from './Input';

export type SettingsPropsType = {
    disableSet: boolean
    maxValue: number
    minValue: number
    setMinValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    onclickSetHandler: () => void
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('minValue', e.currentTarget.value)
        props.setMinValue(+e.currentTarget.value)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('maxValue', e.currentTarget.value)
        props.setMaxValue(+e.currentTarget.value)
    }


    return (
        <div className={s.settings}>
            <Input name={'Min'} callback={onChangeMinValue} value={props.minValue}/>
            <Input name={'Max'} callback={onChangeMaxValue} value={props.maxValue}/>
            <Button name="Set" callback={props.onclickSetHandler} disable={props.disableSet}/>
        </div>
    );
};