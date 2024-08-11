export type RosterAction = 
    {type: 'show-modal'} |
    {type: 'close-modal'}

export type RosterState = {
    modal: boolean
}

export const initialState = {
    modal: false
}

export const rosterReducer = (
    state: RosterState = initialState,
    action: RosterAction
)=> {
    if (action.type === "show-modal") {
        
        return{
            ...state,
            modal: true
        }
    }

    if (action.type === "close-modal") {
        
        return{
            ...state,
            modal: false
        }
    }

    return state
}