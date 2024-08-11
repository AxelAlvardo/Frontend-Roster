import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { initialState, RosterAction, rosterReducer, RosterState } from "../reducer/useRoster"

type RosterContextProps = {
    state: RosterState
    dispatch: Dispatch<RosterAction>
}

type RosterProviderProps = {
    children: ReactNode
}

export const RosterContext = createContext<RosterContextProps>({} as RosterContextProps);

export const RosterProvider = ({children} : RosterProviderProps)=> {

    const[state, dispatch] = useReducer(rosterReducer, initialState);

    return (
        <RosterContext.Provider 
        value={{
            state,
            dispatch
        }}>
            {children}
        </RosterContext.Provider>
    )
}