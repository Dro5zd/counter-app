import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import s from './Settings.module.css';
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';

export type SettingsPropsType = {
    disableSet: boolean
    maxValue: number
    minValue: number
    setMinValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    onclickSetHandler: () => void
    setEditMode: Dispatch<SetStateAction<boolean>>
}

export const Settings = (props: SettingsPropsType) => {

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('minValue', e.currentTarget.value)
        props.setMinValue(+e.currentTarget.value)
        props.setEditMode(true)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('maxValue', e.currentTarget.value)
        props.setMaxValue(+e.currentTarget.value)
        props.setEditMode(true)
    }

    return (
        <div className={s.settings}>
            <div className={s.setDisplay}>
                <Input name={'Min value:'} callback={onChangeMinValue} value={props.minValue}
                       disable={props.disableSet}/>
                <Input name={'Max value:'} callback={onChangeMaxValue} value={props.maxValue}
                       disable={props.disableSet}/>
            </div>
            <div className={s.bottomsBlock}>
                <Button name="SET" callback={props.onclickSetHandler} disable={props.disableSet}/>
            </div>
        </div>
    );
};