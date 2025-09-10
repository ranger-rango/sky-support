import Icons from "./icon";
import type { ReactNode } from "react";


interface Item
{
    htmlEl : ReactNode
    label : string
}

interface FtrProps
{
    items : Item[]
}

export default function Footer({ items } : FtrProps)
{
    return (
        <>
            <footer className="ftr">
                {
                    items.map((item, idx) => (
                        <p key={idx}>
                            <Icons htmlElement={item.htmlEl} />
                            <span>
                                {item.label}
                            </span>
                        </p>
                    ))
                }

            </footer>

        </>
    );
}