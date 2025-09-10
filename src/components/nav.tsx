import Icons from "./icon"
import type { ReactNode } from "react"

interface NavProps
{
    navTitle : string
    party ?: string
    className ?: string
    htmlEl ?: ReactNode
}

export default function Nav(navProp : NavProps)
{
    return (
        <nav className="nav-bar">
            <div>
                <p className="nav-svg-cont">
                    <Icons htmlElement={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1C7 1 3 5 3 10V17C3 17.7956 3.31607 18.5587 3.87868 19.1213C4.44129 19.6839 5.20435 20 6 20H9V12H5V10C5 8.14348 5.7375 6.36301 7.05025 5.05025C8.36301 3.7375 10.1435 3 12 3C13.8565 3 15.637 3.7375 16.9497 5.05025C18.2625 6.36301 19 8.14348 19 10V12H15V20H19V21H12V23H18C18.7956 23 19.5587 22.6839 20.1213 22.1213C20.6839 21.5587 21 20.7956 21 20V10C21 5 16.97 1 12 1Z" fill="white"/></svg>} />
                </p>
                <p className="nav-header">
                    {navProp.navTitle}
                    {navProp.party && <span className={navProp.className}>{navProp.party}</span>}
                </p>
            </div>

            <div>
                <Icons htmlElement={<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="white"/></svg>} />
                <Icons htmlElement={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000667196 8.316 5.29101e-07 6.5C-0.000666138 4.684 0.628667 3.14667 1.888 1.888C3.14733 0.629333 4.68467 0 6.5 0C8.31533 0 9.853 0.629333 11.113 1.888C12.373 3.14667 13.002 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5633 8.81333 11.0007 7.75067 11 6.5C10.9993 5.24933 10.562 4.187 9.688 3.313C8.814 2.439 7.75133 2.00133 6.5 2C5.24867 1.99867 4.18633 2.43633 3.313 3.313C2.43967 4.18967 2.002 5.252 2 6.5C1.998 7.748 2.43567 8.81067 3.313 9.688C4.19033 10.5653 5.25267 11.0027 6.5 11Z" fill="white"/></svg>} />
                <Icons htmlElement={<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H11C11 20.1 10.1 21 9 21C7.9 21 7 20.1 7 19ZM18 17V18H0V17L2 15V9C2 5.9 4 3.2 7 2.3V2C7 0.9 7.9 0 9 0C10.1 0 11 0.9 11 2V2.3C14 3.2 16 5.9 16 9V15L18 17ZM14 9C14 6.2 11.8 4 9 4C6.2 4 4 6.2 4 9V16H14V9Z" fill="white"/></svg>} />
                {navProp.htmlEl && navProp.htmlEl}
                
                <Icons htmlElement={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.16797 16.849C4.41548 16.0252 4.92194 15.3032 5.61222 14.79C6.30249 14.2768 7.13982 13.9997 7.99997 14H12C12.8612 13.9997 13.6996 14.2774 14.3904 14.7918C15.0811 15.3062 15.5874 16.0298 15.834 16.855M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8Z" stroke="#CED4DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>} />
            </div>
        </nav>
    )
}