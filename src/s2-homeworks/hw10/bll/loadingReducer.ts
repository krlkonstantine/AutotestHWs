const initState = {
    isLoading: false,
}
export type InitialStateType = {
    isLoading: boolean
}
export const loadingReducer = (state:InitialStateType = initState, action: LoadingReducerType): InitialStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            return {...state, isLoading : action.isLoading}
        }
        default:
            return state
    }
}

type LoadingReducerType = LoadingActionType

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
