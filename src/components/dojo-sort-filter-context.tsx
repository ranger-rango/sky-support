import { useContext, createContext, useState } from "react";
import type { ReactNode } from "react";
interface SortFilterContextType
{
    visibility : boolean
    toggleVisibility : () => void
}

const SortFilterContext = createContext<SortFilterContextType | undefined>(undefined)

export function VisibilityProvider({ children } : {children : ReactNode})
{
    const [visibility, setVisibility] = useState<boolean>(false)
    
    const toggleVisibility = () => 
    {
        setVisibility((visibility) => !visibility)
    }

    return (
        <SortFilterContext.Provider value={{visibility, toggleVisibility}}>
            { children }
        </SortFilterContext.Provider>
    )
}

export function showModal()
{
    const context = useContext(SortFilterContext)
    if (!context)
    {
        throw new Error("showModal must be used inside VisibilityProvider")
    }
    return context;
}