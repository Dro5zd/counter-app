import React from 'react';
import s from '../App.module.css';
import {Button} from './Button';
import SettingsIcon from '@mui/icons-material/Settings';
import {IconButton} from '@mui/material';

export type MonitorWithSettingsPropsType = {
    counter: number
    onclickPlusHandler: () => void
    onclickResetHandler: () => void
    disableInc: boolean
    disableReset: boolean
    disableSet: boolean
    editMode: boolean
    onClickSettingsHandler: ()=>void
}

export const MonitorWithSettings = (props: MonitorWithSettingsPropsType) => {

    const changeValue = () => {
        if (props.disableSet) {
            return <span className={s.error}>Incorrect value!</span>
        } else if (props.editMode) {
            return <span className={s.value}>Enter value and press 'SET'</span>
        }
        return props.counter
    }

    return (
        <div className={s.monitor}>
            <div className={s.display}>
                <h1 className={props.counter == localStorage.maxValue ? s.red : s.number}>
                    {changeValue()}
                </h1>
            </div>
            <div className={s.bottomsBlock}>
                <Button name="+" callback={props.onclickPlusHandler} disable={props.disableInc}/>
                <IconButton onClick={props.onClickSettingsHandler} aria-label="settings" size="large">
                    <SettingsIcon fontSize="inherit" />
                </IconButton>
                <Button name="RESET" callback={props.onclickResetHandler} disable={props.disableReset}/>
            </div>
        </div>
    );
};