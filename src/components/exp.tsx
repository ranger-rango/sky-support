import { useContext, createContext, useState } from "react";
import type { ReactNode } from "react";
import Button from "./btn";
interface VisibilityContextType
{
    visibility : boolean
    toggleVisibility : () => void
}

const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined)

export function VisibilityProvider({ children } : {children : ReactNode})
{
    const [visibility, setVisibility] = useState<boolean>(false)
    
    const toggleVisibility = () => 
    {
        setVisibility((visibility) => !visibility)
    }

    return (
        <VisibilityContext.Provider value={{visibility, toggleVisibility}}>
            { children }
        </VisibilityContext.Provider>
    )
}

export function showModal()
{
    const context = useContext(VisibilityContext)
    if (!context)
    {
        throw new Error("showModal must be used inside VisibilityProvider")
    }
    return context;
}

export function Exp()
{
    const { visibility, toggleVisibility } = showModal()
    return (
        <>
            {
                visibility ? <p className="gen-btn pri-btn">Hello World</p> : null
            }
            <Button id="exp" className="exp gen-btn pri-btn" label="exp" type="button" onClick={toggleVisibility} />
        </>
    )
}