import { Link } from "@tanstack/react-router";

interface AnchLink
{
    href : string
    label : string
    className ?: string
}

export default function NavigationLink( anchor : AnchLink)
{
    return (
        <Link className={anchor.className} to={anchor.href} > {anchor.label} </Link>
    )
}