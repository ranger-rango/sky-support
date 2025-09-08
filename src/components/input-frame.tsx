import type { ReactNode } from "react"

interface InputFrameProps
{
    label : string
    placeHolder ?: string
    htmlElement : ReactNode
    inpId : string
    className ?: string
    type : string
}

export default function InputFrame()
{
    return (
        <>
            <label htmlFor=""></label>
            <input type="text" />
        </>
    );
}