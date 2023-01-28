import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: {
        avatar: string
        name: string
    }
    message: {
        text: string
        time: string
    }
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T0mwQkuBEPHSZm_BFTgziFFNVzRFRLExvQ&usqp=CAU", // можно менять
        name: 'Mike',
    },
    message: {
        text: 'Hi, could you give me my money back, please?',
        time: '01:14',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: "https://static.vecteezy.com/system/resources/previews/008/483/640/non_2x/cute-cat-cartoon-kitten-pet-free-png.png", // можно менять
        name: 'Alexander',
    },
    message: {
        text: 'Hey you just forget about that money',
        time: '09:22',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
