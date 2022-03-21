import React, {useState} from 'react';
import s from './App.module.css';
// import {Monitor} from './components/Monitor';
import {Settings} from './components/Settings';
import {MonitorWithSettings} from './components/MonitorWithSettings';
import {SettingsForMonitor} from './components/SettingsForMonitor';
import {Monitor} from './components/Monitor';
import {FormControlLabel, FormGroup, Switch} from '@mui/material';


export function App() {

    const [changeView, setChangeView] = useState(true)

    const [collapsed, SetCollapsed] = useState<boolean>(true)

    const [editMode, setEditMode] = useState(false)

    const [counter, setCounter] = useState(+localStorage.minValue)

    const [minValue, setMinValue] = useState(localStorage.minValue ? localStorage.minValue : 0)

    const [maxValue, setMaxValue] = useState(localStorage.maxValue ? localStorage.maxValue : 0)

    const changeViewHandler = () => {
        setChangeView(!changeView)
    }

    const onClickSettingsHandler = () => {
        SetCollapsed(false)
    }

    const onclickSetHandler = () => {
        setCounter(+localStorage.minValue)
        setEditMode(false)
        SetCollapsed(true)
    }

    const onclickPlusHandler = () => {
        setCounter(counter + 1)
    }

    const onclickResetHandler = () => {
        setCounter(+localStorage.minValue)
    }


    const disableSet = +localStorage.maxValue <= +localStorage.minValue || +localStorage.maxValue < 0 || +localStorage.minValue < 0
    const disableInc = counter == localStorage.maxValue || disableSet
    const disableReset = counter == 0 || disableSet


    return (
        <div>
            <div className={s.view}>
                <FormGroup>
                    <FormControlLabel  control={<Switch defaultChecked color="warning" onClick={changeViewHandler}/>} label="View" />
                </FormGroup>
            </div>

            <div className={s.App}>
                {changeView ? <div className={s.components}>
                    {collapsed ? <MonitorWithSettings counter={counter}
                                                      onclickPlusHandler={onclickPlusHandler}
                                                      onclickResetHandler={onclickResetHandler}
                                                      disableInc={disableInc}
                                                      disableReset={disableReset}
                                                      disableSet={disableSet}
                                                      editMode={editMode}
                                                      onClickSettingsHandler={onClickSettingsHandler}
                    /> : <SettingsForMonitor onclickSetHandler={onclickSetHandler}
                                             setMinValue={setMinValue}
                                             setMaxValue={setMaxValue}
                                             maxValue={maxValue}
                                             minValue={minValue}
                                             disableSet={disableSet}
                                             setEditMode={setEditMode}/>}


                </div> : <div className={s.components}>
                    <Settings onclickSetHandler={onclickSetHandler}
                              setMinValue={setMinValue}
                              setMaxValue={setMaxValue}
                              maxValue={maxValue}
                              minValue={minValue}
                              disableSet={disableSet}
                              setEditMode={setEditMode}/>

                    <Monitor counter={counter}
                             onclickPlusHandler={onclickPlusHandler}
                             onclickResetHandler={onclickResetHandler}
                             disableInc={disableInc}
                             disableReset={disableReset}
                             disableSet={disableSet}
                             editMode={editMode}/>


                </div>}
            </div>

        </div>
    );
}
