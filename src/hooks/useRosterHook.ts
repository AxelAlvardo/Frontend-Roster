import { useContext } from "react"
import { RosterContext } from "../context/RosterContex"

export const useRoster = ()=> {

    const context = useContext(RosterContext);
    return context
}