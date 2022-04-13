import React from 'react';
import s from './MonitorWithSettings.module.css'
import {Button} from '../Button/Button';
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
    onClickSettingsHandler: () => void
    changeView: boolean
}

export const MonitorWithSettings = (props: MonitorWithSettingsPropsType) => {

    const changeValue = () => {
        if (props.disableSet) {
            return <span className={s.error}>Incorrect value!</span>
        } else if (props.editMode) {
            return <span className={s.value}>Enter value and press 'SET'</span>
        }
        return <h1 className={props.counter == localStorage.maxValue ? s.red : s.number}>{props.counter}</h1>
    }

    return (
        <div className={s.monitor}>
            <div className={s.display}>
                {changeValue()}
            </div>
            <div className={s.bottomsBlock}>
                <Button name="+" callback={props.onclickPlusHandler} disable={props.disableInc}/>
                {props.changeView ?
                    <IconButton onClick={props.onClickSettingsHandler} aria-label="settings" size="large">
                        <SettingsIcon fontSize="inherit"/>
                    </IconButton> : null}

                <Button name="RESET" callback={props.onclickResetHandler} disable={props.disableReset}/>
            </div>
        </div>
    );
};