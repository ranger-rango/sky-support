import type { ReactNode } from "react"
interface BtnProps
{
    id : string
    className : string
    type : "submit" | "reset" | "button"
    label : ReactNode
    form ?: string
    onClick ?: () => void
}

export default function Button(btnProps : BtnProps)
{
    return (
        <button onClick={btnProps?.onClick} className={btnProps.className} type={btnProps.type} id={btnProps.id} form={typeof btnProps.form === "string" ? btnProps.form : ""} >
            {btnProps.label}
        </button>
    );
}