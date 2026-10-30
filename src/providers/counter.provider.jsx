import { createContext } from "react"

export const CounterContesxt = createContext();
export default function CounterProvider({children}) {
    const [count, setCount] = useState(0);
    return(
        <CounterContesxt.Provider value={{ count, setCount }}>
            {children}
        </CounterContesxt.Provider>
    )
}