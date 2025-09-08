import type { ReactNode } from "react";

interface SideNavCompProps
{
    label : string
    box : ReactNode
    tickCount : string
}

export default function SideNavComponent(sideNavProps : SideNavCompProps)
{
    return (
        <>
            <div>
                <p>
                    <span>
                        {sideNavProps.box}
                    </span>
                    {sideNavProps.label}
                </p>
                <p>
                    {sideNavProps.tickCount}
                </p>
            </div>
        </>
    );
}