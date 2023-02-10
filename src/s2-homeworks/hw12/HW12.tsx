import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'
import {Divider} from "@mui/material";
import {AppStoreType} from "../hw10/bll/store";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

// @ts-ignore
const themes = [
    {id: 1, value: 'Light'},
    {id: 2, value: 'Blue'},
    {id: 3, value: 'Dark'},
    {id: 4, value: <span role="img" aria-label="cat">🐾</span>},
]

const HW12 = () => {
    const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId)
    const dispatch = useDispatch()

    const change = (id: number) => {
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hw1Title}>
                Hometask No. 12
            </div>
            <Divider/>
            <div className={s2.hw}>
                <span className={s.textForSelect}>Выберите тему</span>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes}
                    onChangeOption={change}


                />
            </div>
            <Divider/>
        </div>
    )
}

export default HW12
