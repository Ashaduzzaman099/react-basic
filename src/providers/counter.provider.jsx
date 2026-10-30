import { createContext } from "react"

const CounterContesxt = createContext();
export default function CounterProvider({children}) {
    return(
        <CounterContesxt.Provider>
            {children}
        </CounterContesxt.Provider>
    )
}