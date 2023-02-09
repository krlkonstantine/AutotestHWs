import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {InitialStateType, loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'
import {Divider} from "@mui/material";

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент
    // useSelector - это функция, которая селектит\выбирает что-то из чего-то…
    // В нашем случае из state-а данные для конкретного loading.
    const isLoading = useSelector<AppStoreType,boolean>((state) => {
        return state.loading.isLoading
    })
    const dispatch = useDispatch()

    console.log(isLoading)
    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))
        /*const loadingId = */
        setTimeout( () => {
            dispatch(loadingAC(false))
            console.log("dispatch is working")
        },1500)
    }

    return (
        <div id={'hw10'}>
            <div className={s2.hw1Title}>Hometask No. 10</div>
            <Divider/>

            <div className={s2.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        style={{width: '30px',marginLeft:'40px'}}
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
            <Divider/>
        </div>
    )
}

export default HW10
