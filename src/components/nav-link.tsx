import { NavLink } from "react-router-dom";

interface AnchLink
{
    href : string
    label : string
    className ?: string
}

export default function NavigationLink( anchor : AnchLink)
{
    return (
        <NavLink className={anchor.className} to={anchor.href} > {anchor.label} </NavLink>
    )
}