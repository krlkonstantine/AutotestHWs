import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // это значение нам нужно для дизэйбливания кнопок
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        setDate(new Date)
        let intervalId = setInterval(() => {
            console.log('Interval++')
            setDate(new Date)
        }, 500)
        setTimerId(+intervalId)
    }


    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        //let intervalId = setInterval(() => {setDate(new Date)}, 500)
        clearInterval(timerId)
        setTimerId(undefined)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }


    //let a = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    const getWeekDay = (dayNo: number) => {
        switch (dayNo) {
            case 0: {
                return 'Sunday'
            }
            case 1: {
                return 'Monday'
            }
            case 2: {
                return 'Tuesday'
            }
            case 3: {
                return 'Wednesday'
            }
            case 4: {
                return 'Thursday'
            }
            case 5: {
                return 'Friday'
            }
            case 6: {
                return 'Saturday'
            }
        }
    }
    const getMonthName = (monthNo: number) => {
        switch (monthNo) {
            case 0: {
                return 'January'
            }
            case 1: {
                return 'February'
            }
            case 2: {
                return 'March'
            }
            case 3: {
                return 'April'
            }
            case 4: {
                return 'May'
            }
            case 5: {
                return 'June'
            }
            case 6: {
                return 'July'
            }
            case 7: {
                return 'July'
            }
            case 8: {
                return 'August'
            }
            case 9: {
                return 'September'
            }
            case 10: {
                return 'October'
            }
            case 11: {
                return 'November'
            }
            case 12: {
                return 'December'
            }
        }
    }

    const yyyy = date.getFullYear();
    let mm: any = date.getMonth() + 1; // Months start at 0!
    let dd: any = date.getDate();

    if (dd < 10) {
        dd = '0' + dd
    }
    ;
    if (mm < 10) {
        mm = '0' + mm
    }
    ;

    const formattedToday = dd + '.' + mm + '.' + yyyy;

    const stringTime = `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}` // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = formattedToday || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем


    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = getWeekDay(date.getDay()) || <br/> // пишут студенты
    const stringMonth = getMonthName(date.getMonth()) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={timerId !== undefined} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={timerId === undefined} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
