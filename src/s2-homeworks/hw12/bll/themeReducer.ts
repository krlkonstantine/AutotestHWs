const initState = {
    themeId: 1,
}
export type InitialThemeStateType = {
    themeId: number
}
export const themeReducer = (state: InitialThemeStateType = initState, action: ThemeReducerType): InitialThemeStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            debugger
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}
export type ThemeReducerType = ChangeThemeIdActionType
type ChangeThemeIdActionType = {
    type: string
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({type: 'SET_THEME_ID', id}) // fix any
