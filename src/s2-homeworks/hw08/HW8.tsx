import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import s from './HW8.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import User from './User'
import {Divider} from "@mui/material";

/*
* 1 - дописать типы и логику (сортировка по имени, фильтрация по совершеннолетию) homeWorkReducer, проверить тестом
* 2 - дописать компоненту User
* 3 - сделать стили в соответствии с дизайном
* */

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
    {_id: 0, name: 'Фикус', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 17},
    {_id: 5, name: 'Ирина', age: 55},
    {_id: 6, name: 'Гердосай', age: 44},
    {_id: 7, name: 'Крем', age: 13},
    {_id: 8, name: 'Руна', age: 11},
]

const HW8 = () => {
    const [people, setPeople] = useState<UserType[]>(initialPeople)
    const [currentSort, setCurrentSort] = useState('')

    const finalPeople = people.map((u: UserType) => <User key={u._id} u={u}/>)

    const sortUp = () => {
        setPeople(
            homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'})
        ) // в алфавитном порядке a.name > b.name
        setCurrentSort('up')
    }

    const sortDown = () => {
        setPeople(
            homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'})
        ) // в обратном порядке a.name < b.name}
        setCurrentSort('down')
    }
    const check18 = () => {
        setPeople(
            homeWorkReducer(initialPeople, {type: 'check', payload: 18})
        ) // совершеннолетние
        setCurrentSort('18')
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hw1Title}>Hometask No. 8</div>
            <Divider/>
            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.buttonsContainer}>
                        <SuperButton
                            id={'hw8-button-up'}
                            onClick={sortUp}
                            xType={currentSort === 'up' ? '' : 'secondary'}
                        >
                            Sort up
                        </SuperButton>
                        <SuperButton
                            id={'hw8-button-down'}
                            onClick={sortDown}
                            xType={currentSort === 'down' ? '' : 'secondary'}
                        >
                            Sort down
                        </SuperButton>
                        <SuperButton
                            id={'hw8-button-18'}
                            onClick={check18}
                            xType={currentSort === '18' ? '' : 'secondary'}
                        >
                            Check 18+
                        </SuperButton>
                    </div>

                    <table id={'hw8-users'} className={s.users}>
                        <thead className={s.thead}>
                        <tr>
                            <td className={s.nameCol}>Name</td>
                            <td className={s.ageCol}>Age</td>
                        </tr>
                        </thead>

                        <tbody>{finalPeople}</tbody>
                    </table>
                </div>
            </div>
            <Divider/>
        </div>
    )
}

export default HW8
