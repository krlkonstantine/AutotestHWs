import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        /*case 'sort': { // by name
            let sortedState: UserType[] = state.sort(function (a, b) {
                if (action.payload === 'up') {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                }
                if (action.payload === 'down') {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (a.name < b.name) {
                        return 1
                    }
                    return 0
                }
            })
            return sortedState
        }*/
        case 'sort': {
            if (action.payload === 'up') {
                let sortedState: UserType[] = state.sort(function (a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                })
                return sortedState
            }
            if (action.payload === 'down') {
                let sortedState: UserType[] = state.sort(function (a, b) {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })
                return sortedState
            }
            return state
        }

        case 'check': {
            return state.filter(usr => usr.age >= 18) // need to fix
        }
        default:
            return state

    }
}