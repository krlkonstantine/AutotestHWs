import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError:  React.Dispatch<React.SetStateAction<string | undefined>>, setName: (name: string)=>void, addUserCallback: (name: string)=>void) => {
   if (name === undefined){
       setError("Ошибка! Введите имя!")
   } else if
   (name === ''){
       setError("Ошибка! Введите имя!")
   }
   else {
       addUserCallback(name)
       setName('')
   }

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error:string)=>void) => { // если имя пустое - показать ошибку
   if(!name.trim()){
       setError("Ошибка! Введите имя!")
   }
}

export const pureOnEnter = (e: any, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') return addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | undefined>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any

        setName(event.currentTarget.value) // need to fix
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        setError('')
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.length > 0 ? users[users.length-1].name : ''
    //(users.length > 0) { users[totalUsers+1].name} // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
