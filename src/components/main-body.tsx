import type { ReactNode } from "react";

interface MainProps
{
    page : string
    htmlEl : ReactNode
}

export default function MainBody(mainProps : MainProps)
{
    return (
        <main data-page={mainProps.page}>
            {mainProps.htmlEl}
        </main>
    );
}